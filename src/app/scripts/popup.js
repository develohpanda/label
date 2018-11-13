import 'bootstrap/dist/css/bootstrap.css';
import { save_settings, load_settings, defaultSettings } from './settings';

function save_options() {
    var settingsString = document.getElementById('jsonTextArea').value;

    save_settings(settingsString).then(() => {
        var status = document.getElementById('status');
        status.textContent = 'Settings saved.';
        setTimeout(function () {
            status.textContent = '';
        }, 750);
    });
}

function restore_options() {
    load_settings().then(settingsString => {
        document.getElementById('jsonTextArea').value = settingsString;
    });    
}

function populate_default() {
    document.getElementById('jsonTextArea').value = defaultSettings;
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
document.getElementById('populateDefault').addEventListener('click', populate_default);