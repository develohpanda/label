import { load_settings } from './settings';
import * as matchUrl from 'match-url-wildcard' ;

browser.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
    var url = tab.url;

    load_settings().then(settingsString => {
      var settings = JSON.parse(settingsString);
      settings.some(function (value) {

        var matched = matchUrl(url, value.hosts);

        if (matched) {
          var objectToSend = { showHeader: true, label: value.label, color: value.color };
          
          console.info(`Matched with ${value.label}.`)

          browser.tabs.sendMessage(tabId, objectToSend);

          return true; // break the loop
        }
      })
    });
  }
})