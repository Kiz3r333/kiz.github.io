var power = 99;
var visualPower = document.getElementById("power");
var door1 = document.getElementById("door1");
var door2 = document.getElementById("door2");
var camera = document.getElementById("camera");
var office = document.getElementById("office");
var officemovetrigger1 = document.getElementById("officemovetrigger1");
var officemovetrigger2 = document.getElementById("officemovetrigger2");
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
var officedistance = -25;
var cameradistance = -25;
var intervalId = null;
var intervalcam = null;
var cameradelay = 10;
var doordelay = 10;
var cameramovedelay = 100;
var currentcam = "1a";
var currenttime = 0;
var ticknumb=0;
var blink=false;

document.addEventListener('contextmenu', event => event.preventDefault());

var images = [];
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
        console.log("loaded "+ preload.arguments[i])
    }
}

//-- usage --//
preload(
	"img/camera/static.gif",
	"img/menu/FNaFFreddy_Menu.gif",
    "img/background/office.png",
    "img/background/office2.png",
    "img/background/officelightsleft.png",
    "img/background/officelightsright.png",
    "img/buttons/Door_Lclose.gif",
    "img/buttons/Door_Lopen.gif",
    "img/buttons/Door_Rclose.gif",
    "img/buttons/Door_Ropen.gif",
    "img/buttons/Leftbutton.png",
    "img/buttons/Leftbuttonon.png",
    "img/buttons/Leftlight.png",
    "img/buttons/Leftlighton.png",
    "img/buttons/rightbutton.png",
    "img/buttons/rightbuttonon.png",
    "img/buttons/rightlight.png",
    "img/buttons/rightlighton.png",
    "img/camera/Cam_01_text.png",
	"img/camera/Cam_01b_text.png",
	"img/camera/Cam_01c_text.png",
	"img/camera/Cam_02_text.png",
	"img/camera/Cam_02b_text.png",
	"img/camera/Cam_03_text.png",
	"img/camera/Cam_04_text.png",
	"img/camera/Cam_04b_text.png",
	"img/camera/Cam_05_text.png",
	"img/camera/Cam_06_text.png",
	"img/camera/Cam_07_text.png",
	"img/camera/CAM1A.png",
	"img/camera/CAM1B.png",
	"img/camera/CAM1C.png",
	"img/camera/CAM2A.png",
	"img/camera/CAM2B.png",
	"img/camera/CAM3.png",
	"img/camera/CAM4A.png",
	"img/camera/CAM4B.png",
	"img/camera/CAM5.png",
	"img/camera/CAM6.png",
	"img/camera/CAM7.png",
	"img/camera/map.png",
	"img/monitorclose.gif",
	"img/monitoropen.gif"
);

function cameraopenw(){
	if (cameradelay==10) {
		cameradelay=0;
		camerabg.style.display="block";
		light1.checked = false;
		light2.checked = false;
		leftlight.src="img/buttons/Leftlight.png";
		rightlight.src="img/buttons/rightlight.png";
		officelights1.style.display="none";
		officelights2.style.display="none";
		if (camera.checked==false) {
			camerabg.src="img/monitoropen.gif";
			officemovetrigger1.style.display="none";
			officemovetrigger2.style.display="none";
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
				static.style.opacity="10%";
			}, "320");
		}else{
			camerabg.src="img/monitorclose.gif";
			officemovetrigger1.style.display="block";
			officemovetrigger2.style.display="block";
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
			  camerabg.style.display="none";
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
	timecount();
	movecameras();	
}

function loadme(){
	power -= 0.015;
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
	    visualPower.innerHTML = "YELL AT KIZ TO IMPLEMENT THIS BETTER";
	    outofpower();
	    return;
	}else{
		visualPower.innerHTML = power.toFixed(0);
	}
	
}

function movebg(side) {
	clearInterval(intervalId);
	if (side==0 && officedistance<=0 && camera.checked==false) {
		intervalId = setInterval(movebgleft, 1);
	}else{
		if (side==1 && officedistance>=-50 && camera.checked==false) {
			intervalId = setInterval(movebgright, 1);
		}
	}
	
}

function movebgleft() {
	if (officedistance<=0) {
		officedistance=officedistance+0.13;

		office.style.left= officedistance+"%";
	}	
}

function movebgright() {
	if (officedistance>=-50) {
		officedistance=officedistance-0.13;
		office.style.left= officedistance+"%";
	}	
}

function doorbtn(direction) {
	if (doordelay==10) {
		doordelay=0;
		if (direction==0) {
			if (door1.checked==false) {
				door1.checked=true;
				leftbutton.src="img/buttons/Leftbuttonon.png";
				leftdoor.src="img/buttons/Door_Lclose.gif";
			}else{
				door1.checked = false;
				leftbutton.src="img/buttons/Leftbutton.png";
				leftdoor.src="img/buttons/Door_Lopen.gif";
			}
		}else{
			if (door2.checked==false) {
				door2.checked=true;
				rightbutton.src="img/buttons/rightbuttonon.png";
				rightdoor.src="img/buttons/Door_Rclose.gif";
			}else{
				door2.checked = false;
				rightbutton.src="img/buttons/rightbutton.png";
				rightdoor.src="img/buttons/Door_Ropen.gif";
			}
		}
	}
}

function lightbtn(direction) {
	if (direction==0) {
		if (light1.checked==false) {
			light1.checked=true;
			light2.checked=false;
			leftlight.src="img/buttons/Leftlighton.png";
			rightlight.src="img/buttons/rightlight.png";
			officelights1.style.display="block";
			officelights2.style.display="none";

		}else{
			light1.checked=false;
			light2.checked=false;
			leftlight.src="img/buttons/Leftlight.png";
			rightlight.src="img/buttons/rightlight.png";
			officelights1.style.display="none";
			officelights2.style.display="none";
		}
	}else{
		if (light2.checked==false) {
			light2.checked=true;
			light1.checked=false;
			rightlight.src="img/buttons/rightlighton.png";
			leftlight.src="img/buttons/Leftlight.png";
			officelights2.style.display="block";
			officelights1.style.display="none";
		}else{
			light2.checked=false;
			light1.checked=false;
			rightlight.src="img/buttons/rightlight.png";
			leftlight.src="img/buttons/Leftlight.png";
			officelights1.style.display="none";
			officelights2.style.display="none";
		}
	}
}

function outofpower(){
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
	officemovetrigger2.style.display="block";
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
		  camerabg.style.display="none";
		  camera.checked = false;
		}, "220");
	}
}

function changecam(camnmb){
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
		static.style.opacity="10%";
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
	if (currenttime<4800) {
		currenttime++;
		x= Math.trunc(currenttime/800);
		if (x==0) {
			x=12;
		}
		amtime.innerHTML= x + " AM";
	}
	
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
	if (menutype==0) {
		select.style.bottom="40%";
		continuenight.style.display="none";
	}else{
		select.style.bottom="30%";
		continuenight.style.display="block";
	}	
}

function startnight(night) {
	menu.style.display="none";
	game.style.display="block";
	for(i = 0; i < lines.length; i++) {
  	  lines[i].style.visibility="hidden";
  	  lines[i].style.zIndex="2";
  	  lines[i].style.opacity="10%";
  	}
	setInterval(tick, 100);
	setInterval(camblink, 700);
}

function fadewarning(){
	warning.style.opacity="0%";
	setTimeout(() => {
		menu.style.display="block";
		warning.style.display="none";
		for(i = 0; i < lines.length; i++) {
  		  lines[i].style.display="block";
  		}
	}, "3100");
}