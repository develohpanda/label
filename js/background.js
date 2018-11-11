window.browser = (function () {
    return window.msBrowser ||
        window.browser ||
        window.chrome;
})();


browser.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
        var url = tab.url;

        browser.storage.sync.get({
            jsonSettings: defaultSettings
        }, function (items) {
            var jsonSettings = JSON.parse(items.jsonSettings);
            jsonSettings.map(function (value) {
                var matched = match_url(url, value.hosts);

                if (matched) {
                    var objectToSend = { showHeader: true, label: value.label, color: value.color };
                    browser.tabs.sendMessage(tabId, objectToSend)

                    return false; // break the loop
                }
            })
        });
    }
})

var match_url = function (url, hosts) {
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