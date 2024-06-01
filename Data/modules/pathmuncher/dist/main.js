/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/constants.js
const debouncedReload = foundry.utils.debounce(() => window.location.reload(), 100);

const CONSTANTS = {
  MODULE_NAME: "pathmuncher",
  MODULE_FULL_NAME: "Pathmuncher",
  FLAG_NAME: "pathmuncher",
  SETTINGS: {
    // Enable options
    LOG_LEVEL: "log-level",
    RESTRICT_TO_TRUSTED: "restrict-to-trusted",
    USE_CUSTOM_COMPENDIUM_MAPPINGS: "use-custom-compendium-mappings",
    CUSTOM_COMPENDIUM_MAPPINGS: "custom-compendium-mappings",
    USE_IMMEDIATE_DEEP_DIVE: "use-immediate-deep-dive",
  },

  FEAT_PRIORITY: [
    "Heritage",
    "Heritage Feat",
    "Ancestry",
    "Ancestry Feat",
    "Background",
    "Background Feat",
    "Class Feat",
    "Skill Feat",
    "General Feat",
    "Awarded Feat",
  ],

  ACTOR_FLAGS: {
    pathbuilderId: undefined,
    addFeats: true,
    addEquipment: true,
    addBackground: true,
    addHeritage: true,
    addAncestry: true,
    addSpells: true,
    adjustBlendedSlots: true,
    addMoney: true,
    addTreasure: true,
    addLores: true,
    addWeapons: true,
    addArmor: true,
    addDeity: true,
    addName: true,
    addClass: true,
    addFamiliars: true,
    addFormulas: true,
  },

  CORE_COMPENDIUM_MAPPINGS: {
    feats: [
      "pf2e.feats-srd",
      "pf2e-playtest-data.war-of-immortals-playtest-class-feats",
      "pf2e-legacy-content.feats-legacy",
    ],
    ancestryFeatures: ["pf2e.ancestryfeatures", "pf2e-legacy-content.ancestry-features-legacy"],
    classFeatures: [
      "pf2e.classfeatures",
      "pf2e-playtest-data.war-of-immortals-playtest-class-features",
      "pf2e-legacy-content.class-features-legacy",
    ],
    actions: [
      "pf2e.actionspf2e",
      "pf2e-playtest-data.war-of-immortals-playtest-actions",
      "pf2e-legacy-content.actions-legacy",
    ],
    spells: [
      "pf2e-psychic-amps.psychic-psi-cantrips",
      "pf2e.spells-srd",
      "pf2e-playtest-data.war-of-immortals-playtest-spells",
      "pf2e-legacy-content.spells-legacy",
    ],
    classes: [
      "pf2e.classes",
      "pf2e-playtest-data.war-of-immortals-playtest-classes",
      "pf2e-legacy-content.classes-legacy",
    ],
    ancestries: ["pf2e.ancestries", "pf2e-legacy-content.ancestries-legacy"],
    heritages: ["pf2e.heritages", "pf2e-legacy-content.heritages-legacy"],
    equipment: ["pf2e.equipment-srd", "pf2e-legacy-content.equipment-legacy"],
    formulas: ["pf2e.equipment-srd", "pf2e-legacy-content.formulas-legacy"],
    deities: ["pf2e.deities", "pf2e-legacy-content.deities-legacy"],
    backgrounds: ["pf2e.backgrounds", "pf2e-legacy-content.backgrounds-legacy"],
  },

  GET_DEFAULT_SETTINGS() {
    return foundry.utils.deepClone(CONSTANTS.DEFAULT_SETTINGS);
  },
};

CONSTANTS.DEFAULT_SETTINGS = {
  // Enable options
  [CONSTANTS.SETTINGS.RESTRICT_TO_TRUSTED]: {
    name: `${CONSTANTS.FLAG_NAME}.Settings.RestrictToTrusted.Name`,
    hint: `${CONSTANTS.FLAG_NAME}.Settings.RestrictToTrusted.Hint`,
    scope: "world",
    config: true,
    type: Boolean,
    default: false,
    onChange: debouncedReload,
  },

  [CONSTANTS.SETTINGS.USE_CUSTOM_COMPENDIUM_MAPPINGS]: {
    name: `${CONSTANTS.FLAG_NAME}.Settings.UseCustomCompendiumMappings.Name`,
    scope: "world",
    config: false,
    type: Boolean,
    default: false,
  },

  [CONSTANTS.SETTINGS.USE_IMMEDIATE_DEEP_DIVE]: {
    name: `${CONSTANTS.FLAG_NAME}.Settings.UseImmediateDeepDive.Name`,
    scope: "world",
    config: false,
    type: Boolean,
    default: true,
  },

  [CONSTANTS.SETTINGS.CUSTOM_COMPENDIUM_MAPPINGS]: {
    scope: "world",
    config: false,
    type: Object,
    default: {
      feats: [
        "battlezoo-ancestries-dragons-pf2e.pf2e-battlezoo-dragon-feats",
        "battlezoo-ancestries-year-of-monsters-pf2e.yom-features",
        "battlezoo-ancestries-year-of-monsters-pf2e.yom-feats",
        "clerics.clerics-feats",
        "clerics.clerics-features",
        "pf2e.feats-srd",
        "pf2e-playtest-data.war-of-immortals-playtest-class-feats",
      ],
      ancestryFeatures: [
        "battlezoo-ancestries-year-of-monsters-pf2e.yom-features",
        "pf2e.ancestryfeatures",
      ],
      classFeatures: [
        "battlezoo-ancestries-year-of-monsters-pf2e.yom-features",
        "battlezoo-ancestries-dragons-pf2e.pf2e-battlezoo-dragon-feats",
        "battlezoo-ancestries-year-of-monsters-pf2e.yom-feats",
        "clerics.clerics-doctrines",
        "clerics.clerics-feats",
        "clerics.clerics-features",
        "pf2e.classfeatures",
        "pf2e-playtest-data.war-of-immortals-playtest-class-features",
      ],
      actions: ["pf2e.actionspf2e", "pf2e-playtest-data.war-of-immortals-playtest-actions"],
      spells: ["pf2e-psychic-amps.psychic-psi-cantrips", "pf2e.spells-srd", "pf2e-playtest-data.war-of-immortals-playtest-spells"],
      classes: ["clerics.clerics-features", "pf2e.classes", "pf2e-playtest-data.war-of-immortals-playtest-classes"],
      ancestries: [
        "battlezoo-ancestries-dragons-pf2e.pf2e-battlezoo-dragon-ancestry",
        "battlezoo-ancestries-year-of-monsters-pf2e.yom-ancestries",
        "pf2e.ancestries",
      ],
      heritages: [
        "battlezoo-ancestries-dragons-pf2e.pf2e-battlezoo-dragon-heritages",
        "battlezoo-ancestries-year-of-monsters-pf2e.yom-heritages",
        "pf2e.heritages",
      ],
      equipment: [
        "battlezoo-ancestries-dragons-pf2e.pf2e-battlezoo-dragon-equipment",
        "battlezoo-ancestries-year-of-monsters-pf2e.yom-equipment",
        "pf2e.equipment-srd"
      ],
      formulas: ["pf2e.equipment-srd"],
      deities: ["clerics.clerics-deities", "pf2e.deities"],
      backgrounds: ["pf2e.backgrounds"],
    },
  },

  // debug
  [CONSTANTS.SETTINGS.LOG_LEVEL]: {
    name: `${CONSTANTS.FLAG_NAME}.Settings.LogLevel.Name`,
    hint: `${CONSTANTS.FLAG_NAME}.Settings.LogLevel.Hint`,
    scope: "world",
    config: true,
    type: String,
    choices: {
      DEBUG: `${CONSTANTS.FLAG_NAME}.Settings.LogLevel.debug`,
      INFO: `${CONSTANTS.FLAG_NAME}.Settings.LogLevel.info`,
      WARN: `${CONSTANTS.FLAG_NAME}.Settings.LogLevel.warn`,
      ERR: `${CONSTANTS.FLAG_NAME}.Settings.LogLevel.error`,
      OFF: `${CONSTANTS.FLAG_NAME}.Settings.LogLevel.off`,
    },
    default: "WARN",
  }

};

CONSTANTS.PATH = `modules/${CONSTANTS.MODULE_NAME}`;

/* harmony default export */ const constants = (CONSTANTS);

;// CONCATENATED MODULE: ./src/utils.js


const utils = {

  isObject: (obj) => {
    return typeof obj === 'object' && !Array.isArray(obj) && obj !== null;
  },

  isString: (str) => {
    return typeof str === 'string' || str instanceof String;
  },

  wait: async (ms) => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  },

  capitalize: (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  },

  setting: (key) => {
    return game.settings.get(constants.MODULE_NAME, constants.SETTINGS[key]);
  },

  updateSetting: async (key, value) => {
    return game.settings.set(constants.MODULE_NAME, constants.SETTINGS[key], value);
  },

  getFlags: (actor) => {
    const flags = actor.flags[constants.FLAG_NAME]
      ? actor.flags[constants.FLAG_NAME]
      : constants.ACTOR_FLAGS;
    return flags;
  },

  setFlags: async (actor, flags) => {
    let updateData = {};
    foundry.utils.setProperty(updateData, `flags.${constants.FLAG_NAME}`, flags);
    await actor.update(updateData);
    return actor;
  },

  resetFlags: async (actor) => {
    return utils.setFlags(actor, null);
  },


  getOrCreateFolder: async (root, entityType, folderName, folderColor = "") => {
    let folder = game.folders.contents.find((f) =>
      f.type === entityType && f.name === folderName
      // if a root folder we want to match the root id for the parent folder
      && (root ? root.id : null) === (f.folder?.id ?? null)
    );
    // console.warn(`Looking for ${root} ${entityType} ${folderName}`);
    // console.warn(folder);
    if (folder) return folder;
    folder = await Folder.create(
      {
        name: folderName,
        type: entityType,
        color: folderColor,
        parent: (root) ? root.id : null,
      },
      { displaySheet: false }
    );
    return folder;
  },

  // eslint-disable-next-line no-unused-vars
  getFolder: async (kind, subFolder = "", baseFolderName = "Pathmuncher", baseColor = "#6f0006", subColor = "#98020a", typeFolder = true) => {
    let entityTypes = new Map();
    entityTypes.set("pets", "Pets");

    const folderName = game.i18n.localize(`${constants.MODULE_NAME}.labels.${kind}`);
    const entityType = entityTypes.get(kind);
    const baseFolder = await utils.getOrCreateFolder(null, entityType, baseFolderName, baseColor);
    const entityFolder = typeFolder ? await utils.getOrCreateFolder(baseFolder, entityType, folderName, subColor) : baseFolder;
    if (subFolder !== "") {
      const subFolderName = subFolder.charAt(0).toUpperCase() + subFolder.slice(1);
      const typeFolder = await utils.getOrCreateFolder(entityFolder, entityType, subFolderName, subColor);
      return typeFolder;
    } else {
      return entityFolder;
    }
  },

  allowDualClasses: () => {
    return (foundry.utils.isNewerVersion("5.9.0", game.version) && game.settings.get("pf2e", "dualClassVariant"));
    // || (!foundry.utils.isNewerVersion("5.9.0", game.version) && when remaster supports dualclass then add here
  },

  allowAncestryParagon: () => {
    return (foundry.utils.isNewerVersion("5.9.0", game.version) && game.settings.get("pf2e", "ancestryParagonVariant"));
  }

};


/* harmony default export */ const src_utils = (utils);

;// CONCATENATED MODULE: ./src/logger.js



const logger = {
  _showMessage: (logLevel, data) => {
    if (!logLevel || !data || typeof logLevel !== "string") {
      return false;
    }

    const setting = src_utils.setting("LOG_LEVEL");
    const logLevels = ["DEBUG", "INFO", "WARN", "ERR", "OFF"];
    const logLevelIndex = logLevels.indexOf(logLevel.toUpperCase());
    if (setting == "OFF" || logLevelIndex === -1 || logLevelIndex < logLevels.indexOf(setting)) {
      return false;
    }
    return true;
  },
  log: (logLevel, ...data) => {
    if (!logger._showMessage(logLevel, data)) {
      return;
    }

    logLevel = logLevel.toUpperCase();

    let msg = "No logging message provided.  Please see the payload for more information.";
    let payload = data.slice();
    if (data[0] && typeof (data[0] == "string")) {
      msg = data[0];
      if (data.length > 1) {
        payload = data.slice(1);
      } else {
        payload = null;
      }
    }
    msg = `${constants.MODULE_NAME} | ${logLevel} > ${msg}`;
    switch (logLevel) {
      case "DEBUG":
        if (payload) {
          console.debug(msg, ...payload); // eslint-disable-line no-console
        } else {
          console.debug(msg); // eslint-disable-line no-console
        }
        break;
      case "INFO":
        if (payload) {
          console.info(msg, ...payload); // eslint-disable-line no-console
        } else {
          console.info(msg); // eslint-disable-line no-console
        }
        break;
      case "WARN":
        if (payload) {
          console.warn(msg, ...payload); // eslint-disable-line no-console
        } else {
          console.warn(msg); // eslint-disable-line no-console
        }
        break;
      case "ERR":
        if (payload) {
          console.error(msg, ...payload); // eslint-disable-line no-console
        } else {
          console.error(msg); // eslint-disable-line no-console
        }
        break;
      default:
        break;
    }
  },

  debug: (...data) => {
    logger.log("DEBUG", ...data);
  },

  info: (...data) => {
    logger.log("INFO", ...data);
  },

  warn: (...data) => {
    logger.log("WARN", ...data);
  },

  error: (...data) => {
    logger.log("ERR", ...data);
  },
};
/* harmony default export */ const src_logger = (logger);

;// CONCATENATED MODULE: ./src/data/equipment.js
const SWAPS = [
  /^(Greater) (.*)/,
  /^(Lesser) (.*)/,
  /^(Major) (.*)/,
  /^(Moderate) (.*)/,
  /^(Standard) (.*)/,
];

const POSTFIX_PB_REMOVALS = [
  /(.*) (- Melee)$/,
  /(.*) (- Ranged)$/,
  /(Charm of Resistance .*) - (.*)/,
];

const PARENTHESIS = [
  /^(.*) \((.*)\)$/,
];

const SPLITS = [
  // /^(.*) - (.*)/,
];

const SPLITS_INVERT = [
  /^(.*): (.*)/,
];

const REPLACES = [
  { pbName: "Ring of Energy Resistance", foundryName: "Charm of Resistance" },
  { pbName: "Feather Token", foundryName: "Marvelous Miniatures" },
  { pbName: "Goggles of Night", foundryName: "Obsidian Goggles" },
];

// this equipment is named differently in foundry vs pathbuilder
const EQUIPMENT_RENAME_STATIC_MAP = [
  { pbName: "Basic Corrective Lenses", foundryName: "Corrective Lenses" },
  { pbName: "Inventor Power Suit", foundryName: "Power Suit" },
  { pbName: "Inventor Power Suit (Heavy)", foundryName: "Power Suit" },
  { pbName: "Inventor Subterfuge Suit", foundryName: "Subterfuge Suit" },
  { pbName: "Chain", foundryName: "Chain (10 feet)" },
  { pbName: "Oil", foundryName: "Oil (1 pint)" },
  { pbName: "Bracelets of Dashing", foundryName: "Bracelet of Dashing" },
  { pbName: "Fingerprinting Kit", foundryName: "Fingerprint Kit" },
  { pbName: "Ladder", foundryName: "Ladder (10-foot)" },
  { pbName: "Mezmerizing Opal", foundryName: "Mesmerizing Opal" },
  // { pbName: "Explorer's Clothing", foundryName: "Clothing (Explorer's)" },
  { pbName: "Clothing (Winter)", foundryName: "Clothing (Cold-Weather)" },
  { pbName: "Flaming Star (Greater)", foundryName: "Greater Flaming Star" },
  { pbName: "Potion of Lesser Darkvision", foundryName: "Darkvision Elixir (Lesser)" },
  { pbName: "Potion of Greater Darkvision", foundryName: "Darkvision Elixir (Greater)" },
  { pbName: "Potion of Moderate Darkvision", foundryName: "Darkvision Elixir (Moderate)" },
  { pbName: "Bottled Sunlight", foundryName: "Formulated Sunlight" },
  { pbName: "Magazine (Repeating Hand Crossbow)", foundryName: "Magazine with 5 Bolts" },
  { pbName: "Astrolabe (Standard)", foundryName: "Standard Astrolabe" },
  { pbName: "Skinitch Salve", foundryName: "Skinstitch Salve" },
  { pbName: "Flawless Scale", foundryName: "Abadar's Flawless Scale" },
  { pbName: "Construct Key", foundryName: "Cordelia's Construct Key" },
  { pbName: "Construct Key (Greater)", foundryName: "Cordelia's Greater Construct Key" },
  { pbName: "Lesser Swapping Stone", foundryName: "Lesser Bonmuan Swapping Stone" },
  { pbName: "Major Swapping Stone", foundryName: "Major Bonmuan Swapping Stone" },
  { pbName: "Moderate Swapping Stone", foundryName: "Moderate Bonmuan Swapping Stone" },
  { pbName: "Greater Swapping Stone", foundryName: "Greater Bonmuan Swapping Stone" },
  { pbName: "Heartstone", foundryName: "Skarja's Heartstone" },
  { pbName: "Bullets (10 rounds)", foundryName: "Sling Bullets" },
  { pbName: "Hide", foundryName: "Hide Armor" },
  { pbName: "Soverign Glue", foundryName: "Sovereign Glue" },
  { pbName: "Axe Musket - Melee", foundryName: "Axe Musket" },
  { pbName: "Axe Musket - Ranged", foundryName: "Axe Musket" },
  { pbName: "Extendible Pincer", foundryName: "Extendable Pincer" },
  { pbName: "Clothing (Explorer's)", foundryName: "Explorer's Clothing" },
  { pbName: "Street Preacher [Placeholder]", foundryName: "Street Preacher" },
  { pbName: "Repair Kit", foundryName: "Repair Toolkit" },
  { pbName: "Repair Kit (Superb)", foundryName: "Repair Toolkit (Superb)" },
  { pbName: "Alchemist's Tools", foundryName: "Alchemist's Toolkit" },
  { pbName: "Healer's Tools", foundryName: "Healer's Toolkit" },
  { pbName: "Healer's Tools (Expanded)", foundryName: "Healer's Toolkit (Expanded)" },
  { pbName: "Thieves' Tools", foundryName: "Thieves' Toolkit" },
  { pbName: "Thieves' Tools (Infiltrator)", foundryName: "Thieves' Toolkit (Infiltrator)" },
  { pbName: "Thieves' Tools (Infiltrator Picks)", foundryName: "Thieves' Toolkit (Infiltrator Picks)" },
  { pbName: "Artisan's Tools", foundryName: "Artisan's Toolkit" },
  { pbName: "Artisan's Tools (Sterling)", foundryName: "Artisan's Toolkit (Sterling)" },

  { pbName: "Aeon Stone (Dull Grey)", foundryName: "Aeon Stone (Consumed)" },
  { pbName: "Aeon Stone (Clear Spindle)", foundryName: "Aeon Stone (Nourishing)" },
  { pbName: "Aeon Stone (Tourmaline Sphere)", foundryName: "Aeon Stone (Delaying)" },
  { pbName: "Aeon Stone (Orange Prism)", foundryName: "Aeon Stone (Amplifying)" },
  { pbName: "Bag of Holding", foundryName: "Spacious Pouch" },
  { pbName: "Barkskin Potion", foundryName: "Oak Potion" },
  { pbName: "Boots of Speed", foundryName: "Propulsive Boots" },
  { pbName: "Bracers of Armor", foundryName: "Bands of Force" },
  { pbName: "Broom of Flying", foundryName: "Flying Broomstick" },
  { pbName: "Dagger of Venom", foundryName: "Serpent Dagger" },
  { pbName: "Energy Robe (Fire)", foundryName: "Energy Robe of Fire" },
  { pbName: "Energy Robe (Cold)", foundryName: "Energy Robe of Cold" },
  { pbName: "Energy Robe (Acid)", foundryName: "Energy Robe of Acid" },
  { pbName: "Energy Robe (Electricity)", foundryName: "Energy Robe of Electricity" },
  // these are actually matched to energy type witch Pathbuilder does not support
  { pbName: "Dragon's Breath Potion (Young)", foundryName: "Energy Breath Potion (Lesser)" },
  { pbName: "Dragon's Breath Potion (Adult)", foundryName: "Energy Breath Potion (Moderate)" },
  { pbName: "Dragon's Breath Potion (Wyrm)", foundryName: "Energy Breath Potion (Greater)" },
  { pbName: "Druid's Vestments", foundryName: "Living Mantle" },
  { pbName: "Everburning Torch", foundryName: "Everlight Crystal" },
  { pbName: "Eyes of the Eagle", foundryName: "Eyes of the Cat" },
  { pbName: "Feather Token (Chest)", foundryName: "Marvelous Miniatures (Chest)" },
  { pbName: "Feather Token (Ladder)", foundryName: "Marvelous Miniatures (Ladder)" },
  { pbName: "Feather Token (Swan Boat)", foundryName: "Marvelous Miniatures (Boat)" },
  { pbName: "Flame Tongue", foundryName: "Searing Blade" },
  { pbName: "Gloves of Storing", foundryName: "Retrieval Belt" },
  { pbName: "Goggles of Night", foundryName: "Obsidian Goggles" },
  { pbName: "Goggles of Night (Greater)", foundryName: "Obsidian Goggles (Greater)" },
  { pbName: "Goggles of Night (Major)", foundryName: "Obsidian Goggles (Major)" },
  { pbName: "Hat of Disguise", foundryName: "Masquerade Scarf" },
  { pbName: "Hat of Disguise (Greater)", foundryName: "Masquerade Scarf (Greater)" },
  { pbName: "Horn of Fog", foundryName: "Cloud Pouch" },
  { pbName: "Horseshoes of Speed", foundryName: "Alacritous Horseshoes" },
  { pbName: "Javelin of Lightning", foundryName: "Trident of Lightning" },
  { pbName: "Potion of Expeditious Retreat", foundryName: "Potion of Emergency Escape" },
  { pbName: "Ring of Energy Resistance (Greater)", foundryName: "Charm of Resistance (Greater)" },
  { pbName: "Ring of Energy Resistance (Major)", foundryName: "Charm of Resistance (Major)" },
  { pbName: "Silversheen", foundryName: "Silver Salve" },
  { pbName: "Smokestick (Lesser)", foundryName: "Smoke Ball (Lesser)" },
  { pbName: "Smokestick (Greater)", foundryName: "Smoke Ball (Greater)" },
  { pbName: "Sunrod", foundryName: "Glow Rod" },
  { pbName: "Tanglefoot Bag (Lesser)", foundryName: "Glue Bomb (Lesser)" },
  { pbName: "Tanglefoot Bag (Moderate)", foundryName: "Glue Bomb (Moderate)" },
  { pbName: "Tanglefoot Bag (Major)", foundryName: "Glue Bomb (Major)" },
  { pbName: "Tanglefoot Bag (Greater)", foundryName: "Glue Bomb (Greater)" },
  { pbName: "Tindertwig", foundryName: "Matchstick" },
  { pbName: "Owlbear Claw", foundryName: "Predator's Claw" },
  { pbName: "Wand of Manifold Missiles", foundryName: "Wand of Shardstorm" },
  { pbName: "Wand of Manifold Missiles (1st-Level Spell)", foundryName: "Wand of Shardstorm (1st-Rank Spell)" },
  { pbName: "Wand of Manifold Missiles (3rd-Level Spell)", foundryName: "Wand of Shardstorm (3rd-Rank Spell)" },
  { pbName: "Wand of Manifold Missiles (5th-Level Spell)", foundryName: "Wand of Shardstorm (5th-Rank Spell)" },
  { pbName: "Wand of Manifold Missiles (7th-Level Spell)", foundryName: "Wand of Shardstorm (7th-Rank Spell)" },

];

function dynamicNamesSteps(pbName) {
  const result = [];
  for (const reg of POSTFIX_PB_REMOVALS) {
    const match = pbName.match(reg);
    if (match) {
      result.push({ pbName, foundryName: match[1], details: match[2] });
    }
  }
  for (const reg of SWAPS) {
    const match = pbName.match(reg);
    if (match) {
      result.push({ pbName, foundryName: `${match[2]} (${match[1]})`, details: match[2] });
    }
  }
  for (const reg of SPLITS) {
    const match = pbName.match(reg);
    if (match) {
      result.push({ pbName, foundryName: match[2], details: match[1] });
    }
  }
  for (const reg of SPLITS_INVERT) {
    const match = pbName.match(reg);
    if (match) {
      result.push({ pbName, foundryName: match[1], details: match[2] });
    }
  }
  for (const reg of PARENTHESIS) {
    const match = pbName.match(reg);
    if (match) {
      result.push({ pbName, foundryName: match[1], details: match[2] });
    }
  }
  return result;
}

