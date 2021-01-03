chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if( request.message === "clicked_browser_action" ) {
            let messages = $('div[data-mp3^="https://psv4.userapi.com"]');

            let links = {};

            console.log(messages);

            for (let message of messages) {
                let link = $(message).attr('data-mp3');
                let containerId = $(message).parent().attr('id');

                links[containerId] = link;
            }

            console.log(links);
        }
    }
);