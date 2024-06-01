async function getJSON(url) {
    const response = await fetch(url);
    const json = await response.json();
    return json;
}

async function generateAutorecUpdate(loud = true) {
    if (loud) console.group("PF2e Animations | Autorecognition Menu Check");
    const autorec = await getJSON("modules/pf2e-jb2a-macros/module/autorec.json");
    let settings = {}
    settings.melee = [...new Map(await game.settings.get('autoanimations', 'aaAutorec-melee').map(v => [v.id, v])).values()]
    settings.range = [...new Map(await game.settings.get('autoanimations', 'aaAutorec-range').map(v => [v.id, v])).values()]
    settings.ontoken = [...new Map(await game.settings.get('autoanimations', 'aaAutorec-ontoken').map(v => [v.id, v])).values()]
    settings.templatefx = [...new Map(await game.settings.get('autoanimations', 'aaAutorec-templatefx').map(v => [v.id, v])).values()]
    settings.preset = [...new Map(await game.settings.get('autoanimations', 'aaAutorec-preset').map(v => [v.id, v])).values()]
    settings.aura = [...new Map(await game.settings.get('autoanimations', 'aaAutorec-aura').map(v => [v.id, v])).values()]
    settings.aefx = [...new Map(await game.settings.get('autoanimations', 'aaAutorec-aefx').map(v => [v.id, v])).values()]

    let updatedEntries = { melee: [], range: [], ontoken: [], templatefx: [], aura: [], preset: [], aefx: [], }
    let missingEntries = { melee: [], range: [], ontoken: [], templatefx: [], aura: [], preset: [], aefx: [], }
    let custom = { melee: [], range: [], ontoken: [], templatefx: [], aura: [], preset: [], aefx: [], }
    let same = { melee: [], range: [], ontoken: [], templatefx: [], aura: [], preset: [], aefx: [], }
    let customNew = { melee: [], range: [], ontoken: [], templatefx: [], aura: [], preset: [], aefx: [], }
    let removed = { melee: [], range: [], ontoken: [], templatefx: [], aura: [], preset: [], aefx: [], }
    let blacklist = { melee: [], range: [], ontoken: [], templatefx: [], aura: [], preset: [], aefx: [], }

    // Function to retrieve full version from label
    function getFullVersion(label, array) {
        return array.find(e => e.label === label)
    }

    for (const key of Object.keys(settings)) {
        autorec[key].map(x => x.label).forEach(async x => {
            // If an entry of the same name exists...
            if (settings[key].map(x => x.label).some(e => e === x)) {
                const xEntry = getFullVersion(x, settings[key])

                /* (Bang Bang, you're a Boolean) */
                if (!!xEntry.metaData && (xEntry.metaData.name === "PF2e Animation Macros" || xEntry.metaData.name === "PF2e Animations" || xEntry.metaData?.default)) {
                    // If menu it exists from is blacklisted, add it to blacklisted.
                    if (game.settings.get("pf2e-jb2a-macros", "blacklist").menu.includes(key)) return blacklist[key].push(xEntry);
                    // If it's blacklisted by name, add it to blacklisted.
                    if (game.settings.get("pf2e-jb2a-macros", "blacklist").entries.includes(x)) return blacklist[key].push(xEntry);

                    // Entry is from PF2e Animations, but the same or higher version. Skip.
                    if (xEntry?.metaData?.version >= getFullVersion(x, autorec[key]).metaData.version) return same[key].push(xEntry);

                    // Entry is from PF2e Animations, but outdated. Update.
                    return updatedEntries[key].push(getFullVersion(x, autorec[key]))
                } else {
                    // Entry does exist but it's not from PF2e Animations. Add it to custom.
                    return custom[key].push(xEntry)
                }
            } else {
                // If menu it exists from is blacklisted, add it to blacklisted.
                if (game.settings.get("pf2e-jb2a-macros", "blacklist").menu.includes(key)) return;
                // If it's blacklisted by name, add it to blacklisted.
                if (game.settings.get("pf2e-jb2a-macros", "blacklist").entries.includes(x)) return;
                // Entry does not exist, add it.
                return missingEntries[key].push(getFullVersion(x, autorec[key]))
            }
        });
        settings[key].map(x => { return { label: x.label, metaData: x.metaData } }).forEach(async y => {
            if (!autorec[key].map(x => { return { label: x.label, metaData: x.metaData } }).some(e => e.label === y.label)) {
                if (y.metaData?.default || ((y?.metaData?.name === "PF2e Animation Macros" || y?.metaData?.name === "PF2e Animations") && y?.metaData?.version < autorec.melee[0].metaData.version)) {
                    // Entry does not exist in autorec, but is from PF2e Animations and of a lower version. Add them to removed.
                    return removed[key].push(getFullVersion(y.label, settings[key]))
                } else {
                    // Entry does not exist in autorec.json. Add it to customNew.
                    return customNew[key].push(getFullVersion(y.label, settings[key]));
                }
            }
        })
    }
    if (loud) console.info("The following effects did not exist before. They will be ADDED.", missingEntries)
    if (loud) console.info("The following effects can be updated from a previous version of 'PF2e Animations'. They will be UPDATED.", updatedEntries)
    if (loud) console.info("The following effects no LONGER exist in PF2e Animations. They will be DELETED.", removed)
    if (loud) console.info("The following effects do not exist in PF2e Animations. They will be IGNORED.", customNew)
    if (loud) console.info("The following effects cannot be added or updated, due to them already existing from an unknown source. They will be IGNORED.", custom)
    if (loud) console.info("The following effects have no updates.", same)
    if (loud) console.info("The following effects have been blacklisted.", blacklist)
    if (loud) console.groupEnd()

    // Create a list of all effects done.
    let missingEntriesList = []
    let updatedEntriesList = []
    let customEntriesList = []
    let customNewEntriesList = []
    let removedEntriesList = []
    let blacklistEntriesList = []
    for (const key of Object.keys(settings)) {
        missingEntriesList.push(missingEntries[key].map(x => `${x.label} <i class="pf2e-animations-muted">(${key})</i>`))
        updatedEntriesList.push(updatedEntries[key].map(x => `${x.label} <i class="pf2e-animations-muted">(${key})</i>`))
        removedEntriesList.push(removed[key].map(x => `${x.label} <i class="pf2e-animations-muted">(${key})</i>`))
        customEntriesList.push(custom[key].map(x => `${x.label} <i class="pf2e-animations-muted">(${key})</i>`))
        customNewEntriesList.push(customNew[key].map(x => `${x.label} <i class="pf2e-animations-muted">(${key})</i>`))
        blacklistEntriesList.push(blacklist[key].map(x => `${x.label} <i class="pf2e-animations-muted">(${key})</i>`))
    }
    missingEntriesList = missingEntriesList.flat().sort()
    updatedEntriesList = updatedEntriesList.flat().sort()
    removedEntriesList = removedEntriesList.flat().sort()
    customEntriesList = customEntriesList.flat().sort()
    customNewEntriesList = customNewEntriesList.flat().sort()
    blacklistEntriesList = blacklistEntriesList.flat().sort()

    let newSettingsDirty = { melee: [], range: [], ontoken: [], templatefx: [], aura: [], preset: [], aefx: [], }
    let newSettings = { melee: [], range: [], ontoken: [], templatefx: [], aura: [], preset: [], aefx: [], }
    for (const key of Object.keys(settings)) {
        // Merge all the arrays into one.
        newSettingsDirty[key] = [...missingEntries[key], ...updatedEntries[key], ...custom[key], ...same[key], ...customNew[key]]
        newSettings[key] = [...new Map(newSettingsDirty[key].map(v => [v.id, v])).values()].sort((a, b) => (a.label || "").localeCompare((b.label || "")))
        // add to every entry's metaData the name of the entry
        newSettings[key].map(x => { x.metaData = x.metaData ?? {}; x.metaData.label = x.label; x.metaData.menu = x.menu; return x })
    }
    // Adds the current Autorec version into the menu to ensure it will not get wiped going through the Autorec Merge scripts
    newSettings.version = await game.settings.get('autoanimations', 'aaAutorec').version
    return { newSettings, missingEntriesList, updatedEntriesList, customEntriesList, removedEntriesList, customNewEntriesList, blacklistEntriesList }
}