function generateDynamicNames(pbName) {
  const result = [];
  // if we have a hardcoded map, don't return here
  const basicResults = EQUIPMENT_RENAME_STATIC_MAP.filter((e) => e.pbName === pbName);
  if (basicResults.length > 0) {
    result.push(...basicResults);
  }

  for (const replace of REPLACES) {
    if (pbName.includes(replace.pbName)) {
      const replaced = pbName.replace(replace.pbName, replace.foundryName);
      result.push(...dynamicNamesSteps(replaced));
      result.push({ pbName, foundryName: replaced });
    }
  }

  if (result.length > 0) {
    return result;
  }

  result.push(...dynamicNamesSteps(pbName));
  return result;
}


function EQUIPMENT_RENAME_MAP(pbName = null) {
  const postfixNames = pbName ? generateDynamicNames(pbName) : [];
  return postfixNames.concat(EQUIPMENT_RENAME_STATIC_MAP);
}


// this is equipment is special and shouldn't have the transformations applied to it
const RESTRICTED_EQUIPMENT = [
  "Bracers of Armor",
];

const IGNORED_EQUIPMENT = [
  "Unarmored",
  "Inventor Power Suit",
  "Inventor Power Suit (Heavy)",
  "Inventor Subterfuge Suit",
];

const IGNORED_DISPLAY_POSTFIX = [
  /(.*) - Melee$/,
  /(.*) - Ranged$/,
];

function IGNORED_EQUIPMENT_DISPLAY(pbName) {
  for (const reg of IGNORED_DISPLAY_POSTFIX) {
    const match = reg.test(pbName);
    if (match === true) return true;
  }
  return false;
}

const GRANTED_ITEMS_LIST = [
  "Inventor Power Suit",
  "Inventor Power Suit (Heavy)",
  "Inventor Subterfuge Suit",
];

;// CONCATENATED MODULE: ./src/data/features.js
// these are features which are named differently in pathbuilder to foundry

const SKILL_LOOKUP = {
  "acrobatics": "acr",
  "arcana": "arc",
  "athletics": "ath",
  "crafting": "cra",
  "deception": "dec",
  "diplomacy": "dip",
  "intimidation": "itm",
  "medicine": "med",
  "nature": "nat",
  "occultism": "occ",
  "performance": "prf",
  "religion": "rel",
  "society": "soc",
  "stealth": "ste",
  "survival": "sur",
  "thievery": "thi",
};

const features_POSTFIX_PB_REMOVALS = [
  /(.*) (Racket)$/,
  /(.*) (Style)$/,
  /(.*) (Initiate Benefit)$/,
  /(.*) Mystery$/,
  // Cleric +
  /(.*) (Doctrine)$/,
  /(.*) (Element)$/,
  /(.*) (Impulse Junction)$/,
  /(.*) (Gate Junction:).*$/,
  /(.*) (Patron)$/,
];

const PREFIX_PB_REMOVALS = [
  /^(Arcane Thesis): (.*)/,
  /^(Arcane School): (.*)/,
  /^(The) (.*)/,
  // Cleric +
  /^(Blessing): (.*)/,
  /^(Empiricism) Selected Skill: (.*)/,
];

const POSTFIX_PB_SPLIT_AND_KEEP = [
  /(.*) (Impulse Junction)$/,
  /(.*) Gate Junction: (.*)$/,
];

const features_PARENTHESIS = [
  /^(.*) \((.*)\)$/,
];

const features_SPLITS = [
  /^(.*): (.*)/,
];

const features_SWAPS = [
  /^(Greater) (.*)/,
  /^(Lesser) (.*)/,
  /^(Major) (.*)/,
  /^(Moderate) (.*)/,
  /^(Standard) (.*)/,

];

const FEAT_RENAME_STATIC_MAP = [
  { pbName: "Academic", foundryName: "Ustalavic Academic" },
  { pbName: "Academic (Arcana)", foundryName: "Magaambya Academic" },
  { pbName: "Academic (Nature)", foundryName: "Magaambya Academic" },
  { pbName: "Aerialist", foundryName: "Shory Aerialist" },
  { pbName: "Aeromancer", foundryName: "Shory Aeromancer" },
  { pbName: "Ancient-Blooded", foundryName: "Ancient-Blooded Dwarf" },
  { pbName: "Antipaladin [Chaotic Evil]", foundryName: "Antipaladin" },
  { pbName: "Ape", foundryName: "Ape Animal Instinct" },
  { pbName: "Aquatic Eyes (Darkvision)", foundryName: "Aquatic Eyes" },
  { pbName: "Astrology", foundryName: "Saoc Astrology" },
  { pbName: "Battle Ready", foundryName: "Battle-Ready Orc" },
  { pbName: "Bite (Gnoll)", foundryName: "Bite" },
  { pbName: "Bloodline: Genie (Efreeti)", foundryName: "Bloodline: Genie" },
  { pbName: "Bloody Debilitations", foundryName: "Bloody Debilitation" },
  { pbName: "Canoneer", foundryName: "Cannoneer" },
  { pbName: "Cave Climber Kobold", foundryName: "Caveclimber Kobold" },
  { pbName: "Child of Squalor", foundryName: "Child of the Puddles" },
  { pbName: "Chosen One", foundryName: "Chosen of Lamashtu" },
  { pbName: "Cognative Mutagen (Greater)", foundryName: "Cognitive Mutagen (Greater)" },
  { pbName: "Cognative Mutagen (Lesser)", foundryName: "Cognitive Mutagen (Lesser)" },
  { pbName: "Cognative Mutagen (Major)", foundryName: "Cognitive Mutagen (Major)" },
  { pbName: "Cognative Mutagen (Moderate)", foundryName: "Cognitive Mutagen (Moderate)" },
  { pbName: "Cognitive Crossover", foundryName: "Kreighton's Cognitive Crossover" },
  { pbName: "Collegiate Attendant Dedication", foundryName: "Magaambyan Attendant Dedication" },
  { pbName: "Construct Carver", foundryName: "Tupilaq Carver" },
  { pbName: "Cunning Stance", foundryName: "Devrin's Cunning Stance" },
  { pbName: "Constructed (Android)", foundryName: "Constructed" },
  { pbName: "Dazzling Diversion", foundryName: "Devrin's Dazzling Diversion" },
  { pbName: "Deadly Hair", foundryName: "Syu Tak-nwa's Deadly Hair" },
  { pbName: "Deepvision", foundryName: "Deep Vision" },
  { pbName: "Deflect Arrows", foundryName: "Deflect Arrow" },
  { pbName: "Desecrator [Neutral Evil]", foundryName: "Desecrator" },
  { pbName: "Detective Dedication", foundryName: "Edgewatch Detective Dedication" },
  { pbName: "Duelist Dedication (LO)", foundryName: "Aldori Duelist Dedication" },
  { pbName: "Dwarven Hold Education", foundryName: "Dongun Education" },
  { pbName: "Ember's Eyes (Darkvision)", foundryName: "Ember's Eyes" },
  { pbName: "Enhanced Familiar Feat", foundryName: "Enhanced Familiar" },
  { pbName: "Enhanced Fire", foundryName: "Artokus's Fire" },
  { pbName: "Enigma", foundryName: "Enigma Muse" },
  { pbName: "Escape", foundryName: "Fane's Escape" },
  { pbName: "Eye of the Arcane Lords", foundryName: "Eye of the Arclords" },
  { pbName: "Flip", foundryName: "Farabellus Flip" },
  { pbName: "Fourberie", foundryName: "Fane's Fourberie" },
  { pbName: "Ganzi Gaze (Low-Light Vision)", foundryName: "Ganzi Gaze" },
  { pbName: "Guild Agent Dedication", foundryName: "Pathfinder Agent Dedication" },
  { pbName: "Harmful Font", foundryName: "Divine Font" },
  { pbName: "Green Watcher", foundryName: "Greenwatcher" },
  { pbName: "Green Watch Initiate", foundryName: "Greenwatch Initiate" },
  { pbName: "Green Watch Veteran", foundryName: "Greenwatch Veteran" },
  { pbName: "Healing Font", foundryName: "Divine Font" },
  { pbName: "Heatwave", foundryName: "Heat Wave" },
  { pbName: "Heavenseeker Dedication", foundryName: "Jalmeri Heavenseeker Dedication" },
  { pbName: "Heir of the Astrologers", foundryName: "Heir of the Saoc" },
  { pbName: "High Killer Training", foundryName: "Vernai Training" },
  { pbName: "Ice-Witch", foundryName: "Irriseni Ice-Witch" },
  { pbName: "Impeccable Crafter", foundryName: "Impeccable Crafting" },
  { pbName: "Incredible Beastmaster's Companion", foundryName: "Incredible Beastmaster Companion" },
  { pbName: "Interrogation", foundryName: "Bolera's Interrogation" },
  { pbName: "Katana", foundryName: "Katana Weapon Familiarity" },
  { pbName: "Last Survivor", foundryName: "Lastwall Survivor" },
  { pbName: "Liberator [Chaotic Good]", foundryName: "Liberator" },
  { pbName: "Lumberjack Dedication", foundryName: "Turpin Rowe Lumberjack Dedication" },
  { pbName: "Lumberjack", foundryName: "Lumber Consortium Laborer" },
  { pbName: "Maestro", foundryName: "Maestro Muse" },
  { pbName: "Major Lesson I", foundryName: "Major Lesson" },
  { pbName: "Major Lesson II", foundryName: "Major Lesson" },
  { pbName: "Major Lesson III", foundryName: "Major Lesson" },
  { pbName: "Mantis God's Grip", foundryName: "Achaekek's Grip" },
  { pbName: "Marked for Death", foundryName: "Mark for Death" },
  { pbName: "Miraculous Spells", foundryName: "Miraculous Spell" },
  { pbName: "Multifarious", foundryName: "Multifarious Muse" },
  { pbName: "Mystic", foundryName: "Nexian Mystic" },
  { pbName: "Paladin [Lawful Good]", foundryName: "Paladin" },
  { pbName: "Parry", foundryName: "Aldori Parry" },
  { pbName: "Polymath", foundryName: "Polymath Muse" },
  { pbName: "Precise Debilitation", foundryName: "Precise Debilitations" },
  { pbName: "Prodigy", foundryName: "Merabite Prodigy" },
  { pbName: "Quick Climber", foundryName: "Quick Climb" },
  { pbName: "Raider", foundryName: "Ulfen Raider" },
  { pbName: "Recognise Threat", foundryName: "Recognize Threat" },
  { pbName: "Redeemer [Neutral Good]", foundryName: "Redeemer" },
  { pbName: "Revivification Protocall", foundryName: "Revivification Protocol" },
  { pbName: "Riposte", foundryName: "Aldori Riposte" },
  { pbName: "Rkoan Arts", foundryName: "Rokoan Arts" },
  { pbName: "Saberteeth", foundryName: "Saber Teeth" },
  { pbName: "Scholarly Recollection", foundryName: "Uzunjati Recollection" },
  { pbName: "Scholarly Storytelling", foundryName: "Uzunjati Storytelling" },
  { pbName: "Shamanic Adherent", foundryName: "Rivethun Adherent" },
  { pbName: "Shamanic Disciple", foundryName: "Rivethun Disciple" },
  { pbName: "Shamanic Spiritual Attunement", foundryName: "Rivethun Spiritual Attunement" },
  { pbName: "Skysage Dedication", foundryName: "Oatia Skysage Dedication" },
  { pbName: "Secret Lesson", foundryName: "Janatimo's Lessons" },
  { pbName: "Sentry Dedication", foundryName: "Lastwall Sentry Dedication" },
  { pbName: "Slayer", foundryName: "Belkzen Slayer" },
  { pbName: "Stab and Snag", foundryName: "Stella's Stab and Snag" },
  { pbName: "Tenets of Evil", foundryName: "The Tenets of Evil" },
  { pbName: "Tenets of Good", foundryName: "The Tenets of Good" },
  { pbName: "Tongue of the Sun and Moon", foundryName: "Tongue of Sun and Moon" },
  { pbName: "Tribal Bond", foundryName: "Quah Bond" },
  { pbName: "Tyrant [Lawful Evil]", foundryName: "Tyrant" },
  { pbName: "Vestigal Wings", foundryName: "Vestigial Wings" },
  { pbName: "Virtue-Forged Tattooed", foundryName: "Virtue-Forged Tattoos" },
  { pbName: "Wakizashi", foundryName: "Wakizashi Weapon Familiarity" },
  { pbName: "Warden", foundryName: "Lastwall Warden" },
  { pbName: "Warrior", foundryName: "Warrior Muse" },
  { pbName: "Wary Eye", foundryName: "Eye of Ozem" },
  { pbName: "Wayfinder Resonance Infiltrator", foundryName: "Westyr's Wayfinder Repository" },
  { pbName: "Wind God's Fan", foundryName: "Wind God’s Fan" },
  { pbName: "Wind God’s Fan", foundryName: "Wind God's Fan" },
  // dragons
  { pbName: "Black", foundryName: "Black Dragon" },
  { pbName: "Brine", foundryName: "Brine Dragon" },
  { pbName: "Copper", foundryName: "Copper Dragon" },
  { pbName: "Blue", foundryName: "Blue Dragon" },
  { pbName: "Bronze", foundryName: "Bronze Dragon" },
  { pbName: "Cloud", foundryName: "Cloud Dragon" },
  { pbName: "Sky", foundryName: "Sky Dragon" },
  { pbName: "Brass", foundryName: "Brass Dragon" },
  { pbName: "Underworld", foundryName: "Underworld Dragon" },
  { pbName: "Crystal", foundryName: "Crystal Dragon" },
  { pbName: "Forest", foundryName: "Forest Dragon" },
  { pbName: "Green", foundryName: "Green Dragon" },
  { pbName: "Sea", foundryName: "Sea Dragon" },
  { pbName: "Silver", foundryName: "Silver Dragon" },
  { pbName: "White", foundryName: "White Dragon" },
  { pbName: "Sovereign", foundryName: "Sovereign Dragon" },
  { pbName: "Umbral", foundryName: "Umbral Dragon" },
  { pbName: "Red", foundryName: "Red Dragon" },
  { pbName: "Gold", foundryName: "Gold Dragon" },
  { pbName: "Magma", foundryName: "Magma Dragon" },
  // sizes for fleshwarp
  { pbName: "Medium", foundryName: "med" },
  { pbName: "Small", foundryName: "sm" },
  // Cleric +
  { pbName: "Decree of the Warsworn Ecstacy", foundryName: "Decree of Warsworn Ecstacy" },
  { pbName: "Decree of Warsworn Ecstacy", foundryName: "Decree of the Warsworn Ecstacy" },

  // remaster
  { pbName: "Lightning Reflexes", foundryName: "Reflex Expertise" },
  { pbName: "Great Fortitude", foundryName: "Fortitude Expertise" },
  { pbName: "Iron Will", foundryName: "Will Expertise" },
  { pbName: "Alertness", foundryName: "Perception Expertise" },
  { pbName: "Incredible Senses", foundryName: "Perception Legend" },
  { pbName: "Vigilant Senses", foundryName: "Perception Mastery" },
  { pbName: "Versatile Heritage", foundryName: "Versatile Human" },
  { pbName: "Divine Ally (Shield)", foundryName: "Shield Ally" },
  { pbName: "Divine Ally (Steed)", foundryName: "Steed Ally" },
  { pbName: "Divine Ally (Blade)", foundryName: "Blade Ally" },
  { pbName: "Skilled Heritage", foundryName: "Skilled Human" },

  // kinetisct
  { pbName: "Air Element", foundryName: "Air Gate" },
  { pbName: "Earth Element", foundryName: "Earth Gate" },
  { pbName: "Fire Element", foundryName: "Fire Gate" },
  { pbName: "Metal Element", foundryName: "Metal Gate" },
  { pbName: "Water Element", foundryName: "Water Gate" },
  { pbName: "Wood Element", foundryName: "Wood Gate" },

  // semi-official
  { pbName: "Ifrit", foundryName: "Naari" },
];

function features_generateDynamicNames(pbName) {
  const result = [];
  // if we have a hardcoded map, don't return here
  if (FEAT_RENAME_STATIC_MAP.some((e) => e.pbName === pbName)) return result;
  for (const reg of features_POSTFIX_PB_REMOVALS) {
    const match = pbName.match(reg);
    if (match) {
      result.push({ pbName, foundryName: match[1], details: match[2] });
    }
  }
  for (const reg of PREFIX_PB_REMOVALS) {
    const match = pbName.match(reg);
    if (match) {
      const parsed = { pbName, foundryName: match[2], details: match[1] };
      parsed.foundryValue = SKILL_LOOKUP[parsed.foundryName.toLowerCase()];
      result.push(parsed);
    }
  }
  for (const reg of features_SPLITS) {
    const match = pbName.match(reg);
    if (match) {
      result.push({ pbName, foundryName: match[2], details: match[1] });
    }
  }
  for (const reg of features_PARENTHESIS) {
    const match = pbName.match(reg);
    if (match) {
      result.push({ pbName, foundryName: match[1], details: match[2] });
    }
  }
  for (const reg of features_SWAPS) {
    const match = pbName.match(reg);
    if (match) {
      result.push({ pbName, foundryName: `${match[2]} (${match[1]})`, details: match[2] });
    }
  }
  return result;
}

function FEAT_RENAME_MAP(pbName = null) {
  const postfixNames = pbName ? features_generateDynamicNames(pbName) : [];
  return postfixNames.concat(FEAT_RENAME_STATIC_MAP);
}

const SHARED_IGNORE_LIST = [
  "Draconic Rage", // just handled by effects on Draconic Instinct
  "Mirror Initiate Benefit",
  "Spellstrike Specifics",
  "Unarmored",
  "Simple Weapon Expertise",
  "Spellbook",
  "Titan Mauler", // not needed
  "Energy Emanation", // pathbuilder does not pass through a type for this
  "Imprecise Sense", // this gets picked up and added by granted features
  "Imprecise Scent", // this gets picked up and added by granted features
  "Sanctification", // choose on import
];

const IGNORED_FEATS_LIST = [
  // ignore skills listed as feats
  "Acrobatics",
  "Athletics",
  "Deception",
  "Intimidation",
  "Nature",
  "Performance",
  "Society",
  "Survival",
  "Arcana",
  "Crafting",
  "Diplomacy",
  "Medicine",
  "Occultism",
  "Religion",
  "Stealth",
  "Thievery",

  // sizes
  // "Medium",
  // "Small",
];

const IGNORED_SPECIALS_LIST = [
  "Low-Light Vision", "Darkvision"
];

function IGNORED_FEATS() {
  return IGNORED_FEATS_LIST.concat(SHARED_IGNORE_LIST);
}

function IGNORED_SPECIALS() {
  return IGNORED_SPECIALS_LIST;
}

function specialOnlyNameLookup(name) {
  for (const [key, value] of Object.entries(SKILL_LOOKUP)) {
    if (key === name.toLowerCase()) {
      return { pbName: name, foundryName: name, foundryValue: value };
    }
  }
  return undefined;
}


function SPECIAL_NAME_ADDITIONS(specials) {
  const newSpecials = [];

  for (const special of specials) {
    for (const reg of POSTFIX_PB_SPLIT_AND_KEEP) {
      const match = special.match(reg);
      if (match) {
        newSpecials.push(match[2]);
      }
    }
  }
  return newSpecials;
}

const NO_AUTO_CHOICE_LIST = [
  // "Elemental Evolution",
];

function NO_AUTO_CHOICE() {
  return NO_AUTO_CHOICE_LIST;
}

const BAD_IGNORE_FEATURES_LIST = [
  // "Impulse Juntion",
];

const BAD_IGNORE_POSTFIX_PB_REMOVALS = [
  // /(.*) (Impulse Junction)$/,
];

function BAD_IGNORE_FEATURES(name) {
  if (BAD_IGNORE_FEATURES_LIST.some((f) => f === name)) return true;

  for (const reg of BAD_IGNORE_POSTFIX_PB_REMOVALS) {
    const match = name.match(reg);
    if (match) {
      return true;
    }
  }
  return false;
};

;// CONCATENATED MODULE: ./src/data/spells.js
const FEAT_SPELLCASTING = [
  { name: "Kitsune Spell Familiarity", showSlotless: false, knownSpells: ["Daze", "Forbidding Ward", "Ghost Sound"], preparePBSpells: true, },
  { name: "Kitsune Spell Expertise", showSlotless: false, knownSpells: ["Confusion", "Death Ward", "Illusory Scene"], preparePBSpells: true, },
  { name: "Kitsune Spell Mysteries", showSlotless: false, knownSpells: ["Bane", "Illusory Object", "Sanctuary"], preparePBSpells: true, },
  { name: "Nagaji Spell Familiarity", showSlotless: false, knownSpells: ["Daze", "Detect Magic", "Mage Hand"], preparePBSpells: true, },
  { name: "Nagaji Spell Expertise", showSlotless: false, knownSpells: ["Blink", "Control Water", "Subconscious Suggestion"], preparePBSpells: true, },
  { name: "Nagaji Spell Mysteries", showSlotless: false, knownSpells: ["Charm", "Fleet Step", "Heal"], preparePBSpells: true, },
  { name: "Rat Magic", showSlotless: false, knownSpells: [], preparePBSpells: true, },
];

const REMASTER_NAMES = [
  { pbName: "Animate Dead", foundryName: "Summon Undead" },
  { pbName: "Augment Summoning", foundryName: "Fortify Summoning" },
  { pbName: "Baleful Polymorph", foundryName: "Cursed Metamorphosis" },
  { pbName: "Barkskin", foundryName: "Oaken Resilience" },
  { pbName: "Bind Soul", foundryName: "Seize Soul" },
  { pbName: "Blind Ambition", foundryName: "Ignite Ambition" },
  { pbName: "Blink", foundryName: "Flicker" },
  { pbName: "Burning Hands", foundryName: "Breathe Fire" },
  { pbName: "Calm Emotions", foundryName: "Calm" },
  { pbName: "Charming Words", foundryName: "Charming Push" },
  { pbName: "Chill Touch", foundryName: "Void Warp" },
  { pbName: "Cloudkill", foundryName: "Toxic Cloud" },
  { pbName: "Color Spray", foundryName: "Dizzying Colors" },
  { pbName: "Commune with Nature", foundryName: "Commune" },
  { pbName: "Comprehend Language", foundryName: "Translate" },
  { pbName: "Continual Flame", foundryName: "Everlight" },
  { pbName: "Crushing Despair", foundryName: "Wave of Despair" },
  { pbName: "Dancing Lights", foundryName: "Light" },
  { pbName: "Dimension Door", foundryName: "Translocate" },
  { pbName: "Dimensional Anchor", foundryName: "Planar Seal" },
  { pbName: "Dimensional Lock", foundryName: "Planar Tether" },
  { pbName: "Discern Location", foundryName: "Pinpoint" },
  { pbName: "Disrupt Undead", foundryName: "Vitality Lash" },
  { pbName: "Disrupting Weapons", foundryName: "Infuse Vitality" },
  { pbName: "Endure Elements", foundryName: "Environmental Endurance" },
  { pbName: "Entangle", foundryName: "Entangling Flora" },
  { pbName: "False Life", foundryName: "False Vitality" },
  { pbName: "Feather Fall", foundryName: "Gentle Landing" },
  { pbName: "Feeblemind", foundryName: "Never Mind" },
  { pbName: "Finger of Death", foundryName: "Execute" },
  { pbName: "Flaming Sphere", foundryName: "Floating Flame" },
  { pbName: "Flesh To Stone", foundryName: "Petrify" },
  { pbName: "Freedom of Movement", foundryName: "Unfettered Movement" },
  { pbName: "Gaseous Form", foundryName: "Vapor Form" },
  { pbName: "Gentle Repose", foundryName: "Peaceful Rest" },
  { pbName: "Glibness", foundryName: "Honeyed Words" },
  { pbName: "Glitterdust", foundryName: "Revealing Light" },
  { pbName: "Globe of Invulnerability", foundryName: "Dispelling Globe" },
  { pbName: "Hallucinatory Terrain", foundryName: "Mirage" },
  { pbName: "Hideous Laughter", foundryName: "Laughing Fit" },
  { pbName: "Horrid Wilting", foundryName: "Desiccate" },
  { pbName: "Hypnotic Pattern", foundryName: "Hypnotize" },
  { pbName: "Inspire Competence", foundryName: "Uplifting Overture" },
  { pbName: "Inspire Courage", foundryName: "Courageous Anthem" },
  { pbName: "Inspire Defense", foundryName: "Rallying Anthem" },
  { pbName: "Inspire Heroics", foundryName: "Fortissimo Composition" },
  { pbName: "Know Direction", foundryName: "Know the Way" },
  { pbName: "Legend Lore", foundryName: "Collective Memories" },
  { pbName: "Longstrider", foundryName: "Tailwind" },
  { pbName: "Mage Armor", foundryName: "Mystic Armor" },
  { pbName: "Mage Hand", foundryName: "Telekinetic Hand" },
  { pbName: "Magic Aura", foundryName: "Disguise Magic" },
  { pbName: "Magic Fang", foundryName: "Runic Body" },
  { pbName: "Magic Missile", foundryName: "Force Barrage" },
  { pbName: "Magic Mouth", foundryName: "Embed Message" },
  { pbName: "Magic Weapon", foundryName: "Runic Weapon" },
  { pbName: "Magnificent Mansion", foundryName: "Planar Palace" },
  { pbName: "Maze", foundryName: "Quandary" },
  { pbName: "Meld into Stone", foundryName: "One with Stone" },
  { pbName: "Meteor Swarm", foundryName: "Falling Stars" },
  { pbName: "Mind Blank", foundryName: "Hidden Mind" },
  { pbName: "Misdirection", foundryName: "Disguise Magic" },
  { pbName: "Modify Memory", foundryName: "Rewrite Memory" },
  { pbName: "Neutralize Poison", foundryName: "Cleanse Affliction" },
  { pbName: "Nondetection", foundryName: "Veil of Privacy" },
  { pbName: "Obscuring Mist", foundryName: "Mist" },
  { pbName: "Pass Without Trace", foundryName: "Vanishing Tracks" },
  { pbName: "Passwall", foundryName: "Magic Passage" },
  { pbName: "Phantom Mount", foundryName: "Marvelous Mount" },
  { pbName: "Planar Binding", foundryName: "Planar Servitor" },
  { pbName: "Plane Shift", foundryName: "Interplanar Teleport" },
  { pbName: "Positive Luminance", foundryName: "Vital Luminance" },
  { pbName: "Private Sanctum", foundryName: "Peaceful Bubble" },
  { pbName: "Prying Eye", foundryName: "Scouting Eye" },
  { pbName: "Pulse of The City", foundryName: "Pulse of Civilization" },
  { pbName: "Purify Food And Drink", foundryName: "Cleanse Cuisine" },
  { pbName: "Ray of Enfeeblement", foundryName: "Enfeeble" },
  { pbName: "Remove Curse", foundryName: "Cleanse Affliction" },
  { pbName: "Remove Disease", foundryName: "Cleanse Affliction" },
  { pbName: "Remove Fear", foundryName: "Clear Mind" },
  { pbName: "Remove Paralysis", foundryName: "Sure Footing" },
  { pbName: "Restore Senses", foundryName: "Sound Body" },
  { pbName: "Scorching Ray", foundryName: "Blazing Bolt" },
  { pbName: "Searing Light", foundryName: "Holy Light" },
  { pbName: "See Invisibility", foundryName: "See the Unseen" },
  { pbName: "Shadow Walk", foundryName: "Umbral Journey" },
  { pbName: "Shapechange", foundryName: "Metamorphosis" },
  { pbName: "Shield Other", foundryName: "Share Life" },
  { pbName: "Sound Burst", foundryName: "Noise Blast" },
  { pbName: "Spectral Hand", foundryName: "Ghostly Carrier" },
  { pbName: "Spider Climb", foundryName: "Gecko Grip" },
  { pbName: "Splash of Art", foundryName: "Creative Splash" },
  { pbName: "Stone Tell", foundryName: "Speak with Stones" },
  { pbName: "Stoneskin", foundryName: "Mountain Resilience" },
  { pbName: "Tanglefoot", foundryName: "Tangle Vine" },
  { pbName: "Time Stop", foundryName: "Freeze Time" },
  { pbName: "Tongues", foundryName: "Truespeech" },
  { pbName: "Touch of Idiocy", foundryName: "Stupefy" },
  { pbName: "Tree Shape", foundryName: "One with Plants" },
  { pbName: "Tree Stride", foundryName: "Nature's Pathway" },
  { pbName: "Trueseeing", foundryName: "Truesight" },
  { pbName: "True Strike", foundryName: "Sure Strike" },
  { pbName: "Unseen Servant", foundryName: "Phantasmal Minion" },
  { pbName: "Vampiric Touch", foundryName: "Vampiric Feast" },
  { pbName: "Veil", foundryName: "Illusory Disguise" },
  { pbName: "Vigilant Eye", foundryName: "Rune of Observation" },
  { pbName: "Wail of the Banshee", foundryName: "Wails of the Damned" },
  { pbName: "Wind Walk", foundryName: "Migration" },
  { pbName: "Zone of Truth", foundryName: "Ring of Truth" },
];

