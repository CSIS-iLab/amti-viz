import React, { Component } from 'react';
import './App.css';
import mapboxgl from 'mapbox-gl';
import scrollama from 'scrollama';

const layerTypes = {
    'fill': ['fill-opacity'],
    'line': ['line-opacity'],
    'circle': ['circle-opacity', 'circle-stroke-opacity'],
    'symbol': ['icon-opacity', 'text-opacity'],
    'raster': ['raster-opacity'],
    'fill-extrusion': ['fill-extrusion-opacity']
}

const alignments = {
    'left': 'lefty',
    'center': 'centered',
    'right': 'righty'
}

const transformRequest = (url) => {
    const hasQuery = url.indexOf("?") !== -1;
    const suffix = hasQuery ? "&pluginName=journalismScrollytelling" : "?pluginName=journalismScrollytelling";
    return {
        url: url + suffix
    }
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentChapter: props.chapters[0]
        };
    }

    componentDidMount() {
        const config = this.props;
        const mapStart = config.chapters[0].location;

        mapboxgl.accessToken = config.accessToken;

        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: config.style,
            center: mapStart.center,
            zoom: mapStart.zoom,
            pitch: mapStart.pitch,
            bearing: mapStart.bearing,
            transformRequest: transformRequest
        });

        const marker = new mapboxgl.Marker();
        if (config.showMarkers) {
            marker.setLngLat(mapStart.center).addTo(map);
        }

        function getLayerPaintType(layer) {
            var layerType = map.getLayer(layer).type;
            return layerTypes[layerType];
        }

        function setLayerOpacity(layer) {
            var paintProps = getLayerPaintType(layer.layer);
            paintProps.forEach(function (prop) {
                map.setPaintProperty(layer.layer, prop, layer.opacity);
            });
        }

        const setState = this.setState.bind(this);

        // instantiate the scrollama
        const scroller = scrollama();

        map.on('load', function () {

            // setup the instance, pass callback functions
            scroller
                .setup({
                    step: '.step',
                    offset: 0.5,
                    progress: true
                })
                .onStepEnter(response => {
                    const chapter = config.chapters.find(chap => chap.id === response.element.id);
                    setState({ currentChapter: chapter });
                    map.flyTo(chapter.location);
                    if (config.showMarkers) {
                        marker.setLngLat(chapter.location.center);
                    }
                    if (chapter.onChapterEnter.length > 0) {
                        chapter.onChapterEnter.forEach(setLayerOpacity);
                    }
                })
                .onStepExit(response => {
                    var chapter = config.chapters.find(chap => chap.id === response.element.id);
                    if (chapter.onChapterExit.length > 0) {
                        chapter.onChapterExit.forEach(setLayerOpacity);
                    }
                });
        });

        window.addEventListener('resize', scroller.resize);
    }



    render() {
        const createMarkup = (c) => {
            return {__html: c};
        }
        const config = this.props;
        const theme = config.theme;
        const currentChapterID = this.state.currentChapter.id;
        return (
            <div>
                <div ref={el => this.mapContainer = el} className="absolute top right left bottom" />
                <div id="story">
                    {config.title &&
                        <div id="header" className={theme}>
                            <h1>{config.title}</h1>
                            {config.image &&
                        <img src={config.image} alt={config.title}></img>
                    }
                            {config.subtitle &&
                                <h2>{config.subtitle}</h2>
                            }
                            {config.byline && 
                                <p>{config.byline}</p>
                            }
                        </div>
                    }
                    <div id="features" className={alignments[config.alignment]}>
                        {
                            config.chapters.map(chapter =>
                                <Chapter key={chapter.id} theme={theme} {...chapter} currentChapterID={currentChapterID} />
                            )
                        }
                    </div>
                    <div id="footer" className={theme}>
                        {config.footerTitle &&
                            <h2>{config.footerTitle}</h2>
                        }
                        {config.footerContent &&
                            <p>{config.footerContent}</p>
                        }
                        {config.footerContentLink && 
                            <p>{config.footerContentLink}</p>
                        }
                        {config.creditHeading && 
                            <ul>{config.creditHeading}</ul>
                        }
                        {config.creditItemOne && config.creditItemTwo && config.creditItemThree && config.creditItemFour &&
                            [config.creditItemOne, config.creditItemTwo, config.creditItemThree, config.creditItemFour].map((c, i) => {
                                return <div index={i} dangerouslySetInnerHTML={createMarkup(c)} />
                            })
                        }
                        {config.footerLogo &&
                           
                                <a href="https://www.csis.org/tradecommission" alt="Trade Commission website"  target="_blank" rel="noopener noreferrer" className="trade-logo"> {config.footerLogo}
                    </a>
                          
                        }
                    </div>
                    

                </div>
            </div>
        );
    }

}



function Chapter({ id, theme, title, image, description, list1, list2, list3, list4, subtitle, currentChapterID }) {
    const classList = id === currentChapterID ? "step active" : "step";
    return (
        <div id={id} className={classList}>
            <div className={theme}>
                {title &&
                    <h2 className="title">{title}</h2>
                }
                <div className="content">
                    {subtitle &&
                        <h3 className="subtitle">{subtitle}</h3>
                    }
                    {description &&
                        <p className="desc">{description}</p>
                    }
                    <ul>
                      {list1 && 
                          <li className="list">{list1}</li>
                      }
                      {list2 && 
                          <li className="list">{list2}</li>
                      }
                      {list3 && 
                          <li className="list">{list3}</li>
                      }
                      {list4 && 
                          <li className="list">{list4}</li>
                      }
                    </ul>
                    {image &&
                        <img src={image} alt={title}></img>
                    }
                </div>
            </div>
        </div>
    )
}

export default App;
