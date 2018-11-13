import { load_settings } from './settings';

browser.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
    var url = tab.url;

    load_settings().then(settingsString => {
      var settings = JSON.parse(settingsString);
      settings.map(function (value) {
        var matched = match_url(url, value.hosts);

        if (matched) {
          var objectToSend = { showHeader: true, label: value.label, color: value.color };
          browser.tabs.sendMessage(tabId, objectToSend);

          return false; // break the loop
        }
      })
    });
  }
})

var match_url = function (url, hosts) {
  var matched = false;

  hosts.map(function (host) {

    if (matchRuleShort(getHost(url), host)) {
      matched = true;
      return false; // break the loop
    }
  })

  return matched;
}

var matchRuleShort = function (str, rule) {
  return new RegExp("^" + rule.split("*").join(".*") + "$").test(str);
}

var getHost = function (href) {
  var l = document.createElement("a");
  l.href = href;
  return l.hostname;
};