function spellRename(spellName) {
  if (foundry.utils.isNewerVersion(game.version, "5.9.0") && game.modules.get("pf2e-legacy-content")?.active) return spellName;
  const remasterName = REMASTER_NAMES.find((remaster) => remaster.pbName === spellName);
  if (remasterName) {
    return remasterName.foundryName;
  }
  return spellName;
}

;// CONCATENATED MODULE: ./src/app/Seasoning.js




/**
 * This class acts as a wrapper around the renaming data,
 * and the changing of names for foundry
 *
 * When Munching we refer to this as Seasoning the data to taste.
 *
 * It's split out just to make it more manageable
 */
class Seasoning {

  // sluggify
  static slug(name) {
    if (!name) return undefined;
    return game.pf2e.system.sluggify(name);
  }

  // sluggify with dromedary casing
  static slugD(name) {
    if (!name) return undefined;
    return game.pf2e.system.sluggify(name, { camel: "dromedary" });
  }

  static FEAT_RENAME_MAP(name) {
    return FEAT_RENAME_MAP(name);
  }

  static EQUIPMENT_RENAME_MAP(name) {
    return EQUIPMENT_RENAME_MAP(name);
  }

  static getSpellCastingFeatureAdjustment(name) {
    return FEAT_SPELLCASTING.find((f) => f.name === name);
  }

  static getFoundryEquipmentName(pbName) {
    return Seasoning.EQUIPMENT_RENAME_MAP(pbName).find((map) => map.pbName == pbName)?.foundryName ?? pbName;
  }

  // static getFoundryFeatureName(pbName) {
  //   const match = Seasoning.FEAT_RENAME_MAP(pbName).find((map) => map.pbName == pbName);
  //   return match ?? { pbName, foundryName: pbName, details: undefined };
  // }

  static RESTRICTED_EQUIPMENT() {
    return RESTRICTED_EQUIPMENT;
  }

  // specials that are handled by Foundry and shouldn't be added
  static IGNORED_FEATS() {
    return IGNORED_FEATS();
  };

  static IGNORED_SPECIALS() {
    return IGNORED_SPECIALS();
  }

  static IGNORED_EQUIPMENT() {
    return IGNORED_EQUIPMENT;
  };

  static IGNORED_EQUIPMENT_DISPLAY(pbName) {
    return IGNORED_EQUIPMENT_DISPLAY(pbName);
  }

  static GRANTED_ITEMS_LIST() {
    return GRANTED_ITEMS_LIST;
  }

  static getSizeValue(size) {
    switch (size) {
      case 0:
        return "tiny";
      case 1:
        return "sm";
      case 3:
        return "lg";
      default:
        return "med";
    }
  }

  static PHYSICAL_ITEM_TYPES = new Set([
    "armor",
    "backpack",
    "book",
    "consumable",
    "equipment",
    "treasure",
    "weapon"
  ]);

  static isPhysicalItemType(type) {
    return Seasoning.PHYSICAL_ITEM_TYPES.has(type);
  }

  static getMaterialGrade(material) {
    if (material.toLowerCase().includes("high-grade")) {
      return "high";
    } else if (material.toLowerCase().includes("standard-grade")) {
      return "standard";
    }
    return "low";
  }

  static getFoundryFeatLocation(pathbuilderFeatType, pathbuilderFeatLevel) {
    if (pathbuilderFeatType === "Ancestry Feat") {
      return `ancestry-${pathbuilderFeatLevel}`;
    } else if (pathbuilderFeatType === "Class Feat") {
      return `class-${pathbuilderFeatLevel}`;
    } else if (pathbuilderFeatType === "Skill Feat") {
      return `skill-${pathbuilderFeatLevel}`;
    } else if (pathbuilderFeatType === "General Feat") {
      return `general-${pathbuilderFeatLevel}`;
    } else if (pathbuilderFeatType === "Background Feat") {
      return `skill-${pathbuilderFeatLevel}`;
    } else if (pathbuilderFeatType === "Archetype Feat") {
      return `archetype-${pathbuilderFeatLevel}`;
    } else if (pathbuilderFeatType === "Kineticist Feat") { // return as null for now
      return null;
    } else {
      return null;
    }
  }

  static getClassAdjustedSpecialNameLowerCase(name, className) {
    return `${name} (${className})`.toLowerCase();
  }

  static getDualClassAdjustedSpecialNameLowerCase(name, dualClassName) {
    return `${name} (${dualClassName})`.toLowerCase();
  }

  static getAncestryAdjustedSpecialNameLowerCase(name, ancestryName) {
    return `${name} (${ancestryName})`.toLowerCase();
  }

  static getHeritageAdjustedSpecialNameLowerCase(name, heritageName) {
    return `${name} (${heritageName})`.toLowerCase();
  }

  static getChampionType(alignment) {
    if (alignment == "LG") return "Paladin";
    else if (alignment == "CG") return "Liberator";
    else if (alignment == "NG") return "Redeemer";
    else if (alignment == "LE") return "Tyrant";
    else if (alignment == "CE") return "Antipaladin";
    else if (alignment == "NE") return "Desecrator";
    return "Unknown";
  }


}

;// CONCATENATED MODULE: ./src/app/CompendiumMatcher.js
/* eslint-disable no-await-in-loop */





class CompendiumMatcher {

  constructor({ type, mappings = null, indexFields = ["name", "type", "system.slug"] } = {}) {
    this.type = type;
    this.indexFields = indexFields;
    this.packs = {};

    const packMappings = mappings !== null
      ? mappings
      : src_utils.setting("USE_CUSTOM_COMPENDIUM_MAPPINGS")
        ? src_utils.setting("CUSTOM_COMPENDIUM_MAPPINGS")
        : constants.CORE_COMPENDIUM_MAPPINGS;
    packMappings[type].forEach((name) => {
      const compendium = game.packs.get(name);
      if (compendium) {
        this.packs[name] = compendium;
      }
    });

    this.indexes = {

    };

  }

  async loadCompendiums() {
    for (const [name, compendium] of Object.entries(this.packs)) {
      this.indexes[name] = await compendium.getIndex({ fields: this.indexFields });
    }
  }


  getFoundryFeatureName(pbName) {
    const match = this.FEAT_RENAME_MAP(pbName).find((map) => map.pbName == pbName);
    return match ?? { pbName, foundryName: pbName, details: undefined };
  }

  getNameMatch(pbName, foundryName) {
    for (const [packName, index] of Object.entries(this.indexes)) {
      const indexMatch = index.find((i) => i.name === foundryName)
        ?? index.find((i) => i.name === pbName);

      if (indexMatch) {
        src_logger.debug(`Found name only compendium document for ${pbName} (${foundryName}) in ${packName} with id ${indexMatch._id}`);
        return { i: indexMatch, pack: this.packs[packName] };
      }
    }
    return undefined;
  }

  getSlugMatch(pbName, foundryName) {
    for (const [packName, index] of Object.entries(this.indexes)) {
      src_logger.debug(`Checking for compendium documents for ${pbName} (${foundryName}) in ${packName}`, {
        pbName,
        foundryName,
        packName,
        // index,
        // foundrySlug: Seasoning.slug(foundryName),
        // pbSlug: Seasoning.slug(pbName),
        // foundryMatch: index.find((i) => (i.system.slug ?? Seasoning.slug(i.name)) === Seasoning.slug(foundryName)),
        // pbMatch: index.find((i) => (i.system.slug ?? Seasoning.slug(i.name)) === Seasoning.slug(pbName)),
        // pbSlugMatch: (null ?? Seasoning.slug("Phase Bolt (Psychic)")) === Seasoning.slug("Phase Bolt (Psychic)"),
      });
      const indexMatch = index.find((i) => (i.system.slug ?? Seasoning.slug(i.name)) === Seasoning.slug(foundryName))
        ?? index.find((i) => (i.system.slug ?? Seasoning.slug(i.name)) === Seasoning.slug(pbName));

      if (indexMatch) {
        src_logger.debug(`Found slug based compendium document for ${pbName} (${foundryName}) in ${packName} with id ${indexMatch._id}`);
        return { i: indexMatch, pack: this.packs[packName] };
      }
    }
    return undefined;
  }

  getMatch(pbName, foundryName, forceName = false) {

    if (forceName) {
      const nameOnlyMatch = this.getNameMatch(pbName, foundryName);
      if (nameOnlyMatch) return nameOnlyMatch;
    }

    const slugMatch = this.getSlugMatch(pbName, foundryName);
    if (slugMatch) return slugMatch;

    return undefined;
  }

  static checkForFilters(i, filters) {
    for (const [key, value] of Object.entries(filters)) {
      if (foundry.utils.getProperty(i, key) !== value) {
        return false;
      }
    }
    return true;
  }

  getNameMatchWithFilter(pbName, foundryName, filters = {}) {
    for (const [packName, index] of Object.entries(this.indexes)) {
      src_logger.debug(`Checking for compendium documents for ${pbName} (${foundryName}) in ${packName}`, {
        pbName,
        foundryName,
        filters,
        packName,
        // index,
      });
      const indexMatch = index.find((i) =>
        ((i.system.slug ?? Seasoning.slug(i.name)) === Seasoning.slug(foundryName))
          && CompendiumMatcher.checkForFilters(i, filters))
        ?? index.find((i) =>
          ((i.system.slug ?? Seasoning.slug(i.name)) === Seasoning.slug(pbName)
          && CompendiumMatcher.checkForFilters(i, filters))
        );

      if (indexMatch) {
        src_logger.debug(`Found compendium document for ${pbName} (${foundryName}) in ${packName} with id ${indexMatch._id}`);
        return { i: indexMatch, pack: this.packs[packName] };
      }
    }

    return undefined;
  }


}

;// CONCATENATED MODULE: ./src/app/CompendiumSelector.js



class CompendiumSelector extends FormApplication {
  constructor() {
    super();
    this.lookups = src_utils.setting("CUSTOM_COMPENDIUM_MAPPINGS");
    this.packs = game.packs
      .filter((p) => p.metadata.type === "Item")
      .map((p) => {
        return { id: p.metadata.id, label: `${p.metadata.label} (${p.metadata.packageName})` };
      });
    this.currentType = null;
    this.useCustomCompendiums = src_utils.setting("USE_CUSTOM_COMPENDIUM_MAPPINGS");
  }

  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      id: "pathmuncher-compendium-selector",
      template: `${constants.PATH}/templates/compendium-selector.hbs`,
      width: 722,
      height: 275,
      title: game.i18n.localize(`${constants.FLAG_NAME}.Dialogs.CompendiumSelector.Title`),
      resizable: true,
      classes: ['pathmuncher-compendium-selector'],
    });
  }

  getData() {
    const lookups = [];
    for (const key in this.lookups) {
      lookups.push({
        key,
        label: game.i18n.localize(`${constants.FLAG_NAME}.CompendiumGroups.${key}`),
      });
    }
    return {
      lookups,
      title: this.options.title,
      sourceItems: [],
      compendiumItems: [],
      useCustomCompendiums: this.useCustomCompendiums,
    };
  }

  async reset() {
    const defaults = constants.GET_DEFAULT_SETTINGS();
    this.lookups = defaults[constants.SETTINGS.CUSTOM_COMPENDIUM_MAPPINGS].default;
    await src_utils.updateSetting("CUSTOM_COMPENDIUM_MAPPINGS", this.lookups);
    this.currentType = null;
    this.render(true);
  }

  async enableCustomCompendiums() {
    this.useCustomCompendiums = !this.useCustomCompendiums;
    await src_utils.updateSetting("USE_CUSTOM_COMPENDIUM_MAPPINGS", this.useCustomCompendiums);
  }

  filterList(event) {
    const compendiumType = event.srcElement.value;
    const sourceList = document.getElementById("sourceList");
    const compendiumList = document.getElementById("compendiumList");

    const sourceOptions = this.packs.filter((p) => !this.lookups[compendiumType].includes(p.id));
    const compendiumOptions = this.packs.filter((p) => this.lookups[compendiumType].includes(p.id));

    sourceList.innerHTML = "";
    compendiumList.innerHTML = "";

    sourceOptions.forEach((option) => {
      const sourceListItem = document.createElement("option");
      sourceListItem.value = option.id;
      sourceListItem.appendChild(document.createTextNode(option.label));
      sourceList.appendChild(sourceListItem);
    });

    compendiumOptions.forEach((option) => {
      const compendiumListItem = document.createElement("option");
      compendiumListItem.value = option.id;
      compendiumListItem.appendChild(document.createTextNode(option.label));
      compendiumList.appendChild(compendiumListItem);
    });

    this.currentType = compendiumType;
  }

  async updateCompendiums() {
    const compendiumList = document.getElementById("compendiumList");
    const compendiumOptions = Array.from(compendiumList.options);
    const compendiumIds = compendiumOptions.map((option) => {
      return option.value;
    });

    this.lookups[this.currentType] = compendiumIds;

    src_utils.updateSetting("CUSTOM_COMPENDIUM_MAPPINGS", this.lookups);
  }

  async addCompendium() {
    const sourceList = document.getElementById("sourceList");
    const compendiumList = document.getElementById("compendiumList");
    const selectedOptions = Array.from(sourceList.selectedOptions);

    selectedOptions.forEach((option) => {
      compendiumList.appendChild(option);
    });

    await this.updateCompendiums();
  }

  async removeCompendium() {
    const sourceList = document.getElementById("sourceList");
    const compendiumList = document.getElementById("compendiumList");
    const selectedOptions = Array.from(compendiumList.selectedOptions);

    selectedOptions.forEach((option) => {
      sourceList.appendChild(option);
    });
    await this.updateCompendiums();
  }

  async moveUp() {
    const compendiumList = document.getElementById("compendiumList");
    const selectedOption = compendiumList.selectedOptions[0];

    if (selectedOption && selectedOption.previousElementSibling) {
      compendiumList.insertBefore(selectedOption, selectedOption.previousElementSibling);
    }
    await this.updateCompendiums();
  }

  async moveDown() {
    const compendiumList = document.getElementById("compendiumList");
    const selectedOption = compendiumList.selectedOptions[0];

    if (selectedOption && selectedOption.nextElementSibling) {
      compendiumList.insertBefore(selectedOption.nextElementSibling, selectedOption);
    }
    await this.updateCompendiums();
  }

  activateListeners(html) {
    super.activateListeners(html);

    document.getElementById("addButton").addEventListener("click", this.addCompendium.bind(this));
    document.getElementById("removeButton").addEventListener("click", this.removeCompendium.bind(this));
    document.getElementById("upButton").addEventListener("click", this.moveUp.bind(this));
    document.getElementById("downButton").addEventListener("click", this.moveDown.bind(this));
    document.getElementById("compSelector").addEventListener("change", this.filterList.bind(this));
    document.getElementById("resetButton").addEventListener("click", this.reset.bind(this));
    document.getElementById("enableCustomCompendiums").addEventListener("change", this.enableCustomCompendiums.bind(this));
  }
}

;// CONCATENATED MODULE: ./src/app/Pathmuncher.js
/* eslint-disable no-await-in-loop */
/* eslint-disable no-continue */








class Pathmuncher {
  FEAT_RENAME_MAP(name) {
    const dynamicItems = [
      { pbName: "Shining Oath", foundryName: `Shining Oath (${Seasoning.getChampionType(this.source.alignment)})` },
      { pbName: "Counterspell", foundryName: `Counterspell (${src_utils.capitalize(this.getClassSpellCastingType() ?? "")})` },
      { pbName: "Counterspell", foundryName: `Counterspell (${src_utils.capitalize(this.getClassSpellCastingType(true) ?? "")})` },
      { pbName: "Cantrip Expansion", foundryName: `Cantrip Expansion (${this.source.class})` },
      { pbName: "Cantrip Expansion", foundryName: `Cantrip Expansion (${this.source.dualClass})` },
      { pbName: "Cantrip Expansion", foundryName: `Cantrip Expansion (${src_utils.capitalize(this.getClassSpellCastingType() ?? "")} Caster)` },
      { pbName: "Cantrip Expansion", foundryName: `Cantrip Expansion (${src_utils.capitalize(this.getClassSpellCastingType(true) ?? "")} Caster)` },
    ];
    return Seasoning.FEAT_RENAME_MAP(name).concat(dynamicItems);
  }

  getFoundryFeatureName(pbName, isSpecial = false) {
    if (isSpecial) {
      const specialMatch = specialOnlyNameLookup(pbName);
      if (specialMatch) return specialMatch;
    }
    const match = this.FEAT_RENAME_MAP(pbName).find((map) => map.pbName == pbName);
    return match ?? { pbName, foundryName: pbName, details: undefined };
  }

  constructor(actor, { addFeats = true, addEquipment = true, addSpells = true, adjustBlendedSlots = true,
    addMoney = true, addLores = true, addWeapons = true, addArmor = true, addTreasure = true, addDeity = true,
    addName = true, addClass = true, addBackground = true, addHeritage = true, addAncestry = true,
    statusCallback = null } = {}
  ) {
    this.devMode = game.modules.get("pathmuncher").version === "999.0.0";
    this.actor = actor;
    // note not all these options do anything yet!
    this.options = {
      addTreasure,
      addMoney,
      addFeats,
      addSpells,
      adjustBlendedSlots,
      addEquipment,
      addLores,
      addWeapons,
      addArmor,
      addDeity,
      addName,
      addClass,
      addBackground,
      addHeritage,
      addAncestry,
    };
    this.source = null;
    this.parsed = {
      specials: [],
      feats: [],
      equipment: [],
      armor: [],
      weapons: [],
    };
    this.usedLocations = new Set();
    this.usedLocationsAlternateRules = new Set();
    this.autoAddedFeatureIds = new Set();
    this.autoAddedFeatureItems = {};
    this.promptRules = {};
    this.allFeatureRules = {};
    this.autoAddedFeatureRules = {};
    this.failedFeatureItems = {};
    this.subRuleDocuments = {};
    this.grantItemLookUp = {};
    this.autoFeats = [];
    this.keyAbility = null;
    this.boosts = {
      custom: false,
      class: {},
      background: {},
      ancestry: {},
    };
    this.size = "med";
    this.result = {
      character: {
        _id: this.actor.id,
        prototypeToken: {},
      },
      class: [],
      deity: [],
      heritage: [],
      ancestry: [],
      background: [],
      casters: [],
      spells: [],
      feats: [],
      weapons: [],
      armor: [],
      equipment: [],
      lores: [],
      money: [],
      treasure: [],
      adventurersPack: {
        item: null,
        contents: [
          { slug: "bedroll", qty: 1 },
          { slug: "chalk", qty: 10 },
          { slug: "flint-and-steel", qty: 1 },
          { slug: "rope", qty: 1 },
          { slug: "rations", qty: 14 },
          { slug: "torch", qty: 5 },
          { slug: "waterskin", qty: 1 },
        ],
      },
      focusPool: 0,
    };
    this.check = {};
    this.bad = [];
    this.statusCallback = statusCallback;
    this.compendiumMatchers = {};
    const compendiumMappings = src_utils.setting("USE_CUSTOM_COMPENDIUM_MAPPINGS")
      ? src_utils.setting("CUSTOM_COMPENDIUM_MAPPINGS")
      : constants.CORE_COMPENDIUM_MAPPINGS;
    for (const type of Object.keys(compendiumMappings)) {
      this.compendiumMatchers[type] = new CompendiumMatcher({ type });
    }

    this.immediateDiveAdd = src_utils.setting("USE_IMMEDIATE_DEEP_DIVE");
  }

