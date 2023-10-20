let vents = [];
vents[0] = ["1", "2", "3", "4", false, false];

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function scrambleMaze() {
    for (let i = 0; i < 25; i++) {
        let colors = vents[0].slice(0, 4);
        shuffleArray(colors);
        vents.push(colors.concat(vents[0].slice(4)));
    }
}

// Call the function to scramble the maze 25 times
scrambleMaze();


const shadow = document.querySelector('.shadow');

document.addEventListener('mousemove', (e) => {
  let x = e.clientX - (document.documentElement.clientWidth * 1.5);
  let y = e.clientY - (document.documentElement.clientHeight * 1.5);
  shadow.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
})

document.addEventListener('contextmenu', event => event.preventDefault());

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
  }

  audioElement.addEventListener('ended', function () {
    const index = playingSources.findIndex(item => item.audioElement === audioElement);
    if (index !== -1) {
      playingSources[index].source.disconnect();
      audioElement.pause();
      playingSources.splice(index, 1);
    }
  });

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

var facing = Math.floor(Math.random() * 4);
var currentvent = Math.floor(Math.random() * 25);
var flashon = false;
var flashcooldown = false;
var ventbg = document.getElementById("ventbg");
var fakeventbg = document.getElementById("fakeventbg");
var levents = document.getElementById("levents");
var trigger1 = document.getElementById("trigger1");
var trigger2 = document.getElementById("trigger2");
var trigger3 = document.getElementById("trigger3");
var wire = document.getElementById("wire");
var shadowid = document.getElementById("shadowid");
var flashedwire = document.getElementById("flashedwire");
var myTimeout;

function moveforward() {
	flashedwire.style.display="none";
	shadowid.style.backgroundImage="radial-gradient(circle at center, transparent, #000 50%)";
	if (flashon==true) {
		flashon=false;
		playSound("Flashlight_Off",false);
	}
	flashcooldown=true;
	clearTimeout(myTimeout);
	ventbg.src="img/ventwalk.gif";
	trigger1.style.display="none";
	trigger2.style.display="none";
	trigger3.style.display="none";
	wire.style.top="-31%";
	playSound("metal_duct_fast2",false);
	vents[currentvent][4]=false;
	switch (facing){
		case 0:
			currentvent=currentvent-5;
			break;
		case 1:
			currentvent=currentvent+1;
			break;
		case 2:
			currentvent=currentvent+5;
			break;
		case 3:
			currentvent=currentvent-1;
			break;
	}
	vents[currentvent][4]=true;
	setTimeout(() => {
		levents.style.opacity="0%";
	}, "1500");
	setTimeout(() => {
		wire.src="img/wire"+vents[currentvent][facing]+".png";
		wire.style.top="-12%";
		levents.style.opacity="100%";	
		trigger2.style.display="block";
		trigger3.style.display="block";
		checkVentWallAgain();
		flashcooldown=false;
	}, "2500");
	console.log(currentvent);
}

function moveright(side) {
	flashedwire.style.display="none";
	shadowid.style.backgroundImage="radial-gradient(circle at center, transparent, #000 50%)";
	if (flashon==true) {
		flashon=false;
		playSound("Flashlight_Off",false);
	}
	flashcooldown=true;
	clearTimeout(myTimeout);
	if (facing<=2 && side=="right") {
			facing++;
		}else{
			if (side=="right") {
				facing=0;
			}else{
				if (facing>0 && side=="left") {
					facing--;
				}else{
					facing=3;
				}
			}
			
		}
	checkVentWall();
	fakeventbg.style.display="block";
	fakeventbg.style.transitionDuration = "0s";
	checkVentWall();
	playSound("clankv2",false);
	if (side=="right") {
		fakeventbg.style.left="100%";
	}else{
		fakeventbg.style.left="-100%";
	}
	setTimeout(() => {
		fakeventbg.style.transitionDuration = "2s";
		if (side=="right") {
			ventbg.style.left="-100%";
		}else{
			ventbg.style.left="100%";
		}
		fakeventbg.style.left="0%";
		trigger1.style.display="none";
		trigger2.style.display="none";
		trigger3.style.display="none";
		wire.style.top="-31%";
	}, "10");
	
	setTimeout(() => {
		wire.src="img/wire"+vents[currentvent][facing]+".png";
		wire.style.top="-12%";
	}, "1500");
	setTimeout(() => {
		ventbg.style.transitionDuration = "0s";
		ventbg.style.left="0%";
	}, "2000");
	setTimeout(() => {
		fakeventbg.style.display="none";
		ventbg.style.transitionDuration = "2s";
		trigger2.style.display="block";
		trigger3.style.display="block";
		flashcooldown=false;
	}, "2500");
	console.log(facing);
}

