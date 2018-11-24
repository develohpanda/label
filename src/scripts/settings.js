export function load_settings() {
    return browser.storage.sync.get('settings').then((items) => {
        return items.settings === undefined ? defaultSettings : items.settings;
    });
}

export function save_settings(settings) {
    return browser.storage.sync.set({settings});
}

export const defaultSettings = `[    
    {
        "label": "PRODUCTION",
        "color": "#ff8000",
        "hosts": [
            "*e*.com"
            
        ]
    },
    {
        "label": "TEST",
        "color": "#006400",
        "hosts": [
            "*o*.com"
        ]
    }
]`;