  async #loadCompendiumMatchers() {
    for (const matcher of Object.values(this.compendiumMatchers)) {
      await matcher.loadCompendiums();
    }
  }

  #statusUpdate(total, count, type, prefixLabel) {
    if (this.statusCallback) this.statusCallback(total, count, type, prefixLabel);
  }

  async fetchPathbuilder(pathbuilderId) {
    if (!pathbuilderId) {
      const flags = src_utils.getFlags(this.actor);
      pathbuilderId = flags?.pathbuilderId;
    }
    if (pathbuilderId) {
      const jsonData = await foundry.utils.fetchJsonWithTimeout(
        `https://www.pathbuilder2e.com/json.php?id=${pathbuilderId}`
      );
      if (jsonData.success) {
        this.source = jsonData.build;
      } else {
        ui.notifications.warn(
          game.i18n.format(`${constants.FLAG_NAME}.Dialogs.Pathmuncher.FetchFailed`, { pathbuilderId })
        );
      }
    } else {
      ui.notifications.error(game.i18n.localize(`${constants.FLAG_NAME}.Dialogs.Pathmuncher.NoId`));
    }
  }

  #generateFoundryFeatLocation(document, feature) {
    if (feature.type && feature.level) {
      // const freeArchetypeVariant = game.settings.get("pf2e", "freeArchetypeVariant");
      const location = Seasoning.getFoundryFeatLocation(feature.type, feature.level);
      if (location && !this.usedLocations.has(location)) {
        document.system.location = location;
        this.usedLocations.add(location);
      } else if (location && this.usedLocations.has(location)) {
        src_logger.debug("Variant feat location", { ancestryParagonVariant: src_utils.allowAncestryParagon(), location, feature });
        // eslint-disable-next-line max-depth
        if (src_utils.allowAncestryParagon() && feature.type === "Ancestry Feat") {
          document.system.location = "ancestry-bonus";
          this.usedLocationsAlternateRules.add(location);
        } else if (src_utils.allowDualClasses() && feature.type === "Class Feat") {
          document.system.location = `dualclass-${feature.level}`;
          this.usedLocationsAlternateRules.add(location);
        }
      }
    }
  }

  #processSpecialData(name) {
    if (name.includes("Domain: ")) {
      const domainName = name.split(" ")[1];
      this.parsed.feats.push({ name: "Deity's Domain", extra: domainName });
      return true;
    } else {
      return false;
    }
  }

  #getContainerData(key) {
    return {
      id: key,
      containerName: this.source.equipmentContainers[key].containerName,
      bagOfHolding: this.source.equipmentContainers[key].bagOfHolding,
      backpack: this.source.equipmentContainers[key].backpack,
    };
  }

  #nameMapSourceEquipment(e) {
    const name = Seasoning.getFoundryEquipmentName(e[0]);
    const containerKey = Object.keys(this.source.equipmentContainers)
      .find((key) => this.source.equipmentContainers[key].containerName === name);

    const container = containerKey ? this.#getContainerData(containerKey) : null;
    const foundryId = foundry.utils.randomID();

    if (container) {
      this.source.equipmentContainers[containerKey].foundryId = foundryId;
    }

    const item = {
      foundryName: name,
      pbName: e[0],
      originalName: e[0],
      qty: e[1],
      added: false,
      addedId: null,
      addedAutoId: null,
      inContainer: e[2] !== "Invested" ? e[2] : null,
      container,
      foundryId,
      invested: e[2] === "Invested",
      sourceType: "equipment",
    };
    this.parsed.equipment.push(item);
  }

  #nameMapSourceEquipmentAddHandwraps(e) {
    const name = Seasoning.getFoundryEquipmentName(e[0]);
    const potencyMatch = e[0].match(/\(\+(\d)[\s)]/i);
    const potency = potencyMatch ? parseInt(potencyMatch[1]) : 0;
    const strikingMatch = e[0].match(/\d( \w*)? (Striking)/i);
    const striking = strikingMatch
      ? Seasoning.slugD(`${(strikingMatch[1] ?? "").trim()}${(strikingMatch[2] ?? "").trim()}`) // `${(strikingMatch[2] ?? "").toLowerCase().trim()}${(strikingMatch[1] ?? "").trim()}`.trim()
      : "";
    const mockE = {
      name: e[0],
      qty: 1,
      prof: "unarmed",
      pot: Number.isInteger(potency) ? potency : 0,
      str: striking,
      mat: null,
      display: e[0],
      runes: [],
      damageType: "B",
      increasedDice: false
    };
    const weapon = foundry.utils.mergeObject({
      foundryName: name,
      pbName: mockE.name,
      originalName: mockE.name,
      added: false,
      addedId: null,
      addedAutoId: null,
      sourceType: "weapons",
    }, mockE);
    this.parsed.weapons.push(weapon);
  }

  #nameMap() {
    let iRank = 0;
    let featRank = 0;
    src_logger.debug("Starting Equipment Rename");
    this.source.equipment
      .filter((e) => e[0] && e[0] !== "undefined")
      .forEach((e) => {
        if (e[0].startsWith("Handwraps of Mighty Blows")) {
          this.#nameMapSourceEquipmentAddHandwraps(e);
        } else {
          this.#nameMapSourceEquipment(e);
        }
      });
    this.source.armor
      .filter((e) => e && e !== "undefined")
      .forEach((e) => {
        const name = Seasoning.getFoundryEquipmentName(e.name);
        const item = foundry.utils.mergeObject({
          foundryName: name,
          pbName: e.name,
          originalName: e.name,
          added: false,
          addedId: null,
          addedAutoId: null,
          sourceType: "armor",
        }, e);
        this.parsed.armor.push(item);
        // work around for now
        if (e.name.startsWith("Inventor ")) {
          this.parsed.feats.push({
            name,
            extra: "",
            added: false,
            addedId: null,
            addedAutoId: null,
            type: "Awarded Feat",
            level: 1,
            originalName: e.name,
            rank: 0,
            sourceType: "armor",
            featChoiceRef: null,
            hasChildren: null,
            isChild: null,
            isStandard: null,
            parentFeatChoiceRef: null,
          });
          featRank++;
        }
      });
    this.source.weapons
      .filter((e) => e && e !== "undefined")
      .forEach((e) => {
        const name = Seasoning.getFoundryEquipmentName(e.name);
        const item = foundry.utils.mergeObject({
          foundryName: name,
          pbName: e.name,
          originalName: e.name,
          added: false,
          addedId: null,
          addedAutoId: null,
          sourceType: "weapons",
        }, e);
        // for now assume first weapon is the weapon innovation
        if (e.isInventor) {
          this.parsed.feats.push({
            name,
            extra: "",
            added: false,
            addedId: null,
            addedAutoId: null,
            type: "Awarded Feat",
            level: 1,
            originalName: e.name,
            rank: 0,
            sourceType: "weapons",
            featChoiceRef: null,
            hasChildren: null,
            isChild: null,
            isStandard: null,
            parentFeatChoiceRef: null,
          });
          featRank++;
        } else {
          this.parsed.weapons.push(item);
        }
      });
    src_logger.debug("Finished Equipment Rename");

    src_logger.debug("Starting Special Rename");
    [].concat(this.source.specials, SPECIAL_NAME_ADDITIONS(this.source.specials))
      .filter((special) =>
        special
        && special !== "undefined"
        && special !== "Not Selected"
        && special !== this.source.heritage
      )
      .forEach((special) => {
        const match = this.getFoundryFeatureName(special); // , true);
        if (!this.#processSpecialData(match.foundryName) && !Seasoning.IGNORED_SPECIALS().includes(match.foundryName)) {
          this.parsed.specials.push({
            name: match.foundryName,
            foundryName: match.foundryName,
            foundryValue: match.foundryValue,
            originalName: special,
            added: false,
            addedId: null,
            addedAutoId: null,
            rank: iRank,
            sourceType: "specials"
          });
          iRank++;
        }
      });
    src_logger.debug("Finished Special Rename");


    src_logger.debug("Starting Feat Rename");
    this.source.feats
      .filter((feat) =>
        feat[0]
        && feat[0] !== "undefined"
        && feat[0] !== "Not Selected"
        // && feat[0] !== this.source.heritage
      )
      .forEach((feat) => {
        const name = this.getFoundryFeatureName(feat[0]).foundryName;
        const data = {
          name,
          extra: feat[1],
          added: feat[0] === this.source.heritage,
          addedId: null,
          addedAutoId: null,
          type: feat[2],
          level: feat[3],
          originalName: feat[0],
          rank: featRank,
          sourceType: "feats",
        };
        if (feat.length >= 7) {
          data.featChoiceRef = feat[4];
          data.hasChildren = feat[5] === "parentChoice";
          data.isChild = feat[5] === "childChoice";
          data.isStandard = feat[5] === "standardChoice";
          data.parentFeatChoiceRef = feat[6];
          const parentFeatMatch = this.source.feats.find((f) =>
            feat[5] === "childChoice"
            && (data.featChoiceRef.toLowerCase().startsWith(f[0].toLowerCase())
            || (data.parentFeatChoiceRef
              && data.featChoiceRef.replace(data.parentFeatChoiceRef, "").trim().toLowerCase().startsWith(f[0].toLowerCase()))
            )
          );
          data.nameHint = parentFeatMatch?.[0] ? this.getFoundryFeatureName(parentFeatMatch?.[0]).foundryName : undefined;
        } else {
          // probably an awarded feat
          data.featChoiceRef = null;
          data.hasChildren = null;
          data.isChild = null;
          data.isStandard = null;
          data.parentFeatChoiceRef = null;
        }
        this.parsed.feats.push(data);
        featRank++;
      });
    src_logger.debug("Finished Feat Rename");

    src_logger.debug("Checking for Inventions");
    (this.source.inventorMods ?? []).forEach((mod) => {
      const match = this.getFoundryFeatureName(mod.selection);
      if (!Seasoning.IGNORED_SPECIALS().includes(match.foundryName)) {
        this.parsed.specials.push({
          name: match.foundryName,
          foundryName: match.foundryName,
          foundryValue: match.foundryValue,
          originalName: mod.selection,
          isChild: true,
          added: false,
          addedId: null,
          addedAutoId: null,
          rank: iRank,
          sourceType: "inventorMods",
          parentFeatChoiceRef: mod.ref,
          nameHint: this.getFoundryFeatureName(mod.ref).foundryName
        });
        iRank++;
      }
    });
    src_logger.debug("Finished Inventions");
    src_logger.debug("Name remapping results", {
      parsed: this.parsed,
    });
  }

  #fixUps() {
    if (this.source.ancestry === "Dwarf" && !this.parsed.feats.some((f) => f.name === "Clan Pistol")) {
      const clanDagger = {
        name: "Clan Dagger",
        originalName: "Clan Dagger",
        added: false,
        addedId: null,
        addedAutoId: null,
        isChoice: true,
        rank: 0,
        sourceType: "specials",
      };
      this.parsed.specials.push(clanDagger);
    }

    const match = this.source.background.match(/(Magical Experiment) \((.*)\)$/);
    if (match) {
      this.parsed.specials.push({
        name: match[2],
        originalName: `${this.source.background}`,
        added: false,
        addedId: null,
        addedAutoId: null,
        isChoice: true,
        rank: 0,
        sourceType: "specials",
      });
      this.source.background = match[1];
    }
  }

  async #prepare() {
    await this.#loadCompendiumMatchers();
    this.#nameMap();
    this.#fixUps();
  }

  async #processSenses() {
    const senses = [];
    this.source.specials.forEach((special) => {
      if (special === "Low-Light Vision") {
        senses.push({ type: "lowLightVision" });
      } else if (special === "Darkvision") {
        senses.push({ type: "darkvision" });
      } else if (special === "Scent") {
        senses.push({ type: "scent" });
      }
    });
    foundry.utils.setProperty(this.result.character, "system.traits.senses", senses);
  }

  // eslint-disable-next-line no-unused-vars
  #addDualClass(_klass) {
    if (!src_utils.allowDualClasses()) {
      if (this.source.dualClass && this.source.dualClass !== "") {
        src_logger.warn(`Imported character is dual class. Pathmuncher does not support dual class characters, please check the system macros`, {
          class: this.source.class,
          dualClass: this.source.dualClass,
        });
        ui.notifications.warn(`Imported character is dual class. Pathmuncher does not support dual class characters, please check the system macros`);
      }
      return;
    }
    if (!this.source.dualClass || this.source.dualClass === "") {
      src_logger.warn(`Imported character not dual class but system is configured for dual class`, {
        class: this.source.class,
      });
      ui.notifications.warn(`Imported character not dual class but system is configured for dual class`);
      return;
    }
    src_logger.info("Not processing dual class");
  }

  // eslint-disable-next-line class-methods-use-this
  async #processGenericCompendiumLookup(type, name, target, levelCap = 20) {
    src_logger.debug(`Checking for compendium documents for ${name} (${target}) in compendiums for ${type}`);
    const foundryName = this.getFoundryFeatureName(name).foundryName;
    const indexMatch = this.compendiumMatchers[type].getMatch(name, foundryName);

    if (indexMatch) {
      const doc = await indexMatch.pack.getDocument(indexMatch.i._id);
      const itemData = doc.toObject();
      if (name.includes("(")) {
        const extra = name.split(")")[0].split("(").pop();
        this.parsed.specials.push({ name: doc.name, originalName: name, added: true, extra, rank: 99 });
      }
      if (target === "class") {
        itemData.system.keyAbility.selected = this.keyAbility;
        this.#addDualClass(itemData);
      }
      itemData._id = foundry.utils.randomID();
      // this.#generateGrantItemData(itemData);
      this.result[target].push(itemData);
      await this.#addGrantedItems(itemData, { applyFeatLocation: target !== "class", levelCap });
      return true;
    } else {
      this.bad.push({ pbName: name, type: target, details: { name, levelCap } });
      return false;
    }
  }

  async #processGrantedLookupItemsAtLevel(target, level) {
    for (const document of this.result[target]) {
      await this.#processGrantItemsAtLevel(document, level, { applyFeatLocation: target !== "class", levelCap: level });
    }
  }

  // for grants, e.g. ont he champion "Deity and Cause" where there are choices.
  // how do we determine and match these? should we?
  // "pf2e": {
  //   "itemGrants": {
  //     "adanye": {
  //       "id": "4GHcp3iaREfj2ZgN",
  //       "onDelete": "detach"
  //     },
  //     "paladin": {
  //       "id": "HGWkTEatliHgDaEu",
  //       "onDelete": "detach"
  //     }
  //   }
  // }

  // "Paladin" (granted by deity and casue)
  // "pf2e": {
  //   "grantedBy": {
  //     "id": "xnrkrJa2YE1UOAVy",
  //     "onDelete": "cascade"
  //   },
  //   "itemGrants": {
  //     "retributiveStrike": {
  //       "id": "WVHbj9LljCTovdsv",
  //       "onDelete": "detach"
  //     }
  //   }
  // }

  // retributive strike
  //   "pf2e": {
  //     "grantedBy": {
  //       "id": "HGWkTEatliHgDaEu",
  //       "onDelete": "cascade"
  //     }

  #slugNameMatch(f, slug) {
    return slug === Seasoning.slug(f.name)
    || slug === Seasoning.slug(f.foundryValue)
    || slug === Seasoning.slug(Seasoning.getClassAdjustedSpecialNameLowerCase(f.name, this.source.class))
    || slug === Seasoning.slug(Seasoning.getAncestryAdjustedSpecialNameLowerCase(f.name, this.source.ancestry))
    || slug === Seasoning.slug(Seasoning.getHeritageAdjustedSpecialNameLowerCase(f.name, this.source.heritage))
    || slug === Seasoning.slug(f.originalName)
    || slug === Seasoning.slug(Seasoning.getClassAdjustedSpecialNameLowerCase(f.originalName, this.source.class))
    || slug
      === Seasoning.slug(Seasoning.getAncestryAdjustedSpecialNameLowerCase(f.originalName, this.source.ancestry))
    || slug
      === Seasoning.slug(Seasoning.getHeritageAdjustedSpecialNameLowerCase(f.originalName, this.source.heritage))
    || (src_utils.allowDualClasses()
      && (slug
        === Seasoning.slug(Seasoning.getDualClassAdjustedSpecialNameLowerCase(f.name, this.source.dualClass))
        || slug
          === Seasoning.slug(
            Seasoning.getDualClassAdjustedSpecialNameLowerCase(f.originalName, this.source.dualClass)
          )));
  }

  #parsedFeatureMatch(type, document, slug, { ignoreAdded, isChoiceMatch = false, featType = null } = {}) {
    if (type === "feats" && document) {
      const hintMatch = this.parsed[type].find((f) =>
        (!ignoreAdded || (ignoreAdded && !f.added))
        && f.isChild
        && f.nameHint
        && Seasoning.slug(document.name) === Seasoning.slug(f.nameHint)
        && this.#slugNameMatch(f, slug)
      );
      if (hintMatch) {
        hintMatch.rank = -10;
        return hintMatch;
      }
    }
    // console.warn(`Trying to find ${slug} in ${type}, ignoreAdded? ${ignoreAdded}`, this.parsed[type]);
    const parsedMatch = this.parsed[type].find((f) =>
      (!ignoreAdded || (ignoreAdded && !f.added))
        && (
          featType === null
          || f.type === featType
        )
        && !f.isChoice
        && this.#slugNameMatch(f, slug)
    );
    if (parsedMatch || !document) return parsedMatch;

    const extraMatch = this.parsed[type].find((f) =>
      // (!ignoreAdded || (ignoreAdded && !f.added))
      f.extra
      && f.added
      && !f.isChoice
      && Seasoning.slug(f.name) === (document.system.slug ?? Seasoning.slug(document.name))
      && Seasoning.slug(f.extra) === slug
    );
    if (extraMatch) return extraMatch;

    if (isChoiceMatch) {
      // console.warn("Specials check", {
      //   document,
      //   type,
      //   slug,
      // });
      const choiceMatch = this.parsed[type].find((f) => f.isChoice && !f.added && Seasoning.slug(f.name) === slug);
      return choiceMatch;
    }
    return undefined;
  }

  #generatedResultMatch(type, slug) {
    const featMatch = this.result[type].find((f) => slug === f.system.slug);
    return featMatch;
  }

  #findAllFeatureMatch(document, slug, { ignoreAdded, isChoiceMatch = false, featType = null } = {}) {
    // console.warn("Finding all feature matches", { document, slug, ignoreAdded, isChoiceMatch, featType });
    const featMatch = this.#parsedFeatureMatch("feats", document, slug, { ignoreAdded, featType });
    if (featMatch) return featMatch;
    const specialMatch = this.#parsedFeatureMatch("specials", document, slug, { ignoreAdded, isChoiceMatch });
    if (specialMatch) return specialMatch;
    const deityMatch = this.#generatedResultMatch("deity", slug);
    return deityMatch;
    // const classMatch = this.#generatedResultMatch("class", slug);
    // return classMatch;
    // const equipmentMatch = this.#generatedResultMatch("equipment", slug);
    // return equipmentMatch;
  }

  #createGrantedItem(document, parent, { addGrantFlag = false, itemGrantName = null, originType = null, applyFeatLocation = false } = {}) {
    src_logger.debug(`Adding granted item flags to ${document.name} (parent ${parent.name}) with originType "${originType}", and will applyFeatLocation? ${applyFeatLocation}`, {
      document,
      parent,
      itemGrantName,
      originType,
      applyFeatLocation,
    });
    if (addGrantFlag) {
      const camelCase = Seasoning.slugD(itemGrantName ?? document.system.slug ?? document.name);
      foundry.utils.setProperty(parent, `flags.pf2e.itemGrants.${camelCase}`, { id: document._id, onDelete: "detach" });
      foundry.utils.setProperty(document, "flags.pf2e.grantedBy", { id: parent._id, onDelete: "cascade" });

      src_logger.debug(`${parent.name} has granted item ${document.name} (${camelCase})`, {
        parent,
        itemGrantName,
        camelCase,
        flag: foundry.utils.getProperty(parent, `flags.pf2e.itemGrants.${camelCase}`),
      });
    }
    this.autoFeats.push(document);
    let resultType = "feats";
    switch (document.type) {
      case "armor":
        resultType = "armor";
        break;
      case "weapon":
        resultType = "weapons";
        break;
      // no default
    }

    this.result[resultType].push(document);
    const matchOptions = { ignoreAdded: true, featType: originType };
    const featureMatch
      = this.#findAllFeatureMatch(document, document.system.slug ?? Seasoning.slug(document.name), matchOptions)
      ?? (document.name.includes("(")
        ? this.#findAllFeatureMatch(document, Seasoning.slug(document.name.split("(")[0].trim()), matchOptions)
        : undefined);

    if (featureMatch) {
      src_logger.debug(`Found feature match for ${document.name}`, { featureMatch });
      const existingMatch = false;
      // featureMatch.sourceType
      //   ? this.parsed[featureMatch.sourceType].some((f) => f.addedId === document._id)
      //   : false;
      if (this.devMode && existingMatch) {
        src_logger.warn(`create Granted Item Existing match for ${document.name}`, { featureMatch, existingMatch, document });
      }
      // console.warn(`Match for ${document.name} createGrantedItem`, { featureMatch, existingMatch, document });
      if (foundry.utils.hasProperty(featureMatch, "added") && !existingMatch) {
        featureMatch.added = true;
        featureMatch.addedId = document._id;
        if (applyFeatLocation) this.#generateFoundryFeatLocation(document, featureMatch);
      }

      return;
    }
    if (document.type !== "action")
      src_logger.warn(
        `Unable to find parsed feature match for granted feature ${document.name}. This might not be an issue, but might indicate feature duplication.`,
        { document, parent }
      );
  }


  static #getLowestChoiceRank(choices) {
    return choices.reduce((p, c) => {
      return p.rank > c.rank ? c : p;
    });
  }

  async #featureChoiceMatch(document, choices, ignoreAdded, adjustName, choiceHint = null) {
    const matches = [];
    for (const choice of choices) {
      const doc = adjustName ? game.i18n.localize(choice.label) : await fromUuid(choice.value);
      if (!doc) continue;
      const slug = adjustName
        ? Seasoning.slug(doc)
        : doc.system.slug === null
          ? Seasoning.slug(doc.name)
          : doc.system.slug;
      const featMatch = this.#findAllFeatureMatch(document, slug, { ignoreAdded, isChoiceMatch: false });
      if (featMatch) {
        matches.push({
          slug,
          rank: featMatch.rank,
          choice,
          featMatch,
        });
      }
    }
    if (matches.length > 0) {
      if (choiceHint) {
        const hintMatch = matches.find((m) => m.slug === Seasoning.slug(choiceHint));
        if (hintMatch) return hintMatch;
      }
      if (this.devMode) src_logger.warn(`MATCHES`, { matches, choiceHint });
      const match = Pathmuncher.#getLowestChoiceRank(matches);
      const featMatch = this.#findAllFeatureMatch(document, match.slug, { ignoreAdded });
      const existingMatch = false;
      // featMatch.sourceType
      //   ? this.parsed[featMatch.sourceType].some((f) => f.addedId === document._id)
      //   : false;
      if (this.devMode && existingMatch) {
        src_logger.warn(`Feature Choice Existing match for ${document.name}`, { featMatch, existingMatch, document });
      }
      // console.warn(`Match for ${document.name} featureChoiceMatch`, { match, featMatch, existingMatch, document });
      if (adjustName && foundry.utils.hasProperty(featMatch, "added") && !existingMatch) {
        featMatch.added = true;
        featMatch.addedId = document._id;
      }
      src_logger.debug("Choices evaluated", { choices, document, featMatch, match, matches, choiceHint });
      return match.choice;
    } else {
      return undefined;
    }
  }

  async #featureChoiceMatchNoUUID(document, choices, cleansedChoiceSet) {
    const matches = [];
    for (const choice of choices) {
      const featMatch = this.#findAllFeatureMatch(document, choice.value, { ignoreAdded: true, isChoiceMatch: true });
      if (featMatch) {
        matches.push({
          rank: featMatch.rank,
          choice,
        });
      }
    }
    if (matches.length > 0) {
      const match = Pathmuncher.#getLowestChoiceRank(matches);
      const featMatch = this.#findAllFeatureMatch(document, match.choice.value, { ignoreAdded: true, isChoiceMatch: true });

      const existingMatch = false;
      // featMatch.sourceType
      //   ? this.parsed[featMatch.sourceType].some((f) => f.addedId === document._id)
      //   : false;

      if (this.devMode && existingMatch) {
        src_logger.warn(`NoUUID Existing match for ${document.name}`, { featMatch, existingMatch, document });
      }
      // console.warn(`Match for ${document.name} featureChoiceMatchNoUUID`, { match, featMatch, existingMatch, document });
      if (featMatch && !existingMatch) {
        featMatch.added = true;
        featMatch.addedId = document._id;
        match.choice.nouuid = true;
      }
      src_logger.debug("No UUID Choices evaluated", { choices, cleansedChoiceSet, document, featMatch, match, matches });
      return match.choice;
    } else {
      return undefined;
    }
  }

  static getFlag(document, ruleSet) {
    return typeof ruleSet.flag === "string" && ruleSet.flag.length > 0
      ? ruleSet.flag.replace(/[^-a-z0-9]/gi, "")
      : Seasoning.slugD(document.system.slug ?? document.system.name ?? document.name);
  }

  async #evaluateChoices(document, choiceSet, choiceHint, processedRules) {
    src_logger.debug(`Evaluating choices for ${document.name}`, { document, choiceSet, choiceHint });
    const tempActor = await this.#generateTempActor({
      documents: [document],
      includePassedDocumentsRules: false,
      // includeGrants: false,
      // includePassedDocumentsRules: true,
      includeGrants: false,
      includeFlagsOnly: true,
      processedRules,
    });

    const cleansedChoiceSet = foundry.utils.deepClone(choiceSet);
    try {
      const item = tempActor.getEmbeddedDocument("Item", document._id);
      const choiceSetRules = new game.pf2e.RuleElements.all.ChoiceSet(cleansedChoiceSet, { parent: item });
      const rollOptions = [tempActor.getRollOptions(), item.getRollOptions("item")].flat();
      const choices = await choiceSetRules.inflateChoices(rollOptions, []);

      src_logger.debug("Starting choice evaluation", {
        document,
        choiceSet,
        item,
        choiceSetRules,
        rollOptions,
        choices,
        this: this,
      });

      if (cleansedChoiceSet.choices?.query) {
        const nonFilteredChoices = await choiceSetRules.inflateChoices(rollOptions, [item]);
        const queryResults = await choiceSetRules.queryCompendium(cleansedChoiceSet.choices, rollOptions, [item]);
        src_logger.debug("Query Result", { queryResults, nonFilteredChoices });
      }

      src_logger.debug("Evaluating choiceset", cleansedChoiceSet);
      const choiceMatch = await this.#featureChoiceMatch(document, choices, true, !!cleansedChoiceSet.adjustName, choiceHint);
      src_logger.debug("choiceMatch result", choiceMatch);
      if (choiceMatch) {
        choiceMatch.choiceQueryResults = foundry.utils.deepClone(choices);
        return choiceMatch;
      }

      if (typeof cleansedChoiceSet.choices === "string" || Array.isArray(choices)) {
        const featureMatch = await this.#featureChoiceMatchNoUUID(document, choices, cleansedChoiceSet);
        if (featureMatch) {
          return featureMatch;
        }
      }

      let tempSet = foundry.utils.deepClone(choiceSet);
      src_logger.debug(`Starting dynamic selection for ${document.name}`, { document, choiceSet, tempSet, Pathmuncher: this });
      await choiceSetRules.preCreate({ itemSource: item, ruleSource: tempSet, pendingItems: [item], tempItems: [] });
      // console.warn("chociesetdata", {
      //   choiceSetRules,
      //   selection: choiceSetRules.selection,
      //   choiceSet: foundry.utils.deepClone(choiceSet),
      //   tempSet: foundry.utils.deepClone(tempSet),
      // });
      if (tempSet.selection) {
        const lookedUpChoice = choices.find((c) => c.value === tempSet.selection);
        src_logger.debug("lookedUpChoice", lookedUpChoice);
        if (lookedUpChoice) lookedUpChoice.choiceQueryResults = foundry.utils.deepClone(choices);
        // set some common lookups here, e.g. deities are often not set!
        if (lookedUpChoice && cleansedChoiceSet.flag === "deity") {
          if (lookedUpChoice.label && lookedUpChoice.label !== "") {
            foundry.utils.setProperty(this.result.character, "system.details.deity.value", lookedUpChoice.label);
            await this.#processGenericCompendiumLookup("deities", lookedUpChoice.label, "deity");
            const camelCase = Seasoning.slugD(this.result.deity[0].system.slug);
            foundry.utils.setProperty(document, `flags.pf2e.itemGrants.${camelCase}`, {
              id: this.result.deity[0]._id,
              onDelete: "detach",
            });
            foundry.utils.setProperty(this.result.deity[0], "flags.pf2e.grantedBy", { id: document._id, onDelete: "cascade" });
            this.autoAddedFeatureIds.add(`${lookedUpChoice.value.split(".").pop()}deity`);
          }
        }
        return lookedUpChoice;
      }
    } catch (err) {
      src_logger.error("Whoa! Something went major bad wrong during choice evaluation", {
        err,
        tempActor: tempActor.toObject(),
        document: foundry.utils.duplicate(document),
        choiceSet: foundry.utils.duplicate(cleansedChoiceSet),
      });
      throw err;
    } finally {
      await Actor.deleteDocuments([tempActor._id]);
    }

    src_logger.debug("Evaluate Choices failed", { choiceSet: cleansedChoiceSet, tempActor, document });
    return undefined;
  }

  async #resolveInjectedUuid(document, ruleEntry, processedRules = []) {
    const tempActor = await this.#generateTempActor({
      documents: [document],
      // includePassedDocumentsRules: true,
      // includeGrants: true,
      // includeFlagsOnly: true,
      processedRules,
    });
    const cleansedRuleEntry = foundry.utils.deepClone(ruleEntry);
    try {
      const item = tempActor.getEmbeddedDocument("Item", document._id);
      // console.warn("creating grant item");
      const grantItemRule = new game.pf2e.RuleElements.all.GrantItem(cleansedRuleEntry, { parent: item });
      // console.warn("Begining uuid resovle");
      const uuid = grantItemRule.resolveInjectedProperties(grantItemRule.uuid, { warn: false });

      const tempItems = [];
      const context = { parent: tempActor, render: false };
      await grantItemRule.preCreate({
        itemSource: item,
        ruleSource: cleansedRuleEntry,
        pendingItems: [item],
        tempItems,
        context,
        reevaluation: true,
      });

      src_logger.debug("uuid selection", {
        document,
        choiceSet: ruleEntry,
        item,
        grantItemRule,
        uuid,
        tempItems,
      });

      if (uuid || tempItems.length > 0) {
        return { uuid, grantObject: tempItems[0] };
      }
    } catch (err) {
      src_logger.error("Whoa! Something went major bad wrong during uuid evaluation", {
        err,
        tempActor: tempActor.toObject(),
        document: foundry.utils.duplicate(document),
        ruleEntry: foundry.utils.duplicate(cleansedRuleEntry),
      });
      throw err;
    } finally {
      await Actor.deleteDocuments([tempActor._id]);
    }

    src_logger.debug("Evaluate UUID failed", { choiceSet: cleansedRuleEntry, tempActor, document });
    return undefined;
  }

  async #checkRule(document, rule, otherDocuments = []) {
    src_logger.debug("Checking rule", { document, rule, otherDocuments });
    const tempActor = await this.#generateTempActor({
      documents: [document],
      includePassedDocumentsRules: true,
      // includeGrants: false,
      // includeFlagsOnly: true,
      otherDocs: otherDocuments,
    });
    const cleansedRule = foundry.utils.deepClone(rule);
    try {
      const item = tempActor.getEmbeddedDocument("Item", document._id);
      const ruleElement = cleansedRule.key === "ChoiceSet"
        ? new game.pf2e.RuleElements.all.ChoiceSet(cleansedRule, { parent: item })
        : new game.pf2e.RuleElements.all.GrantItem(cleansedRule, { parent: item });
      const rollOptions = [tempActor.getRollOptions(), item.getRollOptions("item")].flat();

      if (rule.predicate) {
        const predicate = ruleElement.resolveInjectedProperties(ruleElement.predicate);
        if (!predicate.test(rollOptions)) return false;
      }

      const choices = cleansedRule.key === "ChoiceSet"
        ? await ruleElement.inflateChoices(rollOptions, [item])
        : [ruleElement.resolveValue()];

      const isGood = cleansedRule.key === "ChoiceSet"
        ? (await this.#featureChoiceMatch(document, choices, false)) !== undefined
        : ruleElement.test(rollOptions);

      src_logger.debug("Checking rule", {
        tempActor,
        cleansedRule,
        item,
        ruleElement,
        rollOptions,
        choices,
        isGood,
      });
      return isGood;
    } catch (err) {
      src_logger.error("Something has gone most wrong during rule checking", {
        document,
        rule: cleansedRule,
        tempActor,
      });
      throw err;
    } finally {
      await Actor.deleteDocuments([tempActor._id]);
    }
  }

  async #checkRulePredicate(document, rule, processedRules) {
    const tempActor = await this.#generateTempActor({
      documents: [document],
      includePassedDocumentsRules: true,
      // includeGrants: false,
      // includeFlagsOnly: true,
      processedRules,
    });
    const cleansedRule = foundry.utils.deepClone(rule);
    try {
      const item = tempActor.getEmbeddedDocument("Item", document._id);
      const ruleElement = cleansedRule.key === "ChoiceSet"
        ? new game.pf2e.RuleElements.all.ChoiceSet(cleansedRule, { parent: item })
        : new game.pf2e.RuleElements.all.GrantItem(cleansedRule, { parent: item });
      const rollOptions = [tempActor.getRollOptions(), item.getRollOptions("item")].flat();

      if (rule.predicate) {
        const predicate = ruleElement.resolveInjectedProperties(ruleElement.predicate);
        return predicate.test(rollOptions);
      } else {
        return true;
      }
    } catch (err) {
      src_logger.error("Something has gone most wrong during rule predicate checking", {
        document,
        rule: cleansedRule,
        tempActor,
      });
      throw err;
    } finally {
      await Actor.deleteDocuments([tempActor._id]);
    }
  }

  static adjustDocumentName(featureName, label) {
    const localLabel = game.i18n.localize(label);
    if (featureName.trim().toLowerCase() === localLabel.trim().toLowerCase()) return featureName;
    const name = `${featureName} (${localLabel})`;
    const pattern = (() => {
      const escaped = RegExp.escape(localLabel);
      return new RegExp(`\\(${escaped}\\) \\(${escaped}\\)$`);
    })();
    return name.replace(pattern, `(${localLabel})`);
  }

  // eslint-disable-next-line complexity, no-unused-vars
  async #addGrantedRules(document, originType = null, choiceHint = null) {
    if (document.system.rules.length === 0) return;
    src_logger.debug(`addGrantedRules for ${document.name}`, foundry.utils.duplicate(document));

    if (
      foundry.utils.hasProperty(document, "system.level.value")
      && document.system.level.value > foundry.utils.getProperty(this.result.character, "system.details.level.value")
    ) {
      return;
    }

    const rulesToKeep = [];
    this.allFeatureRules[document._id] = foundry.utils.deepClone(document.system.rules);
    this.autoAddedFeatureRules[document._id] = [];
    this.promptRules[document._id] = [];
    let featureRenamed = false;

    for (const ruleEntry of document.system.rules) {
      src_logger.debug(`Ping ${document.name} rule key: ${ruleEntry.key}`, ruleEntry);
      if (!["ChoiceSet", "GrantItem"].includes(ruleEntry.key)) {
        // size work around due to Pathbuilder not always adding the right size to json
        if (ruleEntry.key === "CreatureSize") this.size = ruleEntry.value;
        this.autoAddedFeatureRules[document._id].push(ruleEntry);
        rulesToKeep.push(ruleEntry);
        continue;
      }
      if (NO_AUTO_CHOICE().includes(document.name)) {
        src_logger.debug(`Deliberately skipping ${document.name} auto choice detection`);
        rulesToKeep.push(ruleEntry);
        continue;
      }
      src_logger.debug(`Checking ${document.name} rule key: ${ruleEntry.key}`, {
        ruleEntry,
        docRules: foundry.utils.deepClone(document.system.rules),
        document: foundry.utils.deepClone(document),
      });

      if (ruleEntry.key === "ChoiceSet" && ruleEntry.predicate) {
        src_logger.debug(`Checking for predicates`, {
          ruleEntry,
          document,
          rulesToKeep,
        });
        const testResult = await this.#checkRulePredicate(foundry.utils.duplicate(document), ruleEntry, [rulesToKeep]);
        if (!testResult) {
          const data = { document, ruleEntry, testResult };
          src_logger.debug(
            `The test failed for ${document.name} rule key: ${ruleEntry.key} (This is probably not a problem).`,
            data
          );
          rulesToKeep.push(ruleEntry);
          continue;
        }
      }

      const choice = ruleEntry.key === "ChoiceSet" ? await this.#evaluateChoices(document, ruleEntry, choiceHint, rulesToKeep) : undefined;
      const { uuid, grantObject } = ruleEntry.key === "GrantItem"
        ? await this.#resolveInjectedUuid(document, ruleEntry, rulesToKeep)
        : { uuid: choice?.value, grantObject: undefined };

      if (choice?.choiceQueryResults) {
        ruleEntry.choiceQueryResults = choice.choiceQueryResults;
      }

      const documentFlagName = Pathmuncher.getFlag(document, ruleEntry);
      // if (flagName && choice?.value && !foundry.utils.hasProperty(document, `flags.pf2e.rulesSelections.${flagName}`)) {
      //   foundry.utils.setProperty(document, `flags.pf2e.rulesSelections.${flagName}`, choice.value);
      // }

      src_logger.debug(`UUID for ${document.name}: "${uuid}"`, { document, ruleEntry, choice, uuid, grantObject });
      const ruleFeature = ruleEntry.key === "GrantItem" && grantObject
        ? grantObject
        : uuid && typeof uuid === "string" ? await fromUuid(uuid) : undefined;
      // console.warn("ruleFeature", ruleFeature);
      if (ruleFeature) {
        const featureDoc = ruleFeature.toObject();
        // const featureDocFlagName = Pathmuncher.getFlag(featureDoc, ruleEntry);
        const featureDocFlagName = Seasoning.slugD(featureDoc.system.slug ?? featureDoc.system.name ?? featureDoc.name);
        featureDoc._id = foundry.utils.randomID();
        if (featureDoc.system.rules) this.allFeatureRules[featureDoc._id] = foundry.utils.deepClone(featureDoc.system.rules);
        foundry.utils.setProperty(featureDoc, "flags.pathmuncher.origin.uuid", uuid);
        src_logger.debug(`Found rule feature ${featureDoc.name} for ${document.name} for`, ruleEntry);

        if (choice) {
          ruleEntry.selection = choice.value;
          foundry.utils.setProperty(document, `flags.pf2e.rulesSelections.${documentFlagName}`, choice.value);
          if (choice.actorFlag) {
            foundry.utils.setProperty(this.result.character, `flags.pf2e.${documentFlagName}`, choice.value);
          }
        }

        if (src_utils.isString(ruleEntry.rollOption)) {
          const rollFlag = Seasoning.slug(featureDoc.system.slug ?? featureDoc.system.name ?? featureDoc.name);
          ruleEntry.rollOption = `${ruleEntry.rollOption}:${rollFlag}`;
        }

        if (ruleEntry.key === "GrantItem" && !ruleEntry.flag) {
          ruleEntry.flag = featureDocFlagName;
        }

        if (ruleEntry.predicate && ruleEntry.key === "GrantItem") {
          src_logger.debug(`Checking for grantitem predicates`, {
            ruleEntry,
            document,
            featureDoc,
          });
          const tempDoc = foundry.utils.deepClone(document);
          tempDoc.system.rules = foundry.utils.deepClone(rulesToKeep);
          const testResult = await this.#checkRule(featureDoc, ruleEntry, [tempDoc]);
          if (!testResult) {
            const data = { document, ruleEntry, featureDoc, testResult };
            src_logger.debug(
              `The test failed for ${document.name} rule key: ${ruleEntry.key} (This is probably not a problem).`,
              data
            );
            rulesToKeep.push(ruleEntry);
            // this.autoAddedFeatureRules[document._id].push(ruleEntry);
            continue;
          } else {
            src_logger.debug(`The test passed for ${document.name} rule key: ${ruleEntry.key}`, ruleEntry);
            // this.autoAddedFeatureRules[document._id].push(ruleEntry);
            // eslint-disable-next-line max-depth
            // if (!ruleEntry.flag) ruleEntry.flag = Seasoning.slugD(document.name);
            ruleEntry.pathmuncherImport = true;
            rulesToKeep.push(ruleEntry);
          }
        }

        // foundry.utils.setProperty(ruleEntry, `preselectChoices.${ruleEntry.flag}`, ruleEntry.selection ?? ruleEntry.uuid);

        if (this.autoAddedFeatureIds.has(`${ruleFeature.id}${ruleFeature.type}`)) {
          src_logger.debug(`Feature ${featureDoc.name} found for ${document.name}, but has already been added (${ruleFeature.id})`, ruleFeature);
          // this.autoAddedFeatureRules[document._id].push(ruleEntry);
          // rulesToKeep.push(ruleEntry);
          if (ruleEntry.key === "GrantItem" && ruleEntry.flag) {
            this.autoAddedFeatureRules[document._id].push(ruleEntry);
            rulesToKeep.push(ruleEntry);
          }
          continue;
        } else if (ruleEntry.key === "GrantItem") {
          src_logger.debug(`Feature ${featureDoc.name} not found for ${document.name}, adding (${ruleFeature.id})`, ruleFeature);
          if (ruleEntry.selection || ruleEntry.flag) {
            rulesToKeep.push(ruleEntry);
          }
          this.autoAddedFeatureIds.add(`${ruleFeature.id}${ruleFeature.type}`);
          featureDoc._id = foundry.utils.randomID();
          // this.#createGrantedItem(featureDoc, document, { itemGrantName: featureDocFlagName, applyFeatLocation: false });
          src_logger.debug(`Adding flags for ${document.name} (${documentFlagName})`, {
            document,
            featureDoc,
            ruleEntry,
            choice,
            documentFlagName,
          });
          const flagName = ruleEntry.flag ?? documentFlagName;
          this.#createGrantedItem(featureDoc, document, { addGrantFlag: true, itemGrantName: flagName, applyFeatLocation: false });
          if (foundry.utils.hasProperty(featureDoc, "system.rules")) await this.#addGrantedRules(featureDoc);
        }
      } else if (foundry.utils.getProperty(choice, "nouuid")) {
        src_logger.debug("Parsed no id rule", { choice, uuid, ruleEntry });
        if (!ruleEntry.flag) ruleEntry.flag = Seasoning.slugD(document.name);
        ruleEntry.selection = choice.value;
        if (choice.label) document.name = `${document.name} (${choice.label})`;
        rulesToKeep.push(ruleEntry);
      } else if (choice && uuid && !foundry.utils.hasProperty(ruleEntry, "selection")) {
        src_logger.debug("Parsed odd choice rule", { choice, uuid, ruleEntry });
        // if (!ruleEntry.flag) ruleEntry.flag = Seasoning.slugD(document.name);
        ruleEntry.selection = choice.value;
        if (
          ((!ruleEntry.adjustName && choice.label && typeof uuid === "object")
          || (!choice.adjustName && choice.label))
          && !featureRenamed
        ) {
          document.name = Pathmuncher.adjustDocumentName(document.name, choice.label);
          featureRenamed = true;
        }
        rulesToKeep.push(ruleEntry);
      } else {
        src_logger.debug(`Final rule fallback for ${document.name}`, ruleEntry);
        const data = {
          uuid: ruleEntry.uuid,
          document,
          ruleEntry,
          choice,
        };
        if (
          ruleEntry.key === "GrantItem"
          && (ruleEntry.flag || ruleEntry.selection || ruleEntry.uuid.startsWith("Compendium"))
        ) {
          rulesToKeep.push(ruleEntry);
        } else if (ruleEntry.key === "ChoiceSet" && !foundry.utils.hasProperty(ruleEntry, "flag")) {
          src_logger.debug("Prompting user for choices", ruleEntry);
          this.promptRules[document._id].push(ruleEntry);
          rulesToKeep.push(ruleEntry);
        } else if (ruleEntry.key === "ChoiceSet" && !choice && !uuid) {
          src_logger.warn("Unable to determine choice asking", data);
          rulesToKeep.push(ruleEntry);
          this.promptRules[document._id].push(ruleEntry);
        }
        src_logger.warn("Unable to determine granted rule feature, needs better parser", data);
      }
      if (ruleEntry.adjustName && choice?.label && !featureRenamed) {
        document.name = Pathmuncher.adjustDocumentName(document.name, choice.label);
      }
      this.autoAddedFeatureRules[document._id].push(ruleEntry);

      src_logger.debug(`End result for ${document.name} for a ${ruleEntry.key}`, {
        document: foundry.utils.deepClone(document),
        rulesToKeep: foundry.utils.deepClone(rulesToKeep),
        ruleEntry: foundry.utils.deepClone(ruleEntry),
        choice: foundry.utils.deepClone(choice),
        uuid: foundry.utils.deepClone(uuid),
      });
    }
    // eslint-disable-next-line require-atomic-updates
    document.system.rules = rulesToKeep;

    src_logger.debug(`Final status for ${document.name}`, {
      document: foundry.utils.deepClone(document),
      rulesToKeep: foundry.utils.deepClone(rulesToKeep),
    });
  }

  async #delayedSubRuleDocuments({ originType, applyFeatLocation, choiceHint }) {
    for (const subRuleDocument of this.subRuleDocuments[document._id]) {
      src_logger.debug(
        `Processing granted rules for granted item document ${subRuleDocument.name}`,
        foundry.utils.duplicate(subRuleDocument)
      );
      await this.#addGrantedItems(subRuleDocument, { originType, applyFeatLocation, choiceHint });
    }
  }

  async #processGrantItemsAtLevel(document, level, { originType = null, applyFeatLocation = false, levelCap = 20 } = {}) {
    const featureItemMap = Object.entries(this.autoAddedFeatureItems[document._id])
      .sort(([, a], [, b]) => a.level - b.level);
    for (const [key, grantedFeature] of featureItemMap) {
      src_logger.debug(`Checking ${document.name} granted item ${grantedFeature.name}, level(${grantedFeature.level}) with key: ${key}`, grantedFeature);
      if (parseInt(grantedFeature.level) > foundry.utils.getProperty(this.result.character, "system.details.level.value")
        || parseInt(grantedFeature.level) !== level
      ) {
        src_logger.debug(`Not processing ${grantedFeature.name} due to level data mismatch`, {
          grantedFeature,
          level,
          levelCap,
          greaterLevelCheck: parseInt(grantedFeature.level) > foundry.utils.getProperty(this.result.character, "system.details.level.value"),
          noLevelMatchCheck: parseInt(grantedFeature.level) !== level,
          characterLevel: foundry.utils.getProperty(this.result.character, "system.details.level.value"),
        });
        continue;
      }
      const feature = await fromUuid(grantedFeature.uuid);
      if (!feature) {
        const data = { uuid: grantedFeature.uuid, grantedFeature, feature };
        src_logger.warn("Unable to determine granted item feature, needs better parser", data);
        this.failedFeatureItems[document._id][key] = grantedFeature;
        continue;
      }
      this.autoAddedFeatureIds.add(`${feature.id}${feature.type}`);
      const featureDoc = feature.toObject();
      featureDoc._id = foundry.utils.randomID();
      // const featureDocFlagName = Seasoning.slugD(featureDoc.system.slug ?? featureDoc.system.name ?? featureDoc.name);
      foundry.utils.setProperty(featureDoc.system, "location", document._id);
      this.#createGrantedItem(featureDoc, document, { originType, applyFeatLocation });
      if (foundry.utils.hasProperty(featureDoc, "system.rules")) {
        src_logger.debug(`Processing granted rules for granted item document ${featureDoc.name}`, foundry.utils.duplicate(featureDoc));
        if (this.immediateDiveAdd) {
          await this.#addGrantedItems(featureDoc, { originType, applyFeatLocation, levelCap });
        } else {
          this.subRuleDocuments[document._id].push(featureDoc);
        }
      }
    }
    document.system.items = this.failedFeatureItems[document._id];
  }

  async #addGrantedItems(document, { originType = null, applyFeatLocation = false, choiceHint = null, levelCap = 20 } = {}) {
    this.subRuleDocuments[document._id] = [];
    if (foundry.utils.hasProperty(document, "system.items")) {
      src_logger.debug(`addGrantedItems for ${document.name}`, foundry.utils.duplicate(document));
      if (!this.autoAddedFeatureItems[document._id]) {
        this.autoAddedFeatureItems[document._id] = foundry.utils.duplicate(document.system.items);
      }
      this.failedFeatureItems[document._id] = {};

      // const characterLevel = foundry.utils.getProperty(this.result.character, "system.details.level.value");
      const characterLevel = this.characterLevel;

      for (let i = 0; i <= Math.min(characterLevel, levelCap); i++) {
        await this.#processGrantItemsAtLevel(document, i, { originType, applyFeatLocation, levelCap });
      }

      if (!this.immediateDiveAdd) {
        await this.#delayedSubRuleDocuments({ originType, applyFeatLocation, choiceHint });
      }
    }

    if (foundry.utils.hasProperty(document, "system.rules")) {
      src_logger.debug(`Processing granted rules for core document ${document.name}`, { document: foundry.utils.duplicate(document), originType, choiceHint });
      const docHint = choiceHint ?? document.name;
      await this.#addGrantedRules(document, originType, docHint);
    }
  }

  static KEY_LEVEL = [0, 1, 5, 5, 5, 5, 10, 10, 10, 10, 10, 15, 15, 15, 15, 15, 20, 20, 20, 20, 20];

  #determineAbilityBoosts() {
    const breakdown = foundry.utils.getProperty(this.source, "abilities.breakdown");
    const useCustomStats
      = breakdown
      && breakdown.ancestryFree.length === 0
      && breakdown.ancestryBoosts.length === 0
      && breakdown.ancestryFlaws.length === 0
      && breakdown.backgroundBoosts.length === 0
      && breakdown.classBoosts.length === 0;
    if (breakdown && !useCustomStats) {
      this.boosts.custom = false;
      const classBoostMap = {};
      for (const [key, boosts] of Object.entries(this.source.abilities.breakdown.mapLevelledBoosts)) {
        if (key <= this.source.level) {
          const levelKey = Pathmuncher.KEY_LEVEL[key];
          const existingBoosts = classBoostMap[levelKey] ?? [];
          const newBoosts = boosts.map((ability) => ability.toLowerCase());
          classBoostMap[levelKey] = existingBoosts.concat(newBoosts);
        }
      }
      foundry.utils.setProperty(this.result.character, "system.build.attributes.boosts", classBoostMap);
      this.boosts.class = classBoostMap;

      // ancestry
    } else {
      this.boosts.custom = true;
      ["str", "dex", "con", "int", "wis", "cha"].forEach((key) => {
        const mod = Math.min(Math.max(Math.trunc((this.source.abilities[key] - 10) / 2), -5), 10) || 0;
        foundry.utils.setProperty(this.result.character, `system.abilities.${key}.mod`, mod);
      });
    }

    if (breakdown?.classBoosts.length > 0) {
      this.keyAbility = breakdown.classBoosts[0].toLowerCase();
    } else {
      this.keyAbility = this.source.keyability;
    }
    foundry.utils.setProperty(this.result.character, "system.details.keyability.value", this.keyAbility);
  }

  #generateBackgroundAbilityBoosts() {
    if (!this.result.background[0]) return;
    const breakdown = foundry.utils.getProperty(this.source, "abilities.breakdown");
    for (const boost of breakdown.backgroundBoosts) {
      for (const [key, boostSet] of Object.entries(this.result.background[0].system.boosts)) {
        if (this.result.background[0].system.boosts[key].selected) continue;
        if (boostSet.value.includes(boost.toLowerCase())) {
          this.result.background[0].system.boosts[key].selected = boost.toLowerCase();
          break;
        }
      }
    }
  }

  #generateAncestryAbilityBoosts() {
    if (!this.result.ancestry[0]) return;
    const breakdown = foundry.utils.getProperty(this.source, "abilities.breakdown");
    const boosts = [];
    breakdown.ancestryBoosts.concat(breakdown.ancestryFree).forEach((boost) => {
      for (const [key, boostSet] of Object.entries(this.result.ancestry[0].system.boosts)) {
        if (this.result.ancestry[0].system.boosts[key].selected) continue;
        if (boostSet.value.includes(boost.toLowerCase())) {
          this.result.ancestry[0].system.boosts[key].selected = boost.toLowerCase();
          boosts.push(boost.toLowerCase());
          break;
        }
      }
    });
    if (breakdown.ancestryBoosts.length === 0) {
      foundry.utils.setProperty(this.result.ancestry[0], "system.alternateAncestryBoosts", boosts);
    }
  }

  #setAbilityBoosts() {
    if (this.boosts.custom) return;
    this.#generateBackgroundAbilityBoosts();
    this.#generateAncestryAbilityBoosts();

    this.result.class[0].system.boosts = this.boosts.class;
  }

  static SKILL_LOOKUP = {
    "acrobatics": "acr",
    "arcana": "arc",
    "athletics": "ath",
    "crafting": "cra",
    "deception": "dec",
    "diplomacy": "dip",
    "intimidation": "itm",
    "medicine": "med",
    "nature": "nat",
    "occultism": "occ",
    "performance": "prf",
    "religion": "rel",
    "society": "soc",
    "stealth": "ste",
    "survival": "sur",
    "thievery": "thi",
  };

  #setSkills(removeSpecials = false) {
    for (const [key, value] of Object.entries(Pathmuncher.SKILL_LOOKUP)) {
      const calculatedValue = removeSpecials
        && (this.source.specials.some((s) => s.toLowerCase() === key)
         || this.parsed.specials.some((s) => s.name.toLowerCase() === key))
        ? 0
        : this.source.proficiencies[key] / 2;
      foundry.utils.setProperty(this.result.character, `system.skills.${value}.rank`, calculatedValue);
    };
  }

  #setSaves() {
    ["fortitude", "reflex", "will"].forEach((key) => {
      foundry.utils.setProperty(this.result.character, `system.savingThrows.${key}`, this.source.proficiencies[key] / 2);
    });
  }

  #setMartials() {
    ["advanced", "heavy", "light", "medium", "unarmored", "martial", "simple", "unarmed"].forEach((key) => {
      foundry.utils.setProperty(this.result.character, `system.martial.${key}.rank`, this.source.proficiencies[key] / 2);
    });
  }

  #setLanguages() {
    const ancestryLanguages = this.result.ancestry[0]?.system.traits.languages?.value || [];
    const intLanguages = this.source.languages
      .filter((l) => !ancestryLanguages.includes(l.toLowerCase()))
      .map((l) => l.toLowerCase());
    foundry.utils.setProperty(this.result.character, "system.details.languages.value", intLanguages);

  }

  async #processCore() {
    foundry.utils.setProperty(this.result.character, "name", this.source.name);
    foundry.utils.setProperty(this.result.character, "prototypeToken.name", this.source.name);
    this.characterLevel = this.source.level;
    foundry.utils.setProperty(this.result.character, "system.details.level.value", 1);
    if (this.source.age !== "Not set") foundry.utils.setProperty(this.result.character, "system.details.age.value", this.source.age);
    if (this.source.gender !== "Not set") foundry.utils.setProperty(this.result.character, "system.details.gender.value", this.source.gender);
    // foundry.utils.setProperty(this.result.character, "system.details.alignment.value", this.source.alignment);

    if (this.source.deity !== "Not set") foundry.utils.setProperty(this.result.character, "system.details.deity.value", this.source.deity);
    this.size = Seasoning.getSizeValue(this.source.size);
    foundry.utils.setProperty(this.result.character, "system.traits.size.value", this.size);
    this.#processSenses();

    this.#determineAbilityBoosts();
    this.#setSaves();
    this.#setMartials();

    // foundry.utils.setProperty(this.result.character, "system.attributes.perception.rank", this.source.proficiencies.perception / 2);
    // foundry.utils.setProperty(this.result.character, "system.attributes.classDC.rank", this.source.proficiencies.classDC / 2);
  }

  #indexFind(index, arrayOfNameMatches) {
    for (const name of arrayOfNameMatches) {
      const indexMatch = index.find((i) => {
        const slug = i.system.slug ?? Seasoning.slug(i.name);
        return (
          slug === Seasoning.slug(name)
          || slug === Seasoning.slug(Seasoning.getClassAdjustedSpecialNameLowerCase(name, this.source.class))
          || slug === Seasoning.slug(Seasoning.getAncestryAdjustedSpecialNameLowerCase(name, this.source.ancestry))
          || slug === Seasoning.slug(Seasoning.getHeritageAdjustedSpecialNameLowerCase(name, this.source.heritage))
          || (src_utils.allowDualClasses()
            && slug === Seasoning.slug(Seasoning.getDualClassAdjustedSpecialNameLowerCase(name, this.source.dualClass)))
        );
      });
      if (indexMatch) return indexMatch;
    }
    return undefined;
  }

  #findInPackIndexes(type, arrayOfNameMatches) {
    const matcher = this.compendiumMatchers[type];
    for (const [packName, index] of Object.entries(matcher.indexes)) {
      const indexMatch = this.#indexFind(index, arrayOfNameMatches);
      if (indexMatch) return { i: indexMatch, pack: matcher.packs[packName] };
    }
    return undefined;
  }

  #sortParsedFeats() {
    // eslint-disable-next-line complexity
    this.parsed.feats.sort((f1, f2) => {
      const f1RefUndefined = !(typeof f1.type === "string" || f1.type instanceof String);
      const f2RefUndefined = !(typeof f2.type === "string" || f2.type instanceof String);
      if (f1RefUndefined || f2RefUndefined) {
        if (f1RefUndefined && f2RefUndefined) {
          return 0;
        } else if (f1RefUndefined) {
          return 1;
        } else {
          return -1;
        }
      } else if (f1.type === "Awarded Feat" && f2.type === "Awarded Feat") {
        return (f1.level ?? 20) - (f2.level ?? 20);
      } else if (f1.type === "Awarded Feat") {
        return 1;
      } else if (f2.type === "Awarded Feat") {
        return -1;
      } else if ((f1.level ?? 20) === (f2.level ?? 20)) {
        const f1Index = constants.FEAT_PRIORITY.indexOf(f1.type);
        const f2Index = constants.FEAT_PRIORITY.indexOf(f2.type);
        if (f1Index > f2Index) {
          return 1;
        } else if (f1Index < f2Index) {
          return -1;
        } else {
          return 0;
        }
      } else {
        return (f1.level ?? 20) - (f2.level ?? 20);
      }
    });
  }

  // eslint-disable-next-line complexity
  async #generateFeatItems(type,
    { levelCap = 20, typeFilter = null, excludeChild = false, excludeParents = false, excludeStandard = false } = {}
  ) {
    src_logger.debug(`Generate feat items for ${type} with level cap "${levelCap}" and filter "${typeFilter}"`);

    for (const featArray of [this.parsed.feats, this.parsed.specials]) {
      for (const pBFeat of featArray) {
        src_logger.debug(`Checking if  ${pBFeat.name} needs processing`, pBFeat);
        if (pBFeat.added) continue;
        if (Number.isInteger(levelCap) && (pBFeat.level ?? 20) > levelCap) continue;
        if (typeFilter && pBFeat.type !== typeFilter) continue;
        if (excludeChild && pBFeat.isChild === true) continue;
        if (excludeParents && pBFeat.isParent === true) continue;
        if (excludeStandard && pBFeat.isStandard === true) continue;
        src_logger.debug(`Generating feature for ${pBFeat.name}`, pBFeat);
        if (this.devMode) src_logger.error(`Generating feature for ${pBFeat.name}`, { pBFeatCloned: foundry.utils.deepClone(pBFeat), pBFeat, this: this });

        const indexMatch = this.#findInPackIndexes(type, [pBFeat.name, pBFeat.originalName]);
        const displayName = pBFeat.extra ? Pathmuncher.adjustDocumentName(pBFeat.name, pBFeat.extra) : pBFeat.name;
        if (!indexMatch) {
          src_logger.debug(`Unable to match feat ${displayName}`, {
            displayName,
            name: pBFeat.name,
            extra: pBFeat.extra,
            pBFeat,
            type,
          });
          this.check[pBFeat.originalName] = {
            name: displayName,
            type: "feat",
            details: {
              displayName,
              name: pBFeat.name,
              originalName: pBFeat.originalName,
              extra: pBFeat.extra,
              pBFeat,
              type,
            },
          };
          continue;
        }
        if (this.check[pBFeat.originalName]) delete this.check[pBFeat.originalName];
        pBFeat.added = true;
        if (this.autoAddedFeatureIds.has(`${indexMatch._id}${indexMatch.type}`)) {
          src_logger.debug("Feat included in class features auto add", { displayName, pBFeat, type });
          pBFeat.addedAutoId = `${indexMatch._id}_${indexMatch.type}`;
          continue;
        }

        const doc = await indexMatch.pack.getDocument(indexMatch.i._id);
        const docData = doc.toObject();
        docData._id = foundry.utils.randomID();
        pBFeat.addedId = docData._id;
        // docData.name = displayName;

        this.#generateFoundryFeatLocation(docData, pBFeat);
        this.result.feats.push(docData);
        const options = {
          originType: typeFilter,
          applyFeatLocation: false,
          choiceHint: pBFeat.extra && pBFeat.extra !== "" ? pBFeat.extra : null,
          levelCap,
        };
        await this.#addGrantedItems(docData, "feat", options);
      }
    }
  }

  async #generateSpecialItems(type) {
    for (const special of this.parsed.specials) {
      if (special.added) continue;
      src_logger.debug("Generating special for", special);
      const indexMatch = this.#findInPackIndexes(type, [special.name, special.originalName]);
      if (!indexMatch) {
        src_logger.debug(`Unable to match special ${special.name}`, { special: special.name, type });
        this.check[special.originalName] = {
          name: special.name,
          type: "special",
          details: { displayName: special.name, name: special.name, originalName: special.originalName, special },
        };
        continue;
      }
      special.added = true;
      if (this.check[special.originalName]) delete this.check[special.originalName];
      if (this.autoAddedFeatureIds.has(`${indexMatch._id}${indexMatch.type}`)) {
        src_logger.debug("Special included in class features auto add", { special: special.name, type });
        special.addedAutoId = `${indexMatch._id}_${indexMatch.type}`;
        continue;
      }

      const doc = await indexMatch.pack.getDocument(indexMatch.i._id);
      const docData = doc.toObject();
      docData._id = foundry.utils.randomID();
      special.addedId = docData._id;
      this.result.feats.push(docData);
      await this.#addGrantedItems(docData, { applyFeatLocation: true });
    }
  }

  #resizeItem(item) {
    if (Seasoning.isPhysicalItemType(item.type)) {
      const resizeItem = item.type !== "treasure" && !["med", "sm"].includes(this.size);
      if (resizeItem) item.system.size = this.size;
    }
  }

  async #generateAdventurersPack() {
    const defaultCompendium = game.packs.get("pf2e.equipment-srd");
    const index = await defaultCompendium.getIndex({ fields: ["name", "type", "system.slug"] });


    const adventurersPack = this.parsed.equipment.find((e) => e.pbName === "Adventurer's Pack");
    if (adventurersPack) {
      const compendiumBackpack = await defaultCompendium.getDocument("3lgwjrFEsQVKzhh7");
      const backpackInstance = compendiumBackpack.toObject();
      adventurersPack.added = true;
      backpackInstance._id = foundry.utils.randomID();
      adventurersPack.addedId = backpackInstance._id;
      this.result.adventurersPack.item = adventurersPack;
      this.result.equipment.push(backpackInstance);
      for (const content of this.result.adventurersPack.contents) {
        const indexMatch = index.find((i) => i.system.slug === content.slug);
        if (!indexMatch) {
          src_logger.error(`Unable to match adventurers kit item ${content.name}`, content);
          continue;
        }

        const doc = await defaultCompendium.getDocument(indexMatch._id);
        const itemData = doc.toObject();
        itemData._id = foundry.utils.randomID();
        itemData.system.quantity = content.qty;
        itemData.system.containerId = backpackInstance?._id;
        this.#resizeItem(itemData);
        this.result.equipment.push(itemData);
      }
    }
  }

  async #generateContainers() {
    for (const [key, data] of Object.entries(this.source.equipmentContainers)) {
      if (data.foundryId) continue;
      const name = Seasoning.getFoundryEquipmentName(data.containerName);
      const indexMatch = this.compendiumMatchers["equipment"].getMatch(data.containerName, name);
      const id = foundry.utils.randomID();
      const doc = indexMatch
        ? await indexMatch.pack.getDocument(indexMatch.i._id)
        : await Item.create({ name: data.containerName, type: "backpack" }, { temporary: true });
      const itemData = doc.toObject();
      itemData._id = id;
      this.#resizeItem(itemData);
      this.result["equipment"].push(itemData);
      this.parsed.equipment.push({
        foundryName: name,
        pbName: data.containerName,
        originalName: data.containerName,
        name,
        qty: 1,
        added: true,
        inContainer: undefined,
        container: this.#getContainerData(key),
        foundryId: id,
      });
    }
  }

  async #generateEquipmentItems() {
    for (const e of this.parsed.equipment) {
      if (e.pbName === "Adventurer's Pack") continue;
      if (e.added) continue;
      if (Seasoning.IGNORED_EQUIPMENT().includes(e.pbName)) {
        e.added = true;
        e.addedAutoId = "ignored";
        continue;
      }
      src_logger.debug("Generating item for", e);
      const indexMatch = this.compendiumMatchers["equipment"].getMatch(e.pbName, e.foundryName);
      if (!indexMatch) {
        src_logger.error(`Unable to match ${e.pbName}`, e);
        this.bad.push({ pbName: e.pbName, type: "equipment", details: { e } });
        continue;
      }

      const doc = await indexMatch.pack.getDocument(indexMatch.i._id);
      if (doc.type != "kit") {
        const itemData = doc.toObject();
        itemData._id = e.foundryId || foundry.utils.randomID();
        itemData.system.quantity = e.qty;
        const type = doc.type === "treasure" ? "treasure" : "equipment";
        if (e.inContainer) {
          const containerMatch = this.parsed.equipment.find((con) => con.container?.id === e.inContainer);
          if (containerMatch) {
            itemData.system.containerId = containerMatch.foundryId;
            itemData.system.equipped.carryType = "stowed";
          }
        }
        if (e.invested) {
          itemData.system.equipped.carryType = "worn";
          itemData.system.equipped.invested = true;
          itemData.system.equipped.inSlot = true;
          itemData.system.equipped.handsHeld = 0;
        }
        this.#resizeItem(itemData);
        this.result[type].push(itemData);
        e.addedId = itemData._id;
      }
      // eslint-disable-next-line require-atomic-updates
      e.added = true;
    }
  }

  async #processEquipmentItems() {
    // just in case it's in the equipment, pathbuilder should have translated this to items
    await this.#generateAdventurersPack();
    await this.#generateContainers();
    await this.#generateEquipmentItems();
  }

  static RUNE_SCALE = [
    "",
    "Minor",
    "Lesser",
    "Moderate",
    "Greater",
    "Major",
    "Supreme",
  ];

  static REINFORCING_DATA = {
    "Minor": {
      value: 1,
      hp: 44,
    },
    "Lesser": {
      value: 2,
      hp: 52,
    },
    "Moderate": {
      value: 3,
      hp: 64,
    },
    "Greater": {
      value: 4,
      hp: 80,
    },
    "Major": {
      value: 5,
      hp: 84,
    },
    "Supreme": {
      value: 6,
      hp: 108,
    },
  };

  static POTENCY_SCALE = [
    "",
    "striking",
    "greaterStriking",
    "majorStriking",
  ];

  static RESILIENT_SCALE = [
    "",
    "resilient",
    "greaterResilient",
    "majorResilient",
  ];

  // eslint-disable-next-line complexity
  static applyRunes(parsedItem, itemData, type) {
    if (itemData.type == "shield") {
      parsedItem.runes.forEach((rune) => {
        if (rune.startsWith("Reinforcing")) {
          const runeScale = rune.split("(").pop().split(")").shift().trim();
          const runeMatch = Pathmuncher.REINFORCING_DATA[runeScale];
          if (runeMatch) {
            itemData.system.runes.reinforcing = runeMatch.value;
            itemData.system.hp.value += runeMatch.hp;
          }
        } else {
          const runeScale = rune.split("(").pop().split(")").shift().trim();
          const runeLevel = Pathmuncher.RUNE_SCALE.indexOf(runeScale);
          const runeType = rune.split("(").shift().toLowerCase().trim();
          if (runeLevel !== -1) {
            itemData.system.runes[runeType] = runeLevel;
          }
        }
      });
    } else if (foundry.utils.hasProperty(itemData, "system.runes.potency")) {
      itemData.system.runes.potency = parsedItem.pot;
      if (type === "weapon") {
        const striking = Pathmuncher.POTENCY_SCALE.indexOf(parsedItem.str);
        if (striking !== -1) itemData.system.runes.striking = striking;
      } else if (type === "armor") {
        const resilient = Pathmuncher.RESILIENT_SCALE.indexOf(parsedItem.res);
        if (resilient !== -1) itemData.system.runes.resilient = resilient;
      }
    }

    if (type === "armor" && parsedItem.worn
      && ((Number.isInteger(parsedItem.pot) && parsedItem.pot > 0)
        || (parsedItem.res && parsedItem.res !== "")
      )
    ) {
      itemData.system.equipped.invested = true;
    }

    if (foundry.utils.hasProperty(itemData, "system.runes.property")) {
      parsedItem.runes.forEach((property) => {
        const resistantRegex = /Energy Resistant - (.*)/i;
        const resistantMatch = property.match(resistantRegex);
        const vitalizingRegex = /Vitalizing(.*)/i;
        const vitalizingMatch = property.match(vitalizingRegex);
        const bigRegex = /(.*)\((Greater|Major)\)/i;
        const bigMatch = property.match(bigRegex);

        let rune = property;
        if (resistantMatch) rune = `${resistantMatch[1]} Resistant`;
        else if (vitalizingMatch) rune = `Disrupting${vitalizingMatch[1]}`;
        else if (bigMatch) rune = `${bigMatch[2]}${bigMatch[1]}`;

        itemData.system.runes.property.push(Seasoning.slugD(rune));
      });
    }

    if (parsedItem.mat) {
      const material = parsedItem.mat.split(" (")[0];
      itemData.system.material.type = Seasoning.slugD(material);
      itemData.system.material.grade = Seasoning.getMaterialGrade(parsedItem.mat);
    }
  }

  async #createWeaponItem(data) {
    // { pbName, name, prof, qty, die, display, increasedDice, pot, str, mat, runes, attack, damageBonus, extraDamage, damageType }
    src_logger.debug("Generating weapon for", data);
    const indexMatch = this.compendiumMatchers["equipment"].getMatch(data.pbName, data.foundryName);
    if (!indexMatch) {
      src_logger.error(`Unable to match weapon item ${data.name}`, data);
      this.bad.push({ pbName: data.pbName, type: "weapon", details: { w: data } });
      return null;
    }

    const doc = await indexMatch.pack.getDocument(indexMatch.i._id);
    const itemData = doc.toObject();
    itemData._id = foundry.utils.randomID();
    itemData.system.quantity = data.qty;
    // because some shields don't have damage dice, but come in as weapons on pathbuilder
    if (itemData.type === "weapon") {
      if (data.die) itemData.system.damage.die = data.die;
      Pathmuncher.applyRunes(data, itemData, "weapon");
    }

    if (data.display.startsWith("Large ") || data.increasedDice) {
      itemData.system.size = "lg";
    } else if (data.display && !Seasoning.IGNORED_EQUIPMENT_DISPLAY(data.display)) {
      itemData.name = data.display;
    }

    this.#resizeItem(itemData);
    this.result.weapons.push(itemData);
    data.added = true;
    data.addedId = itemData._id;
    return itemData;
  }

  async #generateWeaponItems() {
    for (const w of this.parsed.weapons) {
      if (Seasoning.IGNORED_EQUIPMENT().includes(w.pbName)) {
        w.added = true;
        w.addedAutoId = "ignored";
        continue;
      }
      await this.#createWeaponItem(w);
    }
  }

  #adjustArmorItem(itemData, parsedArmor) {
    itemData._id = foundry.utils.randomID();
    itemData.system.equipped.value = parsedArmor.worn ?? false;
    if (!Seasoning.RESTRICTED_EQUIPMENT().some((i) => itemData.name.startsWith(i))) {
      itemData.system.equipped.inSlot = parsedArmor.worn ?? false;
      itemData.system.quantity = parsedArmor.qty;

      const isShield = parsedArmor.prof === "shield";
      itemData.system.equipped.handsHeld = isShield && parsedArmor.worn ? 1 : 0;
      itemData.system.equipped.carryType = isShield && parsedArmor.worn ? "held" : "worn";

      Pathmuncher.applyRunes(parsedArmor, itemData, "armor");
    }
    if (parsedArmor.display) itemData.name = parsedArmor.display;

    this.#resizeItem(itemData);
    return itemData;
  }

  async #generateArmorItems() {
    for (const a of this.parsed.armor) {
      src_logger.debug("Generating armor for", a);
      if (Seasoning.GRANTED_ITEMS_LIST().includes(a.pbName)) {
        const existingItem = this.result.armor.find((i) => i.name === a.foundryName);
        if (existingItem) {
          existingItem.system.equipped.inSlot = true;
          existingItem.system.equipped.handsHeld = 0;
          a.added = true;
          a.addedId = existingItem._id;
          src_logger.debug(`Ignoring armor item ${a.pbName} as it has been granted by a feature`);
          continue;
        }
      }
      if (Seasoning.IGNORED_EQUIPMENT().includes(a.pbName)) {
        a.added = true;
        a.addedAutoId = "ignored";
        continue;
      }

      const indexMatch = this.compendiumMatchers["equipment"].getMatch(a.foundryName, `${a.pbName} Armor`);
      if (!indexMatch) {
        src_logger.error(`Unable to match armor kit item ${a.name}`, a);
        this.bad.push({ pbName: a.pbName, type: "armor", details: { a } });
        continue;
      }

      const doc = await indexMatch.pack.getDocument(indexMatch.i._id);
      const itemData = this.#adjustArmorItem(doc.toObject(), a);
      this.result.armor.push(itemData);
      a.addedId = itemData._id;
      a.added = true;
    }
  }

  getClassSpellCastingType(dual = false) {
    const classCaster = dual
      ? this.source.spellCasters.find((caster) => caster.name === this.source.dualClass)
      : this.source.spellCasters.find((caster) => caster.name === this.source.class);
    const type = classCaster?.spellcastingType;
    if (type || this.source.spellCasters.length === 0) return type ?? "spontaneous";
    // if no type and multiple spell casters, then return the first spell casting type
    return this.source.spellCasters[0].spellcastingType ?? "spontaneous";
  }

  // aims to determine the class magic tradition for a spellcasting block
  getClassMagicTradition(caster) {
    const classCaster = [this.source.class, this.source.dualClass].includes(caster.name);
    const tradition = classCaster ? caster?.magicTradition : undefined;
    // if a caster tradition or no spellcasters, return divine
    if (tradition || this.source.spellCasters.length === 0) return tradition ?? "divine";

    // not a focus traditions
    if (caster.magicTradition !== "focus" && ["divine", "occult", "primal", "arcane"].includes(caster.magicTradition)) {
      return caster.magicTradition;
    }

    // this spell caster type is not a class, determine class tradition based on ability
    const abilityTradition = this.source.spellCasters.find((c) =>
      [this.source.class, this.source.dualClass].includes(c.name)
      && c.ability === caster.ability
    );
    if (abilityTradition) return abilityTradition.magicTradition;
    // if no type and multiple spell casters, then return the first spell casting type
    return this.source.spellCasters[0].magicTradition && this.source.spellCasters[0].magicTradition !== "focus"
      ? this.source.spellCasters[0].magicTradition
      : "divine";
  }

  #applySpellBlending(spellcastingEntity, caster) {
    if (caster.blendedSpells.length === 0) return;

    const remove = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const add = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    // find adjustments
    caster.blendedSpells.forEach((slot) => {
      remove[slot.levelFrom]++;
      add[slot.LevelTo]++;
    });

    for (let i = 0; i <= 10; i++) {
      const toAdd = this.options.adjustBlendedSlots ? 0 : Math.floor(add[i] / 2);
      const toRemove = this.options.adjustBlendedSlots ? remove[i] : 0;
      const adjustment = 0 - toRemove - toAdd;
      src_logger.debug("Adjusting spells for spell blending", { i, adjustment, add, remove, toAdd, max: spellcastingEntity.slots[`slot${i}`].max });
      spellcastingEntity.slots[`slot${i}`].max += adjustment;
      spellcastingEntity.slots[`slot${i}`].value += adjustment;
    }
  }

  #generateSpellCaster(caster) {
    const isFocus = caster.magicTradition === "focus";
    const magicTradition = this.getClassMagicTradition(caster);
    const spellcastingType = isFocus ? "focus" : caster.spellcastingType;
    const flexible = false; // placeholder

    const name = isFocus ? `${src_utils.capitalize(magicTradition)} ${caster.name}` : caster.name;

    const spellcastingEntity = {
      ability: {
        value: caster.ability,
      },
      proficiency: {
        value: caster.proficiency / 2,
      },
      spelldc: {
        item: 0,
      },
      tradition: {
        value: magicTradition,
      },
      prepared: {
        value: spellcastingType,
        flexible,
      },
      slots: {},
      showUnpreparedSpells: { value: true },
      showSlotlessLevels: { value: true },
    };

    // apply slot data
    for (let i = 0; i <= 10; i++) {

      spellcastingEntity.slots[`slot${i}`] = {
        max: caster.perDay[i],
        prepared: {},
        value: caster.perDay[i],
      };
    }
    // adjust slots for spell blended effects
    this.#applySpellBlending(spellcastingEntity, caster);

    const data = {
      _id: foundry.utils.randomID(),
      name,
      type: "spellcastingEntry",
      system: spellcastingEntity,
    };
    this.result.casters.push(data);
    return data;
  }

  #generateFocusSpellCaster(proficiency, ability, tradition) {
    const data = {
      _id: foundry.utils.randomID(),
      name: `${src_utils.capitalize(tradition)} Focus Tradition`,
      type: "spellcastingEntry",
      system: {
        ability: {
          value: ability,
        },
        proficiency: {
          value: proficiency / 2,
        },
        spelldc: {
          item: 0,
        },
        tradition: {
          value: tradition,
        },
        prepared: {
          value: "focus",
          flexible: false,
        },
        showUnpreparedSpells: { value: true },
      },
    };
    this.result.casters.push(data);
    return data;
  }

  async #loadSpell(spell, casterId, debugData) {
    const spellName = spellRename(spell.split("(")[0].trim());
    src_logger.debug("focus spell details", { spell, spellName, debugData });

    const indexMatch = this.compendiumMatchers["spells"].getMatch(spell, spellName, true);
    if (!indexMatch) {
      if (debugData.psychicAmpSpell) return undefined;
      src_logger.error(`Unable to match focus spell ${spell}`, { spell, spellName, debugData });
      this.bad.push({ pbName: spell, type: "spell", details: { originalName: spell, name: spellName, debugData } });
      return undefined;
    }

    const doc = await indexMatch.pack.getDocument(indexMatch.i._id);
    const itemData = doc.toObject();
    itemData._id = foundry.utils.randomID();
    itemData.system.location.value = casterId;

    return itemData;
  }

  // eslint-disable-next-line complexity
  async #processCasterSpells(instance, caster, spellEnhancements, forcePrepare = false) {
    const spellNames = {};
    for (const spellSelection of caster.spells) {
      const level = spellSelection.spellLevel;
      const preparedAtLevel = caster.prepared?.length > 0
        ? (caster.prepared.find((p) => p.spellLevel === level)?.list ?? [])
        : [];
      let preparedValue = 0;

      // const preparedMap = preparedAtLevel.reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());

      for (const [i, spell] of spellSelection.list.entries()) {
        src_logger.debug(`Checking spell at ${i} for level ${level}`, { spell });
        const itemData = await this.#loadSpell(spell, instance._id, {
          spellSelection,
          list: spellSelection.list,
          level,
          instance,
        });
        if (itemData) {
          itemData.system.location.heightenedLevel = level;
          spellNames[spell] = itemData._id;
          this.result.spells.push(itemData);

          // if the caster is prepared we don't prepare spells as all known spells come through in JSON
          if (instance.system.prepared.value !== "prepared"
            || spellEnhancements?.preparePBSpells
            || forcePrepare
            || (caster.spellcastingType === "prepared"
              && preparedAtLevel.length === 0 && spellSelection.list.length <= caster.perDay[level])
          ) {
            src_logger.debug(`Preparing spell ${itemData.name} for level ${level}`, { spell });
            // eslint-disable-next-line require-atomic-updates
            instance.system.slots[`slot${level}`].prepared[preparedValue] = { id: itemData._id };
            preparedValue++;
          }
        }
      }

      for (const spell of preparedAtLevel) {
        // if (spellNames.includes(spellName)) continue;
        const parsedSpell = foundry.utils.getProperty(spellNames, spell);
        const itemData = parsedSpell
          ? this.result.spells.find((s) => s._id === parsedSpell)
          : await this.#loadSpell(spell, instance._id, {
            spellSelection,
            level,
            instance,
          });
        if (itemData) {
          itemData.system.location.heightenedLevel = level;
          if (itemData && !parsedSpell) {
            spellNames[spell] = itemData._id;
            this.result.spells.push(itemData);
          }

          src_logger.debug(`Preparing spell ${itemData.name} for level ${level}`, { spellName: spell });
          // eslint-disable-next-line require-atomic-updates
          instance.system.slots[`slot${level}`].prepared[preparedValue] = { id: itemData._id };
          preparedValue++;
        } else {
          src_logger.warn(`Unable to find spell ${spell}`);
        }
      }

      if (spellEnhancements?.knownSpells) {
        for (const spell of spellEnhancements.knownSpells) {
          const itemData = await this.#loadSpell(spell, instance._id, {
            spellEnhancements,
            instance,
          });
          if (itemData && !foundry.utils.hasProperty(spellNames, itemData.name)) {
            itemData.system.location.heightenedLevel = level;
            spellNames[spell] = itemData._id;
            this.result.spells.push(itemData);
          }
        }
      }
    }
  }

  async #processFocusSpells(instance, spells) {
    for (const spell of spells) {
      const itemData = await this.#loadSpell(spell, instance._id, {
        instance,
        spells,
        spell,
      });
      if (itemData) this.result.spells.push(itemData);
      // only pull amps is the module is active
      if (spell.endsWith("(Amped)") && game.modules.get("pf2e-psychic-amps")?.active) {
        const psychicSpell = spell.replace("(Amped)", "(Psychic)");
        const psychicItemData = await this.#loadSpell(psychicSpell, instance._id, {
          instance,
          spells,
          spell: psychicSpell,
          psychicAmpSpell: true,
        });
        if (psychicItemData) {
          this.result.spells.push(psychicItemData);
        }
      }
    }
  }

  async #processRituals() {
    if (!this.source.rituals) return;
    const ritualCompendium = new CompendiumMatcher({
      type: "spells",
      indexFields: ["name", "type", "system.slug", "system.ritual"],
    });
    await ritualCompendium.loadCompendiums();

    for (const ritual of this.source.rituals) {
      const ritualName = ritual.split("(")[0].trim();
      src_logger.debug("focus spell details", { ritual, spellName: ritualName });

      const indexMatch = this.compendiumMatchers["spells"].getNameMatchWithFilter(ritualName, ritualName);
      if (!indexMatch || !foundry.utils.hasProperty(indexMatch, "system.ritual")) {
        src_logger.error(`Unable to match ritual spell ${ritual}`, { spell: ritual, spellName: ritualName });
        this.bad.push({ pbName: ritual, type: "spell", details: { originalName: ritual, name: ritualName } });
        continue;
      }

      const doc = await indexMatch.pack.getDocument(indexMatch.i._id);
      const itemData = doc.toObject();
      itemData._id = foundry.utils.randomID();

      this.result.spells.push(itemData);
    }
  }

  async #processSpells() {
    for (const caster of this.source.spellCasters) {
      src_logger.debug("Generating caster for", caster);
      if (Number.isInteger(parseInt(caster.focusPoints))) this.result.focusPool += caster.focusPoints;
      const instance = this.#generateSpellCaster(caster);
      src_logger.debug("Generated caster instance", instance);
      const spellEnhancements = Seasoning.getSpellCastingFeatureAdjustment(caster.name);
      let forcePrepare = false;
      if (foundry.utils.hasProperty(spellEnhancements, "showSlotless")) {
        instance.system.showSlotlessLevels.value = foundry.utils.getProperty(spellEnhancements, "showSlotless");
      } else if (
        caster.spellcastingType === "prepared"
        && ![this.source.class, this.source.dualClass].includes(caster.name)
      ) {
        const slotToPreparedMatch = caster.spells.every((spellBlock) => {
          const spellCount = spellBlock.list.length;
          const perDay = caster.perDay[spellBlock.spellLevel];
          return perDay === spellCount;
        });
        src_logger.debug(`Setting ${caster.name} show all slots to ${!slotToPreparedMatch}`);
        instance.system.showSlotlessLevels.value = !slotToPreparedMatch;
        forcePrepare = slotToPreparedMatch;
      }
      await this.#processCasterSpells(instance, caster, spellEnhancements, forcePrepare);
    }

    if (this.parsed.feats.some((f) => f.name === "Initiate Warden")) {
      const spellData = foundry.utils.getProperty(this.source, "focus.Unassigned.General");
      if (spellData) {
        const existing = foundry.utils.getProperty(this.source, "focus.primal.wis") ?? {};
        const merged = foundry.utils.mergeObject(existing, spellData);
        foundry.utils.setProperty(this.source, "focus.primal.wis", merged);
      }
    }

    for (const tradition of ["occult", "primal", "divine", "arcane"]) {
      const traditionData = foundry.utils.getProperty(this.source, `focus.${tradition}`);
      src_logger.debug(`Checking for focus tradition ${tradition}`);
      if (!traditionData) continue;
      for (const ability of ["str", "dex", "con", "int", "wis", "cha"]) {
        const abilityData = foundry.utils.getProperty(traditionData, ability);
        src_logger.debug(`Checking for focus tradition ${tradition} with ability ${ability}`);
        if (!abilityData) continue;
        src_logger.debug("Generating focus spellcasting ", { tradition, traditionData, ability });
        const instance = this.#generateFocusSpellCaster(abilityData.proficiency, ability, tradition);
        if (abilityData.focusCantrips && abilityData.focusCantrips.length > 0) {
          await this.#processFocusSpells(instance, abilityData.focusCantrips);
        }
        if (abilityData.focusSpells && abilityData.focusSpells.length > 0) {
          await this.#processFocusSpells(instance, abilityData.focusSpells);
        }
      }
    }

    foundry.utils.setProperty(this.result.character, "system.resources.focus.max", this.source.focusPoints);
    foundry.utils.setProperty(this.result.character, "system.resources.focus.value", this.source.focusPoints);
  }

  async #generateLores() {
    for (const lore of this.source.lores) {
      const data = {
        name: lore[0],
        type: "lore",
        system: {
          proficient: {
            value: lore[1] / 2,
          },
          featType: "",
          mod: {
            value: 0,
          },
          item: {
            value: 0,
          },
        },
      };
      this.result.lores.push(data);
    }
  }

  async #generateMoney() {
    const compendium = game.packs.get("pf2e.equipment-srd");
    const index = await compendium.getIndex({ fields: ["name", "type", "system.slug"] });
    const moneyLookup = [
      { slug: "platinum-pieces", type: "pp" },
      { slug: "gold-pieces", type: "gp" },
      { slug: "silver-pieces", type: "sp" },
      { slug: "copper-pieces", type: "cp" },
    ];

    for (const lookup of moneyLookup) {
      const indexMatch = index.find((i) => i.system.slug === lookup.slug);
      if (indexMatch) {
        const doc = await compendium.getDocument(indexMatch._id);
        const itemData = doc.toObject();
        itemData._id = foundry.utils.randomID();
        itemData.system.quantity = this.source.money[lookup.type];
        this.result.money.push(itemData);
      }
    }
  }

  async #processFormulas() {
    const uuids = [];

    for (const formulaSource of this.source.formula) {
      for (const formulaName of formulaSource.known) {
        const indexMatch = this.compendiumMatchers["formulas"].getMatch(formulaName, formulaName);
        if (!indexMatch) {
          src_logger.error(`Unable to match formula ${formulaName}`, { formulaSource, name: formulaName });
          this.bad.push({ pbName: formulaName, type: "formula", details: { formulaSource, name: formulaName } });
          continue;
        }
        const doc = await indexMatch.pack.getDocument(indexMatch.i._id);
        uuids.push({ uuid: doc.uuid });
      }
    }
    foundry.utils.setProperty(this.result.character, "system.crafting.formulas", uuids);
  }

  async #processFeats() {
    this.#sortParsedFeats();
    // pre pass for standard items
    for (let i = 1; i <= this.characterLevel; i++) {
      foundry.utils.setProperty(this.result.character, "system.details.level.value", i);
      if (i > 1) await this.#processGrantedLookupItemsAtLevel("class", i);
      await this.#generateFeatItems("feats", { typeFilter: "Ancestry Feat", levelCap: i, excludeChild: true, excludeParents: true });
      await this.#generateFeatItems("feats", { typeFilter: "Skill Feat", levelCap: i, excludeChild: true, excludeParents: true });
      await this.#generateFeatItems("feats", { typeFilter: "Class Feat", levelCap: i, excludeChild: true, excludeParents: true });
      await this.#generateFeatItems("feats", { typeFilter: "General Feat", levelCap: i, excludeChild: true, excludeParents: true });
    }
    await this.#generateFeatItems("ancestryFeatures", { excludeChild: true, excludeParents: true });
    // prepass for non-child items
    for (let i = 1; i <= this.characterLevel; i++) {
      await this.#generateFeatItems("feats", { typeFilter: "Ancestry Feat", levelCap: i, excludeChild: true });
      await this.#generateFeatItems("feats", { typeFilter: "Skill Feat", levelCap: i, excludeChild: true });
      await this.#generateFeatItems("feats", { typeFilter: "Class Feat", levelCap: i, excludeChild: true });
      await this.#generateFeatItems("feats", { typeFilter: "General Feat", levelCap: i, excludeChild: true });
      await this.#generateFeatItems("feats", { typeFilter: "Archetype Feat", levelCap: i, excludeChild: true });
    }
    await this.#generateFeatItems("ancestryFeatures", { excludeChild: true });

    await this.#generateFeatItems("feats", { typeFilter: "Ancestry Feat" });
    await this.#generateFeatItems("feats", { typeFilter: "Skill Feat" });
    await this.#generateFeatItems("feats", { typeFilter: "Class Feat" });
    await this.#generateFeatItems("feats", { typeFilter: "General Feat" });
    await this.#generateFeatItems("feats", { typeFilter: "Archetype Feat" });

    this.#setSkills();
    // final pass, include all
    this.#statusUpdate(1, 5, "Feats");
    await this.#generateFeatItems("feats");
    this.#statusUpdate(2, 5, "Feats");
    await this.#generateFeatItems("ancestryFeatures");
    this.#statusUpdate(3, 5, "Feats");
    // await this.#generateSpecialItems("ancestryFeatures");
    // this.#statusUpdate(4, 5, "Feats");
    // await this.#generateSpecialItems("classFeatures");
    // this.#statusUpdate(5, 5, "Feats");
    // await this.#generateSpecialItems("actions");
  }

  async #processEquipment() {
    this.#statusUpdate(1, 4, "Equipment");
    await this.#processEquipmentItems();
    this.#statusUpdate(2, 4, "Weapons");
    await this.#generateWeaponItems();
    this.#statusUpdate(3, 4, "Armor");
    await this.#generateArmorItems();
    this.#statusUpdate(2, 4, "Money");
    await this.#generateMoney();
  }

  async #generateTempActor({ documents = [], includePassedDocumentsRules = false, includeGrants = false,
    includeFlagsOnly = false, processedRules = [], otherDocs = [] } = {}
  ) {
    const actorData = foundry.utils.mergeObject({ type: "character", flags: { pathmuncher: { temp: true } } }, this.result.character);
    actorData.name = `Mr Temp (${this.result.character.name})`;
    if (documents.map((d) => d.name.split("(")[0].trim().toLowerCase()).includes("skill training")) {
      delete actorData.system.skills;
    }

    const actor = await Actor.create(actorData, { renderSheet: false });
    const currentState = foundry.utils.duplicate(this.result);

    // console.warn("Initial temp actor", {
    //   initialTempActor: foundry.utils.deepClone(actor),
    //   documents,
    //   includePassedDocumentsRules,
    //   includeGrants,
    //   includeFlagsOnly,
    //   processedRules,
    //   otherDocs,
    //   this: this,
    // });

    const currentItems = [
      ...currentState.deity,
      ...currentState.ancestry,
      ...currentState.heritage,
      ...currentState.background,
      ...currentState.class,
      ...currentState.lores,
      ...currentState.feats,
      ...currentState.casters,
      // ...currentState.spells,
      // ...currentState.equipment,
      // ...currentState.weapons,
      // ...currentState.armor,
      // ...currentState.treasure,
      // ...currentState.money,
    ];
    currentItems.push(...otherDocs.filter((d) => !currentItems.some((i) => i._id === d._id)));
    for (const doc of documents) {
      if (!currentItems.some((d) => d._id === doc._id)) {
        currentItems.push(foundry.utils.deepClone(doc));
      }
    }
    try {
      // if the rule selected is an object, id doesn't take on import
      const ruleUpdates = [];
      for (const i of foundry.utils.deepClone(currentItems)) {
        if (!i.system.rules || i.system.rules.length === 0) continue;
        const isPassedDocument = documents.some((d) => d._id === i._id);
        if (isPassedDocument && processedRules.length > 0) {
          i.system.rules = foundry.utils.deepClone(processedRules);
          continue;
        } else if (isPassedDocument && !includePassedDocumentsRules && !includeFlagsOnly) {
          continue;
        }

        const objectSelectionRules = i.system.rules
          .filter((r) => {
            const evaluateRules = ["RollOption", "ChoiceSet"].includes(r.key) && (r.selection || r.domain === "all");
            return !includeFlagsOnly || evaluateRules; // && ["RollOption", "GrantItem", "ChoiceSet", "ActiveEffectLike"].includes(r.key);
            // || (["ChoiceSet"].includes(r.key) && r.selection);
          })
          .map((r) => {
            r.ignored = false;
            return r;
          });

        if (objectSelectionRules.length > 0) {
          ruleUpdates.push({
            _id: i._id,
            system: {
              rules: objectSelectionRules,
            },
          });
        }
      }

      // console.warn("Rule updates", foundry.utils.duplicate(ruleUpdates));

      const items = foundry.utils.duplicate(currentItems).map((i) => {
        if (i.system.items) i.system.items = [];
        if (i.system.rules) {
          i.system.rules = i.system.rules
            .filter((r) => {
              const isOtherDocument = otherDocs.some((d) => d._id === i._id);
              if (isOtherDocument) return true;
              const isPassedDocument = documents.some((d) => d._id === i._id);
              const isChoiceSetSelection = ["ChoiceSet"].includes(r.key) && r.selection;
              // const choiceSetSelectionNotObject = isChoiceSetSelection && !utils.isObject(r.selection);
              const grantRuleWithoutFlag = includeGrants && ["GrantItem"].includes(r.key) && !r.flag;
              const genericDiscardRule = ["ChoiceSet", "GrantItem"].includes(r.key);
              const grantRuleFromItemFlag = ["GrantItem"].includes(r.key) && r.uuid.includes("{item|flags");
              const includeGrantRuleFromItemFlag = includeGrants && grantRuleFromItemFlag;
              const allowedMiscKeys = ["RollOption", "ActiveEffectLike"].includes(r.key);

              const notPassedDocumentRules
                = !isPassedDocument
                && (grantRuleWithoutFlag
                  // || choiceSetSelectionNotObject
                  || !genericDiscardRule
                  || includeGrantRuleFromItemFlag
                  || allowedMiscKeys);

              const passedDocumentRules
                = isPassedDocument
                && includePassedDocumentsRules
                && (isChoiceSetSelection || grantRuleWithoutFlag || includeGrantRuleFromItemFlag || allowedMiscKeys);

              return notPassedDocumentRules || passedDocumentRules;
            })
            .map((r) => {
              // if choices is a string or an object then we replace with the query string results
              if ((src_utils.isString(r.choices) || src_utils.isObject(r.choices)) && r.choiceQueryResults) {
                r.choices = r.choiceQueryResults;
              }
              r.ignored = false;
              return r;
            });
          if (documents.some((d) => d._id === i._id) && processedRules.length > 0 && includeFlagsOnly) {
            i.system.rules = foundry.utils.deepClone(processedRules).filter((r) => {
              const grantRuleFromItemFlag = ["GrantItem"].includes(r.key) && r.uuid.includes("{item|flags");
              if (!grantRuleFromItemFlag) return true;
              if (grantRuleFromItemFlag && r.alterations) return true;
              return false;
            });
          }
        }
        return i;
      });

      src_logger.debug("Creating temp actor items", items);
      await actor.createEmbeddedDocuments("Item", items, { keepId: true });
      // for (const item of items) {
      //   console.warn("Item", item);
      //   await actor.createEmbeddedDocuments("Item", [item], { keepId: true });
      // }
      src_logger.debug("restoring selection rules to temp items", ruleUpdates);
      await actor.updateEmbeddedDocuments("Item", ruleUpdates);

      const itemUpdates = [];
      for (const [key, value] of Object.entries(this.autoAddedFeatureItems)) {
        itemUpdates.push({
          _id: `${key}`,
          system: {
            items: foundry.utils.deepClone(value),
          },
        });
      }

      src_logger.debug("Restoring temp item items");
      await actor.updateEmbeddedDocuments("Item", itemUpdates);

      src_logger.debug("Final temp actor", actor);
    } catch (err) {
      src_logger.error("Temp actor creation failed", {
        actor,
        documents,
        thisData: foundry.utils.deepClone(this.result),
        actorData,
        err,
        currentItems,
        this: this,
      });
    }
    return actor;
  }

  async processCharacter() {
    if (!this.source) return;
    await this.#prepare();
    this.#statusUpdate(1, 12, "Character");
    await this.#processCore();
    this.#statusUpdate(2, 12, "Formula");
    await this.#processFormulas();
    this.#statusUpdate(3, 12, "Deity");
    await this.#processGenericCompendiumLookup("deities", this.source.deity, "deity");

    this.#statusUpdate(4, 12, "Ancestry");
    await this.#processGenericCompendiumLookup("ancestries", this.source.ancestry, "ancestry");
    this.#statusUpdate(5, 12, "Heritage");
    await this.#processGenericCompendiumLookup("heritages", this.source.heritage, "heritage");
    this.#statusUpdate(6, 12, "Background");
    await this.#processGenericCompendiumLookup("backgrounds", this.source.background, "background");

    this.#setSkills(true);
    this.#setLanguages();

    this.#statusUpdate(7, 12, "Class");
    await this.#processGenericCompendiumLookup("classes", this.source.class, "class", 1);

    this.#setAbilityBoosts();

    this.#statusUpdate(8, 12, "FeatureRec");
    await this.#processFeats();
    this.#statusUpdate(10, 12, "Equipment");
    await this.#processEquipment();
    this.#statusUpdate(11, 12, "Spells");
    await this.#processSpells();
    this.#statusUpdate(11, 12, "Rituals");
    await this.#processRituals();
    this.#statusUpdate(12, 12, "Lores");
    await this.#generateLores();
  }

  async #removeDocumentsToBeUpdated() {
    const moneyIds = this.actor.items.filter((i) =>
      i.type === "treasure"
      && ["Platinum Pieces", "Gold Pieces", "Silver Pieces", "Copper Pieces"].includes(i.name)
    );
    const classIds = this.actor.items.filter((i) => i.type === "class").map((i) => i._id);
    const deityIds = this.actor.items.filter((i) => i.type === "deity").map((i) => i._id);
    const backgroundIds = this.actor.items.filter((i) => i.type === "background").map((i) => i._id);
    const heritageIds = this.actor.items.filter((i) => i.type === "heritage").map((i) => i._id);
    const ancestryIds = this.actor.items.filter((i) => i.type === "ancestry").map((i) => i._id);
    const treasureIds = this.actor.items
      .filter((i) => i.type === "treasure" && !moneyIds.includes(i.id))
      .map((i) => i._id);
    const featIds = this.actor.items.filter((i) => i.type === "feat").map((i) => i._id);
    const actionIds = this.actor.items.filter((i) => i.type === "action").map((i) => i._id);
    const equipmentIds = this.actor.items
      .filter((i) => i.type === "equipment" || i.type === "backpack" || i.type === "consumable")
      .map((i) => i._id);
    const weaponIds = this.actor.items.filter((i) => i.type === "weapon").map((i) => i._id);
    const armorIds = this.actor.items.filter((i) => i.type === "armor").map((i) => i._id);
    const loreIds = this.actor.items.filter((i) => i.type === "lore").map((i) => i._id);
    const spellIds = this.actor.items
      .filter((i) => i.type === "spell" || i.type === "spellcastingEntry")
      .map((i) => i._id);
    const formulaIds = this.actor.system.formulas;

    src_logger.debug("ids", {
      moneyIds,
      deityIds,
      classIds,
      backgroundIds,
      heritageIds,
      ancestryIds,
      treasureIds,
      featIds,
      actionIds,
      equipmentIds,
      weaponIds,
      armorIds,
      loreIds,
      spellIds,
      formulaIds,
    });
    // eslint-disable-next-line complexity
    const keepIds = this.actor.items.filter((i) =>
      (!this.options.addMoney && moneyIds.includes(i._id))
      || (!this.options.addClass && classIds.includes(i._id))
      || (!this.options.addDeity && deityIds.includes(i._id))
      || (!this.options.addBackground && backgroundIds.includes(i._id))
      || (!this.options.addHeritage && heritageIds.includes(i._id))
      || (!this.options.addAncestry && ancestryIds.includes(i._id))
      || (!this.options.addTreasure && treasureIds.includes(i._id))
      || (!this.options.addFeats && (featIds.includes(i._id) || actionIds.includes(i._id)))
      || (!this.options.addEquipment && equipmentIds.includes(i._id))
      || (!this.options.addWeapons && weaponIds.includes(i._id))
      || (!this.options.addArmor && armorIds.includes(i._id))
      || (!this.options.addLores && loreIds.includes(i._id))
      || (!this.options.addSpells && spellIds.includes(i._id))
    ).map((i) => i._id);

    const deleteIds = this.actor.items.filter((i) => !keepIds.includes(i._id)).map((i) => i._id);
    src_logger.debug("ids", {
      deleteIds,
      keepIds,
    });
    await this.actor.deleteEmbeddedDocuments("Item", deleteIds);
  }

  async #createAndUpdateItemsWithRuleRestore(items) {
    const ruleUpdates = [];

    const newItems = foundry.utils.deepClone(items);

    for (const item of newItems) {
      if (item.system.rules?.length > 0) {
        ruleUpdates.push({
          _id: item._id,
          system: {
            rules: foundry.utils.deepClone(item.system.rules).map((r) => {
              delete r.choiceQueryResults;
              return r;
            }),
          },
        });
        item.system.rules = item.system.rules
          .filter((r) => {
            const excludedKeys = ["ActiveEffectLike", "AdjustModifier", "Resistance", "Strike"].includes(r.key);
            const grantItemWithFlags = ["GrantItem"].includes(r.key)
              && (foundry.utils.hasProperty(r, "flag") || foundry.utils.getProperty(r, "pathmuncherImport"));
            const objectSelection = ["ChoiceSet"].includes(r.key) && src_utils.isObject(r.selection);
            return !excludedKeys && !grantItemWithFlags && !objectSelection;
          })
          .map((r) => {
            if (r.key === "ChoiceSet") {
              if ((src_utils.isString(r.choices) || src_utils.isObject(r.choices)) && r.choiceQueryResults) {
                r.choices = r.choiceQueryResults;
              }
              if (Array.isArray(r.choices)) {
                r.choices = r.choices.map((c) => {
                  delete c.predicate;
                  return c;
                });
              }
            }
            if (r.pathmuncherImport) r.pathmuncherImport = undefined;
            return r;
          });
      }
    }

    src_logger.debug("Creating items", newItems);
    await this.actor.createEmbeddedDocuments("Item", newItems, { keepId: true });
    src_logger.debug("Rule updates", ruleUpdates);
    await this.actor.updateEmbeddedDocuments("Item", ruleUpdates);
  }

  async #updateItems(type) {
    src_logger.debug(`Updating ${type}`, this.result[type]);
    await this.actor.updateEmbeddedDocuments("Item", this.result[type]);
  }

  async #createActorEmbeddedDocuments() {
    this.#statusUpdate(1, 12, "Character", "Eating");
    if (this.options.addDeity) await this.#createAndUpdateItemsWithRuleRestore(this.result.deity);
    if (this.options.addAncestry) await this.#createAndUpdateItemsWithRuleRestore(this.result.ancestry);
    if (this.options.addHeritage) await this.#createAndUpdateItemsWithRuleRestore(this.result.heritage);
    if (this.options.addBackground) await this.#createAndUpdateItemsWithRuleRestore(this.result.background);
    if (this.options.addClass) await this.#createAndUpdateItemsWithRuleRestore(this.result.class);
    if (this.options.addLores) await this.#createAndUpdateItemsWithRuleRestore(this.result.lores);

    const featNums = this.result.feats.length;
    if (this.options.addFeats) {
      for (const [i, feat] of this.result.feats.entries()) {
        // console.warn(`creating ${feat.name}`, feat);
        this.#statusUpdate(i, featNums, "Feats", "Eating");
        await this.#createAndUpdateItemsWithRuleRestore([feat]);
      }
    }
    // if (this.options.addFeats) await this.#createAndUpdateItemsWithRuleRestore(this.result.feats);
    if (this.options.addSpells) {
      this.#statusUpdate(3, 12, "Spells", "Eating");
      await this.#createAndUpdateItemsWithRuleRestore(this.result.casters);
      await this.#createAndUpdateItemsWithRuleRestore(this.result.spells);
    }
    this.#statusUpdate(4, 12, "Equipment", "Eating");
    if (this.options.addEquipment) {
      await this.#createAndUpdateItemsWithRuleRestore(this.result.equipment);
      await this.#updateItems("equipment");
    }
    if (this.options.addWeapons) await this.#createAndUpdateItemsWithRuleRestore(this.result.weapons);
    if (this.options.addArmor) {
      await this.#createAndUpdateItemsWithRuleRestore(this.result.armor);
      await this.#updateItems("armor");
    }
    if (this.options.addTreasure) await this.#createAndUpdateItemsWithRuleRestore(this.result.treasure);
    if (this.options.addMoney) await this.#createAndUpdateItemsWithRuleRestore(this.result.money);
  }

  async #restoreEmbeddedRuleLogic() {
    const importedItems = this.actor.items.map((i) => i._id);
    // Loop back over items and add rule and item progression data back in.
    src_logger.debug("Restoring logic", { currentActor: foundry.utils.duplicate(this.actor) });
    const itemUpdates = [];
    for (const [key, value] of Object.entries(this.autoAddedFeatureItems)) {
      if (importedItems.includes(key)) {
        itemUpdates.push({
          _id: `${key}`,
          system: {
            items: foundry.utils.deepClone(value),
          },
        });
      }
    }
    this.#statusUpdate(1, 12, "Feats", "Clearing");
    src_logger.debug("Restoring granted item logic", itemUpdates);
    await this.actor.updateEmbeddedDocuments("Item", itemUpdates);

    await this.actor.update({
      "system.resources.focus": this.result.character.system.resources.focus,
    });
  }

  static async removeTempActors() {
    for (const actor of game.actors.filter((a) => foundry.utils.getProperty(a, "flags.pathmuncher.temp") === true)) {
      await actor.delete();
    }
  }

  async updateActor() {
    await this.#removeDocumentsToBeUpdated();

    if (!this.options.addName) {
      delete this.result.character.name;
      delete this.result.character.prototypeToken.name;
    }
    if (!this.options.addFormulas) {
      delete this.result.character.system.formulas;
    }

    if (!this.boosts.custom) {
      foundry.utils.setProperty(this.result.character, `system.abilities`, null);
    }

    src_logger.debug("Generated result", this.result);
    await this.actor.update(this.result.character);
    await this.#createActorEmbeddedDocuments();
    await this.#restoreEmbeddedRuleLogic();
    await Pathmuncher.removeTempActors();
  }

  async postImportCheck() {
    const badClass = this.options.addClass
      ? this.bad.filter((b) => b.type === "class").map((b) => `<li>${game.i18n.localize("pathmuncher.Labels.Class")}: ${b.pbName}</li>`)
      : [];
    const badHeritage = this.options.addHeritage
      ? this.bad.filter((b) => b.type === "heritage").map((b) => `<li>${game.i18n.localize("pathmuncher.Labels.Heritage")}: ${b.pbName}</li>`)
      : [];
    const badAncestry = this.options.addAncestry
      ? this.bad.filter((b) => b.type === "ancestry").map((b) => `<li>${game.i18n.localize("pathmuncher.Labels.Ancestry")}: ${b.pbName}</li>`)
      : [];
    const badBackground = this.options.addBackground
      ? this.bad.filter((b) => b.type === "background").map((b) => `<li>${game.i18n.localize("pathmuncher.Labels.Background")}: ${b.pbName}</li>`)
      : [];
    const badDeity = this.options.addDeity
      ? this.bad.filter((b) => b.type === "deity" && b.pbName !== "Not set" && b.pbName !== "").map((b) => `<li>${game.i18n.localize("pathmuncher.Labels.Deity")}: ${b.pbName}</li>`)
      : [];
    const badFeats = this.options.addFeats
      ? this.bad.filter((b) => b.type === "feat").map((b) => `<li>${game.i18n.localize("pathmuncher.Labels.Feats")}: ${b.pbName}</li>`)
      : [];
    const badFeats2 = this.options.addFeats
      ? Object.values(this.check).filter((b) =>
        b.type === "feat"
        && this.parsed.feats.some((f) => f.name === b.details.name && !f.added)
        && !BAD_IGNORE_FEATURES(b.details.name)
      ).map((b) => `<li>${game.i18n.localize("pathmuncher.Labels.Feats")}: ${b.details.name}</li>`)
      : [];
    const badSpecials = this.options.addFeats
      ? Object.values(this.check).filter((b) =>
        (b.type === "special")
        && this.parsed.specials.some((f) => f.name === b.details.name && !f.added)
        && !BAD_IGNORE_FEATURES(b.details.name)
      ).map((b) => `<li>${game.i18n.localize("pathmuncher.Labels.Specials")}: ${b.details.originalName}</li>`)
      : [];
    const badEquipment = this.options.addEquipment
      ? this.bad.filter((b) => b.type === "equipment").map((b) => `<li>${game.i18n.localize("pathmuncher.Labels.Equipment")}: ${b.pbName}</li>`)
      : [];
    const badWeapons = this.options.addWeapons
      ? this.bad.filter((b) => b.type === "weapons").map((b) => `<li>${game.i18n.localize("pathmuncher.Labels.Weapons")}: ${b.pbName}</li>`)
      : [];
    const badArmor = this.options.addArmor
      ? this.bad.filter((b) => b.type === "armor").map((b) => `<li>${game.i18n.localize("pathmuncher.Labels.Armor")}: ${b.pbName}</li>`)
      : [];
    const badSpellcasting = this.options.addSpells
      ? this.bad.filter((b) => b.type === "spellcasting").map((b) => `<li>${game.i18n.localize("pathmuncher.Labels.Spellcasting")}: ${b.pbName}</li>`)
      : [];
    const badSpells = this.options.addSpells
      ? this.bad.filter((b) => b.type === "spells").map((b) => `<li>${game.i18n.localize("pathmuncher.Labels.Spells")}: ${b.pbName}</li>`)
      : [];
    const badFamiliars = this.options.addFamiliars
      ? this.bad.filter((b) => b.type === "familiars").map((b) => `<li>${game.i18n.localize("pathmuncher.Labels.Familiars")}: ${b.pbName}</li>`)
      : [];
    const badFormulas = this.options.addFormulas
      ? this.bad.filter((b) => b.type === "formulas").map((b) => `<li>${game.i18n.localize("pathmuncher.Labels.Formulas")}: ${b.pbName}</li>`)
      : [];
    const totalBad = [
      ...badClass,
      ...badAncestry,
      ...badHeritage,
      ...badBackground,
      ...badDeity,
      ...badFeats,
      ...badFeats2,
      ...badSpecials,
      ...badEquipment,
      ...badWeapons,
      ...badArmor,
      ...badSpellcasting,
      ...badSpells,
      ...badFamiliars,
      ...badFormulas,
    ];

    let warning = "";

    if (totalBad.length > 0) {
      warning += `<p>${game.i18n.localize("pathmuncher.Dialogs.Pathmuncher.MissingItemsOpen")}</p><ul>${totalBad.join("\n")}</ul><br>`;
    }

    src_logger.debug("Bad thing check", {
      badClass,
      badAncestry,
      badHeritage,
      badBackground,
      badDeity,
      badFeats,
      badFeats2,
      badSpecials,
      badEquipment,
      badWeapons,
      badArmor,
      badSpellcasting,
      badSpells,
      badFamiliars,
      badFormulas,
      totalBad,
      count: totalBad.length,
      focusPool: this.result.focusPool,
      warning,
    });

    if (totalBad.length > 0) {
      ui.notifications.warn(game.i18n.localize("pathmuncher.Dialogs.Pathmuncher.CompletedWithNotes"));
      new Dialog({
        title: game.i18n.localize("pathmuncher.Dialogs.Pathmuncher.ImportNotes"),
        content: warning,
        buttons: {
          yes: {
            icon: "<i class='fas fa-check'></i>",
            label: game.i18n.localize("pathmuncher.Labels.Finished"),
          },
        },
        default: "yes",
      }).render(true);
    } else {
      ui.notifications.info(game.i18n.localize("pathmuncher.Dialogs.Pathmuncher.CompletedSuccess"));
    }
  }
}

