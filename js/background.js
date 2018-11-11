chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete' && tab.active) {
        chrome.tabs.query({ 'active': true, 'lastFocusedWindow': true }, function (tabs) {
            var url = tab.url;

            chrome.storage.sync.get({
                jsonSettings: defaultSettings
            }, function (items) {
                var jsonSettings = JSON.parse(items.jsonSettings);
                jsonSettings.map(function (value) {
                    var matched = match_url(url, value.hosts, bkg);

                    if (matched) {
                        chrome.tabs.sendMessage(tabId, { showHeader: true, label: value.title, color: value.color })
                        return false; // break the loop
                    }
                })
            });
        });
    }
})

var match_url = function (url, hosts, bkg) {
    var matched = false;

    hosts.map(function (host) {
        var res = getHost(url).match(host);

        if (getHost(url) === host) {
            matched = true;
            return false; // break the loop
        }
    })

    return matched;
}

// Why do it this way? Why is this different to the above method?
var getHost = function (href) {
    var l = document.createElement("a");
    l.href = href;
    return l.hostname;
};