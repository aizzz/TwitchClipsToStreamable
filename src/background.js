var streamableUsername = "xxxxxxxxx"
var streamablePassword = "xxxxxxxxx"

chrome.runtime.onInstalled.addListener(function (details) {
    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
        var video_url = request.vid_src;
        var xmlHttp = new XMLHttpRequest();
        console.log('https://api.streamable.com/import?url='.concat(video_url))
        xmlHttp.open("GET", 'https://api.streamable.com/import?url='.concat(video_url), false), streamableUsername, streamablePassword;
        xmlHttp.send();
        console.log(xmlHttp)
        console.log(xmlHttp.status)
        if (xmlHttp.status === 200) {
            sendResponse(xmlHttp.responseText);
        }else {
            sendResponse('https://api.streamable.com/import?url='.concat(video_url));
        }
    });
});

