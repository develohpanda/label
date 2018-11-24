export var loadSettings = async (): Promise<ISettings> => {
    var items: SettingsStorageObject = await browser.storage.sync.get<SettingsStorageObject>('settings');

    if (items.settings === undefined) {
        return DefaultSettings;
    }

    return items.settings;
}

export var saveSettings = async (settings: ISettings): Promise<void> => {
    var storageObj: SettingsStorageObject;
    storageObj.settings = settings;

    await browser.storage.sync.set({ storageObj });
}

type SettingsStorageObject = browser.storage.StorageObject & {
    settings: ISettings;
}

export interface ISettings {
    Settings: Array<ISetting>;
}

export interface ISetting {
    Label: string;
    Color: string;
    Hosts: Array<string>;
}

export const DefaultSettings : ISettings = {
    Settings: [
        {
            Label: "PRODUCTION",
            Color: "#ff8000",
            Hosts: [
                "*e*.com"
            ]
        },
        {
            Label: "TEST",
            Color: "#006400",
            Hosts: [
                "*o*.com"
            ]
        }
    ]
}