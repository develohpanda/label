chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    var bkg = chrome.extension.getBackgroundPage();
    if (changeInfo.status == 'complete' && tab.active) {
        chrome.tabs.query({ 'active': true, 'lastFocusedWindow': true }, function (tabs) {
            var url = tab.url;

            chrome.storage.sync.get({
                jsonSettings: defaultSettings
            }, function (items) {
                var jsonSettings = JSON.parse(items.jsonSettings);
                $.each(jsonSettings, function (i, value) {
                    var matched = match_url(url, value.links, bkg);

                    if (matched) {
                        chrome.tabs.sendMessage(tabId, { showHeader: true, environment: value.title, color: value.color })
                        bkg.console.info("sent message to runtime");
                        return false; // break the loop
                    }
                })
            });
        });
    }
})

function match_url(url, links, bkg) {
    var matched = false;
    
    $.each(links, function (i, value) {
        bkg.console.info("Matching with " + value);
        var res = url.match(value);

        if (res) {
            bkg.console.info("Matched with " + value);
            matched = true;
            return false; // break the loop
        }
    })

    return matched;
}