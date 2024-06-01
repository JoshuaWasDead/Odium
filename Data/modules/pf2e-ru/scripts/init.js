import { registerModuleSettings } from "./module-settings.js";
import { babeleInit } from "./babele.js";
import { renameItems } from "./substitutions.js";
import { insertTraits } from "./traits.js";

const ruModule = 'pf2e-ru';

Hooks.once('init', async function () {

	const corePath = `modules/${ruModule}`;

	const systemFiles = ["pf2e.json", "re-pf2e.json", "action-pf2e.json", "kingmaker.json"];

	let supportedModules = [
		'babele', 'hover-distance', 'hurry-up',
		'kasper', 'lib-wrapper', 'locknkey',
		'monks-pf2e-encounter-aftermath',
		'pf2e-action-support', 'pf2e-alignment-damage', 'pf2e-ap187-190-gatewalkers',
		'pf2e-arp', 'pf2e-bardic-inspiration', 'pf2e-dailies',
		'pf2e-decks-harrow', 'pf2e-dorako-ui', 'pf2e-dorako-ux',
		'pf2e-dorako', 'pf2e-dragruler', 'pf2e-effect-description',
		'pf2e-exploration-activities', 'pf2e-extempore-effects', 'pf2e-fatigue',
		'pf2e-flatten', 'pf2e-giveth', 'pf2e-hero-actions', 'pf2e-inspire-courage',
		'pf2e-jb2a-macros', 'pf2e-kingmaker', 'pf2e-modifiers-matter', 'pf2e-npc-knowledges',
		'pf2e-perception', 'pf2e-persistent-damage', 'pf2e-ranged-combat',
		'pf2e-reaction', 'pf2e-see-simple-scale-statistics', 'pf2e-spells-summary', 'pf2e-stances',
		'pf2e-target-damage', 'pf2e-thaum-vuln', 'pf2e-token-hud',
		'pf2e-toolbelt', 'pf2e-unided', 'polyglot',
		'roll-tracker', 'sequencer', 'token-action-hud-core',
		'token-action-hud-pf2e', 'token-action-hud', 'xdy-pf2e-workbench'];

	game.settings.register(ruModule, 'translateSystem', {
		name: "Перевод системы Pathfinder 2e",
		scope: 'world',
		type: Boolean,
		config: true,
		default: true,
		restricted: true,
		requiresReload: true
	});

	game.settings.register(ruModule, 'itemDeclination', {
		name: "Автоматическое склонение генерируемых имен предметов",
		hint: "Если у них есть материал или руны. В настоящее время не работает на щиты и повязки могучих ударов",
		scope: 'world',
		type: Boolean,
		config: true,
		default: true,
		restricted: true,
		requiresReload: true
	});

	game.settings.register(ruModule, 'babeleShowEdited', {
		name: "Показывать редакторскую отметку",
		hint: "Если предмет отличается от перевода на сайте, в сборнике в его названии будет стоять звездочка. Не влияет на уже добавленные предметы, существ/опасности.",
		scope: 'world',
		type: Boolean,
		config: true,
		default: false,
		restricted: true,
		requiresReload: true
	});

	game.settings.register(ruModule, 'babeleItemKeepOriginalName', {
		name: "Сохранять оригинальное название элемента",
		hint: "Импортируемые элементы включают русское и английское название",
		scope: 'world',
		type: Boolean,
		config: true,
		default: false,
		restricted: true,
		requiresReload: true
	});

	game.settings.register(ruModule, 'babeleActorKeepOriginalName', {
		name: "Сохранять оригинальное название актёра",
		scope: 'world',
		type: Boolean,
		config: true,
		default: false,
		restricted: true,
		requiresReload: true
	});

	game.settings.register(ruModule, 'babeleActorItemKeepOriginalName', {
		name: "Сохранять оригинальные названия элементов, принадлежащих актёрам",
		scope: 'world',
		type: Boolean,
		config: true,
		default: false,
		restricted: true,
		requiresReload: true
	});

	const moduleFiles = registerModuleSettings(supportedModules);

	if (typeof libWrapper === "function") {
		libWrapper.register(ruModule,
			"game.i18n._getTranslations",
			loadSelectedTranslations,
			"MIXED");
	}
	else {
		new Dialog({
			title: "Выбор перевода",
			content: `<p>Для работы модуля перевода необходимо активировать модуль <b>libWrapper</b></p>`,
			buttons: {
				done: {
					label: "Хорошо",
				},
			},
		}).render(true);
	}

	async function loadSelectedTranslations(wrapped, lang) {
		if (lang !== 'ru')
			return wrapped(lang);

		const defaultTranslations = await wrapped(lang);
		const promises = [];

		if (game.i18n.lang != "ru")
			return defaultTranslations;

		if (game.settings.get(ruModule, "translateSystem")) {
			systemFiles.forEach(f => {
				promises.push(this._loadTranslationFile(`${corePath}/${f}`));
			});
		}

		moduleFiles?.forEach(t => {
			if (game.settings.get(ruModule, "translateModule_" + t.id)) {
				promises.push(this._loadTranslationFile(t.path));
			}
		});

		await Promise.all(promises);
		for (let p of promises) {
			let json = await p;
			foundry.utils.mergeObject(defaultTranslations, json, { inplace: true });
		}

		return defaultTranslations;
	}

	babeleInit();

	if (game.settings.get(ruModule, "itemDeclination"))
		renameItems();

	insertTraits();

});