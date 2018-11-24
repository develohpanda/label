import { loadSettings, ISettings, ISetting } from "./settings";
import * as matchUrl from "match-url-wildcard";

// tslint:disable-next-line:typedef
browser.tabs.onUpdated.addListener(async function (tabId, changeInfo, tab) {
  if (tab.active && changeInfo.status === "complete") {
    var settings: ISettings = await loadSettings();

    settings.Settings.some((setting: ISetting): boolean => {
      var matched: boolean = matchUrl(setting.Hosts);

      if (matched) {
        var message: IMessage = {
          ShowHeader: true,
          Label: setting.Label,
          Color: setting.Color
        };

        browser.tabs.sendMessage(tabId, message);

        return true; // break the loop
      }
    });
  }
});

export interface IMessage {
  ShowHeader: boolean;
  Label: string;
  Color: string;
}