;// CONCATENATED MODULE: ./src/app/PetShop.js
/* eslint-disable no-await-in-loop */
/* eslint-disable no-continue */





/**
 * The PetShop class looks for familiars in a Pathmunch data set and creates/updates as appropriate.
 */
class PetShop {


  constructor ({ type = "familiar", parent, pathbuilderJson } = {}) {
    this.parent = parent;
    this.pathbuilderJson = pathbuilderJson;
    this.type = type;

    this.result = {
      pets: [],
      features: {},
    };

    this.bad = {};
    this.folders = {};
  }


  async ensureFolder(type) {
    const folderName = game.i18n.localize(`${constants.FLAG_NAME}.Folders.${type}`);
    this.folders[type] = await src_utils.getOrCreateFolder(this.parent.folder, "Actor", folderName);
  }

  async #existingPetCheck(petName, type) {
    const existingPet = game.actors.find((a) =>
      a.type === type.toLowerCase()
      && a.name === petName
      && a.system.master.id === this.parent._id
    );

    if (existingPet) return existingPet.toObject();

    const actorData = {
      type: type.toLowerCase(),
      name: petName,
      system: {
        master: {
          id: this.parent._id,
          ability: this.parent.system.details.keyability.value,
        },
      },
      prototypeToken: {
        name: petName,
      },
      folder: this.folders[type].id,
    };
    const actor = await Actor.create(actorData);
    return actor.toObject();

  }

  #buildCore(petData) {
    foundry.utils.setProperty(petData, "system.attributes.value", this.parent.system.details.level.value * 5);
    return petData;
  }

  async #generatePetFeatures(pet, json) {
    const compendium = game.packs.get("pf2e.familiar-abilities");
    const index = await compendium.getIndex({ fields: ["name", "type", "system.slug"] });
    this.result.features[pet._id] = [];
    this.bad[pet._id] = [];

    for (const featureName of json.abilities) {
      const indexMatch = index.find((i) => i.system.slug === game.pf2e.system.sluggify(featureName));
      if (!indexMatch) {
        src_logger.warn(`Unable to match pet feature ${featureName}`, { pet, json, name: featureName });
        this.bad[pet._id].push({ pbName: featureName, type: "feature", details: { pet, json, name: featureName } });
        continue;
      }
      const doc = (await compendium.getDocument(indexMatch._id)).toObject();
      doc._id = foundry.utils.randomID();
      this.result.features[pet._id].push(doc);
    }
  }

  async buildPet(json) {
    const name = json.name === json.type || !json.name.includes("(")
      ? `${this.parent.name}'s ${json.type}`
      : json.name.split("(")[1].split(")")[0];
    const petData = await this.#existingPetCheck(name, json.type);
    const pet = this.#buildCore(petData);
    await this.#generatePetFeatures(pet, json);
    this.result.pets.push(pet);
  }

  async updatePets() {
    for (const petData of this.result.pets) {
      const actor = game.actors.get(petData._id);
      await actor.deleteEmbeddedDocuments("Item", [], { deleteAll: true });
      await actor.update(petData);
      await actor.createEmbeddedDocuments("Item", this.result.features[petData._id], { keepId: true });
    }
  }

  async processPets() {
    const petData = this.type === "familiar" && this.pathbuilderJson.familiars
      ? this.pathbuilderJson.familiars
      : this.pathbuilderJson.pets.filter((p) => this.type === p.type.toLowerCase());
    await this.ensureFolder(src_utils.capitalize(this.type));
    for (const petJson of petData) {
      await this.buildPet(petJson);
    }

    await this.updatePets();

    src_logger.debug("Pets", {
      results: this.results,
      bad: this.bad,
    });
  }

  async addPetEffects() {
    const features = [];
    for (const petData of this.result.pets) {
      for (const feature of this.result.features[petData._id].filter((f) => f.system.rules?.some((r) => r.key === "ActiveEffectLike"))) {
        if (!this.parent.items.some((i) => i.type === "effect" && i.system.slug === feature.system.slug)) {
          features.push(feature);
        }
      }
    }
    await this.parent.createEmbeddedDocuments("Item", features);
  }

}

