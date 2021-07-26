var config = {
    style: "mapbox://styles/ilabmedia/ckq9ju4422de017p9rwe5klqi",
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
            id: 'step1a',
            title: 'Island Capabilities',
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
                    layer: 'achinascsrunwayislands',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'achinascsrunwayislands',
                    opacity: 0
                }
            ]
        },
        {
            id: '2sat',
            title: '',
            subtitle: '',
            image: '',
            description: `China has deployed substantial military assets to these islands, including HQ-9 surface-to-air (SAM) and YJ-12B anti-ship missiles, sensing and communications facilities, and hangars capable of housing military transport, patrol, and combat aircraft.`,
            location: {
                center: [114.08, 10.925],
                zoom: 14,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'ilabmedia-4wu77mzt-subi',
                    opacity: 1
                },
                {
                    layer: 'mapbox-satellite',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'ilabmedia-4wu77mzt-subi',
                    opacity: 0
                },
                {
                    layer: 'mapbox-satellite',
                    opacity: 0
                }
            ]
        },
        {
            id: 'step3ab',
            title: '',
            image: '',
            description: `The theoretical operational range of J-15 strike-fighter aircraft from these islands is quite far.`,
            location: {
                center: [110.09, 16.30],
                // Has to be at a zoom level of 4 for island layer
                zoom: 4.00,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'achinascsrunwayislands',
                    opacity: 1
                },
                {
                    layer: 'bfightermaxcombatrange',
                    opacity: 0
                },
                {
                    layer: 'bfightermaxcombatrangepg',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'achinascsrunwayislands',
                    opacity: 0
                },
                {
                    layer: 'bfightermaxcombatrange',
                    opacity: 0
                },
                {
                    layer: 'bfightermaxcombatrangepg',
                    opacity: 0
                }
            ]
        },
        {
            id: '4ac',
            title: '',
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
                    layer: 'achinascsrunwayislands',
                    opacity: 1
                },
                {
                    layer: 'ckj500undersamtosurface',
                    opacity: 0
                },
                {
                    layer: 'ckj500undersamtosurfacepg',
                    opacity: 1
                },

            ],
            onChapterExit: [
                {
                    layer: 'achinascsrunwayislands',
                    opacity: 0
                },
                {
                    layer: 'ckj500undersamtosurface',
                    opacity: 0
                },
                {
                    layer: 'ckj500undersamtosurfacepg',
                    opacity: 0
                },
            ]
        },
        {
            id: '5-d-e-t',
            title: '',
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
                    layer: 'dkj500singlesubi',
                    opacity: 1
                },
                {
                    layer: 'ekj500singlefrommischiefsensingtosurface',
                    opacity: 0
                },
                {
                    layer: 'ekj500singlefromsubisensingtosurfacepg',
                    opacity: 1
                },
                {
                    layer: 'tkj500fromsubisensingrangetoair',
                    opacity: 0
                },
                {
                    layer: 'tkj500fromsubisensingrangetoairpg',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'dkj500singlesubi',
                    opacity: 0
                },
                {
                    layer: 'ekj500singlefrommischiefsensingtosurface',
                    opacity: 0
                },
                {
                    layer: 'ekj500singlefromsubisensingtosurfacepg',
                    opacity: 0
                },
                {
                    layer: 'tkj500fromsubisensingrangetoair',
                    opacity: 0
                },
                {
                    layer: 'tkj500fromsubisensingrangetoairpg',
                    opacity: 0
                }
            ]
        },
        {
            id: '6-g-w',
            title: ``,
            subtitle: '',
            image: '',
            description: `But the KJ-500 also has limitations on its operational range. Without any defensive capabilities of its own, it relies on external protection from island-based SAM and anti-ship missiles. Outside of missile coverage, the KJ-500 would be an easy target for enemy fighters or surface combatants.`,
            location: {
                center: [110.09, 12.30],
                zoom: 4.50,
                pitch: 0.00,
                bearing: 0.00,
            },
            onChapterEnter: [
                {
                    layer: 'dkj500singlesubi2',
                    opacity: 1
                },
                {
                    layer: 'gsamrangefrommischief',
                    opacity: 0
                },
                {
                    layer: 'gsamrangefromsubipg',
                    opacity: 1
                },
                {
                    layer: 'wsubiasmrange',
                    opacity: 0
                },
                {
                    layer: 'wsubiasmrangepg',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'dkj500singlesubi2',
                    opacity: 0
                },
                {
                    layer: 'gsamrangefrommischief',
                    opacity: 0
                },
                {
                    layer: 'gsamrangefromsubipg',
                    opacity: 0
                },
                {
                    layer: 'wsubiasmrange',
                    opacity: 0
                },
                {
                    layer: 'wsubiasmrangepg',
                    opacity: 0
                }
            ]
        },
        {
            id: '7-c',
            title: ``,
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
                    layer: 'achinascsrunwayislands',
                    opacity: 1
                },
                {
                    layer: 'ckj500undersamtosurfacepg2',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: 'achinascsrunwayislands',
                    opacity: 0
                },
                {
                    layer: 'ckj500undersamtosurfacepg2',
                    opacity: 0,
                }
            ]
        },
        {
            id: '8-c-s',
            title: '',
            subtitle: '',
            image: '',
            description: `Fighters operating from within that range could strike targets within an additional radius of 250 nautical miles with weapons such as an air-launched YJ-12 anti-ship cruise missile.`,
            location: {
                center: [110.09, 12.30],
                zoom: 4.50,
                pitch: 0.00,
                bearing: 0.00,
            },
            onChapterEnter: [
                {
                    layer: 'achinascsrunwayislands',
                    opacity: 1
                },
                {
                    layer: 'ckj500undersamtosurface',
                    opacity: 0,
                },
                {
                    layer: 'ckj500undersamtosurfacepg',
                    opacity: 1,
                },
                {
                    layer: 'sfighterweaponsrangefromkj500sensingrangefromislandsams',
                    opacity: 0
                },
                {
                    layer: 'sfighterweaponsrangefromkj500sensingrangefromislandsamspg',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'achinascsrunwayislands',
                    opacity: 0
                },
                {
                    layer: 'ckj500undersamtosurface',
                    opacity: 0
                },
                {
                    layer: 'ckj500undersamtosurfacepg',
                    opacity: 0,
                },
                {
                    layer: 'sfighterweaponsrangefromkj500sensingrangefromislandsams',
                    opacity: 0
                },
                {
                    layer: 'sfighterweaponsrangefromkj500sensingrangefromislandsamspg',
                    opacity: 0
                }
            ]
        },
        {
            id: '9-h-i-j-k-v',
            title: 'Carrier Integration',
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
                    layer: 'hcarriergroup',
                    opacity: 1
                },
                {
                    layer: 'isamrangefromcarrier',
                    opacity: 0
                },
                {
                    layer: 'isamrangefromcarrierpg',
                    opacity: 1
                },
                {
                    layer: 'jyj18asmrangefromcarrier',
                    opacity: 0
                },
                {
                    layer: 'jyj18asmrangefromcarrierpg',
                    opacity: 1
                },
                {
                    layer: 'kcarriersensingrangetosurface',
                    opacity: 0
                },
                {
                    layer: 'kcarriersensingrangetosurfacepg',
                    opacity: 1
                },
                {
                    layer: 'vcarriersensingrangeto25000feetkml',
                    opacity: 0
                },
                {
                    layer: 'vcarriersensingto25000feetpg',
                    opacity: 1
                },
            ],
            onChapterExit: [
                {
                    layer: 'hcarriergroup',
                    opacity: 0
                },
                {
                    layer: 'isamrangefromcarrier',
                    opacity: 0
                },
                {
                    layer: 'isamrangefromcarrierpg',
                    opacity: 0
                },
                {
                    layer: 'jyj18asmrangefromcarrier',
                    opacity: 0
                },
                {
                    layer: 'jyj18asmrangefromcarrierpg',
                    opacity: 0
                },
                {
                    layer: 'kcarriersensingrangetosurface',
                    opacity: 0
                },
                {
                    layer: 'kcarriersensingrangetosurfacepg',
                    opacity: 0
                },
                {
                    layer: 'vcarriersensingrangeto25000feetkml',
                    opacity: 0
                },
                {
                    layer: 'vcarriersensingto25000feetpg',
                    opacity: 0
                },
            ]
        },
        {
            id: '10-h-k',
            title: '',
            subtitle: '',
            image: '',
            description: `Fighter aircraft launched from the carrier can operate and strike within the radar coverage provided by the carrier group itself, but the sensing range is limited to approximately 65 nautical miles.`,
            location: {
                center: [110.09, 5.30],
                zoom: 4.5,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'hcarriergroup',
                    opacity: 1
                },
                {
                    layer: 'kcarriersensingrangetosurface',
                    opacity: 0
                },
                {
                    layer: 'kcarriersensingrangetosurfacepg',
                    opacity: 1
                },
                {
                    layer: 'xfighterstrikerangefromcarriersensing',
                    opacity: 0
                },
                {
                    layer: 'xfighterstrikerangefromcarriersensingpg',
                    opacity: 1
                },

            ],
            onChapterExit: [
                {
                    layer: 'hcarriergroup',
                    opacity: 0
                },
                {
                    layer: 'kcarriersensingrangetosurface',
                    opacity: 0
                },
                {
                    layer: 'kcarriersensingrangetosurfacepg',
                    opacity: 0
                },
                {
                    layer: 'xfighterstrikerangefromcarriersensing',
                    opacity: 0
                },
                {
                    layer: 'xfighterstrikerangefromcarriersensingpg',
                    opacity: 0
                },
            ]
        },
        {
            id: '11-m-o',
            title: '',
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
                    layer: 'mkj500sensingtosurfacefromcarriersambubble',
                    opacity: 0
                },
                {
                    layer: 'mkj500sensingtosurfacefromsinglecarrierpg',
                    opacity: 1
                },
                {
                    layer: 'ofighterweaponsrangefromsinglecarrierkj500',
                    opacity: 0
                },
                {
                    layer: 'ofighterweaponsrangefromsinglecarrierkj500pg',
                    opacity: 1
                },
            ],
            onChapterExit: [
                {
                    layer: 'mkj500sensingtosurfacefromcarriersambubble',
                    opacity: 0
                },
                {
                    layer: 'mkj500sensingtosurfacefromsinglecarrierpg',
                    opacity: 0
                },
                {
                    layer: 'ofighterweaponsrangefromsinglecarrierkj500',
                    opacity: 0
                },
                {
                    layer: 'ofighterweaponsrangefromsinglecarrierkj500pg',
                    opacity: 0
                },
            ]
        },
        {
            id: '12-u',
            title: 'Power Projection in the Region',
            subtitle: '',
            image: '',
            description: `Large patrol aircraft like the KJ-500 can’t operate from China’s carriers. That means that carriers hoping to make use of the KJ-500’s enhanced sensing capabilities will need to stay within the KJ-500’s maximum effective range from either the mainland or China’s South China Sea outposts.`,
            location: {
                center: [110.00, 15.00],
                zoom: 3.5,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'ukj500operationalrangefromislandsandmainland',
                    opacity: 0
                },
                {
                    layer: 'ukj500operationalrangefromislandsandmainlandpg',
                    opacity: 1
                },
            ],
            onChapterExit: [
                {
                    layer: 'ukj500operationalrangefromislandsandmainland',
                    opacity: 0
                },
                {
                    layer: 'ukj500operationalrangefromislandsandmainlandpg',
                    opacity: 0
                },
            ]
        },
        {
            id: '13-a-l2',
            title: '',
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
                    layer: 'achinascsrunwayislands',
                    opacity: 1
                },
                {
                    layer: 'lgadm36-chn-0',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'achinascsrunwayislands',
                    opacity: 0
                },
                {
                    layer: 'lgadm36-chn-0',
                    opacity: 0
                }
            ]
        },
        {
            id: '14-p',
            title: '',
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
                    layer: 'pcarrieroperationalrangewithapproximatechinesecoast',
                    opacity: 0
                },
                {
                    layer: 'pcarrieroperationalrangewithchinesecoastpg',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'pcarrieroperationalrangewithapproximatechinesecoast',
                    opacity: 0
                },
                {
                    layer: 'pcarrieroperationalrangewithchinesecoastpg',
                    opacity: 0
                }
            ]
        }, 
        {
            id: '15-q',
            title: '',
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
                    layer: 'qkj500sensingtosurfacefromcarriermaxoperationalrangesambubble',
                    opacity: 0
                },
                {
                    layer: 'qkj500sensingtosurfacefromcarriermaxoperationalrangesambubblepg',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'qkj500sensingtosurfacefromcarriermaxoperationalrangesambubble',
                    opacity: 0
                },
                {
                    layer: 'qkj500sensingtosurfacefromcarriermaxoperationalrangesambubblepg',
                    opacity: 0
                }
            ]
        },   
        {
            id: '16-r',
            title: '',
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
                    layer: 'rfighterweaponsrangefromkj500sensingrangefromcarrieroperationalrangesams',
                    opacity: 0
                },
                {
                    layer: 'rfighterweaponsrangefromkj500sensingrangefromcarrieroperationalrangepg',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'rfighterweaponsrangefromkj500sensingrangefromcarrieroperationalrangesams',
                    opacity: 0
                },
                {
                    layer: 'rfighterweaponsrangefromkj500sensingrangefromcarrieroperationalrangepg',
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