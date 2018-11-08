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
            divToolbar.style.backgroundColor = 'red';
            divToolbar.style.zIndex = 1;
            
            var urlSpan = document.createElement('span');
            urlSpan.innerText = request.environment;
            
            document.body.prepend(divToolbar);
            divToolbar.appendChild(urlSpan);
        }
    }
)