;// CONCATENATED MODULE: ./src/app/PathmuncherImporter.js






class PathmuncherImporter extends FormApplication {

  constructor(options, actor) {
    super(options);
    this.actor = game.actors.get(actor.id ? actor.id : actor._id);
    this.backup = foundry.utils.duplicate(this.actor);
    this.mode = "number";
  }

  static get defaultOptions() {
    const options = super.defaultOptions;
    options.title = game.i18n.localize(`${constants.FLAG_NAME}.Dialogs.PathmuncherImporter.Title`);
    options.template = `${constants.PATH}/templates/pathmuncher.hbs`;
    options.classes = ["pathmuncher"];
    options.id = "pathmuncher";
    options.width = 400;
    options.closeOnSubmit = false;
    options.tabs = [{ navSelector: ".tabs", contentSelector: "form", initial: "number" }];
    return options;
  }

  /** @override */
  async getData() {
    const flags = src_utils.getFlags(this.actor);

    return {
      flags,
      id: flags?.pathbuilderId ?? "",
      actor: this.actor,
    };
  }

  /** @override */
  activateListeners(html) {
    super.activateListeners(html);
    $("#pathmuncher").css("height", "auto");

    $(html)
      .find('.item')
      .on("click", (event) => {
        if (!event.target?.dataset?.tab) return;
        this.mode = event.target.dataset.tab;
      });
  }

