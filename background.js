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
                    var matched = match_url(url, value.hosts, bkg);

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

function match_url(url, hosts, bkg) {
    var matched = false;

    $.each(hosts, function (i, host) {
        bkg.console.info("Matching with " + host);
        var res = getHost(url).match(host);

        if (getHost(url) === host) {
            bkg.console.info("Matched with " + host);
            matched = true;
            return false; // break the loop
        }
    })

    return matched;
}

// Why do it this way? Why is this different to the above method?
var getHost = function(href) {
    var l = document.createElement("a");
    l.href = href;
    return l.hostname;
};