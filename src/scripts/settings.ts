export var loadSettings: () => Promise<ISettings> = async () => {
    var items: ISettingsStorage = await browser.storage.sync.get<ISettingsStorage>();
    var settings: string = items.SettingsString;

    if (settings === undefined) {
        return DefaultSettings;
    }

    return {
        Settings: JSON.parse(settings)
    };
};

export var saveSettings: (settings: ISettings) => Promise<void> = async (settings) => {
    var storageObj: ISettingsStorage = {
        SettingsString: JSON.stringify(settings)
    };

    await browser.storage.sync.set(storageObj);
};

export interface ISettingsStorage extends browser.storage.StorageObject {
    SettingsString: string;
}

export interface ISettings {
    Settings: Array<ISetting>;
}

export interface ISetting {
    Label: string;
    Color: string;
    Hosts: Array<string>;
}

export const DefaultSettings: ISettings = {
    Settings: [
        {
            Label: "PRODUCTION",
            Color: "#ff8000",
            Hosts: [
                "developer.chrome.com"
            ]
        },
        {
            Label: "TEST",
            Color: "#006400",
            Hosts: [
                "test.*.chrome.com"
            ]
        }
    ]
};