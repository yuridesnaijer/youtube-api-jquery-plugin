// This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Create a player var for the videoplayer
var player;

// Wait for the API to load, then create the options array and call addPlayer()
function onYouTubeIframeAPIReady() {
    var options = {
        videoId: '1xSl-rtIzCQ',
        autoPlay: true,
        showinfo: 1,
        controls: 1
    };

    //addPlayer takes options as a parameter
    $.fn.addPlayer(options);
}