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
var freddyboop = document.getElementById("freddyboop");
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
var camchar = document.getElementById("camchar");
var character1 = document.getElementById("character1");
var character2 = document.getElementById("character2");
var character3 = document.getElementById("character3");
var pizzabtn = document.getElementById("pizzabtn");
var brokenoverlay = document.getElementById("brokenoverlay");
var owo = document.getElementById("owo");
var jumpscare = document.getElementById("jumpscare");
var lampleft = document.getElementById("lampleft");
var lampright = document.getElementById("lampright");
var slug = document.getElementById("slug");
var ryanoffice = document.getElementById("ryanoffice");
var camerabutton = document.getElementById("camerabutton");
var myVideo = document.getElementById("myVideo");
var fire = document.getElementById("fire");
var starpng = document.getElementById("starpng");
var officedistance = -25;
var cameradistance = -25;
var intervalId = null;
var intervalcam = null;
var cameradelay = 10;
var doordelay = 10;
var cameramovedelay = 100;
var currentcam = "1b";
var currenttime = 0;
var blink=false;
var currentnight=1;
var tickinterval = null;
var blinkinterval = null;
var pizzainterval = null;
var glowinterval = null;
var usagenum=1;
var character1cam="1b";
var character2cam="1b";
var character3cam="5";
var windnumb=100;
var owotoggle=false;
var pizzadelay = 10;
var kitchendelay = false;
var lightbreakleft = 10;
var lightbreakright = 10;
var officerepeatsrc=true;
var timeoutID;
var kizdeathtoggle=false;
var deathdelay=false;
var votest=false;
var star=false;
var windowleft=false;
var windowright=false;

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

