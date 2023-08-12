var power = 99;
var visualPower = document.getElementById("power");
var door1 = document.getElementById("door1");
var door2 = document.getElementById("door2");
var camera = document.getElementById("camera");
var office = document.getElementById("office");
var officemovetrigger1 = document.getElementById("officemovetrigger1");
var officemovetrigger11 = document.getElementById("officemovetrigger11");
var officemovetrigger111 = document.getElementById("officemovetrigger111");
var officemovetrigger2 = document.getElementById("officemovetrigger2");
var officemovetrigger22 = document.getElementById("officemovetrigger22");
var officemovetrigger222 = document.getElementById("officemovetrigger222");
var camerabg = document.getElementById("camerabg");
var leftbutton = document.getElementById("leftbutton");
var leftlight = document.getElementById("leftlight");
var rightbutton = document.getElementById("rightbutton");
var rightlight = document.getElementById("rightlight");
var buttontrigger1 = document.getElementById("buttontrigger1");
var lighttrigger1 = document.getElementById("lighttrigger1");
var buttontrigger2 = document.getElementById("buttontrigger2");
var lighttrigger2 = document.getElementById("lighttrigger2");
var light1 = document.getElementById("light1");
var light2 = document.getElementById("light2");
var leftdoor = document.getElementById("leftdoor");
var rightdoor = document.getElementById("rightdoor");
var officelights1 = document.getElementById("officelights1");
var officelights2 = document.getElementById("officelights2");
var officebg = document.getElementById("officebg");
var cameratrigger = document.getElementById("cameratrigger");
var cam = document.getElementById("cam");
var static = document.getElementById("static");
var camerassets = document.getElementById("camerassets");
var cameras = document.getElementById("cameras");
var camtxt = document.getElementById("camtxt");
var amtime = document.getElementById("amtime");
var select = document.getElementById("select");
var continuenight = document.getElementById("continuenight");
var menu = document.getElementById("menu");
var game = document.getElementById("game");
var warning = document.getElementById("warning");
var lines = document.getElementsByClassName("lines");
var tvstatic = document.getElementById("tvstatic");
var newgame = document.getElementById("newgame");
var continuemenu = document.getElementById("continue");
var loadscreen = document.getElementById("loadscreen");
var menutime = document.getElementById("menutime");
var menunight = document.getElementById("menunight");
var survived6div = document.getElementById("survived6div");
var survived5 = document.getElementById("survived5");
var survived6 = document.getElementById("survived6");
var milktext1 = document.getElementById("milktext1");
var milktext2 = document.getElementById("milktext2");
var usage2 = document.getElementById("usage2");
var usage3 = document.getElementById("usage3");
var usage4 = document.getElementById("usage4");
var txtUI = document.getElementById("UI");
var officedistance = -25;
var cameradistance = -25;
var intervalId = null;
var intervalcam = null;
var cameradelay = 10;
var doordelay = 10;
var cameramovedelay = 100;
var currentcam = "1a";
var currenttime = 0;
var blink=false;
var currentnight=1;
var tickinterval = null;
var blinkinterval = null;
var usagenum=1;

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

currentnight = getCookie("currentnight");

if (currentnight === undefined){
	currentnight = 1;
}

document.addEventListener('contextmenu', event => event.preventDefault());

var mediaFiles = [];
var loadma = false;

function preloadMedia(url, type, callback) {
    var media;

    if (type === 'image') {
        media = new Image();
    } else if (type === 'audio') {
        media = new Audio();
        media.addEventListener('loadedmetadata', callback);
    }

    media.src = url;
    media.onload = callback;
    return media;
}

function preloadMediaList(mediaList, onComplete) {
    var loadedMedia = 0;
    var totalMedia = mediaList.length;

    function mediaLoaded() {
        loadedMedia++;
        if (loadedMedia === totalMedia) {
            onComplete();
        }
    }

    for (var i = 0; i < totalMedia; i++) {
        var url = mediaList[i][0];
        var type = mediaList[i][1];
        preloadMedia(url, type, mediaLoaded);
    }
}

