import { IMessage } from "./background";

browser.runtime.onMessage.addListener((message: IMessage) => {
    if (message.ShowHeader) {
        var divToolbar : HTMLDivElement = document.createElement("div");

        divToolbar.id = "labelDiv";
        divToolbar.style.position = "sticky";
        divToolbar.style.top = "0";
        divToolbar.style.left = "0";
        divToolbar.style.width = "100%";
        divToolbar.style.backgroundColor = message.Color;
        divToolbar.style.zIndex = "1";
        divToolbar.style.textAlign = "center";
        divToolbar.style.paddingTop = "4px";
        divToolbar.style.paddingBottom = "4px";

        var labelDiv : HTMLDivElement = document.createElement("div");
        labelDiv.innerText = message.Label;
        labelDiv.style.color = "white";
        // tslint:disable-next-line:max-line-length
        labelDiv.style.fontFamily = "-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\"";
        labelDiv.style.fontSize = "22px";
        labelDiv.style.fontWeight = "400";

        document.body.prepend(divToolbar);
        divToolbar.appendChild(labelDiv);
    }
});