  static _updateProgress(total, count, type, prefixLabel = "Cooking") {
    const localizedType = game.i18n.localize(`pathmuncher.Labels.${type}`);
    const progressBar = document.getElementById("pathmuncher-status");
    progressBar.style.width = `${Math.trunc((count / total) * 100)}%`;
    progressBar.innerHTML = `<span>${game.i18n.localize(`pathmuncher.Labels.${prefixLabel}`)} (${localizedType})...</span>`;
  }

  async _updateObject(event, formData) {
    document.getElementById("pathmuncher-button").disabled = true;
    const pathbuilderId = formData.textBoxBuildID;
    const options = {
      pathbuilderId,
      addMoney: formData.checkBoxMoney,
      addFeats: formData.checkBoxFeats,
      addSpells: formData.checkBoxSpells,
      adjustBlendedSlots: formData.checkBoxBlendedSlots,
      addEquipment: formData.checkBoxEquipment,
      addTreasure: formData.checkBoxTreasure,
      addLores: formData.checkBoxLores,
      addWeapons: formData.checkBoxWeapons,
      addArmor: formData.checkBoxArmor,
      addDeity: formData.checkBoxDeity,
      addName: formData.checkBoxName,
      addClass: formData.checkBoxClass,
      addBackground: formData.checkBoxBackground,
      addHeritage: formData.checkBoxHeritage,
      addAncestry: formData.checkBoxAncestry,
      addFamiliars: formData.checkBoxFamiliars,
      addFormulas: formData.checkBoxFormulas,
      statusCallback: PathmuncherImporter._updateProgress.bind(this),
    };
    src_logger.debug("Pathmuncher options", options);

    await src_utils.setFlags(this.actor, options);

    const statusBar = document.getElementById("pathmuncher-import-progress");
    statusBar.classList.toggle("import-hidden");

    const pathmuncher = new Pathmuncher(this.actor, options);
    if (this.mode === "number") {
      await pathmuncher.fetchPathbuilder(pathbuilderId);
    } else if (this.mode === "json") {
      try {
        const jsonData = JSON.parse(formData.textBoxBuildJSON.trim());
        pathmuncher.source = jsonData.build;
      } catch (err) {
        ui.notifications.error("Unable to parse JSON data");
        return;
      }
    }

    src_logger.debug("Pathmuncher Source", pathmuncher.source);
    await pathmuncher.processCharacter();
    src_logger.debug("Post processed character", pathmuncher);
    await pathmuncher.updateActor();
    src_logger.debug("Final import details", {
      actor: this.actor,
      pathmuncher,
      options,
      pathbuilderSource: pathmuncher.source,
      pathbuilderId,
    });

    if (options.addFamiliars) {
      const petShop = new PetShop({
        type: "familiar",
        parent: this.actor,
        pathbuilderJson: pathmuncher.source
      });
      await petShop.processPets();
      await petShop.addPetEffects();
    }
    this.close();
    await pathmuncher.postImportCheck();
  }

}

