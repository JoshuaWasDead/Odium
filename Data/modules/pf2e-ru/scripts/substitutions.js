let babeleKeepOriginalName = false;

export function renameItems() {
    babeleKeepOriginalName = game.settings.get('pf2e-ru', 'babeleItemKeepOriginalName');
    // пропущен Earthbreaker, Feng Huo Lun, Flying Talon, Gauntlet Bow, Lancer, Mikazuki, Phalanx Piercer, Scizore, Spraysling, Triggerbrand, Wrecker, Wrist Launcher, Zulfikar

    const weapons = {
        "adze": "n",
        "air-repeater": "f",
        "aklys": "m",
        "alchemical-bomb": "f",
        "alchemical-crossbow": "m",
        "aldori-dueling-sword": "m",
        "arbalest": "m",
        "arquebus": "f",
        "atlatl": "m",
        "asp-coil": "m",
        "axe-musket": "m",
        "barricade-buster": "m",
        "bastard-sword": "m",
        "battle-axe": "m",
        "battle-lute": "f",
        "battle-saddle": "n",
        "bec-de-corbin": "f",
        "big-boom-gun": "f",
        "black-powder-knuckle-dusters": "p",
        "bladed-diabolo": "n",
        "bladed-gauntlet": "f",
        "bladed-hoop": "m",
        "bladed-scarf": "m",
        "blowgun": "f",
        "blowgun-darts": "p",
        "blunderbuss": "m",
        "bo-staff": "m",
        "boarding-axe": "m",
        "boarding-pike": "f",
        "bola": "m",
        "boomerang": "m",
        "bow-staff": "m",
        "breaching-pike": "f",
        "broadspear": "n",
        "butchering-axe": "m",
        "butterfly-sword": "m",
        "buugeng": "m",
        "cane-pistol": "m",
        "chain-sword": "m",
        "chakram": "m",
        "chakri": "m",
        "clan-dagger": "m",
        "clan-pistol": "m",
        "claw": "m",
        "claw-blade": "m",
        "club": "f",
        "coat-pistol": "m",
        "combat-grapnel": "m",
        "combat-lure": "f",
        "composite-longbow": "m",
        "composite-shortbow": "m",
        "corset-knife": "m",
        "crescent-cross": "m",
        "crossbow": "m",
        "dagger": "m",
        "dagger-pistol": "m",
        "daikyu": "m",
        "dancers-spear": "n",
        "dandpatta": "f",
        "dart": "m",
        "dogslicer": "m",
        "donchak": "m",
        "double-barreled-musket": "m",
        "double-barreled-pistol": "m",
        "dragon-mouth-pistol": "m",
        "dueling-pistol": "m",
        "dueling-spear": "n",
        "dwarven-dorn-dergar": "m",
        "dwarven-scattergun": "n",
        "dwarven-war-axe": "f",
        "elven-branched-spear": "n",
        "elven-curve-blade": "f",
        "explosive-dogslicer": "m",
        "exquisite-sword-cane": "f",
        "exquisite-sword-cane-sheath": "p",
        "falcata": "f",
        "falchion": "m",
        "fangwire": "m",
        "fauchard": "m",
        "fighting-fan": "m",
        "fighting-stick": "f",
        "filchers-fork": "f",
        "fire-lance": "n",
        "fire-poi": "m",
        "fist": "m",
        "flail": "m",
        "flingflenser": "m",
        "flintlock-musket": "m",
        "flintlock-pistol": "m",
        "flyssa": "f",
        "forked-bipod": "f",
        "frying-pan": "f",
        "gada": "f",
        "gaff": "m",
        "gakgung": "m",
        "gauntlet": "f",
        "gill-hook": "m",
        "glaive": "f",
        "gnome-amalgam-musket": "m",
        "gnome-flickmace": "f",
        "gnome-hooked-hammer": "m",
        "greataxe": "f",
        "greatclub": "f",
        "greatpick": "m",
        "greatsword": "m",
        "griffon-cane": "f",
        "guisarme": "f",
        "gun-sword": "m",
        "halberd": "f",
        "halfling-sling-staff": "f",
        "hammer-gun": "m",
        "hand-adze": "n",
        "hand-cannon": "f",
        "hand-crossbow": "m",
        "harmona-gun": "n",
        "harpoon": "m",
        "hatchet": "m",
        "heavy-crossbow": "m",
        "hongali-hornbow": "m",
        "hook-sword": "p",
        "horsechopper": "m",
        "injection-spear": "n",
        "javelin": "n",
        "jaws": "p",
        "jezail": "m",
        "jiu-huan-dao": "m",
        "juggling-club": "f",
        "kalis": "m",
        "kama": "f",
        "karambit": "m",
        "katana": "f",
        "katar": "m",
        "khakkhara": "f",
        "khopesh": "m",
        "knuckle-duster": "m",
        "kris": "m",
        "kukri": "m",
        "kusarigama": "f",
        "lance": "f",
        "leiomano": "f",
        "light-hammer": "m",
        "light-mace": "f",
        "light-pick": "m",
        "lion-scythe": "f",
        "long-air-repeater": "f",
        "long-hammer": "m",
        "longbow": "m",
        "longspear": "n",
        "longsword": "m",
        "mace": "f",
        "mace-multipistol": "f",
        "machete": "m",
        "main-gauche": "m",
        "mambele": "f",
        "maul": "f",
        "meteor-hammer": "m",
        "mithral-tree": "n",
        "monkeys-fist": "n",
        "morningstar": "m",
        "naginata": "f",
        "nightstick": "f",
        "nine-ring-sword": "m",
        "nodachi": "m",
        "nunchaku": "p",
        "ogre-hook": "m",
        "orc-knuckle-dagger": "m",
        "orc-necksplitter": "m",
        "panabas": "m",
        "pepperbox": "f",
        "pick": "m",
        "piercing-wind": "m",
        "piranha-kiss": "m",
        "poi": "p",
        "polytool": "m",
        "probing-cane": "f",
        "ranseur": "f",
        "rapier": "f",
        "rapier-pistol": "m",
        "reinforced-wheels": "p",
        "reinforced-stock": "m",
        "repeating-crossbow": "m",
        "repeating-hand-crossbow": "m",
        "repeating-heavy-crossbow": "m",
        "rhoka-sword": "m",
        "rope-dart": "m",
        "rotary-bow": "m",
        "rungu": "m",
        "sai": "m",
        "sansetsukon": "m",
        "sap": "f",
        "sawtooth-saber": "f",
        "scimitar": "m",
        "scorpion-whip": "m",
        "scourge": "f",
        "scythe": "f",
        "shauth-lash": "f",
        "shears": "p",
        "shield-bash": "m",
        "shield-boss": "m",
        "shield-bow": "m",
        "shield-pistol": "m",
        "shield-spikes": "p",
        "shobhad-longrifle": "m",
        "shortbow": "m",
        "shortsword": "m",
        "shuriken": "m",
        "sickle": "m",
        "sickle-saber": "f",
        "slide-pistol": "m",
        "sling": "f",
        "sling-bullets": "p",
        "spear": "n",
        "spiked-chain": "f",
        "spiked-gauntlet": "f",
        "spiral-rapier": "f",
        "spoon-gun": "m",
        "staff": "m",
        "starknife": "m",
        "stiletto-pen": "f",
        "sukgung": "m",
        "sun-sling": "f",
        "switchscythe": "f",
        "sword-cane": "m",
        "talwar": "m",
        "tamchal-chakram": "m",
        "taw-launcher": "m",
        "tekko-kagi": "m",
        "temple-sword": "m",
        "tengu-gale-blade": "m",
        "thorn-whip": "m",
        "three-peaked-tree": "n",
        "three-section-naginata": "f",
        "throwing-knife": "m",
        "thunder-sling": "f",
        "thundermace": "f",
        "tonfa": "f",
        "tri-bladed-katar": "m",
        "tricky-pick": "f",
        "trident": "m",
        "urumi": "m",
        "visap": "m",
        "wakizashi": "m",
        "war-flail": "m",
        "war-lance": "f",
        "war-razor": "f",
        "warhammer": "m",
        "wheel-blades": "p",
        "wheel-spikes": "p",
        "whip": "m",
        "whip-claw": "m",
        "whip-staff": "m",
        "wish-blade": "m",
        "wish-knife": "m",
        "wooden-taws": "p"
    };
    // все щиты - m

    // кроме Niyaháat, O-Yoroi, Sankeit
    const armor = {
        "armored-cloak": "m",
        "armored-coat": "f",
        "bastion-plate": "m",
        "breastplate": "m",
        "buckle-armor": "m",
        "ceramic-plate": "m",
        "chain-mail": "f",
        "chain-shirt": "f",
        "coral-armor": "m",
        "explorers-clothing": "f",
        "fortress-plate": "m",
        "full-plate": "m",
        "gi": "m",
        "half-plate": "m",
        "hellknight-breastplate": "m",
        "hellknight-half-plate": "m",
        "hellknight-plate": "m",
        "hide-armor": "m",
        "lamellar-breastplate": "m",
        "lattice-armor": "m",
        "leaf-weave": "f",
        "leather-armor": "m",
        "leather-lamellar": "m",
        "mantis-shell": "m",
        "padded-armor": "m",
        "power-suit": "m",
        "quilted-armor": "m",
        "scale-mail": "m",
        "scroll-robes": "f",
        "splint-mail": "m",
        "studded-leather-armor": "m",
        "subterfuge-suit": "m",
        "wooden-breastplate": "m"
    }

    // окончания
    const declensions = {
        "ий-ая-ее-ие": {
            m: "ий",
            f: "ая",
            n: "ее",
            p: "ие"
        },
        "ый-ая-ое-ые": {
            m: "ый",
            f: "ая",
            n: "ое",
            p: "ые"
        },
        "ий-ая-ое-ие": {
            m: "ий",
            f: "ая",
            n: "ое",
            p: "ие"
        },
        "ой-ая-ое-ые": {
            m: "ой",
            f: "ая",
            n: "ое",
            p: "ые"
        },
    }

    // замена материалов
    // пропущены sisterstone
    const materials = {
        abysium: {
            base: 'абисиумн{}',
            declension: "ый-ая-ое-ые"
        },
        adamantine: {
            base: 'адамантинов{}',
            declension: "ый-ая-ое-ые"
        },
        'cold-iron': {
            base: 'из холодного железа',
            postfix: true
        },
        dawnsilver: {
            base: 'из рассветного серебра',
            postfix: true
        },
        djezet: {
            base: 'джезетов{}',
            declension: "ый-ая-ое-ые"
        },
        duskwood: {
            base: 'из сумеречного дерева',
            postfix: true
        },
        inubrix: {
            base: 'инубриксов{}',
            declension: "ый-ая-ое-ые"
        },
        'keep-stone': {
            base: 'из крепостного камня',
            postfix: true
        },
        noqual: {
            base: 'ноквалов{}',
            declension: "ый-ая-ое-ые"
        },
        peachwood: {
            base: 'из персикового дерева',
            postfix: true
        },
        orichalcum: {
            base: 'орихалков{}',
            declension: "ый-ая-ое-ые"
        },
        siccatite: {
            base: 'сиккатитов{}',
            declension: "ый-ая-ое-ые"
        },
        silver: {
            base: 'серебрянн{}',
            declension: "ый-ая-ое-ые"
        },
        'sovereign-steel': {
            base: 'из суверенной стали',
            postfix: true
        },
        warpglass: {
            base: 'из искривленного стекла',
            postfix: true
        }
    }

    // замена рун
    // пока пропущены щитовые руны
    const runes = {
        striking: {
            striking: {
                base: "разящ{}",
                declension: "ий-ая-ее-ие"
            },
            greaterStriking: {
                base: "отлично разящ{}",
                declension: "ий-ая-ее-ие"
            },
            majorStriking: {
                base: "сильно разящ{}",
                declension: "ий-ая-ее-ие"
            }
        },
        resilient: {
            resilient: {
                base: "стойк{}",
                declension: "ий-ая-ее-ие"
            },
            greaterResilient: {
                base: "отлично стойк{}",
                declension: "ий-ая-ее-ие"
            },
            majorResilient: {
                base: "сильно стойк{}",
                declension: "ий-ая-ее-ие"
            }
        },
        property: {
            weapon: {
                ancestralEchoing: {
                    base: "наставляющ{}",
                    declension: "ий-ая-ее-ие"
                },
                anchoring: {
                    base: "якорн{}",
                    declension: "ый-ая-ое-ые"
                },
                greaterAnchoring: {
                    base: "отлично якорн{}",
                    declension: "ый-ая-ое-ые"
                },
                ashen: {
                    base: "пепельн{}",
                    declension: "ый-ая-ое-ые"
                },
                greaterAshen: {
                    base: "отлично пепельн{}",
                    declension: "ый-ая-ое-ые"
                },
                astral: {
                    base: "астральн{}",
                    declension: "ый-ая-ое-ые"
                },
                greaterAstral: {
                    base: "отлично астральн{}",
                    declension: "ый-ая-ое-ые"
                },
                authorized: {
                    base: "авторизованн{}",
                    declension: "ый-ая-ое-ые"
                },
                bane: {
                    base: "гибельн{}",
                    declension: "ый-ая-ое-ые"
                },
                bloodthirsty: {
                    base: "кровожадн{}",
                    declension: "ый-ая-ое-ые"
                },
                brilliant: {
                    base: "сверкающ{}",
                    declension: "ий-ая-ее-ие"
                },
                greaterBrilliant: {
                    base: "отлично сверкающ{}",
                    declension: "ий-ая-ее-ие"
                },
                called: {
                    base: "вызываем{}",
                    declension: "ый-ая-ое-ые"
                },
                coating: {
                    base: "покрывающ{}ся",
                    declension: "ий-ая-ее-ие"
                },
                conducting: {
                    base: "пропускающ{}",
                    declension: "ий-ая-ее-ие"
                },
                corrosive: {
                    base: "разъедающ{}",
                    declension: "ий-ая-ее-ие"
                },
                greaterCorrosive: {
                    base: "отлично разъедающ{}",
                    declension: "ий-ая-ее-ие"
                },
                crushing: {
                    base: "сокрушающ{}",
                    declension: "ий-ая-ее-ие"
                },
                greaterCrushing: {
                    base: "отлично сокрушающ{}",
                    declension: "ий-ая-ее-ие"
                },
                cunning: {
                    base: "хитр{}",
                    declension: "ый-ая-ое-ые"
                },
                dancing: {
                    base: "танцующ{}",
                    declension: "ий-ая-ее-ие"
                },
                deathdrinking: {
                    base: "упивающ{}ся смертью",
                    declension: "ий-ая-ее-ие"
                },
                decaying: {
                    base: "увядающ{}",
                    declension: "ий-ая-ее-ие"
                },
                greaterDecaying: {
                    base: "отлично увядающ{}",
                    declension: "ий-ая-ее-ие"
                },
                demolishing: {
                    base: "сносящ{}",
                    declension: "ий-ая-ее-ие"
                },
                disrupting: {
                    base: "жизненн{}",
                    declension: "ый-ая-ое-ые"
                },
                greaterDisrupting: {
                    base: "отлично жизненн{}",
                    declension: "ый-ая-ое-ые"
                },
                earthbinding: {
                    base: "приземляющ{}",
                    declension: "ий-ая-ее-ие"
                },
                energizing: {
                    base: "заряжающ{}ся",
                    declension: "ий-ая-ее-ие"
                },
                extending: {
                    base: "удлинняем{}",
                    declension: "ый-ая-ое-ые"
                },
                greaterExtending: {
                    base: "отлично удлинняем{}",
                    declension: "ый-ая-ое-ые"
                },
                fanged: {
                    base: "клыкаст{}",
                    declension: "ый-ая-ое-ые"
                },
                majorFanged: {
                    base: "превосходно клыкаст{}",
                    declension: "ый-ая-ое-ые"
                },
                fearsome: {
                    base: "устрашающ{}",
                    declension: "ий-ая-ее-ие"
                },
                greaterFearsome: {
                    base: "отлично устрашающ{}",
                    declension: "ий-ая-ее-ие"
                },
                flaming: {
                    base: "огненн{}",
                    declension: "ый-ая-ое-ые"
                },
                greaterFlaming: {
                    base: "отлично огненн{}",
                    declension: "ый-ая-ое-ые"
                },
                flurrying: {
                    base: "шквальн{}",
                    declension: "ый-ая-ое-ые"
                },
                frost: {
                    base: "морозн{}",
                    declension: "ый-ая-ое-ые"
                },
                greaterFrost: {
                    base: "отлично морозн{}",
                    declension: "ый-ая-ое-ые"
                },
                ghostTouch: {
                    base: "призрачного касания",
                    postfix: true
                },
                giantKilling: {
                    base: "убийства гигантов",
                    postfix: true
                },
                greaterGiantKilling: {
                    base: "отличного убийства гигантов",
                    postfix: true
                },
                grievous: {
                    base: "мучающ{}",
                    declension: "ий-ая-ее-ие"
                },
                hauling: {
                    base: "перетягивающ{}",
                    declension: "ий-ая-ее-ие"
                },
                greaterHauling: {
                    base: "отлично перетягивающ{}",
                    declension: "ий-ая-ее-ие"
                },
                holy: {
                    base: "свят{}",
                    declension: "ой-ая-ое-ые"
                },
                hooked: {
                    base: "крючковат{}",
                    declension: "ый-ая-ое-ые"
                },
                hopeful: {
                    base: "дающ{} надежду",
                    declension: "ий-ая-ее-ие"
                },
                impactful: {
                    base: "ударн{}",
                    declension: "ый-ая-ое-ые"
                },
                greaterImpactful: {
                    base: "отлично ударн{}",
                    declension: "ый-ая-ое-ые"
                },
                impossible: {
                    base: "невозможн{}",
                    declension: "ый-ая-ое-ые"
                },
                keen: {
                    base: "остр{}",
                    declension: "ый-ая-ое-ые"
                },
                kinWarding: {
                    base: "родовой защиты",
                    postfix: true
                },
                rooting: {
                    base: "укореняющ{}",
                    declension: "ий-ая-ее-ие"
                },
                greaterRooting: {
                    base: "отлично укореняющ{}",
                    declension: "ий-ая-ее-ие"
                },
                majorRooting: {
                    base: "превосходно укореняющ{}",
                    declension: "ий-ая-ее-ие"
                },
                trueRooting: {
                    base: "истинно укореняющ{}",
                    declension: "ий-ая-ее-ие"
                },
                merciful: {
                    base: "милосердный{}",
                    declension: "ый-ая-ое-ые"
                },
                pacifying: {
                    base: "умиротворяющ{}",
                    declension: "ий-ая-ее-ие"
                },
                returning: {
                    base: "возвращающ{}ся",
                    declension: "ий-ая-ее-ие"
                },
                serrating: {
                    base: "зазубренн{}",
                    declension: "ый-ая-ое-ые"
                },
                shifting: {
                    base: "изменчив{}",
                    declension: "ый-ая-ое-ые"
                },
                shock: {
                    base: "шоков{}",
                    declension: "ый-ая-ое-ые"
                },
                greaterShock: {
                    base: "отлично шоков{}",
                    declension: "ый-ая-ое-ые"
                },
                spellStoring: {
                    base: "хранящ{} заклинания",
                    declension: "ий-ая-ее-ие"
                },
                spellStoring: {
                    base: "хранящ{} заклинания",
                    declension: "ий-ая-ее-ие"
                },
                swarming: {
                    base: "роящ{}ся",
                    declension: "ий-ая-ее-ие"
                },
                thundering: {
                    base: "грохочущ{}",
                    declension: "ий-ая-ее-ие"
                },
                greaterThundering: {
                    base: "отлично грохочущ{}",
                    declension: "ий-ая-ее-ие"
                },
                underwater: {
                    base: "подводн{}",
                    declension: "ый-ая-ое-ые"
                },
                unholy: {
                    base: "нечестив{}",
                    declension: "ый-ая-ое-ые"
                },
                vorpal: {
                    base: "стрижающ{}",
                    declension: "ий-ая-ее-ие"
                },
                wounding: {
                    base: "ранящ{}",
                    declension: "ий-ая-ее-ие"
                },
            },
            armor: {
                acidResistant: {
                    base: "сопротивления кислоте",
                    postfix: true
                },
                greaterAcidResistant: {
                    base: "отличного сопротивления кислоте",
                    postfix: true
                },
                advancing: {
                    base: "продвигающ{}",
                    declension: "ий-ая-ее-ие"
                },
                greaterAdvancing: {
                    base: "отлично продвигающ{}",
                    declension: "ий-ая-ее-ие"
                },
                aimAiding: {
                    base: "нацеливающ{}",
                    declension: "ий-ая-ее-ие"
                },
                antimagic: {
                    base: "антимагическ{}",
                    declension: "ий-ая-ое-ие"
                },
                assisting: {
                    base: "опорн{}",
                    declension: "ый-ая-ое-ые"
                },
                bitter: {
                    base: "горьк{}",
                    declension: "ий-ая-ое-ие"
                },
                coldResistant: {
                    base: "сопротивления холоду",
                    postfix: true
                },
                greaterColdResistant: {
                    base: "отличного сопротивления холоду",
                    postfix: true
                },
                deathless: {
                    base: "бессмертн{}",
                    declension: "ый-ая-ое-ые"
                },
                electricityResistant: {
                    base: "сопротивления электричеству",
                    postfix: true
                },
                greaterElectricityResistant: {
                    base: "отличного сопротивления электричеству",
                    postfix: true
                },
                energyAdaptive: {
                    base: "энергетической адаптации",
                    postfix: true
                },
                deathless: {
                    base: "эфирн{}",
                    declension: "ый-ая-ое-ые"
                },
                lesserDread: {
                    base: "ужасн{}",
                    declension: "ый-ая-ое-ые"
                },
                moderateDread: {
                    base: "умеренно ужасн{}",
                    declension: "ый-ая-ое-ые"
                },
                greaterDread: {
                    base: "отлично ужасн{}",
                    declension: "ый-ая-ое-ые"
                },
                fireResistant: {
                    base: "сопротивления огню",
                    postfix: true
                },
                greaterFireResistant: {
                    base: "отличного сопротивления огню",
                    postfix: true
                },
                fortification: {
                    base: "укрепленн{}",
                    declension: "ый-ая-ое-ые"
                },
                greaterFortification: {
                    base: "отлично укрепленн{}",
                    declension: "ый-ая-ое-ые"
                },
                glamered: {
                    base: "гламурн{}",
                    declension: "ый-ая-ое-ые"
                },
                gliding: {
                    base: "скользящ{}",
                    declension: "ий-ая-ее-ие"
                },
                immovable: {
                    base: "неподвижн{}",
                    declension: "ый-ая-ое-ые"
                },
                implacable: {
                    base: "неумолим{}",
                    declension: "ый-ая-ое-ые"
                },
                invisibility: {
                    base: "невидим{}",
                    declension: "ый-ая-ое-ые"
                },
                greaterInvisibility: {
                    base: "отлично невидим{}",
                    declension: "ый-ая-ое-ые"
                },
                magnetizing: {
                    base: "магнитн{}",
                    declension: "ый-ая-ое-ые"
                },
                malleable: {
                    base: "податлив{}",
                    declension: "ый-ая-ое-ые"
                },
                misleading: {
                    base: "обманчив{}",
                    declension: "ый-ая-ое-ые"
                },
                portable: {
                    base: "переносн{}",
                    declension: "ой-ая-ое-ые"
                },
                quenching: {
                    base: "тушащ{}",
                    declension: "ий-ая-ее-ие"
                },
                greaterQuenching: {
                    base: "отлично тушащ{}",
                    declension: "ий-ая-ее-ие"
                },
                majorQuenching: {
                    base: "превосходно тушащ{}",
                    declension: "ий-ая-ее-ие"
                },
                trueQuenching: {
                    base: "истинно тушащ{}",
                    declension: "ий-ая-ее-ие"
                },
                raiment: {
                    base: "облачающ{}",
                    declension: "ий-ая-ее-ие"
                },
                ready: {
                    base: "готовности",
                    postfix: true
                },
                greaterReady: {
                    base: "отличной готовности",
                    postfix: true
                },
                rockBraced: {
                    base: "укрепленн{} камнем",
                    declension: "ый-ая-ое-ые"
                },
                shadow: {
                    base: "тенев{}",
                    declension: "ой-ая-ое-ые"
                },
                greaterShadow: {
                    base: "отлично тенев{}",
                    declension: "ой-ая-ое-ые"
                },
                majorShadow: {
                    base: "превосходно тенев{}",
                    declension: "ой-ая-ое-ые"
                },
                sinisterKnight: {
                    base: "зловещего рыцаря",
                    postfix: true
                },
                sizeChanging: {
                    base: "смены размера",
                    postfix: true
                },
                slick: {
                    base: "скользк{}",
                    declension: "ий-ая-ее-ие"
                },
                greaterSlick: {
                    base: "отлично скользк{}",
                    declension: "ий-ая-ее-ие"
                },
                majorSlick: {
                    base: "превосходно скользк{}",
                    declension: "ий-ая-ее-ие"
                },
                soaring: {
                    base: "парящ{}",
                    declension: "ий-ая-ее-ие"
                },
                stanching: {
                    base: "кровоостанавливающ{}",
                    declension: "ий-ая-ее-ие"
                },
                greaterStanching: {
                    base: "отлично кровоостанавливающ{}",
                    declension: "ий-ая-ее-ие"
                },
                majorStanching: {
                    base: "превосходно кровоостанавливающ{}",
                    declension: "ий-ая-ее-ие"
                },
                trueStanching: {
                    base: "истинно кровоостанавливающ{}",
                    declension: "ий-ая-ее-ие"
                },
                swallowSpike: {
                    base: "колюч{}",
                    declension: "ий-ая-ее-ие"
                },
                greaterSwallowSpike: {
                    base: "отлично колюч{}",
                    declension: "ий-ая-ее-ие"
                },
                majorSwallowSpike: {
                    base: "превосходно колюч{}",
                    declension: "ий-ая-ее-ие"
                },
                winged: {
                    base: "крылатый{}",
                    declension: "ый-ая-ое-ые"
                },
                greaterWinged: {
                    base: "отлично крылатый{}",
                    declension: "ый-ая-ое-ые"
                },
            }
        }
    }

    function toCamelCase(s) {
        s = s.split('-');
        return s.map(c => c[0].toUpperCase() + c.slice(1)).reduce((a, b) => a + b, '');
    }

    function adaptiveReplace(name, seek, replaceWith, g) {
        seek = game.i18n.localize(seek);
        let newPart = replaceWith.base;
        if (replaceWith.declension) newPart = newPart.replace('{}', declensions[replaceWith.declension][g]);
        if (replaceWith.postfix) {
            return name.replace(seek, '') + ' ' + newPart;
        }
        else {
            return name.replace(seek, newPart);
        }
    }

    libWrapper.register('pf2e-ru', 'game.pf2e.system.generateItemName', (wrapped, item) => {
        // щит не обрабатывается пока что.
        if (!['weapon', 'armor'].includes(item.type))
            return wrapped(item);

        let originalName = item._source.name;
        let tempName = originalName;

        // Если сохраняем оригинальное название при импорте, убираем его здесь
        if (babeleKeepOriginalName)
            tempName = tempName.split('/')[0].trim();

        // Уберем звездочки
        tempName = tempName.replace('(*)', '');
        item._source.name = tempName;
        item.name = tempName;

        let genName = wrapped(item);
        item._source.name = originalName;
        item.name = originalName;
        if (genName === tempName)
            {
                return originalName;
            }
        item._source.name = originalName;

        let g = item.type == 'weapon' ? weapons[item.baseType] : item.type == 'armor' ? armor[item.baseType] : item.type == 'shield' ? 'm' : null;
        if (!g)
            return genName;

        // заменим фундаментальные руны
        if (item.type === 'weapon' && item.system.runes.striking) {
            const striking = item.system.runes.striking;
            if (striking == 1) { genName = adaptiveReplace(genName, 'PF2E.Item.Weapon.Rune.Striking.Striking', runes.striking.striking, g); }
            else if (striking == 2) { genName = adaptiveReplace(genName, 'PF2E.Item.Weapon.Rune.Striking.Greater', runes.striking.greaterStriking, g); }
            else if (striking == 3) { genName = adaptiveReplace(genName, 'PF2E.Item.Weapon.Rune.Striking.Major', runes.striking.majorStriking, g); }
        }
        else if (item.type === 'armor' && item.system.runes.resilient) {
            const resilient = item.system.runes.resilient;
            if (resilient == 1) { genName = adaptiveReplace(genName, 'PF2E.ArmorResilientRune', runes.resilient.resilient, g); }
            else if (resilient == 2) { genName = adaptiveReplace(genName, 'PF2E.ArmorGreaterResilientRune', runes.resilient.greaterResilient, g); }
            else if (resilient == 3) { genName = adaptiveReplace(genName, 'PF2E.ArmorMajorResilientRune', runes.resilient.majorResilient, g); }
        }

        // заменим руны свойств
        if (item.system.runes.property.length > 0) {
            if (item.type === 'weapon') {
                for (const propRune of item.system.runes.property) {
                    if (propRune in runes.property.weapon) {
                        genName = adaptiveReplace(genName, `PF2E.WeaponPropertyRune.${propRune}.Name`, runes.property.weapon[propRune], g);
                    }
                }
            }
            else if (item.type === 'armor') {
                for (const propRune of item.system.runes.property) {
                    if (propRune in runes.property.armor) {
                        genName = adaptiveReplace(genName, `PF2E.ArmorPropertyRune${toCamelCase(propRune)}`, runes.property.armor[propRune], g);
                    }
                }
            }

        }

        // заменим материал
        if (item.system.material.type) {
            const mat = item.system.material.type;
            genName = adaptiveReplace(genName, `PF2E.PreciousMaterial${toCamelCase(mat)}`, materials[mat], g);
        }

        // Переместим руну мощи
        const powerRune = genName.match(/^\+\d/)?.[0];
        if(powerRune)
            genName = genName.replace(powerRune, '').trim() + ' ' + powerRune;

        genName = genName[0].toUpperCase() + genName.slice(1).toLowerCase();

        return genName;
    }, 'MIXED')


}