async function generateAutorecUpdateHTML() {
    const { newSettings, missingEntriesList, updatedEntriesList, customEntriesList, removedEntriesList, customNewEntriesList, blacklistEntriesList } = await generateAutorecUpdate(false)
    let html = `<h1 style="text-align: center; font-weight: bold;">PF2e Animations Update Menu</h1>`

    if (missingEntriesList.length || updatedEntriesList.length || customEntriesList.length || removedEntriesList.length || blacklistEntriesList.length || (game.settings.get("pf2e-jb2a-macros", "debug") && customNewEntriesList.length)) {
        if (removedEntriesList.length) {
            html += `
			<div class="pf2e-animations-autorec-update-child">
				<p class="pf2e-animations-autorec-update-text">${game.i18n.localize("pf2e-jb2a-macros.updateMenu.deleted")}</p>
				<ul class="pf2e-animations-autorec-update-ul">
					${removedEntriesList.map(x => `<li>${x}</li>`).join("")}
				</ul>
			</div>
			`
        }
        if (missingEntriesList.length) {
            html += `
			<div class="pf2e-animations-autorec-update-child">
				<p class="pf2e-animations-autorec-update-text">${game.i18n.localize("pf2e-jb2a-macros.updateMenu.added")}</p>
				<ul class="pf2e-animations-autorec-update-ul">
					${missingEntriesList.map(x => `<li>${x}</li>`).join("")}
				</ul>
			</div>
			`
        }
        if (customEntriesList.length) {
            html += `
			<div class="pf2e-animations-autorec-update-child">
				<p class="pf2e-animations-autorec-update-text">${game.i18n.localize("pf2e-jb2a-macros.updateMenu.custom")}</p>
				<p class="pf2e-animations-autorec-update-text">${game.i18n.localize("pf2e-jb2a-macros.updateMenu.customHint")}</p>
				<ul class="pf2e-animations-autorec-update-ul">
					${customEntriesList.map(x => `<li>${x}</li>`).join("")}
				</ul>
			</div>
			`
        }
        if (updatedEntriesList.length) {
            html += `
			<div class="pf2e-animations-autorec-update-child">
				<p class="pf2e-animations-autorec-update-text">${game.i18n.localize("pf2e-jb2a-macros.updateMenu.updated")}</p>
				<ul class="pf2e-animations-autorec-update-ul">
					${updatedEntriesList.map(x => `<li>${x}</li>`).join("")}
				</ul>
			</div>
			`
        }
        if (blacklistEntriesList.length) {
            html += `
			<div class="pf2e-animations-autorec-update-child">
				<p class="pf2e-animations-autorec-update-text">${game.i18n.localize("pf2e-jb2a-macros.updateMenu.blacklisted")}</p>
				<ul class="pf2e-animations-autorec-update-ul">
					${blacklistEntriesList.map(x => `<li>${x}</li>`).join("")}
				</ul>
			</div>
			`
        }
        if (game.settings.get("pf2e-jb2a-macros", "debug") && customNewEntriesList.length) {
            html += `
			<div class="pf2e-animations-autorec-update-child">
				<p class="pf2e-animations-autorec-update-text"><strong>[DEBUG]</strong> ${game.i18n.localize("pf2e-jb2a-macros.updateMenu.debugCustom")}</p>
				<ul class="pf2e-animations-autorec-update-ul">
					${customNewEntriesList.map(x => `<li>${x}</li>`).join("")}
				</ul>
			</div>
			`
        }
        html += `<p style="text-align: center; font-size: 1.2em; font-weight: bold;">${game.i18n.localize("pf2e-jb2a-macros.updateMenu.warning")}</p>`
    } else {
        html = `<p class="pf2e-animations-autorec-update-text">${game.i18n.localize("pf2e-jb2a-macros.updateMenu.nothing")}</p>`
    }
    return html
}

