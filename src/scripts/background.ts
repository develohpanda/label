import { loadSettings, ISettings, ISetting } from './settings';
import * as matchUrl from 'match-url-wildcard' ;

browser.tabs.onUpdated.addListener(async function (tabId, changeInfo, tab) {
  if (tab.active && changeInfo.status === 'complete') {
    var settings : ISettings = await loadSettings();

    settings.Settings.some(function (value : ISetting) {
      var matched = matchUrl(value.Hosts);

      if (matched) {
        var objectToSend = { showHeader: true, label: value.Label, color: value.Color };
        
        console.info(`Matched with ${value.Label}.`)

        browser.tabs.sendMessage(tabId, objectToSend);

        return true; // break the loop
      }
    });    
  }
})