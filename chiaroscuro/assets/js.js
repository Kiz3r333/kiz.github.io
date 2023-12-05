var cutscene = document.getElementById("cutscene");
var continuemenu = document.getElementById("continue");
var triggers = document.getElementById("triggers");
var lefttrigger = document.getElementById("lefttrigger");
var righttrigger = document.getElementById("righttrigger");
var toptrigger = document.getElementById("toptrigger");
const timeouts = [];
var currentnight=1;
var currentroom=2;
var holding=0;

// Creating a 3-dimensional array
let threeDimensionalArray = [
    // First dimension
    [
        // Second dimension
        ["Room 1", 2, 0, 0],
        ["Room 2", 0, 1, 0]
    ],
    [
        // Second dimension
        ["Room 1", 2, 0, 0],
        ["Room 2", 0, 1, 0]
    ]
];

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

currentnight = getCookie("currentnight");
nighthighscore = getCookie("nighthighscore");

if (currentnight === undefined){
	currentnight = 1;
}
if (nighthighscore === undefined || nighthighscore == undefined || nighthighscore === "undefined" || nighthighscore == "undefined"){
	nighthighscore = 1;
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
        loadprogress.innerHTML=loadedMedia + " assets loaded out of " + totalMedia;
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
        ["img/objects/valve.png", "image"]
    ];

    preloadMediaList(mediaList, function () {
        loadma = true;
    });
}

preload();

function selectmenu(menutype){
	playSound("blip3",false);
	if (menutype==0) {
		select.style.bottom="40%";
		continuenight.style.display="none";
		rightnightbtn.style.display="none";
		leftnightbtn.style.display="none";
	}else{
		select.style.bottom="30%";
		continuenight.style.display="block";
		if (nighthighscore>=4) {
			rightnightbtn.style.display="block";
			leftnightbtn.style.display="block";
		}
	}	
}

function startnight(night) {
	currentnight=night;
	menu.style.opacity="0%";
	newgame.removeAttribute("onclick");
	newgame.removeAttribute("onmouseover");
	leftnightbtn.removeAttribute("onclick");
	rightnightbtn.removeAttribute("onclick");
	continuemenu.removeAttribute("onclick");
	continuemenu.removeAttribute("onmouseover");
	setTimeout(() => {
		stopSound();
		loadscreen.style.display="block";
		loadprogress.style.display="block";
		menu.style.display="none";
		menu.style.opacity="100%";
		select.style.bottom="40%";
		continuenight.style.display="none";
		leftnightbtn.style.display="none";
		rightnightbtn.style.display="none";
		newgame.setAttribute("onclick", "startnight(1);");
		newgame.setAttribute("onmouseover", "selectmenu(0);");
		leftnightbtn.setAttribute("onclick", "increasenight(0);");
		rightnightbtn.setAttribute("onclick", "increasenight(1);");
		continuemenu.setAttribute("onclick", "startnight(currentnight);");
		continuemenu.setAttribute("onmouseover", "selectmenu(1);");
		checkloading();
	}, "3100");
}

