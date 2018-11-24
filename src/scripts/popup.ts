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

    (<HTMLInputElement>document.getElementById('jsonTextArea')).value = settings.Settings.toString();
}

var populateDefault = (): void => {
    (<HTMLInputElement>document.getElementById('jsonTextArea')).value = DefaultSettings.Settings.toString();
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
document.getElementById('populateDefault').addEventListener('click', populateDefault);