function checkVentWall(){
	switch (facing){
		case 0:
			if (currentvent-5<0) {
				fakeventbg.src="img/ventwall.png";
				setTimeout(() => {
					ventbg.src="img/ventwall.png";
				}, "2500");
			}else{
				fakeventbg.src="img/ventbg.png";
				setTimeout(() => {
					ventbg.src="img/ventbg.png";
					trigger1.style.display="block";
				}, "2500");
			}
			break;
		case 1:
			if (currentvent+1>25) {
				fakeventbg.src="img/ventwall.png";
				setTimeout(() => {
					ventbg.src="img/ventwall.png";
				}, "2500");
			}else{
				fakeventbg.src="img/ventbg.png";
				setTimeout(() => {
					ventbg.src="img/ventbg.png";
					trigger1.style.display="block";
				}, "2500");
			}
			break;
		case 2:
			if (currentvent+5>25) {
				fakeventbg.src="img/ventwall.png";
				setTimeout(() => {
					ventbg.src="img/ventwall.png";
				}, "2500");
			}else{
				fakeventbg.src="img/ventbg.png";
				setTimeout(() => {
					ventbg.src="img/ventbg.png";
					trigger1.style.display="block";
				}, "2500");
			}
			break;
		case 3:
			if (currentvent-1<0) {
				fakeventbg.src="img/ventwall.png";
				setTimeout(() => {
					ventbg.src="img/ventwall.png";
				}, "2500");
			}else{
				fakeventbg.src="img/ventbg.png";
				setTimeout(() => {
					ventbg.src="img/ventbg.png";
					trigger1.style.display="block";
				}, "2500");
			}
			break;
	}
}

function checkVentWallAgain(){
	switch (facing){
		case 0:
			if (currentvent-5<0) {
				ventbg.src="img/ventwall.png";
			}else{
				ventbg.src="img/ventbg.png";
				trigger1.style.display="block";
			}
			break;
		case 1:
			if (currentvent+1>25) {
				ventbg.src="img/ventwall.png";
			}else{
				ventbg.src="img/ventbg.png";
				trigger1.style.display="block";
			}
			break;
		case 2:
			if (currentvent+5>25) {
				ventbg.src="img/ventwall.png";
			}else{
				ventbg.src="img/ventbg.png";
				trigger1.style.display="block";
			}
			break;
		case 3:
			if (currentvent-1<0) {
				ventbg.src="img/ventwall.png";
			}else{
				ventbg.src="img/ventbg.png";
				trigger1.style.display="block";
			}
			break;
	}
}

function fadewarning(timerout){
	warning.removeAttribute("onclick");
	warning.style.opacity="0%";
	setTimeout(() => {
		levents.style.display="block";
		shadowid.style.display="block";
		warning.style.display="none";
  		playSound("elevator_idle_loopv4",true);
	}, timerout);
}

window.oncontextmenu = function () {
  flash();
}

function flash(){
	if (flashon==false && flashcooldown==false) {
		playSound("Flashlight_On",false);
		flashon=true;
		flashcooldown=true;
		shadowid.style.backgroundImage="radial-gradient(circle at center, transparent, #000 100%)";
		if (ventbg.src.includes("ventbg.png")) {
			ventbg.src="img/ventlight.png";
			switch (facing){
			case 0:
				flashedwire.src="img/wire"+vents[currentvent-5][facing]+".png";
				break;
			case 1:
				flashedwire.src="img/wire"+vents[currentvent+1][facing]+".png";
				break;
			case 2:
				flashedwire.src="img/wire"+vents[currentvent+5][facing]+".png";
				break;
			case 3:
				flashedwire.src="img/wire"+vents[currentvent-1][facing]+".png";
				break;
	}
			flashedwire.style.display="block";
		}
		myTimeout = setTimeout(() => {
			flashcooldown=false;
		}, 1000);
	}else{
		if (flashon==true && flashcooldown==false) {
			playSound("Flashlight_Off",false);
			flashon=false;
			flashcooldown=true;
			flashedwire.style.display="none";
			shadowid.style.backgroundImage="radial-gradient(circle at center, transparent, #000 50%)";
			if (ventbg.src.includes("ventlight.png")) {
				ventbg.src="img/ventbg.png";
			}
			myTimeout= setTimeout(() => {
				flashcooldown=false;
			}, 1000);
		}
	}
}