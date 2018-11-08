chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    var bkg = chrome.extension.getBackgroundPage();
    if (changeInfo.status == 'complete' && tab.active){
        chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
            var url = tab.url;

            // Check which environment the URL is for

            chrome.tabs.sendMessage(tabId, {showHeader: true, environment: "test"});
            bkg.console.info("sent message to runtime");
        });
    }
})