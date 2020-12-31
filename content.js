chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if( request.message === "clicked_browser_action" ) {
            let messages = $('div[data-mp3^="https://psv4.userapi.com"]');
            let links = [];

            for (let message of messages) {
                let link = $(message).attr('data-ogg');

                let request = new XMLHttpRequest();
                request.onload = requestListener;
                request.open("post", "https://speech.googleapis.com/v1p1beta1/speech:recognize", false);
                request.send({
                    "audio": {
                        "content": link
                    },
                    "config": {
                        "enableAutomaticPunctuation": true,
                        "encoding": "LINEAR16",
                        "languageCode": "en-US",
                        "model": "default"
                    }
                });
            }
        }
    }
);

function requestListener() {
    console.log(this.responseText);
}