function preload() {
    var mediaList = [
        ["img/camera/static.gif", "image"],
		["img/menu/FNaFFreddy_Menu.gif", "image"],
		["sfx/darkness music.wav", "audio"],
		["sfx/static.wav", "audio"],
		["img/menu/Loading_Clock_1.png", "image"],
    	["img/background/office.png", "image"],
    	["img/background/office2.png", "image"],
    	["img/background/officelightsleft.png", "image"],
    	["img/background/officelightsright.png", "image"],
    	["img/buttons/Door_Lclose.gif", "image"],
    	["img/buttons/Door_Lopen.gif", "image"],
    	["img/buttons/Door_Rclose.gif", "image"],
    	["img/buttons/Door_Ropen.gif", "image"],
    	["img/buttons/Leftbutton.png", "image"],
    	["img/buttons/Leftbuttonon.png", "image"],
    	["img/buttons/Leftlight.png", "image"],
    	["img/buttons/Leftlighton.png", "image"],
    	["img/buttons/rightbutton.png", "image"],
    	["img/buttons/rightbuttonon.png", "image"],
    	["img/buttons/rightlight.png", "image"],
    	["img/buttons/rightlighton.png", "image"],
    	["img/camera/Cam_01_text.png", "image"],
		["img/camera/Cam_01b_text.png", "image"],
		["img/camera/Cam_01c_text.png", "image"],
		["img/camera/Cam_02_text.png", "image"],
		["img/camera/Cam_02b_text.png", "image"],
		["img/camera/Cam_03_text.png", "image"],
		["img/camera/Cam_04_text.png", "image"],
		["img/camera/Cam_04b_text.png", "image"],
		["img/camera/Cam_05_text.png", "image"],
		["img/camera/Cam_06_text.png", "image"],
		["img/camera/Cam_07_text.png", "image"],
		["img/camera/CAM1A.png", "image"],
		["img/camera/CAM1B.png", "image"],
		["img/camera/CAM1C.png", "image"],
		["img/camera/CAM2A.png", "image"],
		["img/camera/CAM2B.png", "image"],
		["img/camera/CAM3.png", "image"],
		["img/camera/CAM4A.png", "image"],
		["img/camera/CAM4B.png", "image"],
		["img/camera/CAM5.png", "image"],
		["img/camera/CAM6.png", "image"],
		["img/camera/CAM7.png", "image"],
		["img/camera/map.png", "image"],
		["img/monitorclose.gif", "image"],
		["img/monitoropen.gif", "image"],
		["sfx/BallastHumMedium2.wav", "audio"],
		["sfx/MiniDV_Tape_Eject_1.wav", "audio"],
		["sfx/CAMERA_VIDEO_LOA_60105303.wav", "audio"],
		["sfx/Buzz_Fan_Florescent2.wav", "audio"],
		["sfx/put down.wav", "audio"],
		["sfx/blip3.wav", "audio"],
		["sfx/SFXBible_12478.wav", "audio"],
		["sfx/ambience2.wav", "audio"],
		["sfx/CROWD_SMALL_CHIL_EC049202.wav", "audio"]
    ];

    preloadMediaList(mediaList, function () {
        loadma = true;
    });
}

preload();

function cameraopenw(){
	if (cameradelay==10) {
		cameradelay=0;
		if (light1.checked || light2.checked) {
			usagenum--;
		}
		light1.checked = false;
		light2.checked = false;
		leftlight.src="img/buttons/Leftlight.png";
		rightlight.src="img/buttons/rightlight.png";
		officelights1.style.display="none";
		officelights2.style.display="none";
		camerabg.style.visibility="visible";
		if (camera.checked==false) {
			usagenum++;
			changeVolume("BallastHumMedium2",0);
			playSound("MiniDV_Tape_Eject_1",true);
			playSound("CAMERA_VIDEO_LOA_60105303",false);
			changeVolume("Buzz_Fan_Florescent2",0.1);
			camerabg.src="img/monitoropen.gif";
			officemovetrigger1.style.display="block";
			officemovetrigger11.style.display="block";
			officemovetrigger111.style.display="block";
			officemovetrigger2.style.display="block";
			officemovetrigger22.style.display="block";
			officemovetrigger222.style.display="block";
			buttontrigger1.style.display="none";
			lighttrigger1.style.display="none";
			buttontrigger2.style.display="none";
			lighttrigger2.style.display="none";
			camera.checked = true;
			setTimeout(() => {
				static.style.removeProperty('transition');
				static.style.opacity="70%";
				camerassets.style.display="block";
				cam.style.visibility="visible";
				for(i = 0; i < lines.length; i++) {
  				  lines[i].style.visibility="visible";
  				}
			}, "220");
			setTimeout(() => {
				static.style.transition="opacity 0.7s";
			}, "310");
			setTimeout(() => {
				static.style.opacity="40%";
			}, "320");
		}else{
			usagenum--;
			changeVolume("Buzz_Fan_Florescent2",0.4);
			changeVolume("MiniDV_Tape_Eject_1",0);
			changeVolume("CAMERA_VIDEO_LOA_60105303",0);
			playSound("put down",false);
			camerabg.src="img/monitorclose.gif";
			officemovetrigger1.style.display="block";
			officemovetrigger11.style.display="block";
			officemovetrigger111.style.display="block";
			officemovetrigger2.style.display="block";
			officemovetrigger22.style.display="block";
			officemovetrigger222.style.display="block";
			buttontrigger1.style.display="block";
			lighttrigger1.style.display="block";
			buttontrigger2.style.display="block";
			lighttrigger2.style.display="block";
			camerassets.style.display="none";
			cam.style.visibility="hidden";
			for(i = 0; i < lines.length; i++) {
  			  lines[i].style.visibility="hidden";
  			}
			setTimeout(() => {
			  camerabg.style.visibility="hidden";
			  camera.checked = false;
			}, "220");
		}
	}
}

