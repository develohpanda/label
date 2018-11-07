chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    var bkg = chrome.extension.getBackgroundPage();

    if (changeInfo.status == 'complete' && tab.active){
        chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
            var url = tabs[0].url;
            bkg.console.info(url);
            debugger;
        });
    }
})

chrome.bookmarks.onCreated.addListener(function() {
    // do something
    chrome.extension.getBackgroundPage().console.info("test");
    debugger;
  });