var config = {
    style: "mapbox://styles/ilabmedia/ckpyjyo1d0yen17p6dvpnuxor",
    accessToken: "pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw",
    showMarkers: false,
    alignment: 'left',
    theme: 'light',
    title: 'Range Rings Scrolly Map',
    subtitle: '',
    byline: 'Produced by CSIS iDeas Lab and the CSIS Asia Maritime Transparency Initaitve ',
    logo: '',
    footer: 'Source: Data from | ',
    chapters: [
        {
            id: '1-a',
            title: 'China’s Island Outposts',
            subtitle: '',
            image: '',
            description: `China operates four large outposts with 10,000-foot runways in disputed areas of the South China Sea: Woody Island, Fiery Cross Reef, Mischief Reef, and Subi Reef.`,
            location: {
                center: [111.09, 15.30],
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
        //     id: '2-sat',
        //     title: 'satellite',
        //     subtitle: 'satellite',
        //     image: '',
        //     description: ``,
        //     location: {
        //         center: [114.08, 10.93],
        //         // zoom: 13.88,
        //         zoom: 12.00,
        //         pitch: 0.00,
        //         bearing: 0.00
        //     },
        //     onChapterEnter: [
        //         {
        //             layer: 'subi-r1c1',
        //             opacity: 1
        //         },
        //         {
        //             layer: 'mapbox-satellite',
        //             opacity: 1
        //         }
        //     ],
        //     onChapterExit: [
        //         {
        //             layer: 'subi-r1c1',
        //             opacity: 0
        //         },
        //         {
        //             layer: 'mapbox-satellite',
        //             opacity: 0
        //         }
        //     ]
        // },
        {
            id: '3-a-b',
            title: 'Theoretical Operational Range of Island-based J-15 Strike-Fighters',
            image: '',
            description: `The theoretical operational range of J-15 strike-fighter aircraft from these islands is quite far.`,
            location: {
                center: [110.09, 16.30],
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
            id: '4-a-c',
            title: 'Practical Operational Range of Island-based J-15 Strike-Fighters/KJ-500 sensing range Under Missile Coverage',
            subtitle: '',
            image: '',
            description: `But in reality, combat aircraft are limited to operating within radar range. Without external radar coverage, they have limited awareness of their surroundings and would be vulnerable to attack.`,
            location: {
                center: [110.09, 14.30],
                zoom: 4.50,
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
            id: '5-d-e-t',
            title: 'Sensing Ranges from a KJ-500 over Subi Reef',
            subtitle: '',
            image: '',
            description: `KJ-500 sensing aircraft launched from the islands have a wider sensing range than any radar facilities on the islands themselves. A KJ-500, shown here above Subi reef, can sense 200 nautical miles to surface targets, and up to 388 nautical miles for high-flying targets at 25,000 feet.`,
            location: {
                center: [110.09, 14.30],
                zoom: 4.50,
                pitch: 0.00,
                bearing: 0.00,
            },
            onChapterEnter: [
                {
                    layer: 'd-kj500-single-subi',
                    opacity: 1
                },
                {
                    layer: 'e-kj-500-single-from-mischief',
                    opacity: 1
                },
                {
                    layer: 't-kj500-from-subi-sensing-range-to-air',
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
                },
                {
                    layer: 't-kj500-from-subi-sensing-range-to-air',
                    opacity: 0
                }
            ]
        },
        {
            id: '6-g-w',
            title: `HQ-9 SAM and YJ-12B anti-ship missile Ranges from Subi Reef`,
            subtitle: '',
            image: '',
            description: `But the KJ-500 also has limitations on its operational range. Without any defensive capabilities of its own, it relies on external protection from island-based SAM and anti-ship missiles. Outside of missile coverage, the KJ-500 would be an easy target for enemy fighters or surface combatants.`,
            location: {
                center: [110.09, 12.30],
                zoom: 5.00,
                pitch: 0.00,
                bearing: 0.00,
            },
            onChapterEnter: [
                {
                    layer: 'g-sam-range-from-mischief',
                    opacity: 1
                },
                {
                    layer: 'w-subi-as-mrange',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'g-sam-range-from-mischief',
                    opacity: 0
                },
                {
                    layer: 'w-subi-as-mrange',
                    opacity: 0
                }
            ]
        },
        {
            id: '7-c',
            title: `Practical Operational Range of Island-based J-15 Strike-Fighters/KJ-500 sensing range Under Missile Coverage`,
            subtitle: '',
            image: '',
            description: `This is the KJ-500’s estimated sensing range to surface-level targets while operating within both SAM and anti-ship missile coverage from the islands. Combat aircraft venturing beyond this range would be blind to surface threats and thus be incurring substantial risk.`,
            location: {
                center: [110.09, 12.30],
                zoom: 4.50,
                pitch: 0.00,
                bearing: 0.00,
            },
            onChapterEnter: [
                {
                    layer: 'c-kj500-under-sam-to-surface',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: 'c-kj500-under-sam-to-surface',
                    opacity: 0
                }
            ]
        },
        {
            id: '8-c-s',
            title: 'Practical Strike Range of Island-based strike-fighters',
            subtitle: '',
            image: '',
            description: `Fighters operating from within that range could strike targets within an additional radius of 250 nautical miles with weapons such as an air-launched YJ-12 anti-ship cruise missile.`,
            location: {
                center: [110.09, 15.30],
                zoom: 4.00,
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
            id: '9-h-i-j-k-v',
            title: 'Sensing and Missile Ranges of a Chinese carrier Group',
            subtitle: '',
            image: '',
            description: `China’s aircraft carriers have the potential to enable combat aircraft to operate safely at much further ranges. A carrier group includes the carrier itself, bringing with it 24 to 32 J-15 fighters, but also a complement of guided-missile destroyers and frigates that provide both sensing and missile capabilities. `,
            location: {
                center: [110.09, 5.30],
                zoom: 4.5,
                pitch: 0.00,
                bearing: 0.00
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
                },
                {
                    layer: 'v-carrier-sensing-range',
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
                },
                {
                    layer: 'v-carrier-sensing-range',
                    opacity: 0
                }
            ]
        },
        {
            id: '10-h-k',
            title: 'Carrier-group Sensing and resulting J-15 Strike Ranges ',
            subtitle: '',
            image: '',
            description: `Fighter aircraft launched from the carrier can operate and strike within the radar coverage provided by the carrier group itself, but the sensing range is limited to approximately 65 nautical miles.`,
            location: {
                center: [110.09, 5.30],
                zoom: 5.5,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'h-carrier-group',
                    opacity: 1
                },
                {
                    layer: 'k-carrier-sensing-range-to-surface',
                    opacity: 1
                },

            ],
            onChapterExit: [
                {
                    layer: 'h-carrier-group',
                    opacity: 0
                },
                {
                    layer: 'k-carrier-sensing-range-to-surface',
                    opacity: 0
                }
            ]
        },
        {
            id: '11-m-o',
            title: 'Carrier Group Sensing and resulting J-15 Strike ranges with KJ-500',
            subtitle: '',
            image: '',
            description: `A KJ-500, however, can operate safely within the defensive perimeter the carrier group’s missile coverage provides. This extends sensing range out to 200 nautical miles, enabling J-15s to safely strike up to 450 nautical miles from the carrier itself.`,
            location: {
                center: [108.09, 8.00],
                zoom: 4.5,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'm-kj500-sensing-to-surface-from-carrier-sam',
                    opacity: 0
                },
                {
                    layer: 'o-fighter-weapons-range-from-single-carrier-kj500',
                    opacity: 1
                },
            ],
            onChapterExit: [
                {
                    layer: 'm-kj500-sensing-to-surface-from-carrier-sam',
                    opacity: 0
                },
                {
                    layer: 'o-fighter-weapons-range-from-single-carrier-kj500',
                    opacity: 0
                },
            ]
        },
        {
            id: '12-u',
            title: 'Operational Range of KJ-500',
            subtitle: '',
            image: '',
            description: `Large patrol aircraft like the KJ-500 can’t operate from China’s carriers. That means that carriers hoping to make use of the KJ-500’s enhanced sensing capabilities will need to stay within the KJ-500’s maximum effective range from either the mainland or China’s South China Sea outposts.`,
            location: {
                center: [108.09, 50.50],
                zoom: 2.5,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'u-kj500-operational-range',
                    opacity: 1
                },
            ],
            onChapterExit: [
                {
                    layer: 'u-kj500-operational-range',
                    opacity: 0
                },
            ]
        },
        {
            id: '13-a-l2',
            title: 'Chinese Divert Airfields',
            subtitle: ``,
            image: '',
            description: `But a more restrictive geographic limitation on carrier operations lies in the desire to have a divert airfield nearby. If for any reason fighters in the air were unable to return to the carrier, they would find themselves at extreme risk without a divert airfield within range. The four runways in the Paracel and Spratly Islands serve as permanent, reliable airfields further from the Chinese mainland, but Chinese companies have been involved in a number of airport projects internationally that have been theorized to potentially allow future access.`,
            location: {
                center: [95.09, 31.00],
                zoom: 3.5,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'a-china-scs-runway-islands',
                    opacity: 1
                },
                {
                    layer: 'l2-mainland-china-border',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'a-china-scs-runway-islands',
                    opacity: 0
                },
                {
                    layer: 'l2-mainland-china-border',
                    opacity: 0
                }
            ]
        },
        {
            id: '14-p',
            title: 'Carrier operational area within range of divert airfields',
            subtitle: '',
            image: '',
            description: `China’s aircraft carrier can operate within this area while maintaining a safe, 400-nautical mile distance from divert airfields currently available for use.`,
            location: {
                center: [112.09, 24.00],
                zoom: 3.5,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'p-carrier-operational-range',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'p-carrier-operational-range',
                    opacity: 0
                }
            ]
        }, 
        {
            id: '15-q',
            title: 'Practical Operational Range of Carrier-based J-15 Strike-Fighters',
            subtitle: '',
            image: '',
            description: `With KJ-500 providing sensing coverage, China’s carrier groups can enable fighter combat operations within this range…`,
            location: {
                center: [112.09, 24.00],
                zoom: 3.5,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'q-kj500-sensing-to-surface-from-carrier',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'q-kj500-sensing-to-surface-from-carrier',
                    opacity: 0
                }
            ]
        },   
        {
            id: '16-r',
            title: 'Practical Strike Range of Carrier-based J-15 Strike-Fighters',
            subtitle: '',
            image: '',
            description: `…and weapons launched from those aircraft could strike even further.`,
            location: {
                center: [112.09, 24.00],
                zoom: 3.5,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'r-fighter-weapons-range-from-kj500-sensing-range',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'r-fighter-weapons-range-from-kj500-sensing-range',
                    opacity: 0
                }
            ]
        },         
        {
            id: 'close',
            location: {
                center: [112.09, 24.00],
                zoom: 3.5,
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