function tick(){
	if (power!=-1) {
		loadme();
	}
	if (cameradelay!=10) {
		cameradelay++;
	}
	if (doordelay!=10) {
		doordelay++;
	}
	if (cameramovedelay>0 && cameramovedelay<100) {
		cameramovedelay++;
	}else{
		if (cameramovedelay<0 && cameramovedelay>-100) {
			cameramovedelay--;
		}
	}
	if (currenttime<4800) {
		timecount();
	}else{
		clearInterval(tickinterval);
		clearInterval(blinkinterval);
		dayend();
	}
	movecameras();
	updateUsage();
}

function loadme(){
	power -= 0.01;
	const doorConsumption = 0.02;
	const cameraConsumption = 0.02;
	const lightConsumption = 0.01;
	if (door1.checked) {
	    power -= doorConsumption;
	}
	if (door2.checked) {
	    power -= doorConsumption;
	}
	if (light1.checked || light2.checked) {
	    power -= lightConsumption;
	}
	if(camera.checked){
		power -= cameraConsumption;
	}
	if (power <= 0) {
	    power = -1;
	    milktext1.style.display="none";
	    milktext2.style.display="none";
	    visualPower.innerHTML = "OUT OF MILK!";
	    outofpower();
	    return;
	}else{
		visualPower.innerHTML = power.toFixed(0);
	}
	
}

function movebg(side) {
	clearInterval(intervalId);
	if (side<=2 && officedistance<=0 && camera.checked==false) {
		switch (side){
			case 0:
				intervalId = setInterval(movebgleft, 1, 0.08);
				break;
			case 1:
				intervalId = setInterval(movebgleft, 1, 0.15);
				break;
			case 2:
				intervalId = setInterval(movebgleft, 1, 0.25);
				break;
		}
	}else{
		if (side>=3 && side!=10 && officedistance>=-50 && camera.checked==false) {
			switch (side){
				case 3:
					intervalId = setInterval(movebgright, 1, 0.08);
					break;
				case 4:
					intervalId = setInterval(movebgright, 1, 0.15);
					break;
				case 5:
					intervalId = setInterval(movebgright, 1, 0.25);
					break;
			}
		}
	}
	
}

function movebgleft(distance) {
	if (officedistance<=0) {
		officedistance=officedistance+distance;

		office.style.left= officedistance+"%";
	}	
}

function movebgright(distance) {
	if (officedistance>=-50) {
		officedistance=officedistance-distance;
		office.style.left= officedistance+"%";
	}	
}

