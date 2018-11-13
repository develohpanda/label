window.browser = (function () {
    return window.msBrowser ||
        window.browser ||
        window.chrome;
})();

function save_options() {
    var jsonSettings = document.getElementById('jsonTextArea').value;
    
    browser.storage.sync.set({
        jsonSettings: jsonSettings
    }, function () {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Settings saved.';
        setTimeout(function () {
            status.textContent = '';
        }, 750);
    });
}

function restore_options() {
    browser.storage.sync.get({
        jsonSettings: defaultSettings
    }, function (items) {
        document.getElementById('jsonTextArea').value = items.jsonSettings;
    });
}

function populate_default(){
    document.getElementById('jsonTextArea').value = defaultSettings;
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
document.getElementById('populateDefault').addEventListener('click', populate_default);