currentnight = getCookie("currentnight");
star = getCookie("star");

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
		["img/camera/box_frame_1.png", "image"],
		["img/camera/box_frame_2.png", "image"],
		["img/camera/box_frame_3.png", "image"],
		["img/camera/box_frame_4.png", "image"],
		["img/camera/box_frame_5.png", "image"],
		["img/camera/graphicscrate-broken-glass-13_prev_lg.png", "image"],
		["img/camera/pizzabtn.png", "image"],
		["img/camera/pizzabtnon.png", "image"],
		["img/camera/ryan_camPose.gif", "image"],
		["img/camera/joey_camPose.gif", "image"],
		["img/background/OwO.png", "image"],
		["img/buttons/camerabutton.png", "image"],
		["img/background/joeyjump.gif", "image"],
		["img/background/kizjump.gif", "image"],
		["img/background/ryanjump.gif", "image"],
		["img/camera/slug.gif", "image"],
		["img/background/fire.gif", "image"],
		["img/menu/star.png", "image"],
		["sfx/BallastHumMedium2.wav", "audio"],
		["sfx/MiniDV_Tape_Eject_1.wav", "audio"],
		["sfx/CAMERA_VIDEO_LOA_60105303.wav", "audio"],
		["sfx/Buzz_Fan_Florescent2.wav", "audio"],
		["sfx/put down.wav", "audio"],
		["sfx/blip3.wav", "audio"],
		["sfx/SFXBible_12478.wav", "audio"],
		["sfx/ambience2.wav", "audio"],
		["sfx/CROWD_SMALL_CHIL_EC049202.wav", "audio"],
		["sfx/powerdown.wav", "audio"],
		["sfx/CrumblingDreams.wav", "audio"],
		["sfx/EerieAmbienceLargeSca_MV005.wav", "audio"],
		["sfx/chimes 2.wav", "audio"],
		["sfx/jackinthebox.wav", "audio"],
		["sfx/windup2.wav", "audio"],
		["sfx/error.wav", "audio"],
		["sfx/break.wav", "audio"],
		["sfx/changebulb.wav", "audio"],
		["sfx/enter.wav", "audio"],
		["sfx/fall.wav", "audio"],
		["sfx/1VO.wav", "audio"],
		["sfx/2VO.wav", "audio"],
		["sfx/3VO.wav", "audio"],
		["sfx/4VO.wav", "audio"],
		["sfx/goop.wav", "audio"],
		["sfx/goop2.wav", "audio"],
		["sfx/squeak.wav", "audio"],
		["sfx/fire.wav", "audio"],
		["sfx/windowscare.wav", "audio"],
		["sfx/ariamath.wav", "audio"]
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
		ryanoffice.style.visibility="hidden";
		joeyoffice.style.visibility="hidden";
		if (camera.checked==false) {
			usagenum++;
			changeVolume("BallastHumMedium2",0);
			playSound("MiniDV_Tape_Eject_1",true);
			playSound("CAMERA_VIDEO_LOA_60105303",false);
			changeVolume("Buzz_Fan_Florescent2",0.1);
			changeVolume("EerieAmbienceLargeSca_MV005",0.5);
			camerabg.src="img/monitoropen.gif";
			officemovetrigger1.style.display="block";
			officemovetrigger11.style.display="block";
			officemovetrigger111.style.display="block";
			officemovetrigger2.style.display="block";
			officemovetrigger22.style.display="block";
			officemovetrigger222.style.display="block";
			freddyboop.style.display="none";
			buttontrigger1.style.display="none";
			lighttrigger1.style.display="none";
			buttontrigger2.style.display="none";
			lighttrigger2.style.display="none";
			slug.style.display="none";
			camera.checked = true;
			setTimeout(() => {
				static.style.removeProperty('transition');
				static.style.opacity="70%";
				camerassets.style.display="block";
				cam.style.visibility="visible";
				for(i = 0; i < lines.length; i++) {
  				  lines[i].style.visibility="visible";
  				}
  				if (currentcam==character1cam && currentcam!="6") {
					character1.style.visibility="visible";
				}else{
					character1.style.visibility="hidden";
					if (currentcam=="6") {
						changeVolume("OVEN-DRA_1_GEN-HDF18119",1);
						changeVolume("OVEN-DRA_2_GEN-HDF18120",1);
						changeVolume("OVEN-DRA_7_GEN-HDF18121",1);
						changeVolume("OVEN-DRAWE_GEN-HDF18122",1);
					}else{
						changeVolume("OVEN-DRA_1_GEN-HDF18119",0.01);
						changeVolume("OVEN-DRA_2_GEN-HDF18120",0.01);
						changeVolume("OVEN-DRA_7_GEN-HDF18121",0.01);
						changeVolume("OVEN-DRAWE_GEN-HDF18122",0.01);
					}
				}
				if (currentcam==character2cam && currentcam!="6") {
					character2.style.visibility="visible";
				}else{
					character2.style.visibility="hidden";
					if (currentcam=="6") {
						changeVolume("OVEN-DRA_1_GEN-HDF18119",1);
						changeVolume("OVEN-DRA_2_GEN-HDF18120",1);
						changeVolume("OVEN-DRA_7_GEN-HDF18121",1);
						changeVolume("OVEN-DRAWE_GEN-HDF18122",1);
					}else{
						changeVolume("OVEN-DRA_1_GEN-HDF18119",0.01);
						changeVolume("OVEN-DRA_2_GEN-HDF18120",0.01);
						changeVolume("OVEN-DRA_7_GEN-HDF18121",0.01);
						changeVolume("OVEN-DRAWE_GEN-HDF18122",0.01);
					}
				}
				if (windnumb<=-1000 && currentcam=="1c") {
					slug.style.display="block";
					cameratrigger.style.display="none";
					camerabutton.style.display="none";
					setTimeout(() => {
						slug.style.left="108%";
						slug.style.top="48%";
					}, "500");
					setTimeout(() => {
						kizzydeath();
					}, "2500");
				}
				if (currentcam==character3cam && camera.checked==true) {
					character3.style.visibility="visible";
					pizzabtn.style.display="block";
					changeVolume("CrumblingDreams",0.8);
					changeVolume("EerieAmbienceLargeSca_MV005",0.01);
				}else{
					character3.style.visibility="hidden";
					pizzabtn.style.display="hidden";
					changeVolume("CrumblingDreams",0.01);
					changeVolume("EerieAmbienceLargeSca_MV005",0.5);
				}
				if (currentcam=="1c") {
					brokenoverlay.style.display="block";
				}else{
					brokenoverlay.style.display="none";
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
			pizzaPress(false);
			changeVolume("Buzz_Fan_Florescent2",0.4);
			changeVolume("MiniDV_Tape_Eject_1",0);
			changeVolume("CAMERA_VIDEO_LOA_60105303",0);
			changeVolume("EerieAmbienceLargeSca_MV005",0.01);
			changeVolume("OVEN-DRA_1_GEN-HDF18119",0.1);
			changeVolume("OVEN-DRA_2_GEN-HDF18120",0.1);
			changeVolume("OVEN-DRA_7_GEN-HDF18121",0.1);
			changeVolume("OVEN-DRAWE_GEN-HDF18122",0.1);
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
			freddyboop.style.display="block";
			camerassets.style.display="none";
			brokenoverlay.style.display="none";
			slug.style.display="none";
			cam.style.visibility="hidden";
			character1.style.visibility="hidden";
			character2.style.visibility="hidden";
			character3.style.visibility="hidden";
			pizzabtn.style.display="none";
			changeVolume("CrumblingDreams",0.01);
			for(i = 0; i < lines.length; i++) {
  			  lines[i].style.visibility="hidden";
  			}
			timeoutID = setTimeout(() => {
			  	camerabg.style.visibility="hidden";
			  	camera.checked = false;
			  	if(deathdelay==true){
					furrydeath();
				}
			}, "220");
		}
	}
}

function tick(){
	if (power!=-1) {
		loadme();
		if (currentnight>=2) {
			windKiz();
		}
		if (officerepeatsrc==true && officerepeatsrc!="beans") {
			officerepeatsrc=false;
			changeofficesrc();
		}
	}else{
		spawnowo();
	}
	if (cameradelay!=10) {
		cameradelay++;
	}
	if (doordelay!=10) {
		doordelay++;
	}
	if (pizzadelay!=10) {
		pizzadelay++;
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
	if (character1cam=="6" && kitchendelay==false && currentcam=="6" && camera.checked==true || character2cam=="6" && kitchendelay==false && currentcam=="6" && camera.checked==true) {
		kitchendelay=true;
		kitchenSound();
	}
	if (character1cam!="6" && character2cam!="6") {
		changeVolume("OVEN-DRA_1_GEN-HDF18119",0);
		changeVolume("OVEN-DRA_2_GEN-HDF18120",0);
		changeVolume("OVEN-DRA_7_GEN-HDF18121",0);
		changeVolume("OVEN-DRAWE_GEN-HDF18122",0);
	}
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
	if (power>=0) {
		if (doordelay==10) {
			doordelay=0;
			if (deathdelay==false) {
				playSound("SFXBible_12478",false);
			}else{
				playSound("error",false);
			}
			
			if (direction==0 && deathdelay==false) {
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
				if (door2.checked==false && deathdelay==false) {
					door2.checked=true;
					usagenum++;
					rightbutton.src="img/buttons/rightbuttonon.png";
					rightdoor.src="img/buttons/Door_Rclose.gif";
				}else{
					if (deathdelay==false) {
						door2.checked = false;
						usagenum--;
						rightbutton.src="img/buttons/rightbutton.png";
						rightdoor.src="img/buttons/Door_Ropen.gif";
					}
				}
			}
		}	
	}else{
		playSound("error",false);
	}
}

function lightbtn(direction) {
	if (power>=0) {
		if (direction==0 && deathdelay==false) {
			if (light1.checked==false) {
				if (light2.checked==false) {
					usagenum++;
				}
				light1.checked=true;
				light2.checked=false;
				changeVolume("BallastHumMedium2",0);
				if (lightbreakleft>0) {
					playSound("BallastHumMedium2",true);
					leftlight.src="img/buttons/Leftlighton.png";
					officelights1.style.display="block";
					ryanoffice.style.visibility="visible";
					if (character1cam=="office" && windowleft==false) {
						playSound("windowscare",false);
						windowleft=true;
					}
				}else{
					playSound("error",false);
				}
				rightlight.src="img/buttons/rightlight.png";
				officelights2.style.display="none";
				lightBrk("left");
			}else{
				light1.checked=false;
				light2.checked=false;
				usagenum--;
				changeVolume("BallastHumMedium2",0);
				leftlight.src="img/buttons/Leftlight.png";
				rightlight.src="img/buttons/rightlight.png";
				officelights1.style.display="none";
				officelights2.style.display="none";
				ryanoffice.style.visibility="hidden";
				joeyoffice.style.visibility="hidden";
			}
		}else{
			if (deathdelay==false) {
				if (light2.checked==false) {
					if (light1.checked==false) {
						usagenum++;
					}
					light2.checked=true;
					light1.checked=false;
					changeVolume("BallastHumMedium2",0);
					if (lightbreakright>0) {
						playSound("BallastHumMedium2",true);
						rightlight.src="img/buttons/rightlighton.png";
						officelights2.style.display="block";
						joeyoffice.style.visibility="visible";
						if (character2cam=="office" && windowright==false) {
							playSound("windowscare",false);
							windowright=true;
						}
					}else{
						playSound("error",false);
					}
					leftlight.src="img/buttons/Leftlight.png";
					officelights1.style.display="none";
					lightBrk("right");
				}else{
					light2.checked=false;
					light1.checked=false;
					usagenum--;
					changeVolume("BallastHumMedium2",0);
					rightlight.src="img/buttons/rightlight.png";
					leftlight.src="img/buttons/Leftlight.png";
					officelights1.style.display="none";
					officelights2.style.display="none";
					ryanoffice.style.visibility="hidden";
					joeyoffice.style.visibility="hidden";
				}
			}else{
				playSound("error",false);
			}
			
		}	
	}else{
		playSound("error",false);
	}
	
}

function outofpower(){
	stopSound();
	playSound("powerdown",false);
	windnumb=1000000;
	txtUI.style.display="none";
	fire.style.display="none";
	officerepeatsrc="beans";
	officebg.src="img/background/office2.png";
	lightbreakright=-1;
	lightbreakleft=-1;
	light2.checked=false;
	light1.checked=false;
	deathdelay=false;
	rightlight.src="img/buttons/rightlight.png";
	leftlight.src="img/buttons/Leftlight.png";
	officelights1.style.display="none";
	officelights2.style.display="none";
	camerassets.style.display="none";
	amtime.style.display="none";
	nighttime.style.display="none";
	slug.style.display="none";
	cam.style.visibility="hidden";
	character1.style.visibility="hidden";
	character2.style.visibility="hidden";
	character3.style.visibility="hidden";
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
	freddyboop.style.display="block";
	for(i = 0; i < lines.length; i++) {
  	  lines[i].style.visibility="hidden";
  	}
	if (door1.checked) {
		door1.checked = false;
		leftbutton.src="img/buttons/Leftbutton.png";
		leftdoor.src="img/buttons/Door_Lopen.gif";
		playSound("SFXBible_12478",false);
	}
	if (door2.checked) {
		door2.checked = false;
		rightbutton.src="img/buttons/rightbutton.png";
		rightdoor.src="img/buttons/Door_Ropen.gif";
		playSound("SFXBible_12478",false);
	}
	cameratrigger.style.display="none";
	camerabutton.style.display="none";
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
	if (camnmb==character1cam & camnmb!="6") {
		character1.style.visibility="visible";
	}else{
		character1.style.visibility="hidden";
		if (currentcam=="6") {
			changeVolume("OVEN-DRA_1_GEN-HDF18119",1);
			changeVolume("OVEN-DRA_2_GEN-HDF18120",1);
			changeVolume("OVEN-DRA_7_GEN-HDF18121",1);
			changeVolume("OVEN-DRAWE_GEN-HDF18122",1);
		}else{
			changeVolume("OVEN-DRA_1_GEN-HDF18119",0.01);
			changeVolume("OVEN-DRA_2_GEN-HDF18120",0.01);
			changeVolume("OVEN-DRA_7_GEN-HDF18121",0.01);
			changeVolume("OVEN-DRAWE_GEN-HDF18122",0.01);
		}
	}
	if (camnmb==character2cam & camnmb!="6") {
		character2.style.visibility="visible";
	}else{
		character2.style.visibility="hidden";
		if (currentcam=="6") {
			changeVolume("OVEN-DRA_1_GEN-HDF18119",1);
			changeVolume("OVEN-DRA_2_GEN-HDF18120",1);
			changeVolume("OVEN-DRA_7_GEN-HDF18121",1);
			changeVolume("OVEN-DRAWE_GEN-HDF18122",1);
		}else{
			changeVolume("OVEN-DRA_1_GEN-HDF18119",0.01);
			changeVolume("OVEN-DRA_2_GEN-HDF18120",0.01);
			changeVolume("OVEN-DRA_7_GEN-HDF18121",0.01);
			changeVolume("OVEN-DRAWE_GEN-HDF18122",0.01);
		}
	}
	if (camnmb==character3cam && camera.checked==true) {
		character3.style.visibility="visible";
		pizzabtn.style.display="block";
		changeVolume("CrumblingDreams",0.8);
		changeVolume("EerieAmbienceLargeSca_MV005",0.01);
	}else{
		character3.style.visibility="hidden";
		pizzabtn.style.display="none";
		changeVolume("CrumblingDreams",0.01);
		changeVolume("EerieAmbienceLargeSca_MV005",0.5);
	}
	if (camnmb=="1c") {
		brokenoverlay.style.display="block";
	}else{
		brokenoverlay.style.display="none";
	}
	slug.style.display="none";
	if (windnumb<=-1000 && camnmb=="1c") {
		slug.style.display="block";
		cameratrigger.style.display="none";
		camerabutton.style.display="none";
		setTimeout(() => {
			slug.style.left="108%";
			slug.style.top="48%";
		}, "500");
		setTimeout(() => {
			kizzydeath();
		}, "2500");
	}
	switch (camnmb){
		case "1a":
			camtxt.innerHTML="Show Stage";
			break;
		case "1b":
			camtxt.innerHTML="Dining Area";
			break;
		case "1c":
			camtxt.innerHTML="Hallway -BROKEN-";
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
			camtxt.innerHTML="Pizza Cove";
			break;
		case "6":
			camtxt.innerHTML="Kitchen<br>-AUDIO ONLY-";
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
	if (x==3 && currentnight==3 && votest==false) {
		playSound("4VO",false);
		votest=true;
		setTimeout(() => {
			fire.style.display="block";
			playSound("fire",true);
			fire.style.opacity="70%";
			if (lightbreakleft>1) {
				lightbreakleft=1;
			}
			if (lightbreakright>1) {
				lightbreakright=1;
			}
		}, "97000");
	}
	amtime.innerHTML= x + " AM";
}

function movecameras(){
	if (cameramovedelay==100 && currentcam!="1c") {
		cameramovedelay=-1;
		camchar.style.left= "-10%";
	}else{
		if (cameramovedelay==-100 && currentcam!="1c") {
			cameramovedelay=1;
			camchar.style.left= "4%";
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
	currentnight=night;
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
		menu.style.opacity="100%";
		select.style.bottom="40%";
		continuenight.style.display="none";
		newgame.setAttribute("onclick", "startnight(1);");
		newgame.setAttribute("onmouseover", "selectmenu(0);");
		continuemenu.setAttribute("onclick", "startnight(currentnight);");
		continuemenu.setAttribute("onmouseover", "selectmenu(1);");
		checkloading();
	}, "3100");
}

function fadewarning(timerout){
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
  		if (star==true) {
  			starpng.style.display="block";
  		}
	}, timerout);
}

function checkloading(){
	if (currentnight==1 && videned==false) {
		myVideo.style.display="block";
		myVideo.play();
	}else{
		myVideo.style.display="none";
		if (loadma == true) {
			daystart(currentnight);
		}else{
			setTimeout(() => {
				videned = false;
				checkloading();
			}, "1000");
		}
	}
}

myVideo.addEventListener('ended',myHandler,false);
var videned = false;
function myHandler() {
	videned = true;
	checkloading();
}

function daystart(night){
	playSound("blip3",false);
	loadscreen.style.display="none";
	menutime.style.display="block";
	night=parseInt(night);
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
		windnumb=100;
		character1cam="1b";
		character1.style.left="34%";
		character1.style.top="13%";
		character1.style.width="33%";
		character1.style.transform = "rotate(0deg)";
		character2cam="1b";
		character2.style.left="68%";
		character2.style.top="33%";
		character2.style.width="31%";
		character2.style.transform = "rotate(0deg)";
		camtxt.innerHTML="Dining Area";
		usagenum=1;
		document.getElementById("cam"+currentcam).style.filter ="grayscale(1)";
		blink=false;
		currentcam = "1b";
		currenttime = 0;
		lightbreakleft=11-currentnight;
		lightbreakright=11-currentnight;
		camera.checked=false;
		light1.checked = false;
		light2.checked = false;
		door1.checked = false;
		door2.checked = false;
		owotoggle=false;
		officerepeatsrc=true;
		kizdeathtoggle=false;
		deathdelay=false;
		votest=false;
		windowleft=false;
		windowright=false;
		slug.style.display="none";
		slug.style.left="-25%";
		slug.style.top="-64%";
		camerabg.src="img/monitorclose.gif";
		rightbutton.src="img/buttons/rightbutton.png";
		rightdoor.src="img/buttons/Door_Ropen.gif";
		leftbutton.src="img/buttons/Leftbutton.png";
		leftdoor.src="img/buttons/Door_Lopen.gif";
		cam.src="img/camera/CAM"+currentcam.toUpperCase()+".png";
		leftlight.src="img/buttons/Leftlight.png";
		rightlight.src="img/buttons/rightlight.png";
		character3.src="img/camera/box_frame_1.png";
		game.style.pointerEvents= "auto";
		clearTimeout(timeoutID);
		camerassets.style.display="none";
		cam.style.visibility="hidden";
		camerabg.style.visibility="hidden";
		menutime.style.display="none";
		menunight.style.display="none";
		jumpscare.style.display="none";
		menutime.style.opacity="100%";
		menunight.style.opacity="100%";
		game.style.display="block";
		milktext1.style.display="inline";
	    milktext2.style.display="inline";
	    txtUI.style.display="block";
	    office.style.display="block";
	    camchar.style.display="block";
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
		cameratrigger.style.display="block";
		camerabutton.style.display="block";
		freddyboop.style.display="block";
	    officebg.src="img/background/office.png"
	    visualPower.innerHTML = "";
	    character1.style.visibility="hidden";
		character2.style.visibility="hidden";
		character3.style.visibility="hidden";
		pizzabtn.style.display="none";
		owo.style.display="none";
		ryanoffice.style.display="none";
		ryanoffice.style.visibility="hidden";
		joeyoffice.style.visibility="hidden";
		fire.style.display="none";
		fire.style.opacity="0%";
		changeVolume("CrumblingDreams",0.01);
		amtime.style.display="block";
		nighttime.style.display="block";
		for(i = 0; i < lines.length; i++) {
  		  lines[i].style.visibility="hidden";
  		  lines[i].style.zIndex="2";
  		  lines[i].style.opacity="30%";
  		}
		tickinterval = setInterval(tick, 100);
		blinkinterval = setInterval(camblink, 700);
		playSound("ambience2",true);
		playSound("Buzz_Fan_Florescent2",true);
		playSound("CrumblingDreams",true);
		playSound("EerieAmbienceLargeSca_MV005",true);
		changeVolume("Buzz_Fan_Florescent2",0.4);
		changeVolume("CrumblingDreams",0.01);
		changeVolume("EerieAmbienceLargeSca_MV005",0.01);
		ryanMove();
		joeyMove();
		switch (currentnight){
			case 1:
			case "1":
				playSound("1VO",false);
				break;
			case 2:
			case "2":
				playSound("2VO",false);
				break;
			case 3:
			case "3":
				playSound("3VO",false);
				break;
		}
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
		if (currentnight!=4) {
			daystart(currentnight);
		}else{
			star=true;
			document.cookie = `star=${star}; expires=${expirationDate.toUTCString()}; path=/`;
			fadewarning(1000);
		}
	}, "16000");
}