function doorbtn(direction) {
	if (doordelay==10) {
		doordelay=0;
		playSound("SFXBible_12478",false);
		if (direction==0) {
			if (door1.checked==false) {
				door1.checked=true;
				usagenum++;
				leftbutton.src="img/buttons/Leftbuttonon.png";
				leftdoor.src="img/buttons/Door_Lclose.gif";
			}else{
				door1.checked = false;
				usagenum--;
				leftbutton.src="img/buttons/Leftbutton.png";
				leftdoor.src="img/buttons/Door_Lopen.gif";
			}
		}else{
			if (door2.checked==false) {
				door2.checked=true;
				usagenum++;
				rightbutton.src="img/buttons/rightbuttonon.png";
				rightdoor.src="img/buttons/Door_Rclose.gif";
			}else{
				door2.checked = false;
				usagenum--;
				rightbutton.src="img/buttons/rightbutton.png";
				rightdoor.src="img/buttons/Door_Ropen.gif";
			}
		}
	}
}

function lightbtn(direction) {
	if (direction==0) {
		if (light1.checked==false) {
			if (light2.checked==false) {
				usagenum++;
			}
			light1.checked=true;
			light2.checked=false;
			changeVolume("BallastHumMedium2",0);
			playSound("BallastHumMedium2",true);
			leftlight.src="img/buttons/Leftlighton.png";
			rightlight.src="img/buttons/rightlight.png";
			officelights1.style.display="block";
			officelights2.style.display="none";

		}else{
			light1.checked=false;
			light2.checked=false;
			usagenum--;
			changeVolume("BallastHumMedium2",0);
			leftlight.src="img/buttons/Leftlight.png";
			rightlight.src="img/buttons/rightlight.png";
			officelights1.style.display="none";
			officelights2.style.display="none";
		}
	}else{
		if (light2.checked==false) {
			if (light1.checked==false) {
				usagenum++;
			}
			light2.checked=true;
			light1.checked=false;
			changeVolume("BallastHumMedium2",0);
			playSound("BallastHumMedium2",true);
			rightlight.src="img/buttons/rightlighton.png";
			leftlight.src="img/buttons/Leftlight.png";
			officelights2.style.display="block";
			officelights1.style.display="none";
		}else{
			light2.checked=false;
			light1.checked=false;
			usagenum--;
			changeVolume("BallastHumMedium2",0);
			rightlight.src="img/buttons/rightlight.png";
			leftlight.src="img/buttons/Leftlight.png";
			officelights1.style.display="none";
			officelights2.style.display="none";
		}
	}
}

function outofpower(){
	txtUI.style.display="none";
	officebg.src="img/background/office2.png"
	light2.checked=false;
	light1.checked=false;
	rightlight.src="img/buttons/rightlight.png";
	leftlight.src="img/buttons/Leftlight.png";
	officelights1.style.display="none";
	officelights2.style.display="none";
	buttontrigger1.style.display="none";
	lighttrigger1.style.display="none";
	buttontrigger2.style.display="none";
	lighttrigger2.style.display="none";
	camerassets.style.display="none";
	cam.style.visibility="hidden";
	officemovetrigger1.style.display="block";
	officemovetrigger11.style.display="block";
	officemovetrigger111.style.display="block";
	officemovetrigger2.style.display="block";
	officemovetrigger22.style.display="block";
	officemovetrigger222.style.display="block";
	for(i = 0; i < lines.length; i++) {
  	  lines[i].style.visibility="hidden";
  	}
	if (door1.checked) {
		door1.checked = false;
		leftbutton.src="img/buttons/Leftbutton.png";
		leftdoor.src="img/buttons/Door_Lopen.gif";
	}
	if (door2.checked) {
		door2.checked = false;
		rightbutton.src="img/buttons/rightbutton.png";
		rightdoor.src="img/buttons/Door_Ropen.gif";
	}
	cameratrigger.style.display="none";
	if (camera.checked) {
		camerabg.src="img/monitorclose.gif";
		setTimeout(() => {
		  camerabg.style.visibility="hidden";
		  camera.checked = false;
		}, "220");
	}
}