class autorecUpdateFormApplication extends FormApplication {
    constructor() {
        super();
    }

    async html() {
        return await generateAutorecUpdateHTML()
    }

    async settings() {
        return await generateAutorecUpdate()
    }

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ['form'],
            popOut: true,
            template: `modules/pf2e-jb2a-macros/module/autorecUpdateMenu.html`,
            id: 'autorecUpdateMenu',
            title: 'PF2e Animations Update',
        });
    }

    async getData() {
        // Send data to the template
        return { literallyEverything: await this.html() };
    }

    async activateListeners(html) {
        const { newSettings, missingEntriesList, updatedEntriesList, customEntriesList, removedEntriesList, blacklistEntriesList } = await this.settings()
        if (!(
            missingEntriesList.length
            || updatedEntriesList.length
            || customEntriesList.length
            || removedEntriesList.length
            || blacklistEntriesList.length
        )) $('[name="update"]').remove();
        super.activateListeners(html);
    }

    async _updateObject(event) {
        $(".pf2e-animations-autorec-update-buttons").attr("disabled", true)
        if (event.submitter.name === "update") {
            console.group("PF2e Animations | Autorecognition Menu Update");
            const { newSettings, missingEntriesList, updatedEntriesList, customEntriesList, removedEntriesList, blacklistEntriesList } = await this.settings()
            if (!(
                missingEntriesList.length
                || updatedEntriesList.length
                || customEntriesList.length
                || removedEntriesList.length
                || blacklistEntriesList.length
            )) return console.log("Nothing to update!");
            /*
            for (const key of Object.keys(newSettings)) {
                await game.settings.set('autoanimations', `aaAutorec-${key}`, newSettings[key])
                console.log(`Updated aaAutorec-${key} with:`, newSettings[key])
            };
            */
            // Passing submitAll: true to ensure menus are updated
            AutomatedAnimations.AutorecManager.overwriteMenus(JSON.stringify(newSettings), { submitAll: true });
        }
    }
}

window.autorecUpdateFormApplication = autorecUpdateFormApplication;