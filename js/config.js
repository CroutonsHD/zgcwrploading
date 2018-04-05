/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.08
*/

/*URL for the server logo
Leave it blank to use text instead
(Put the files in the images folder)*/
var l_serverImage = "57b49c8b70100e4bfcc9d9bc2bb1c933.png";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:
"aurora.webm"
"bluefall.webm"
"bluetilefloor.webm"
"bluewhitecircles.webm"
"bokehlens.webm"
"cleanbokeh.webm"
"coldnight.webm"
"colorfulburst.webm"
"dancingstars.webm"
"dropsflares.webm"
"focusorangebokeh.webm"
"glimmering.webm"
"glowingrings.webm"
"greencircles.webm"
"hues.webm"
"inthedeep.webm"
"modernflourish.webm"
"orangeaura.webm"
"warminside.webm"
"yellowgreen.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format 
(Put the files in the backgrounds/videos folder)*/
var l_background = "glimmering.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them
(Put the files in the backgrounds/images folder)*/
var l_bgImages = [
	"48468-star-destroyer-star-wars-1920x1080-movie-wallpaper.jpg",
	"YVFJlsM.jpg",
	"star-wars-stormtrooper-4k-1920x1080.jpg",
	"battle_of_jakku_star_wars_battlefront-1920x1080.jpg",
	"ws_Darth_Vader_1920x1080.jpg",
];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = true;

/*Display actual song's name?*/
var l_musicDisplay = true;

/*Music playlist
Place how much .ogg songs you want
(Put the files in the songs folder)*/
var l_musicPlaylist = [
	{youtube: "_AKIsQhKFfA", name: "Hoth Ambience"},
	{youtube: "t3tFkcW7ySk", name: "Alderaan Ambience"},
	{youtube: "EETFlPEnBh4", name: "Calm Video Game Music"},
	{youtube: "mXj7_zUh2ok", name: "Dark Souls Ambient"},
	{youtube: "KpSF-awNLdc", name: "Star Wars Calm Music"},
	{youtube: "f2oMkN3Sfiw", name: "Anakins Symphony"},
];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 25;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
	"Welcome to Zealot Gaming and thank you for choosing us!",
	"Thanks for joining us! We hope you enjoy your stay!",
	"Darth Vader: I am your father.",
	"Boba Fett: He's no good to me dead.",
	"Storm Trooper: Blast them!",
	"Boba Fett: You can run but you'll only die tired.",
	"Darth Vader: You underestimate the power of the dark side.",
	"Darth Vader: You can't hide forever...",
];

/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;
