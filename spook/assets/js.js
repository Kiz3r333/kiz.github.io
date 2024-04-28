document.addEventListener('contextmenu', event => event.preventDefault());

var power = 0;
var tiredprcnt = document.getElementById("tiredprcnt");
var gameboy = document.getElementById("gameboy");

function tick(){
	increaseTired();
}

function increaseTired(){
	if (gameboy.checked==true) {
		power=power+0.01;

		tiredprcnt.innerHTML="Tired: "+power+"%";
	}
	
}