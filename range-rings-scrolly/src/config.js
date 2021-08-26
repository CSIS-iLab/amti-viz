var config = {
    style: "mapbox://styles/ilabmedia/ckq9ju4422de017p9rwe5klqi",
    accessToken: "pk.eyJ1IjoiaWxhYm1lZGlhIiwiYSI6ImNpbHYycXZ2bTAxajZ1c2tzdWU1b3gydnYifQ.AHxl8pPZsjsqoz95-604nw",
    showMarkers: false,
    alignment: 'left',
    theme: 'light',
    image: 'https://res.cloudinary.com/csisideaslab/image/upload/v1627308950/header-background-imagesDesktop_revised.png',
    title: 'Asia Maritime Transparency Initaitve',
    subtitle: '',
    logo: 'https://res.cloudinary.com/csisideaslab/image/upload/v1628110683/long.svg',
    footerTitle: '<a href="https://amti.csis.org/" alt="Asia Maritime Transparency Intiative website">Asia Maritime Transparency Initiative</a>',
    footersubTitle: 'Source: Data from | ',
    footerContent: 'We can just go with “The Asia Maritime Transparency Initiative was conceived of and designed by CSIS. It is an interactive, regularly-updated source for information, analysis, and policy exchange on maritime security issues in Asia. AMTI aims to promote transparency in the Indo-Pacific to dissuade assertive behavior and conflict and generate opportunities for cooperation and confidence building.',
    footerContentLink: 'Explore more Maps of the Asia Pacific',
    creditHeading: 'PHOTO CREDITS',
    creditItemOne: '<a href="https://www.gettyimages.com/detail/news-photo/this-photo-taken-on-april-14-2018-shows-a-j15-fighter-jet-news-photo/951606006?adppopup=true" alt="J-15 on Liaoning">J-15 on Liaoning</a>, Uploaded on April 14, 2018, AFP via Getty Images',
    creditItemTwo: '<a href="https://commons.wikimedia.org/wiki/File:KJ-500_(cropped).jpg" alt="image of a KJ-500">KJ-500</a>, October 17 2018, CC BY-SA 4.0 by Alert5',
    creditItemThree: '<a href="https://www.gettyimages.com/detail/news-photo/chinas-sole-aircraft-carrier-the-liaoning-arrives-in-hong-news-photo/810023414?adppopup=true" alt="Chinas aircraft carrier the Liaoning">Liaoning aircraft carrier arrives in Hong Kong waters</a>, July 7 2017,  Photo by Anthony Wallace/AFP via Getty Images',
    creditItemFour: '<a href="https://commons.wikimedia.org/wiki/File:Chinese_HQ-9_launcher.jpg" alt="HQ-9 SAM System Launch">HQ-9 SAM System Launch</a>, October 1 2009,  CC BY-NC-SA 2.0, eng.chinamil.com.cn / Photo by Jian Kang)',
    footerLogo: 'https://res.cloudinary.com/csisideaslab/image/upload/v1628110683/long.svg',
    copyright: '©2021 The Asia Maritime Transparency Initiative and The Center for Strategic and International Studies | Privacy Policy',
    chapters: [
        {
            id: 'stepintro',
            title: 'By Air, Land, and Sea: China’s Maritime Power Projection Network',
            description: `China’s deployment of radar, anti-ship and surface-to-air missile platforms, and combat aircraft to its outposts in the South China Sea have greatly expanded its ability to project power in waters far from its own coast.  This feature will illustrate how these three capabilities are fundamentally linked, and how China’s aircraft carriers can take advantage of them to comfortably conduct operations at greater distances.`,
            updated: 'Last Updated January 1, 2021',
            location: {
                center: [111.09, 15.30],
                zoom: 4.50,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
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
            description: `China has deployed substantial military assets to these islands, including HQ-9 anti-air and YJ-12B anti-ship missiles, sensing and communications facilities, and hangars capable of housing military transport, patrol, and combat aircraft.`,
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
            id: 'stepEmpty',
            title: '',
            image: '',
            description: ``,
            location: {
                center: [110.09, 16.30],
                zoom: 4.00,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'step3',
            title: '',
            image: 'https://res.cloudinary.com/csisideaslab/image/upload/v1628884785/amti/j-15.png',
            description: `The <span class="highlight--red">operational range</span> of Chinese fighter aircraft such as the J-15 from these islands is, in theory, quite far.`,
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
                    opacity: 1,
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
            id: 'step4',
            title: '',
            subtitle: '',
            image: 'https://res.cloudinary.com/csisideaslab/image/upload/v1628884129/amti/yellow.png',
            description: `But, in reality, combat aircraft can only effectively operate within <span class="highlight--yellow">the range of available radar and sensing platforms</span>. Without external radar coverage, they have limited awareness of their surroundings.`,
            location: {
                center: [110.09, 12.30],
                zoom: 4.50,
                pitch: 0.00,
                bearing: 0.00,
                mapAnimation: 'easeTo',
                speed: 0.5,
                curve: 1
            },
            onChapterEnter: [
                {
                    layer: 'achinascsrunwayislands',
                    opacity: 1
                },
                {
                    layer: 'ckj500undersamtosurfacepg',
                    opacity: 1,
                    duration: 100
                },

            ],
            onChapterExit: [
                {
                    layer: 'achinascsrunwayislands',
                    opacity: 0
                },
                {
                    layer: 'ckj500undersamtosurfacepg',
                    opacity: 0
                },
            ]
        },
        {
            id: 'step5',
            image: 'https://res.cloudinary.com/csisideaslab/image/upload/v1628884129/amti/yellow.png',
            title: '',
            subtitle: '',
            description: `Airborne early warning and control (AEW&C) aircraft, like the KJ-500 known operate from the islands, provide greater radar coverage than any ground-based sensors. A KJ-500 shown here above Subi Reef, can sense <img class="circle circle--inner" src="images/circle-inner.svg" alt="circlular svg" /><span class="highlight--yellow"> surface targets at up to 200 nautical miles </span> and <img class="circle circle--outer" src="images/circle-outer.svg" alt="circlular svg" /><span class="highlight--yellow">high-flying targets at 25,000 feet at up to 388 nautical miles</span>.`,
            legend: '',
            location: {
                center: [110.09, 12.30],
                zoom: 5.00,
                pitch: 0.00,
                bearing: 0.00,
                mapAnimation: 'easeTo',
                speed: 0.3,
                curve: 1
            },
            onChapterEnter: [
                {
                    layer: 'dkj500singlesubi',
                    opacity: 1
                },
                {
                    layer: 'ekj500singlefromsubisensingtosurfacepg',
                    opacity: 1
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
                    layer: 'ekj500singlefromsubisensingtosurfacepg',
                    opacity: 0
                },
                {
                    layer: 'tkj500fromsubisensingrangetoairpg',
                    opacity: 0
                }
            ]
        },
        {
            id: 'step6',
            title: ``,
            subtitle: '',
            image: 'https://res.cloudinary.com/csisideaslab/image/upload/v1628884548/amti/green.png',
            description: `But AEW&C aircraft also have limitations on their operational range. Without any defensive capabilities of their own, they rely on external protection, such as that of ground-based <img class="circle circle--green circle-outer" src="images/circle-outer.svg" alt="circlular svg" /><span class="highlight--green">anti-air</span> and <img class="circle circle--green circle--inner" src="images/circle-inner.svg" alt="circlular svg" /><span class="highlight--green">anti-ship</span> missiles on China’s outposts. Outside of missile coverage, a KJ-500 would be an easy target for enemy fighters or surface combatants.`,
            location: {
                center: [110.09, 12.30],
                zoom: 4.50,
                pitch: 0.00,
                bearing: 0.00,
                mapAnimation: 'easeTo',
                speed: 0.3,
                curve: 1
            },
            onChapterEnter: [
                {
                    layer: 'dkj500singlesubi2',
                    opacity: 1
                },
                {
                    layer: 'gsamrangefromsubipg',
                    opacity: 1
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
                    layer: 'gsamrangefromsubipg',
                    opacity: 0
                },
                {
                    layer: 'wsubiasmrangepg',
                    opacity: 0
                }
            ]
        },
        {
            id: 'step7',
            title: ``,
            subtitle: '',
            image: 'https://res.cloudinary.com/csisideaslab/image/upload/v1628884129/amti/yellow.png',
            description: `This is a KJ-500’s estimated <span class="highlight--yellow">radar range to surface-level targets</span> while operating within both anti-air and anti-ship missile coverage from the islands. Combat aircraft venturing beyond this range would be blind to surface threats and thus be incurring substantial risk.`,
            location: {
                center: [110.09, 12.30],
                zoom: 4.50,
                pitch: 0.00,
                bearing: 0.00,
                mapAnimation: 'easeTo',
                speed: 0.3,
                curve: 1
            },
            onChapterEnter: [
                {
                    layer: 'achinascsrunwayislands',
                    opacity: 1
                },
                {
                    layer: 'ckj500undersamtosurfacepg',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: 'achinascsrunwayislands',
                    opacity: 0
                },
                {
                    layer: 'ckj500undersamtosurfacepg',
                    opacity: 0,
                }
            ]
        },
        {
            id: 'step8',
            title: '',
            subtitle: '',
            image: 'https://res.cloudinary.com/csisideaslab/image/upload/v1628884785/amti/j-15.png',
            imageTwo: 'https://res.cloudinary.com/csisideaslab/image/upload/v1628884129/amti/yellow.png',
            description: `Fighters operating from within the <span class="highlight--yellow">KJ-500’s radar range</span> could <span class="highlight--red">strike targets within an additional radius of 250 nautical miles</span> wwith weapons such as an air-launched YJ-12 anti-ship cruise missile. This range, 550 nautical miles from China’s island outposts, is the realistic strike range for combat aircraft operating from the bases without naval support.`,
            location: {
                center: [110.09, 12.30],
                zoom: 4.50,
                pitch: 0.00,
                bearing: 0.00,
                mapAnimation: 'easeTo',
                speed: 0.3,
                curve: 1
            },
            onChapterEnter: [
                {
                    layer: 'achinascsrunwayislands',
                    opacity: 1
                },
                {
                    layer: 'ckj500undersamtosurfacepg',
                    opacity: 1,
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
                    layer: 'ckj500undersamtosurfacepg',
                    opacity: 0,
                },
                {
                    layer: 'sfighterweaponsrangefromkj500sensingrangefromislandsamspg',
                    opacity: 0
                }
            ]
        },
        {
            id: 'step9a',
            title: 'Carrier Operations',
            subtitle: '',
            image: 'https://res.cloudinary.com/csisideaslab/image/upload/v1628884387/amti/yellow-air.png',
            description: `China’s aircraft carriers have the potential to enable combat aircraft to operate safely at much further ranges. A carrier group includes the carrier itself, 24 to 32 fighter aircraft, and an escort of guided-missile destroyers and frigates. The carrier group has its own <img class="circle circle--outer" src="images/circle-outer.svg" alt="circlular svg"><span class="highlight--yellow">anti-air</span> and <img class="circle circle--inner" src="images/circle-inner.svg" alt="circlular svg"><span class="highlight--yellow">anti-ship missiles</span>...`,
            location: {
                center: [110.09, 8.30],
                zoom: 4.5,
                pitch: 0.00,
                bearing: 0.00,
                mapAnimation: 'easeTo',
                speed: 0.3,
                curve: 1
            },
            onChapterEnter: [
                {
                    layer: 'hcarriergroup',
                    opacity: 1
                },
                {
                    layer: 'kcarriersensingrangetosurfacepg',
                    opacity: 1
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
                    layer: 'kcarriersensingrangetosurfacepg',
                    opacity: 0
                },
                {
                    layer: 'vcarriersensingto25000feetpg',
                    opacity: 0
                },
            ]
        },
        {
            id: 'step9b',
            title: '',
            subtitle: '',
            image: 'https://res.cloudinary.com/csisideaslab/image/upload/v1628883455/amti/white.png',
            imageTwo: 'https://res.cloudinary.com/csisideaslab/image/upload/v1628884548/amti/green.png',
            description: `…as well as radar that can detect <br/><img class="circle circle--inner circle--green" src="images/circle-inner.svg" alt="circlular svg"><span class="highlight--green">surface</span> and <img class="circle circle--outer circle--green" src="images/circle-outer.svg" alt="circlular svg"><span class="highlight--green">air targets</span>.`,
            location: {
                center: [110.09, 8.30],
                zoom: 4.5,
                pitch: 0.00,
                bearing: 0.00,
                mapAnimation: 'easeTo',
                speed: 0.3,
                curve: 1
            },
            onChapterEnter: [
                {
                    layer: 'hcarriergroup',
                    opacity: 1
                },
                {
                    layer: 'isamrangefromcarrierpg',
                    opacity: 1
                },
                {
                    layer: 'jyj18asmrangefromcarrierpg',
                    opacity: 1
                },
            ],
            onChapterExit: [
                {
                    layer: 'hcarriergroup',
                    opacity: 0
                },
                {
                    layer: 'isamrangefromcarrierpg',
                    opacity: 0
                },
                {
                    layer: 'jyj18asmrangefromcarrierpg',
                    opacity: 0
                },
            ]
        },
        {
            id: 'step10',
            title: '',
            subtitle: '',
            image: 'https://res.cloudinary.com/csisideaslab/image/upload/v1628884785/amti/j-15.png',
            imageTwo: 'https://res.cloudinary.com/csisideaslab/image/upload/v1628884387/amti/yellow-air.png',
            description: `A carrier group’s <span class="highlight--yellow">radar range</span> to surface targets is limited to approximately 65 nautical miles. This limits the strike range of combat aircraft launched from the carrier, which, without other support, can only safely operate within that radius.`,
            location: {
                center: [110.09, 8.30],
                zoom: 4.5,
                pitch: 0.00,
                bearing: 0.00,
                mapAnimation: 'easeTo',
                speed: 0.3,
                curve: 1
            },
            onChapterEnter: [
                {
                    layer: 'hcarriergroup',
                    opacity: 1
                },
                {
                    layer: 'kcarriersensingrangetosurfacepg',
                    opacity: 1
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
                    layer: 'kcarriersensingrangetosurfacepg',
                    opacity: 0
                },
                {
                    layer: 'xfighterstrikerangefromcarriersensingpg',
                    opacity: 0
                },
            ]
        },
        {
            id: 'step11',
            title: '',
            subtitle: '',
            image: 'https://res.cloudinary.com/csisideaslab/image/upload/v1628883455/amti/white.png',
            imageTwo: 'https://res.cloudinary.com/csisideaslab/image/upload/v1628884785/amti/j-15.png',
            imageThree: 'https://res.cloudinary.com/csisideaslab/image/upload/v1628884129/amti/yellow.png',
            description: `These ranges can be extended, however, by patrol aircraft operating within the defensive perimeter of the carrier group’s missiles. This extends the <span class="highlight--yellow">radar range out to 300 nautical miles</span>, enabling J-15s to <span class="highlight--red">strike up to 550 nautical miles</span> from the carrier group.`,
            location: {
                center: [110.09, 8.30],
                zoom: 4.5,
                pitch: 0.00,
                bearing: 0.00,
                mapAnimation: 'easeTo',
                speed: 0.3,
                curve: 1
            },
            onChapterEnter: [
                {
                    layer: 'hcarriergroup',
                    opacity: 1
                },
                {
                    layer: 'mkj500sensingtosurfacefromsinglecarrierpg',
                    opacity: 1
                },
                {
                    layer: 'ofighterweaponsrangefromsinglecarrierkj500pg',
                    opacity: 1
                },
            ],
            onChapterExit: [
                {
                    layer: 'hcarriergroup',
                    opacity: 0
                },
                {
                    layer: 'mkj500sensingtosurfacefromsinglecarrierpg',
                    opacity: 0
                },
                {
                    layer: 'ofighterweaponsrangefromsinglecarrierkj500pg',
                    opacity: 0
                },
            ]
        },
        {
            id: 'step12',
            title: 'Power Projection in the Region',
            subtitle: '',
            image: 'https://res.cloudinary.com/csisideaslab/image/upload/v1628884129/amti/yellow.png',
            description: `Large patrol aircraft like the KJ-500 can’t launch from China’s existing aircraft carriers. In order to make use of a KJ-500’s sensing capabilities, carriers need to stay within the aircraft’s <span class="highlight--yellow"> maximum range </span>from Chinese runways on the mainland or in the South China Sea. `,
            location: {
                center: [110.00, 15.00],
                zoom: 3.5,
                pitch: 0.00,
                bearing: 0.00,
                mapAnimation: 'easeTo',
                speed: 0.3,
                curve: 1
            },
            onChapterEnter: [
                {
                    layer: 'new-kj-500-range-dw7r6z',
                    opacity: 1
                },
            ],
            onChapterExit: [
                {
                    layer: 'new-kj-500-range-dw7r6z',
                    opacity: 0
                },
            ]
        },
        {
            id: 'step13',
            title: '',
            subtitle: ``,
            image: '',
            description: `Another limitation on carrier operations is the need for divert airfields. To operate safely, combat aircraft need to have a divert airfield within range in case they are unable to return to the carrier for any reason. The only runways in the region to which Chinese combat aircraft can reliably divert are those on the Chinese mainland and on China’s island outposts.`,
            location: {
                center: [105.00, 28.30],
                zoom: 4,
                pitch: 0.00,
                bearing: 0.00,
                mapAnimation: 'easeTo',
                speed: 0.3,
                curve: 1
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
            id: 'step14',
            title: '',
            subtitle: '',
            image: 'https://res.cloudinary.com/csisideaslab/image/upload/v1628883455/amti/white.png',
            description: `China’s aircraft carriers can operate within this area while maintaining a safe, 400-nautical mile distance from divert airfields currently available for use.`,
            location: {
                center: [112.09, 24.00],
                zoom: 3.5,
                pitch: 0.00,
                bearing: 0.00,
                mapAnimation: 'easeTo',
                speed: 0.3,
                curve: 1
            },
            onChapterEnter: [
                {
                    layer: 'pcarrieroperationalrangewithchinesecoastpg',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'pcarrieroperationalrangewithchinesecoastpg',
                    opacity: 0
                }
            ]
        }, 
        {
            id: 'step15',
            title: '',
            subtitle: '',
            image: 'https://res.cloudinary.com/csisideaslab/image/upload/v1628884129/amti/yellow.png',
            imageTwo: 'https://res.cloudinary.com/csisideaslab/image/upload/v1628883455/amti/white.png',
            description: `Carrier groups operating within that range can provide protection for ground-launched AEW&C aircraft. The <span class="highlight--yellow">radar range of those aircraft</span>, 700 nautical miles from either the Chinese mainland or China’s island outposts, is the effective range of China’s carrier-launched fighters.`,
            location: {
                center: [112.09, 24.00],
                zoom: 3.5,
                pitch: 0.00,
                bearing: 0.00,
                mapAnimation: 'easeTo',
                speed: 0.3,
                curve: 1
            },
            onChapterEnter: [
                {
                    layer: 'pcarrieroperationalrangewithchinesecoastpg',
                    opacity: 1
                },
                {
                    layer: 'qkj500sensingtosurfacefromcarriermaxoperationalrangesambubblepg',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'pcarrieroperationalrangewithchinesecoastpg',
                    opacity: 0
                },
                {
                    layer: 'qkj500sensingtosurfacefromcarriermaxoperationalrangesambubblepg',
                    opacity: 0
                }
            ]
        },   
        {
            id: 'step16',
            title: '',
            subtitle: '',
            image: 'https://res.cloudinary.com/csisideaslab/image/upload/v1628884785/amti/j-15.png',
            imageTwo: 'https://res.cloudinary.com/csisideaslab/image/upload/v1628884129/amti/yellow.png',
            imageThree: 'https://res.cloudinary.com/csisideaslab/image/upload/v1628883455/amti/white.png',
            description: `And weapons launched from those fighters could <span class="highlight--red">strike even further</span>, up to 950 nautical miles from Chinese airfields.`,
            location: {
                center: [112.09, 24.00],
                zoom: 3.5,
                pitch: 0.00,
                bearing: 0.00,
                mapAnimation: 'easeTo',
                speed: 0.3,
                curve: 1
            },
            onChapterEnter: [
                {
                    layer: 'pcarrieroperationalrangewithchinesecoastpg',
                    opacity: 1
                },
                {
                    layer: 'qkj500sensingtosurfacefromcarriermaxoperationalrangesambubblepg',
                    opacity: 1
                },
                {
                    layer: 'rfighterweaponsrangefromkj500sensingrangefromcarrieroperationalrangepg',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'pcarrieroperationalrangewithchinesecoastpg',
                    opacity: 0
                },
                {
                    layer: 'qkj500sensingtosurfacefromcarriermaxoperationalrangesambubblepg',
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