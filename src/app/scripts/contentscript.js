browser.runtime.onMessage.addListener(request => {
    if (request.showHeader) {
        var divToolbar = document.createElement('div');

        divToolbar.id = 'labelDiv';
        divToolbar.style.position = 'sticky';
        divToolbar.style.top = 0;
        divToolbar.style.left = 0;
        divToolbar.style.width = '100%';
        divToolbar.style.backgroundColor = request.color;
        divToolbar.style.zIndex = 1;
        divToolbar.style.textAlign = 'center';
        divToolbar.style.paddingTop = '4px';
        divToolbar.style.paddingBottom = '4px';

        var labelDiv = document.createElement('div');
        labelDiv.innerText = request.label;
        labelDiv.style.color = 'white';
        labelDiv.style.fontFamily = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"';
        labelDiv.style.fontSize = '22px';
        labelDiv.style.fontWeight = '400';

        document.body.prepend(divToolbar);
        divToolbar.appendChild(labelDiv);
    }
})