function changecam(camnmb){
	playSound("blip3",false);
	document.getElementById("cam"+currentcam).style.filter ="grayscale(1)";
	currentcam=camnmb;
	document.getElementById("cam"+currentcam).style.filter ="grayscale(0)";
	cam.src="img/camera/CAM"+camnmb.toUpperCase()+".png";
	switch (camnmb){
		case "1a":
			camtxt.innerHTML="Show Stage";
			break;
		case "1b":
			camtxt.innerHTML="Dining Area";
			break;
		case "1c":
			camtxt.innerHTML="Pirate Cove";
			break;
		case "2a":
			camtxt.innerHTML="West Hall";
			break;
		case "2b":
			camtxt.innerHTML="West Hall Corner";
			break;
		case "3":
			camtxt.innerHTML="Supply Closet";
			break;
		case "4a":
			camtxt.innerHTML="East Hall";
			break;
		case "4b":
			camtxt.innerHTML="East Hall Corner";
			break;
		case "5":
			camtxt.innerHTML="Backstage";
			break;
		case "6":
			camtxt.innerHTML="Kitchen";
			break;
		case "7":
			camtxt.innerHTML="Restrooms";
			break;
	}
	static.style.removeProperty('transition');
	static.style.opacity="70%";
	setTimeout(() => {
		static.style.transition="opacity 0.7s";
	}, "310");
	setTimeout(() => {
		static.style.opacity="40%";
	}, "320");
}

function camblink(){
	if (blink) {
		document.getElementById("cam"+currentcam).style.filter ="grayscale(0)";
		blink=false;
	}else{
		document.getElementById("cam"+currentcam).style.filter ="grayscale(1)";
		blink=true;
	}
}

function timecount() {
	var x;
	currenttime++;
	x= Math.trunc(currenttime/800);
	if (x==0) {
		x=12;
	}
	amtime.innerHTML= x + " AM";
}

function movecameras(){
	if (cameramovedelay==100) {
		cameramovedelay=-1;
		cam.style.left= "-10%";
	}else{
		if (cameramovedelay==-100) {
			cameramovedelay=1;
			cam.style.left= "4%";
		}
	}
}

function selectmenu(menutype){
	playSound("blip3",false);
	if (menutype==0) {
		select.style.bottom="40%";
		continuenight.style.display="none";
	}else{
		select.style.bottom="30%";
		continuenight.style.display="block";
	}	
}

function startnight(night) {
	menu.style.opacity="0%";
	tvstatic.style.opacity="0%";
	newgame.removeAttribute("onclick");
	newgame.removeAttribute("onmouseover");
	continuemenu.removeAttribute("onclick");
	continuemenu.removeAttribute("onmouseover");
	setTimeout(() => {
		stopSound();
		loadscreen.style.display="block";
		menu.style.display="none";
		checkloading();
	}, "3100");
}

function fadewarning(){
	warning.removeAttribute("onclick");
	warning.style.opacity="0%";
	setTimeout(() => {
		continuenight.innerHTML="Night " + currentnight;
		menu.style.display="block";
		warning.style.display="none";
		for(i = 0; i < lines.length; i++) {
  		  lines[i].style.display="block";
  		}
  		playSound("darkness music",true);
  		playSound("static",false);
	}, "3100");
}

function checkloading(){
	if (loadma == true) {
		daystart(currentnight);
	}else{
		setTimeout(() => {
			checkloading();
		}, "1000");
	}
}

function daystart(night){
	playSound("blip3",false);
	loadscreen.style.display="none";
	menutime.style.display="block";
	switch (night){
		case 1:
			menunight.innerHTML= night + "st Night";
			break;
		case 2:
			menunight.innerHTML= night + "nd Night";
			break;
		case 3:
			menunight.innerHTML= night + "rd Night";
			break;
		default:
			menunight.innerHTML= night + "th Night";
			break;
	}
	nighttime.innerHTML="Night " + night;
	continuenight.innerHTML="Night " + night;
	menunight.style.display="block";
	tvstatic.style.transition="opacity 0s";
	tvstatic.style.opacity="100%";
	for(i = 0; i < lines.length; i++) {
		lines[i].style.opacity="90%";
  	 	lines[i].style.visibility="visible";
  	}
  	setTimeout(() => {
		for(i = 0; i < lines.length; i++) {
  			lines[i].style.visibility="hidden";
  		}
	}, "200");
	setTimeout(() => {
		menutime.style.opacity="0%";
		menunight.style.opacity="0%";
	}, "4000");
	setTimeout(() => {
		power = 99;
		cameradelay = 10;
		doordelay = 10;
		cameramovedelay = 100;
		document.getElementById("cam"+currentcam).style.filter ="grayscale(1)";
		blink=false;
		currentcam = "1a";
		currenttime = 0;
		camera.checked=false;
		light1.checked = false;
		light2.checked = false;
		door1.checked = false;
		door2.checked = false;
		camerabg.src="img/monitorclose.gif";
		rightbutton.src="img/buttons/rightbutton.png";
		rightdoor.src="img/buttons/Door_Ropen.gif";
		leftbutton.src="img/buttons/Leftbutton.png";
		leftdoor.src="img/buttons/Door_Lopen.gif";
		cam.src="img/camera/CAM1A.png";
		leftlight.src="img/buttons/Leftlight.png";
		rightlight.src="img/buttons/rightlight.png";
		game.style.pointerEvents= "auto";
		camerassets.style.display="none";
		cam.style.visibility="hidden";
		camerabg.style.visibility="hidden";
		menutime.style.display="none";
		menunight.style.display="none";
		menutime.style.opacity="100%";
		menunight.style.opacity="100%";
		game.style.display="block";
		milktext1.style.display="inline";
	    milktext2.style.display="inline";
	    txtUI.style.display="block";
	    visualPower.innerHTML = "";
		for(i = 0; i < lines.length; i++) {
  		  lines[i].style.visibility="hidden";
  		  lines[i].style.zIndex="2";
  		  lines[i].style.opacity="30%";
  		}
		tickinterval = setInterval(tick, 100);
		blinkinterval = setInterval(camblink, 700);
		playSound("ambience2",true);
		playSound("Buzz_Fan_Florescent2",true);
		changeVolume("Buzz_Fan_Florescent2",0.4);
	}, "7000");
}

