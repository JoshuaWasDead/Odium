const prefix = 'translateModule_';
const ruModule = 'pf2e-ru';

export function registerModuleSettings(supportedModules) {

    // Ожидаем что файл json имеет такое же имя как модуль
    // И оставляем только активные модули
    const moduleFiles = supportedModules
        .filter(id => game.modules.get(id)?.active)
        .map(id => ({ id: id, path: `modules/${ruModule}/modules/${id}.json` }));


    moduleFiles?.forEach(t => {
        let module = game.modules.get(t.id);
        game.settings.register(ruModule, prefix + t.id, {
            name: module.title,
            scope: 'world',
            type: Boolean,
            config: false,
            default: true,
            restricted: true,
            requiresReload: true
        });
    });

    ModuleSettings.modules = moduleFiles.map(m => m.id);

    game.settings.registerMenu(ruModule, 'moduleSettingsMenu', {
        name: 'Перевод модулей',
        label: 'Меню настроек модулей',
        icon: "fas fa-bars",
        type: ModuleSettings,
        restricted: true
    })

    return moduleFiles;
}


class ModuleSettings extends FormApplication {
    static namespace = 'modules';
    static modules;

    static get defaultOptions() {
        const options = super.defaultOptions;
        options.classes.push("settings-menu");

        return mergeObject(options, {
            title: 'Перевод модулей',
            id: `${this.namespace}-settings`,
            template: `modules/${ruModule}/templates/module-menu.hbs`,
            width: 550,
            height: "auto",
            closeOnSubmit: true,
        });
    }

    async getData() {
        const modules = this.constructor.modules;
        const templateData = modules.map(key => {
            const value = game.settings.get(ruModule, `${prefix}${key}`);
            const setting = game.settings.settings.get(`${ruModule}.${prefix}${key}`);
            return {
                ...setting,
                key,
                value,
                isSelect: !!setting.choices,
                isCheckbox: setting.type === Boolean,
                isFilepicker: setting.type === String && setting.filePicker,
                isNumber: setting.type === Number && !setting.range,
                isText: setting.type === String && !setting.filePicker,
                isRange: setting.type === Number && !!setting.range,
            };
        });
        return mergeObject(await super.getData(), {
            settings: templateData,
            requiresReload: true
        });
    }

    async _updateObject(event, data) {
        for (const key of this.constructor.modules) {
            const settingKey = `${prefix}${key}`;
            await game.settings.set(ruModule, settingKey, data[key]);
        }
        // Перезагружаем игроков и мастера
        game.socket.emit("reload");
        foundry.utils.debouncedReload()
    }
}