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
            id: 'a-scs-islands',
            title: 'China controls 4 bases with runways in the SCS.',
            subtitle: '',
            image: '',
            description: `China controls 4 bases with runways in the SCS.`,
            location: {
                center: [112.09, 16.30],
                zoom: 4.50,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
               {
                    layer: 'a-china-scs-runway-islands',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'a-china-scs-runway-islands',
                    opacity: 0
                }
            ]
        },
        // {
        //     id: 'sat-imag',
        //     title: 'China controls 4 bases with runways in the SCS.',
        //     subtitle: '',
        //     image: '',
        //     description: `China controls 4 bases with runways in the SCS.`,
        //     location: {
        //         center: [112.09, 16.30],
        //         zoom: 4.50,
        //         pitch: 0.00,
        //         bearing: 0.00
        //     },
        //     onChapterEnter: [
        //        {
        //             layer: 'a-china-scs-runway-islands',
        //             opacity: 1
        //         }
        //     ],
        //     onChapterExit: [
        //         {
        //             layer: 'a-china-scs-runway-islands',
        //             opacity: 0
        //         }
        //     ]
        // },
        {
            id: 'b-fighter-range',
            title: '[map with ISLANDS(a) + FIGHTER MAX RANGE(b))',
            image: '',
            description: `The range of combat aircraft from these islands is quite far.`,
            location: {
                center: [110.09, 22.30],
                zoom: 3.50,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'a-china-scs-runway-islands',
                    opacity: 1
                },
                {
                    layer: 'b-fighter-max-combat-range',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'a-china-scs-runway-islands',
                    opacity: 0
                },
                {
                    layer: 'b-fighter-max-combat-range',
                    opacity: 0
                }
            ]
        },
        {
            id: 'a-c-islands',
            title: '[map with ISLANDS(a) + KJ-500 RANGE FROM ISLAND SAMS(c))',
            subtitle: '',
            image: '',
            description: `But in reality, combat aircraft are limited to operating within radar range. Without external radar coverage, they have limited awareness of their surroundings and would be vulnerable to attack.`,
            location: {
                center: [110.09, 22.30],
                zoom: 3.50,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'a-china-scs-runway-islands',
                    opacity: 1
                },
                {
                    layer: 'c-kj500-under-sam-to-surface',
                    opacity: 1
                },

            ],
            onChapterExit: [
                {
                    layer: 'a-china-scs-runway-islands',
                    opacity: 0
                },
                {
                    layer: 'c-kj500-under-sam-to-surface',
                    opacity: 0
                }
            ]
        },
        {
            id: 'd-e',
            title: ' [KJ-500 maximum range(F)]',
            subtitle: '',
            image: '',
            description: `The KJ-500 has a huge maximum travel range 3000km…`,
            location: {
                center: [112.09, 16.30],
                zoom: 4.13,
                pitch: 0.00,
                bearing: 0.00,
                // speed: 0.05
            },
            onChapterEnter: [
                {
                    layer: 'd-kj500-single-subi',
                    opacity: 1
                },
                {
                    layer: 'e-kj-500-single-from-mischief',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'd-kj500-single-subi',
                    opacity: 0
                },
                {
                    layer: 'e-kj-500-single-from-mischief',
                    opacity: 0
                }
            ]
        },
        {
            id: 'f-kj-500',
            title: `[mischief reef SAM range(G)]`,
            subtitle: '',
            image: '',
            description: `The KJ-500 has a huge maximum travel range 3000km...`,
            location: {
                center: [0.00, 46.50],
                zoom: 1.18,
                pitch: 0.00,
                bearing: 0.00,
            },
            onChapterEnter: [
                {
                    layer: 'f-kj500-max-range-from-mischief',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'f-kj500-max-range-from-mischief',
                    opacity: 0
                }
            ]
        },
        {
            id: 'g-sam-range',
            title: `mischief reef SAM range(G)`,
            subtitle: '',
            image: '',
            description: `But, like the fighters, they are limited to operating within only a fraction of it. This is because they need to be covered by SAM and ASMs to defend them against potential attack.`,
            location: {
                center: [110.87, 8.38],
                zoom: 5,
                pitch: 0.00,
                bearing: 0.00,
            },
            onChapterEnter: [
                {
                    layer: 'g-sam-range-from-mischief',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: 'g-sam-range-from-mischief',
                    opacity: 0
                }
            ]
        },



        {
            id: 'services5',
            title: '[KJ-500 sensing range from island SAMS(c) + fighter weapons range from island KJ-500 (S)]',
            subtitle: '',
            image: '',
            description: `This range, the estimated sensing range of KJ-500 aircraft operating within SAM coverage from the islands, represents the practical limit of power projection from the islands themselves. Combat aircraft wouldn’t be able to operate outside of this range without incurring extreme risk.`,
            location: {
                center: [110.09, 15.30],
                zoom: 4.23,
                pitch: 0.00,
                bearing: 0.00,
            },
            onChapterEnter: [
                {
                    layer: 'c-kj500-under-sam-to-surface',
                    opacity: 1
                },
                {
                    layer: 's-fighter-weapons-range-from-kj500',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'c-kj500-under-sam-to-surface',
                    opacity: 0
                },
                {
                    layer: 's-fighter-weapons-range-from-kj500',
                    opacity: 0
                }
            ]
        },
        {
            id: 'services6',
            title: '[Carrier Group (H) Sam Range (I), ASM Range (J), Sensing Range to surface (K)]',
            subtitle: '',
            image: '',
            description: `China’s aircraft carriers have the potential to unlock some of these limitations and extend China’s power projection range much further. A carrier group, including the carrier itself, bringing X number of X fighters, but also Y ship and Z has its own missile capabilities and its own sensing capabilities.`,
            location: {
                center: [110.09, 12.30],
                zoom: 4.23,
                pitch: 0.00,
                bearing: 13.88,
            },
            onChapterEnter: [
                {
                    layer: 'h-carrier-group',
                    opacity: 1
                },
                {
                    layer: 'i-sam-range-from-carrier',
                    opacity: 1
                },
                {
                    layer: 'j-yj18-asm-range-from-carrier',
                    opacity: 1
                },
                {
                    layer: 'k-carrier-sensing-range-to-surface',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'h-carrier-group',
                    opacity: 0
                },
                {
                    layer: 'i-sam-range-from-carrier',
                    opacity: 0
                },
                {
                    layer: 'j-yj18-asm-range-from-carrier',
                    opacity: 0
                },
                {
                    layer: 'k-carrier-sensing-range-to-surface',
                    opacity: 0
                }
            ]
        },
        {
            id: 'inDepth7',
            title: '[Islands (A) + China (L)]',
            subtitle: '',
            image: '',
            description: `The carrier group is limited by only one thing—the presence of a divert airfield nearby. If the carrier were to sustain damage during combat, fighters in the air would find themselves at extreme risk without the presence of a divert airfield within range. Chinese companies have been involved in a number of airport projects that have been theorized to potentially allow future access, but the four runways in the South China Sea serve as permanent, reliable airfields further from the Chinese mainland.`,
            location: {
                center: [97.09, 28.30],
                zoom: 3.5,
                pitch: 2.00,
                bearing: 0.00
                // speed: 0.02
            },
            onChapterEnter: [
                {
                    layer: 'a-china-scs-runway-islands',
                    opacity: 1
                },
                {
                    layer: 'l-mainland-china-polygon',
                    opacity: 1
                },

            ],
            onChapterExit: [
                {
                    layer: 'a-china-scs-runway-islands',
                    opacity: 0
                },
                {
                    layer: 'l-mainland-china-polygon',
                    opacity: 0
                }
            ]
        },
        {
            id: 'inDepth8',
            title: '[KJ 500 over the carrier group, radar range]',
            subtitle: '',
            image: '',
            description: `But a KJ-500 from the islands can make use the carrier group’s missile coverage to safely provide a much wider radar radius. This extends the effective combat range of the fighters by x miles, making it possible to strike locations as far as INDONESIA? under protected radar coverage.`,
            location: {
                center: [110.09, 22.30],
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
            title: '[divert airfields]',
            subtitle: '',
            image: '',
            description: `Based on divert airfields currently available for Chinese use…`,
            location: {
                center: [110.09, 22.30],
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
            title: '[maximum KJ-500 sensing range from carriers]',
            subtitle: ``,
            image: '',
            description: `China’s carrier groups can enable fighter combat operations within this range.`,
            location: {
                center: [110.09, 22.30],
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
                center: [110.09, 22.30],
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
                center: [110.09, 22.30],
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
                center: [110.09, 22.30],
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
                center: [110.09, 22.30],
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
                center: [110.09, 22.30],
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
                center: [110.09, 22.30],
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