function dayend(){
	stopSound();
	playSound("chimes 2",false);
	game.style.pointerEvents= "none";
	for(i = 0; i < lines.length; i++) {
  	  lines[i].style.visibility="hidden";
  	}
	survived6div.style.display="block";
	game.style.opacity="0%";
	setTimeout(() => {
		survived6div.style.opacity="100%";
	}, "10");
	setTimeout(() => {
		game.style.display="none";
		game.style.opacity="100%";
		survived5.style.bottom="10%";
		survived6.style.bottom="-91%";
		playSound("CROWD_SMALL_CHIL_EC049202",false);
	}, "2500");
	setTimeout(() => {
		survived6div.style.opacity="0%";
	}, "12000");
	setTimeout(() => {
		survived6div.style.display="none";
		survived5.style.bottom="-91%";
		survived6.style.bottom="-185%";
		currentnight++;
		var expirationDate = new Date();
		expirationDate.setFullYear(expirationDate.getFullYear() + 1);
		
		document.cookie = `currentnight=${currentnight}; expires=${expirationDate.toUTCString()}; path=/`;

		daystart(currentnight);
	}, "16000");
}

let audioContext;
let playingSources = [];

function playSound(soundUrl, loop) {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }

  const audioElement = new Audio();
  audioElement.src = "sfx/" + soundUrl + ".wav";
  audioElement.loop = loop;

  const source = audioContext.createMediaElementSource(audioElement);
  source.connect(audioContext.destination);
  
  if (loop) {
    const gainNode = audioContext.createGain();
    source.connect(gainNode);
    gainNode.connect(audioContext.destination);
    gainNode.gain.value = 1;
    
    source.onended = function () {
      playSound(soundUrl, loop);
    };
  }

  audioElement.play();

  playingSources.push({ source, audioElement });
}


function stopSound() {
  for (const { source, audioElement } of playingSources) {
    source.disconnect();
    audioElement.pause();
  }
  playingSources = [];

  if (audioContext) {
    audioContext.close();
    audioContext = null;
  }
}

function changeVolume(soundUrl, volume) {
  for (const { audioElement } of playingSources) {
    if (audioElement.src.endsWith(soundUrl + ".wav")) {
      audioElement.volume = volume;

      if (volume === 0) {
        const index = playingSources.findIndex(item => item.audioElement === audioElement);
        if (index !== -1) {
          playingSources[index].source.disconnect();
          audioElement.pause();
          playingSources.splice(index, 1);
        }
      }
    }
  }
}

function updateUsage(){
	switch (usagenum){
		case 1:
			usage2.style.display="none";
			usage3.style.display="none";
			usage4.style.display="none";
			break;
		case 2:
			usage2.style.display="block";
			usage3.style.display="none";
			usage4.style.display="none";
			break;
		case 3:
			usage2.style.display="block";
			usage3.style.display="block";
			usage4.style.display="none";
			break;
		case 4:
			usage2.style.display="block";
			usage3.style.display="block";
			usage4.style.display="block";
			break;
	}
}