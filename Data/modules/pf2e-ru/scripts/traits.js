const modules = ['pf2e-playtest-data'];

export function insertTraits() {
    Hooks.once('ready', async () => {
        for (const m of modules) {
            if (!game.modules.get(m)?.active)
                continue;

            const traits = await fetch(`modules/pf2e-ru/traits/${m}.json`).then(r => r.json());
            if (!game.i18n.translations['PF2e-ru'])
                game.i18n.translations['PF2e-ru'] = {};
            for (const kv of Object.entries(traits)) {
                const [traitType, traitEntries] = kv;
                game.i18n.translations['PF2e-ru'][traitType] = traitEntries;
                Object.entries(traitEntries).forEach(([id, e]) => {
                    if (typeof e === 'string') {
                        CONFIG.PF2E[traitType][id] = `PF2e-ru.${traitType}.${id}`;
                    }
                    else {
                        CONFIG.PF2E[traitType][id] = `PF2e-ru.${traitType}.${id}.label`;
                        CONFIG.PF2E.traitsDescriptions[id] = `PF2e-ru.${traitType}.${id}.description`;
                    }
                })
            }
        }
    })
}