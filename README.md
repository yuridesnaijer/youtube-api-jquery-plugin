# youtube-api-jquery-plugin
schoolopdracht


Mijn concept
Met mijn plugin in wil ik het makkelijker maken om gebruik te maken van een aantal
functionaliteiten van de youtube api. Het idee is dat je gewoon een array met opties kan
meegeven aan een functie en dat de rest vanzelf gebeurd. Het voordeel hiervan is dat je alleen
de videoID in de opties hoeft mee te geven om een video te embedden.

De mogelijkheden

● Je kan de hoogte en breedte van de player veranderen.
● Vanzelfsprekend kun je de afgespeelde video wijzigen.
● Je kunt aangeven of je wilt dat de video automatisch afspeelt of niet
● Je kunt aangeven of de video met of zonder geluid moet spelen
● Je kunt aangeven of de video moet “loopen” of niet
● Je kunt de aanbevolen video’s uit of aanzetten. Deze worden weergeven als de video klaar is met afspelen.
● De controls kunnen worden uitgezet, zo kan de gebruiker de video niet doorspoelen. Hij kan de video wel pauzeren door op het beeld te klikken.
● De informatie over de video kan worden uitgezet. (Titel e.d.)

Hieronder alle mogelijke opties:

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

De opties kun je als volgt meegeven:

function onYouTubeIframeAPIReady() {
var options = {
//Deze options kun je zelf definieren
videoId: 'pKe34_KrPK8',
autoPlay: true,
mute: true
};
$.fn.addPlayer(options);
}
