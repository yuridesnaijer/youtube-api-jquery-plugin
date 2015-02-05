# youtube-api-jquery-plugin
schoolopdracht


Mijn concept
Met mijn plugin in wil ik het makkelijker maken om gebruik te maken van een aantal
functionaliteiten van de youtube api. Het idee is dat je gewoon een array met opties kan
meegeven aan een functie en dat de rest vanzelf gebeurd. Het voordeel hiervan is dat je alleen
de videoID in de opties hoeft mee te geven om een video te embedden.

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

var settings = {
	width: '100%', //een aantal pixels is ook mogelijk
	height: '100%',
	videoId: 'JR7MUfxns9c', //https://www.youtube.com/watch?v=JR7MUfxns9c
	autoPlay: false, //true or false
	mute: false, //true or false
	loop: 1, //1 of 0 waarbij 1 gelijk staat aan true
	showSuggestions: 0, //1 of 0 waarbij 1 gelijk staat aan true
	controls: 0, //1 of 0 waarbij 1 gelijk staat aan true
	showinfo: 0 //1 of 0 waarbij 1 gelijk staat aan true
};

Options kan be passed like this:

function onYouTubeIframeAPIReady() {
	var options = {
		//Deze options kun je zelf definieren
		videoId: 'pKe34_KrPK8',
		autoPlay: true,
		mute: true
	};
	$.fn.addPlayer(options);
}
