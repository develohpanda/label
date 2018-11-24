import 'bootstrap/dist/css/bootstrap.css';
import { loadSettings, saveSettings, ISettings, DefaultSettings } from './settings';

var saveOptions = async (): Promise<void> => {
    var settingsString = (<HTMLInputElement>document.getElementById('jsonTextArea')).value;

    var settings: ISettings = JSON.parse(settingsString);

    await saveSettings(settings);

    var status = document.getElementById('status');
    status.textContent = 'Settings saved.';
    setTimeout(() => status.textContent = '', 750);
}

var restoreOptions = async (): Promise<void> => {
    var settings: ISettings = await loadSettings();

    (<HTMLInputElement>document.getElementById('jsonTextArea')).value = JSON.stringify(settings.Settings, null, 2);
}

var populateDefault = (): void => {
    (<HTMLInputElement>document.getElementById('jsonTextArea')).value = JSON.stringify(DefaultSettings.Settings, null, 2);
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
document.getElementById('populateDefault').addEventListener('click', populateDefault);
document.getElementById('restore').addEventListener('click', restoreOptions);