function fadewarning(timerout){
	warning.removeAttribute("onclick");
	warning.style.opacity="0%";
	for (var i = 0; i < timeouts.length; i++) {
        clearTimeout(timeouts[i]);
    }
	setTimeout(() => {
		continuenight.innerHTML="Chamber " + currentnight;
		menu.style.display="block";
		warning.style.display="none";
  		playSound("darkness_music",true);
  		playSound("static",false);
  		if (nighthighscore>=3) {
  			starpng.style.display="block";
  			if (nighthighscore>=4) {
  				starnumber.style.display="block";
  				starnumber.innerHTML=nighthighscore;
  			}
  		}
	}, timerout);
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
	loadprogress.style.display="none";
  loadroom(currentroom);
  game.style.display="block";
  cutscene.style.display="none";
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

const valve = document.getElementById('valve');
const valvehitbox = document.getElementById('valvehitbox');
let isMouseDown = false;
let previousAngle = 0;
let accumulatedRotation = 0;
let continuousRotationInterval;
let isRotatingManually = false;

const minRotation = 0; // Set your desired minimum rotation value
const maxRotation = 720; // Set your desired maximum rotation value

valvehitbox.addEventListener('mousedown', handleMouseDown);
document.addEventListener('mouseup', handleMouseUp);
document.addEventListener('mousemove', handleMouseMove);

function handleMouseDown(event) {
  isMouseDown = true;
  previousAngle = getMouseAngle(event);
  clearInterval(continuousRotationInterval);
  isRotatingManually = true;
}

function handleMouseUp() {
  isMouseDown = false;
  clearInterval(continuousRotationInterval);
  if (accumulatedRotation > minRotation) {
    continuousRotationInterval = setInterval(rotateValveContinuously, 10);
  }
  isRotatingManually = false;
}


function handleMouseMove(event) {
  if (isMouseDown) {
    const currentAngle = getMouseAngle(event);
    let rotation = currentAngle - previousAngle;

    rotation = normalizeRotation(rotation);
    rotation /= 50;

    accumulatedRotation += rotation;
    accumulatedRotation = clampRotation(accumulatedRotation);
    valve.style.transform = `rotate(${accumulatedRotation}deg)`;
    previousAngle = currentAngle;
    isRotatingManually = true;
  }
}

function rotateValveContinuously() {
  //console.log(accumulatedRotation);
  if (!isMouseDown && !isRotatingManually) {
    // Adjust this value to change the speed of continuous rotation
    const continuousRotationSpeed = 0.02;
    accumulatedRotation -= continuousRotationSpeed;
    accumulatedRotation = clampRotation(accumulatedRotation);
    valve.style.transform = `rotate(${accumulatedRotation}deg)`;

    // Stop continuous rotation when the valve reaches the minimum rotation
    if (accumulatedRotation <= minRotation) {
      clearInterval(continuousRotationInterval);
    }
  }
}


function getMouseAngle(event) {
  const rect = valve.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  const mouseX = event.clientX - centerX;
  const mouseY = event.clientY - centerY;

  return Math.atan2(mouseY, mouseX) * (180 / Math.PI);
}

function normalizeRotation(rotation) {
  if (Math.abs(rotation) > 180) {
    if (rotation > 0) {
      rotation -= 360;
    } else {
      rotation += 360;
    }
  }
  return rotation;
}

function clampRotation(rotation) {
  return Math.max(minRotation, Math.min(rotation, maxRotation));
}

const shadow = document.querySelector('.shadow');

document.addEventListener('mousemove', (e) => {
  let x = e.clientX - (document.documentElement.clientWidth * 1.5);
  let y = e.clientY - (document.documentElement.clientHeight * 1.5);
  shadow.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
})

function loadroom(room) {
  lefttrigger.removeAttribute("onclick");
  righttrigger.removeAttribute("onclick");
  toptrigger.removeAttribute("onclick");
  triggers.style.display="none";
  document.getElementById("room"+currentroom).style.opacity="0%";
  setTimeout(() => {
    document.getElementById("room"+currentroom).style.display="none";
    document.getElementById("room"+room).style.display="block";
    document.getElementById("room"+room).style.opacity="0%";
    currentroom=room;
  }, "410");
  setTimeout(() => {
    document.getElementById("room"+room).style.opacity="100%";
  }, "500");
  setTimeout(() => {
    if (threeDimensionalArray[(currentnight-1)][(room-1)][1]!=0) {
      lefttrigger.setAttribute("onclick", "loadroom("+threeDimensionalArray[(currentnight-1)][(room-1)][1]+");");
    }
    if (threeDimensionalArray[(currentnight-1)][(room-1)][2]!=0) {
      righttrigger.setAttribute("onclick", "loadroom("+threeDimensionalArray[(currentnight-1)][(room-1)][2]+");");
    }
    if (threeDimensionalArray[(currentnight-1)][(room-1)][3]!=0) {
      toptrigger.setAttribute("onclick", "loadroom("+threeDimensionalArray[(currentnight-1)][(room-1)][3]+");");
    }
    triggers.style.display="block";
  }, "900");
}

console.log("ඞ");