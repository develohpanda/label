// Saves options to chrome.storage
function save_options() {
    var jsonSettings = document.getElementById('jsonTextArea').value;
    
    chrome.storage.sync.set({
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

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get({
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