;// CONCATENATED MODULE: ./src/hooks/api.js











function registerAPI() {
  game.modules.get(constants.MODULE_NAME).api = {
    Pathmuncher: Pathmuncher,
    PathmuncherImporter: PathmuncherImporter,
    PetShop: PetShop,
    CompendiumMatcher: CompendiumMatcher,
    Seasoning: Seasoning,
    CompendiumSelector: CompendiumSelector,
    data: {
      generateFeatMap: FEAT_RENAME_MAP,
      equipment: EQUIPMENT_RENAME_MAP,
      restrictedEquipment: RESTRICTED_EQUIPMENT,
      feats: FEAT_RENAME_MAP(),
    },
    utils: src_utils,
    CONSTANTS: constants,
  };
}

;// CONCATENATED MODULE: ./src/hooks/settings.js



async function resetSettings() {
  for (const [name, data] of Object.entries(constants.GET_DEFAULT_SETTINGS())) {
    // eslint-disable-next-line no-await-in-loop
    await game.settings.set(constants.MODULE_NAME, name, data.default);
  }
  window.location.reload();
}

class ResetSettingsDialog extends FormApplication {
  constructor(...args) {
    super(...args);
    // eslint-disable-next-line no-constructor-return
    return new Dialog({
      title: game.i18n.localize(`${constants.FLAG_NAME}.Dialogs.ResetSettings.Title`),
      content: `<p class="${constants.FLAG_NAME}-dialog-important">${game.i18n.localize(
        `${constants.FLAG_NAME}.Dialogs.ResetSettings.Content`
      )}</p>`,
      buttons: {
        confirm: {
          icon: '<i class="fas fa-check"></i>',
          label: game.i18n.localize(`${constants.FLAG_NAME}.Dialogs.ResetSettings.Confirm`),
          callback: () => {
            resetSettings();
          },
        },
        cancel: {
          icon: '<i class="fas fa-times"></i>',
          label: game.i18n.localize(`${constants.FLAG_NAME}.Dialogs.ResetSettings.Cancel`),
        },
      },
      default: "cancel",
    });
  }
}

function registerSettings() {
  game.settings.registerMenu(constants.MODULE_NAME, "resetToDefaults", {
    name: `${constants.FLAG_NAME}.Settings.Reset.Title`,
    label: `${constants.FLAG_NAME}.Settings.Reset.Label`,
    hint: `${constants.FLAG_NAME}.Settings.Reset.Hint`,
    icon: "fas fa-refresh",
    type: ResetSettingsDialog,
    restricted: true,
  });

  for (const [name, data] of Object.entries(constants.GET_DEFAULT_SETTINGS())) {
    game.settings.register(constants.MODULE_NAME, name, data);
  }

  game.settings.registerMenu(constants.MODULE_NAME, "selectCustomCompendiums", {
    name: `${constants.FLAG_NAME}.Settings.UseCustomCompendiumMappings.Title`,
    label: `${constants.FLAG_NAME}.Settings.UseCustomCompendiumMappings.Label`,
    hint: `${constants.FLAG_NAME}.Settings.UseCustomCompendiumMappings.Hint`,
    icon: "fas fa-book",
    type: CompendiumSelector,
    restricted: true,
  });

}

;// CONCATENATED MODULE: ./src/hooks/sheets.js




function registerSheetButton() {

  const trustedUsersOnly = src_utils.setting("RESTRICT_TO_TRUSTED");
  if (trustedUsersOnly && !game.user.isTrusted) return;

  /**
   * Character sheets
   */
  const pcSheetNames = Object.values(CONFIG.Actor.sheetClasses.character)
    .map((sheetClass) => sheetClass.cls)
    .map((sheet) => sheet.name);

  pcSheetNames.forEach((sheetName) => {
    Hooks.on("render" + sheetName, (app, html, data) => {
      // only for GMs or the owner of this character
      if (!data.owner || !data.actor) return;
      if (!game.user.can("ACTOR_CREATE")) return;

      const button = $(`<a class="pathmuncher-open" title="${constants.MODULE_FULL_NAME}"><i class="fas fa-teeth-open"></i> ${constants.MODULE_FULL_NAME}</a>`);

      button.click(() => {
        if (game.user.can("ACTOR_CREATE")) {
          const muncher = new PathmuncherImporter(PathmuncherImporter.defaultOptions, data.actor);
          muncher.render(true);
        } else {
          ui.notifications.warn(game.i18n.localize(`${constants.FLAG_NAME}.Notifications.CreateActorPermission`), { permanent: true });
        }
      });

      html.closest('.app').find('.pathmuncher-open').remove();
      let titleElement = html.closest('.app').find('.window-title');
      if (!app._minimized) button.insertAfter(titleElement);
    });
  });

}

;// CONCATENATED MODULE: ./src/module.js




Hooks.once("init", () => {
  registerSettings();
});

Hooks.once("ready", () => {
  registerSheetButton();
  registerAPI();
});

/******/ })()
;
//# sourceMappingURL=main.js.map