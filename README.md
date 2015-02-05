# youtube-api-jquery-plugin


The idea

With this plugin I have tried to make it easier to consume the youtube api. You can just give some parameters to a function and the plugin will do the rest. The advantage of this is that you only have to specify a videoID to embed it.


The possibilities

- You can change the video that will be played.
- You can adjust the width and height of the player.
- Toggle auto play.
- Toggle sound.
- Toggle loop mode.
- Toggle recommended videos. These will be displayed when the video is finished.
- Toggle controls. The video can still be paused by clicking the video itself.
- Toggle info about the video. (Title and such)

Possible options:
```
var settings = {
	width: '100%', 
	height: '100%',
	videoId: 'JR7MUfxns9c', //https://www.youtube.com/watch?v=JR7MUfxns9c
	autoPlay: false, //true or false
	mute: false, //true or false
	loop: 1, //true or false, with 1 being true
	showSuggestions: 0, 
	controls: 0, 
	showinfo: 0 
};
```
Options kan be passed like this:
```
function onYouTubeIframeAPIReady() {
	var options = {
		videoId: 'pKe34_KrPK8',
		autoPlay: true,
		mute: true
	};
	$.fn.addPlayer(options);
}
```
