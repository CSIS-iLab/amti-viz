var config = {
    style: "mapbox://styles/ilabmedia/ckjvjizi20pg019lxvzwcg20h",
    accessToken: "pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw",
    showMarkers: false,
    alignment: 'left',
    theme: 'dark',
    title: 'Range Rings Scrolly Map',
    subtitle: '',
    byline: 'Produced by CSIS iDeas Lab and the CSIS Asia Maritime Transparency Initaitve ',
    logo: '',
    footer: 'Source: Data from | ',
    chapters: [
        {
            id: 'states1990',
            title: 'China controls 4 bases with runways in the SCS.',
            subtitle: '',
            image: '',
            description: `China controls 4 bases with runways in the SCS.`,
            location: {
                center: [-98.82517, 41.00],
                zoom: 3.50,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
              
            ],
            onChapterExit: [
             
            ]
        },
        {
            id: 'states2018',
            title: '[map with ISLANDS(a) + FIGHTER MAX RANGE(b))',
            image: '',
            description: `The range of combat aircraft from these islands is quite far.`,
            location: {
                center: [-98.82517, 41.00],
                zoom: 3.50,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'frame0_states_2018',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'frame0_states_2018',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'counties200',
            title: '[map with ISLANDS(a) + KJ-500 RANGE FROM ISLAND SAMS(c))',
            subtitle: '',
            image: '',
            description: `But in reality, combat aircraft are limited to operating within radar range. Without external radar coverage, they have limited awareness of their surroundings and would be vulnerable to attack.`,
            location: {
                center: [-98.82517, 41.00],
                zoom: 3.50,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'counties-200-trade-sheet1-dn6e4s',
                //     opacity: 1
                // },

            ],
            onChapterExit: [
                // {
                //     layer: 'counties-200-trade-sheet1-dn6e4s',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'counties100',
            title: '[one KJ-500 at mischief (d) with sensing range(e)]',
            subtitle: '',
            image: '',
            description: `KJ-500 sensing aircraft launched from the islands have a wider sensing range than any radar facilities on the islands themselves. A KJ-500, shown here above mischief reef can sense X miles around it.`,
            location: {
                center: [-98.82517, 41.00],
                zoom: 4.00,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'satellite',
                //     opacity: 0
                // },
                // {
                //     layer: 'frame1_Overview',
                //     opacity: 1
                // },
            ],
            onChapterExit: [
                // {
                //     layer: 'frame1_Overview',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'counties100b',
            title: '',
            subtitle: '',
            image: '',
            description: ``,
            location: {
                center: [-83.265937, 37.870455],
                zoom: 5.13,
                pitch: 22.50,
                bearing: -26.92,
                // speed: 0.05
            },
            onChapterEnter: [
                // {
                //     layer: 'frame1_Overview',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'frame1_Overview',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'manuDecline3',
            title: ``,
            subtitle: '',
            image: '',
            description: ``,
            location: {
                center: [-83.066270, 35.627624],
                zoom: 6,
                pitch: 60,
                bearing: -19.72,
            },
            onChapterEnter: [
                // {
                //     layer: 'counties_1990_manuB',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'counties_1990_manuB',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'manuDecline4',
            title: ``,
            subtitle: '',
            image: '',
            description: ``,
            location: {
                center: [-83.066270, 35.627624],
                zoom: 6,
                pitch: 60,
                bearing: -19.72,
            },
            onChapterEnter: [
                // {
                //     layer: 'counties_2018_manuB',
                //     opacity: 1,
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'counties_2018_manuB',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'services5',
            title: '',
            subtitle: '',
            image: '',
            description: ``,
            location: {
                center: [-83.677347, 37.629440],
                zoom: 5.23,
                pitch: 52.00,
                bearing: 13.88,
            },
            onChapterEnter: [
                // {
                //     layer: 'frame_5a',
                //     opacity: 1
                // },

            ],
            onChapterExit: [
                // {
                //     layer: 'frame_5a',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'services6',
            title: 'Overall Loss',
            subtitle: '',
            image: '',
            description: ``,
            location: {
                center: [-83.677347, 37.629440],
                zoom: 5.23,
                pitch: 52.00,
                bearing: 13.88,
            },
            onChapterEnter: [
                // {
                //     layer: 'frame_5b',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'frame_5b',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'inDepth7',
            title: '',
            subtitle: '',
            image: '',
            description: ``,
            location: {
                center: [-82.15448, 34.74736],
                zoom: 6.72,
                pitch: 2.00,
                bearing: 0.00
                // speed: 0.02
            },
            onChapterEnter: [
                // {
                //     layer: 'frame_7',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'frame_7',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'inDepth8',
            title: '',
            subtitle: '',
            image: '',
            description: ``,
            location: {
                center: [-81.769179, 35.236806],
                zoom: 16,
                pitch: 41,
                bearing: 22.40,
                // speed: 0.02
            },
            onChapterEnter: [
                // {
                //     layer: 'satellite',
                //     opacity: 0
                // },

                // {
                //     layer: 'satellite',
                //     opacity: 1
                // },
                // {
                //     layer: 'rutherford',
                //     opacity: 1
                // },
            ],
            onChapterExit: [
                // {
                //     layer: 'satellite',
                //     opacity: 0
                // },
                // {
                //     layer: 'rutherford',
                //     opacity: 0
                // },
            ]
        },
        {
            id: 'inDepth9',
            title: '',
            subtitle: '',
            image: '',
            description: ``,
            location: {
                center: [-80.638729, 36.357558],
                zoom: 8.16,
                pitch: 41.00,
                bearing: 16.30,
                // speed: 0.02
            },
            onChapterEnter: [
                // {
                //     layer: 'frame_6b',
                //     opacity: 1
                // },
                // {
                //     layer: 'frame_6b_label',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'frame_6b',
                //     opacity: 0
                // },
                // {
                //     layer: 'frame_6b_label',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'inDepth11',
            title: '',
            subtitle: ``,
            image: '',
            description: ``,
            location: {
                center: [-83.685, 43.038],
                zoom: 16.30,
                pitch: 50.00,
                bearing: 0,
                // speed: 0.02
            },
            onChapterEnter: [
                // {
                //     layer: 'satellite',
                //     opacity: 0
                // },
                // {
                //     layer: 'buick',
                //     opacity: 1
                // },

                // {
                //     layer: 'satellite',
                //     opacity: 1
                // },
            ],
            onChapterExit: [
                // {
                //     layer: 'satellite',
                //     opacity: 0
                // },
                // {
                //     layer: 'buick',
                //     opacity: 0
                // },
            ]
        },
        {
            id: 'inDepth12',
            title: '',
            subtitle: 'Monroe County, NY',
            image: '',
            description: ``,
            location: {
                center: [-77.57209, 43.19292],
                zoom: 8.07,
                pitch: 55.00,
                bearing: 41.60
            },
            onChapterEnter: [
                // {
                //     layer: 'monroe',
                //     opacity: 1
                // },
                // {
                //     layer: 'monroe_label',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'monroe',
                //     opacity: 0
                // },
                // {
                //     layer: 'monroe_label',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'jobs13',
            title: 'Jobs Lost, Jobs Gained',
            subtitle: 'The New Economy',
            image: '',
            description: ``,
            location: {
                center: [-98.82517, 41.00],
                zoom: 4.00,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'frame_9',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'frame_9',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'brightSpots14',
            title: 'Manufacturing Bright Spots',
            subtitle: 'Midwest Success',
            image: '',
            description: `Twelve of those counties had both overall employment growth and an increase in manufacturing jobs as a percent of all jobs. Ten of those counties are situated in the Midwest. Some counties, like Marathon County, WI or Shelby County, OH, manufacture a diverse range of products. Others, like Elkhart County, IN, dominate production of a single item, which in Elkhart's case is RVs.`,
            location: {
                center: [-86.962814, 42.775003],
                zoom: 6.06,
                pitch: 0.00,
                bearing: 0.00,
            },
            onChapterEnter: [
                // {
                //     layer: 'frame_10',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'frame_10',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'snohomish',
            title: '',
            subtitle: 'Snohomish County, WA',
            image: '',
            description: `The aerospace industry contributes the most to Snohomish County’s economic success, employing 46 percent of its manufacturing workers, with over 30,000 working for Boeing alone at their Everett Factory. The largest building in the world, Boeing produces the 747, 767, 777, and 787 models here. Boeing and its suppliers have undergirded the county’s economy for decades.`,
            location: {
                center: [-122.27860, 47.91688],
                zoom: 14.00,
                pitch: 60.00,
                bearing: -28.80
            },
            onChapterEnter: [
                // {
                //     layer: 'satellite',
                //     opacity: 0
                // },

                // {
                //     layer: 'satellite',
                //     opacity: 1
                // },

                // {
                //     layer: 'boeing2',
                //     opacity: 1
                // },
                // {
                //     layer: 'us_states',
                //     opacity: 0
                // },
            ],
            onChapterExit: [
                // {
                //     layer: 'satellite',
                //     opacity: 0
                // },
                // {
                //     layer: 'boeing2',
                //     opacity: 0
                // },
                // {
                //     layer: 'us_states',
                //     opacity: 1
                // },
            ]
        },
        {
            id: 'blank',
            location: {
                center: [-98.82517, 41.00],
                zoom: 4.20,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [

            ],
            onChapterExit: [

            ]
        },
        
        {
            id: 'close',
            location: {
                center: [-98.82517, 41.00],
                zoom: 3.50,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [

            ],
            onChapterExit: [

            ]
        }
    ]
};
export default config