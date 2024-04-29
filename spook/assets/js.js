document.addEventListener('contextmenu', event => event.preventDefault());

var tiredprcnt = document.getElementById("tiredprcnt");
var powerprcnt = document.getElementById("powerprcnt");
var gameboy = document.getElementById("gameboy");
var gameboycharger = document.getElementById("gameboycharger");
var eyeimg = document.getElementById("eyeimg");
var gamestate = document.getElementById("gamestate");
var eye = document.getElementById("eye");

var tired = 0;
var power = 100;
var gamepowerdrop = 0.2;
var chargerpower = 1;
var tickinterval = null;
gameboy.checked=false;
gameboycharger.checked=false;
eye.checked=false;

function tick(){
	increaseTired();
	updatePower();
}

function increaseTired(){
	if (gameboy.checked==true && gameboycharger.checked==false && power>0 && tired<100) {
		tired=parseFloat((tired + 0.05).toFixed(2));

		tiredprcnt.innerHTML="Tired: "+tired+"%";
	}
}

function updatePower(){
	if (gameboy.checked==true && gameboycharger.checked==false && power>0) {
		power=parseFloat((power - gamepowerdrop).toFixed(2));
	}

	if (gameboycharger.checked==true) {
		power=parseFloat((power + chargerpower).toFixed(2));
	}

	if (power<0) {
		power=0;
	}else{
		if (power>100) {
			power=100;
		}
	}

	powerprcnt.innerHTML="Power: "+power+"%";
}

function togglegameboy(){
	if (gameboy.checked==true) {
		gameboy.checked=false;
	}else{
		gameboy.checked=true;
	}
}

function togglecharger(){
	if (gameboycharger.checked==true) {
		gameboycharger.checked=false;
	}else{
		gameboycharger.checked=true;
	}
}

function toggleeye(){
	if (eye.checked==true) {
		eye.checked=false;
		eyeimg.src="img/eyeopen.png";
		gamestate.style.display="block";
	}else{
		eye.checked=true;
		eyeimg.src="img/eyeclose.png";
		gamestate.style.display="none";
	}
}

window.onload = function() {
    tickinterval = setInterval(tick, 100);
};