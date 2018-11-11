chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.showHeader){
            var divToolbar = document.createElement('div');

            divToolbar.id = 'environmentDiv';
            divToolbar.style.position = 'sticky';
            divToolbar.style.top = 0;
            divToolbar.style.left = 0;
            divToolbar.style.height = '35px';
            divToolbar.style.width = '100%';
            divToolbar.style.backgroundColor = request.color;
            divToolbar.style.zIndex = 1;      
            divToolbar.style.textAlign = 'center';
            divToolbar.style.paddingTop = '4px';
            divToolbar.style.paddingBottom = '4px';
            
            var urlSpan = document.createElement('span');
            urlSpan.innerText = request.environment;
            urlSpan.style.color = 'white';
            urlSpan.style.fontFamily = '"Futura-Book",var(--font-family-sans-serif)';
            
            document.body.prepend(divToolbar);
            divToolbar.appendChild(urlSpan);
        }
    }
)