let audioContext;
let analyserNode;
let playingSources = [];

function initializeVisuals() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    analyserNode = audioContext.createAnalyser();
    analyserNode.fftSize = 256; // You can adjust this for frequency resolution
  }
}

function playSound(soundUrl, loop) {
  if (!audioContext || !analyserNode) {
    initializeVisuals();
  }

  const audioElement = new Audio();
  audioElement.src = "sfx/" + soundUrl + ".wav";
  audioElement.loop = loop;

  const source = audioContext.createMediaElementSource(audioElement);
  source.connect(analyserNode);
  analyserNode.connect(audioContext.destination);

  if (loop) {
    const gainNode = audioContext.createGain();
    source.connect(gainNode);
    gainNode.connect(analyserNode);
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
    analyserNode = null;
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

function getAudioData() {
  const bufferLength = analyserNode.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);
  analyserNode.getByteFrequencyData(dataArray);
  return dataArray;
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

function windKiz(){
	windnumb=windnumb-0.1-((currentnight-2)*0.05);
	switch (true){
		case (76==Math.ceil(windnumb)):
			if (currentcam=="5" && camera.checked==true && pizzadelay==10) {
				changecam("5");
				pizzadelay=0;
			}
			character3.src="img/camera/box_frame_1.png";
			break;
		case (75==Math.ceil(windnumb)):
		case (51==Math.ceil(windnumb)):
			if (currentcam=="5" && camera.checked==true && pizzadelay==10) {
				changecam("5");
				pizzadelay=0;
			}
			character3.src="img/camera/box_frame_2.png";
			break;
		case (50==Math.ceil(windnumb)):
		case (26==Math.ceil(windnumb)):
			if (currentcam=="5" && camera.checked==true && pizzadelay==10) {
				changecam("5");
				pizzadelay=0;
			}
			character3.src="img/camera/box_frame_3.png";
			break;
		case (25==Math.ceil(windnumb)):
			if (currentcam=="5" && camera.checked==true && pizzadelay==10) {
				changecam("5");
				pizzadelay=0;
			}
			character3.src="img/camera/box_frame_4.png";
			break;
		case (0==Math.ceil(windnumb) && power>0):
			if (currentcam=="5" && camera.checked==true && pizzadelay==10) {
				changecam("5");
				pizzadelay=0;
			}
			windnumb=-1000;
			character3.src="img/camera/box_frame_5.png";
			changeVolume("CrumblingDreams",0);
			playSound("jackinthebox",false);
			setTimeout(() => {
				kizzydeath();
			}, 18000);
			break;
	}
}

function pizzaPress(press){
	if (press==true && windnumb>0) {
		pizzainterval = setInterval(windButton, 1);
		playSound("windup2",true);
	}else{
		clearInterval(pizzainterval);
		pizzabtn.src="img/camera/pizzabtn.png";
		changeVolume("windup2",0);
		if (press==true && windnumb<=0) {
			playSound("error",false);
		}
	}
}

function windButton(){
	if (windnumb<99) {
		windnumb=windnumb+0.02;
	}
	pizzabtn.src="img/camera/pizzabtnon.png";
}

function spawnowo(){
	var x=1;
	var y;
	var z;
	if (owotoggle==false && currenttime<4800) {
		x=Math.floor(Math.random() * 150);
		if (x==0) {
			y = Math.floor(Math.random()*40000)+10000;
			z = Math.floor(Math.random()*1000)+15000;
			owotoggle=true;
			owo.style.display="block";
			playSound("ariamath",false);
			glowinterval = setInterval(() => {
				const dataArray = getAudioData();
  				const average = dataArray.reduce((acc, value) => acc + value, 0) / dataArray.length;
  				const shadowStrength = (average / 255) * 15; // Adjust this multiplier as needed
				
  				owo.style.filter = `drop-shadow(0 0 ${shadowStrength}vh cyan)`;
			}, 10);
			setTimeout(() => {
				if (currenttime<4800) {
					owo.style.display="none";
					clearInterval(glowinterval);
					stopSound();
					playSound("Buzz_Fan_Florescent2",false);
				}
			}, y);
			setTimeout(() => {
				if (currenttime<4800) {
					owo.style.display="block";
				}
			}, y+100);
			setTimeout(() => {
				if (currenttime<4800) {
					office.style.display="none";
					owo.style.display="none";
					changeVolume("Buzz_Fan_Florescent2",0.01);
				}
			}, y+200);
			setTimeout(() => {
				if (currenttime<4800) {
					owo.style.display="block";
				}
			}, y+250);
			setTimeout(() => {
				if (currenttime<4800) {
					owo.style.display="none";
					office.style.display="block";
					changeVolume("Buzz_Fan_Florescent2",1);
				}
			}, y+320);
			setTimeout(() => {
				if (currenttime<4800) {
					office.style.display="none";
					changeVolume("Buzz_Fan_Florescent2",0);
					officemovetrigger1.style.display="none";
					officemovetrigger11.style.display="none";
					officemovetrigger111.style.display="none";
					officemovetrigger2.style.display="none";
					officemovetrigger22.style.display="none";
					officemovetrigger222.style.display="none";
					buttontrigger1.style.display="none";
					lighttrigger1.style.display="none";
					buttontrigger2.style.display="none";
					lighttrigger2.style.display="none";
					freddyboop.style.display="none";
					camchar.style.display="none";
				}
			}, y+400);
			setTimeout(() => {
				if (currenttime<4800) {
					playSound("deep steps",false);
				}
			}, y+1400);
			setTimeout(() => {
				if (currenttime<4800) {
					stopSound();
					jumpscare.style.display="block";
					jumpscare.src="img/background/ryanjump.gif";
					playSound("squeak",false);
					clearInterval(tickinterval);
					fadewarning(1000);
				}
			}, y+400+z);
			setTimeout(() => {
				jumpscare.style.display="none";
				jumpscare.src="";
			}, y+1400+z);
		}
	}
}

function kitchenSound(){
	var x = Math.floor(Math.random() * 4);
		switch (x){
			case 0:
				playSound("OVEN-DRA_1_GEN-HDF18119",false);
				setTimeout(() => {
					kitchendelay=false;
				}, 7000);
				break;
			case 1:
				playSound("OVEN-DRA_2_GEN-HDF18120",false);
				setTimeout(() => {
					kitchendelay=false;
				}, 5000);
				break;
			case 2:
				playSound("OVEN-DRA_7_GEN-HDF18121",false);
				setTimeout(() => {
					kitchendelay=false;
				}, 10000);
				break;
			case 3:
				playSound("OVEN-DRAWE_GEN-HDF18122",false);
				setTimeout(() => {
					kitchendelay=false;
				}, 5000);
				break;
		}
}

function lightBrk(side){
	if (side=="left") {
		lightbreakleft--;
	}else{
		lightbreakright--;
	}
	if (lightbreakleft==0) {
		lightbreakleft=-1;
		playSound("changebulb",false);
		setTimeout(() => {
			changeVolume("BallastHumMedium2",0);
			playSound("fall",false);
		}, 800);
		setTimeout(() => {
			lampleft.style.top="94%";
		}, 1000);
		setTimeout(() => {
			officelights1.style.display="none";
			playSound("break",false);
		}, 1300);
	}
	if (lightbreakright==0) {
		lightbreakright=-1;
		playSound("changebulb",false);
		setTimeout(() => {
			changeVolume("BallastHumMedium2",0);
			playSound("fall",false);
		}, 800);
		setTimeout(() => {
			lampright.style.top="94%";
		}, 1000);
		setTimeout(() => {
			officelights2.style.display="none";
			playSound("break",false);
		}, 1300);
	}
}

function changeofficesrc(){
	officebg.src="img/background/office.png";
	timeoutID = setTimeout(() => {
		officebg.src="img/background/office_flicker.png";
		if (officerepeatsrc=="beans") {
			officebg.src="img/background/office2.png";
		}
	}, 2000);
	timeoutID = setTimeout(() => {
		officebg.src="img/background/office.png";
		if (officerepeatsrc=="beans") {
			officebg.src="img/background/office2.png";
		}
	}, 2200);
	timeoutID = setTimeout(() => {
		officebg.src="img/background/office_flicker.png";
		if (officerepeatsrc=="beans") {
			officebg.src="img/background/office2.png";
		}
	}, 2300);
	timeoutID = setTimeout(() => {
		officebg.src="img/background/office.png";
		if (officerepeatsrc=="beans") {
			officebg.src="img/background/office2.png";
		}
	}, 2400);
	timeoutID = setTimeout(() => {
		officebg.src="img/background/office_flicker.png";
		if (officerepeatsrc=="beans") {
			officebg.src="img/background/office2.png";
		}
	}, 3400);
	timeoutID = setTimeout(() => {
		officebg.src="img/background/office.png";
		if (officerepeatsrc=="beans") {
			officebg.src="img/background/office2.png";
		}
	}, 3900);
	timeoutID = setTimeout(() => {
		officebg.src="img/background/office_flicker.png";
		if (officerepeatsrc=="beans") {
			officebg.src="img/background/office2.png";
		}
	}, 6900);
	timeoutID = setTimeout(() => {
		officebg.src="img/background/office.png";
		if (officerepeatsrc=="beans") {
			officebg.src="img/background/office2.png";
		}
	}, 7000);
	timeoutID = setTimeout(() => {
		officebg.src="img/background/office_flicker.png";
		if (officerepeatsrc=="beans") {
			officebg.src="img/background/office2.png";
		}
	}, 7100);
	timeoutID = setTimeout(() => {
		officebg.src="img/background/office.png";
		if (officerepeatsrc=="beans") {
			officebg.src="img/background/office2.png";
		}
	}, 7200);
	timeoutID = setTimeout(() => {
		officebg.src="img/background/office.png";
		if (officerepeatsrc=="beans") {
			officebg.src="img/background/office2.png";
		}
	}, 7700);
	timeoutID = setTimeout(() => {
		officerepeatsrc=true;
		if (officerepeatsrc=="beans") {
			officerepeatsrc="beans";
			officebg.src="img/background/office2.png";
		}
	}, 9700);
}

function kizzydeath(){
	if (kizdeathtoggle==false) {
		kizdeathtoggle=true;
		slug.style.display="none";
		lightbreakright=-1;
		lightbreakleft=-1;
		light2.checked=false;
		light1.checked=false;
		usagenum--;
		stopSound();
		rightlight.src="img/buttons/rightlight.png";
		leftlight.src="img/buttons/Leftlight.png";
		officelights1.style.display="none";
		officelights2.style.display="none";
		camerassets.style.display="none";
		slug.style.display="none";
		cam.style.visibility="hidden";
		character1.style.visibility="hidden";
		character2.style.visibility="hidden";
		character3.style.visibility="hidden";
		officemovetrigger1.style.display="none";
		officemovetrigger11.style.display="none";
		officemovetrigger111.style.display="none";
		officemovetrigger2.style.display="none";
		officemovetrigger22.style.display="none";
		officemovetrigger222.style.display="none";
		buttontrigger1.style.display="none";
		lighttrigger1.style.display="none";
		buttontrigger2.style.display="none";
		lighttrigger2.style.display="none";
		freddyboop.style.display="none";
		for(i = 0; i < lines.length; i++) {
  		  lines[i].style.visibility="hidden";
  		}
		cameratrigger.style.display="none";
		camerabutton.style.display="none";
		if (camera.checked) {
			playSound("put down",false);
			camerabg.src="img/monitorclose.gif";
			setTimeout(() => {
			  camerabg.style.visibility="hidden";
			  camera.checked = false;
			}, "220");
		}
		setTimeout(() => {
		  jumpscare.style.display="block";
			jumpscare.src="img/background/kizjump.gif";
			playSound("goop",false);
			playSound("goop2",false);
			clearInterval(tickinterval);
			fadewarning(4000);
		}, "1000");
		setTimeout(() => {
			stopSound();
		}, "4900");
		setTimeout(() => {
			game.style.display="none";
			jumpscare.style.display="none";
			jumpscare.src="";
		}, "5100");
	}
}

function ryanMove(){
	var x = Math.floor(Math.random() * 3);
	var y1=60000-currentnight*4000;
	var y2=10000-currentnight*2000;
	var y = Math.floor(Math.random() * y1)+y2;
	var z = Math.floor(Math.random() * 10000-currentnight*1000)+40000-currentnight*2000;
	switch(character1cam){
		case "1b":
			if (x==2) {
				setTimeout(() => {
					character1cam="6";
					if (currentcam==character1cam && camera.checked==true || currentcam=="1b" && camera.checked==true) {
						changecam(currentcam);
					}
					ryanMove();
				}, y);
			}else{
				setTimeout(() => {
					character1cam="5";
					if (currentcam==character1cam && camera.checked==true || currentcam=="1b" && camera.checked==true) {
						changecam(currentcam);
					}
					character1.style.left="9%";
					character1.style.top="13%";
					character1.style.width="33%";
					character1.style.transform = "rotate(0deg)";
					ryanMove();
				}, y);
			}
			break;
		case "6":
			setTimeout(() => {
				character1cam="1b";
				if (currentcam==character1cam && camera.checked==true || currentcam=="6" && camera.checked==true) {
					changecam(currentcam);
				}
				character1.style.left="34%";
				character1.style.top="13%";
				character1.style.width="33%";
				character1.style.transform = "rotate(0deg)";
				ryanMove();
			}, y);
			break;
		case "5":
			if (x==2) {
				setTimeout(() => {
					character1cam="1b";
					if (currentcam==character1cam && camera.checked==true || currentcam=="5" && camera.checked==true) {
						changecam(currentcam);
					}
					character1.style.left="34%";
					character1.style.top="13%";
					character1.style.width="33%";
					character1.style.transform = "rotate(0deg)";
					ryanMove();
				}, y);
			}else{
				setTimeout(() => {
					character1cam="1c";
					if (currentcam==character1cam && camera.checked==true || currentcam=="5" && camera.checked==true) {
						changecam(currentcam);
					}
					character1.style.left="16%";
					character1.style.top="-191%";
					character1.style.width="79%";
					character1.style.transform = "rotate(21deg)";
					ryanMove();
				}, y);
			}
			break;
		case "1c":
			timeoutID = setTimeout(() => {
				character1cam="office";
				if (currentcam=="1c" && camera.checked==true) {
					changecam(currentcam);
				}
				ryanoffice.style.display="block";
			}, y);
			timeoutID = setTimeout(() => {
				ryanoffice.style.display="none";
				if (door1.checked==true) {
					character1cam="1b";
					character1.style.left="34%";
					character1.style.top="13%";
					character1.style.width="33%";
					character1.style.transform = "rotate(0deg)";
					windowleft=false;
					ryanMove();
				}else{
					deathdelay=true;
					changeVolume("BallastHumMedium2",0);
					officelights1.style.display="none";
					officelights2.style.display="none";
					if (camera.checked==false && power>0) {
						playSound("enter",false);
					}
				}
			}, y+z);
			break;
	}
}

function joeyMove(){
	var x = Math.floor(Math.random() * 3);
	var y1=60000-currentnight*4000;
	var y2=10000-currentnight*2000;
	var y = Math.floor(Math.random() * y1)+y2;
	var z = Math.floor(Math.random() * 10000-currentnight*1000)+40000-currentnight*2000;
	console.log(y);
	switch(character2cam){
		case "1b":
			if (x<2) {
				setTimeout(() => {
					character2cam="6";
					if (currentcam==character2cam && camera.checked==true || currentcam=="1b" && camera.checked==true) {
						changecam(currentcam);
					}
					joeyMove();
				}, y);
			}else{
				setTimeout(() => {
					character2cam="5";
					if (currentcam==character2cam && camera.checked==true || currentcam=="1b" && camera.checked==true) {
						changecam(currentcam);
					}
					character2.style.left="76%";
					character2.style.top="17%";
					character2.style.width="29%";
					character2.style.transform = "rotate(0deg)";
					joeyMove();
				}, y);
			}
			break;
		case "6":
			if (x<2) {
				timeoutID = setTimeout(() => {
					character2cam="1b";
					if (currentcam==character2cam && camera.checked==true || currentcam=="6" && camera.checked==true) {
						changecam(currentcam);
					}
					character2.style.left="68%";
					character2.style.top="33%";
					character2.style.width="31%";
					character2.style.transform = "rotate(0deg)";
					joeyMove();
				}, y);
			}else{
				timeoutID = setTimeout(() => {
					character2cam="office";
					if (currentcam=="6" && camera.checked==true) {
						changecam(currentcam);
					}
					joeyoffice.style.display="block";
					console.log(z);
				}, y);
				timeoutID = setTimeout(() => {
					joeyoffice.style.display="none";
					if (door2.checked==true) {
						character2cam="1b";
						character2.style.left="68%";
						character2.style.top="33%";
						character2.style.width="31%";
						character2.style.transform = "rotate(0deg)";
						joeyMove();
						windowright=false;
					}else{
						deathdelay=true;
						changeVolume("BallastHumMedium2",0);
						officelights1.style.display="none";
						officelights2.style.display="none";
						if (camera.checked==false && power>0) {
							playSound("enter",false);
						}
					}
				}, y+z);
				}
			break;
		case "5":
			setTimeout(() => {
				character2cam="1b";
				if (currentcam==character2cam && camera.checked==true || currentcam=="5" && camera.checked==true) {
					changecam(currentcam);
				}
				character2.style.left="68%";
				character2.style.top="33%";
				character2.style.width="31%";
				character2.style.transform = "rotate(0deg)";
				joeyMove();
			}, y);
			break;
	}
}

function furrydeath(){
	if (deathdelay==true && currenttime<4800) {
		deathdelay=false;
		stopSound();
		jumpscare.style.display="block";
		if (character1cam=="office") {
			jumpscare.src="img/background/ryanjump.gif";
		}else{
			jumpscare.src="img/background/joeyjump.gif";
		}
		playSound("squeak",false);
		clearInterval(tickinterval);
		fadewarning(1000);
		setTimeout(() => {
			game.style.display="none";
			jumpscare.style.display="none";
			jumpscare.src="";
		}, 1000);
	}
}

console.log("ඞ");