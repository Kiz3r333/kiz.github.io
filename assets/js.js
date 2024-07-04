document.addEventListener('DOMContentLoaded', (event) => {
      // Disable right click
      document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
      });

      // Disable middle click
      document.addEventListener('mousedown', function(e) {
        if (e.button === 1) { // Middle mouse button
          e.preventDefault();
        }
      });

      // Alternatively, you can use 'mouseup' instead of 'mousedown'
      document.addEventListener('mouseup', function(e) {
        if (e.button === 1) { // Middle mouse button
          e.preventDefault();
        }
      });
    });

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("img");
    images.forEach(img => {
        img.addEventListener("dragstart", function(event) {
            event.preventDefault();
        });
    });
});

var room=0;

var backgroundhall = document.getElementById("backgroundhall");
var alastorroomtrigger = document.getElementById("alastorroomtrigger");
var alastorroom = document.getElementById("alastorroom");
var mainhall = document.getElementById("mainhall");
var start = document.getElementById("start");
var radio = document.getElementById("radio");
var alastorpng = document.getElementById("alastorpng");
var camerabg = document.getElementById("camerabg");
var mainhalltriggers = document.getElementById("mainhalltriggers");
var camerassets = document.getElementById("camerassets");
var static = document.getElementById("static");
var cam = document.getElementById("cam");
var angedustcam = document.getElementById("angedustcam");
var huskplush = document.getElementById("huskplush");
var huskplushtrigger = document.getElementById("huskplushtrigger");
var huskplushhall = document.getElementById("huskplushhall");
var angeldusthall = document.getElementById("angeldusthall");
var deathoverlay = document.getElementById("deathoverlay");
var angeljumpscare = document.getElementById("angeljumpscare");
var exacttime = document.getElementById("exacttime");

function changerooms(whatroom){
    mainhall.style.display="none";
    alastorroom.style.display="none";
    playSound("footstep", false);
    console.log("what");
    room=whatroom;
    switch(whatroom){
        case 0:
            backgroundhall.src="img/hall.png";
            mainhall.style.display="block";
            changeVolume("alastorsong", 0.05);
            break;
        case 1:
            backgroundhall.src="img/alastorroom.webp";
            alastorroom.style.display="block";
            changeVolume("alastorsong", 0.4);
            break;
    }
}


function getRandomSeconds(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var alastorradiotimer = getRandomSeconds(10, 40);
var timeoutal;
var timeoutal2;
var timeoutal3;
var timeoutal4;
var alphase=0;
var blinkinterval = null;
var blink=false;


function alastorradio(){
    clearTimeout(timeoutal);
    clearTimeout(timeoutal2);
    clearTimeout(timeoutal3);
    clearTimeout(timeoutal4);
    radio.removeAttribute("onclick");
    changeVolume("alastorsong", 0);
    playSound("alastorsong", false);
    changeVolume("alastorsong", 0.4);
    setTimeout(() => {
            radio.setAttribute("onclick", "alastorradio();");
    }, 40000);
    timeoutal = setTimeout(() => {
        commuteal();
    }, 48000);
    timeoutal2 = setTimeout(() => {
        commuteal();
    }, 68000);
    timeoutal3 = setTimeout(() => {
        commuteal();
    }, 88000);
    timeoutal4 = setTimeout(() => {
        commuteal();
    }, 108000);
}

function commuteal(){
    alphase++;
    alastorpng.style.display="block";
    switch(alphase){
        case 1:
            alastorpng.src="img/alastor.webp";
            break;
        case 2:
            alastorpng.src="img/alastor2.webp";
            break;
        case 3:
            alastorpng.src="img/alastor3.webp";
            alastorpng.style.width="85%";
            alastorpng.style.left="20%";
            alastorpng.style.top="11%";
            alastorpng.style.transform="scaleX(1)";
            break;
        case 4:
            alastorpng.style.display="none";
            radio.removeAttribute("onclick");
            if (cameraup==true && death==false) {
                flipcamera();
                playSound("alastorfuck",false);
            }
            break;
    }
    if (room==1 && alphase<=4) {
        playSound("allaugh", false);
    }
}

var cameraup=false;
var cameradelay=false;
var currentcam=1;

function flipcamera(){
    if (cameradelay==false) {
        cameradelay=true;
        if (cameraup) {
            camerassets.style.display="none";
            camerabg.src="img/monitorclose.gif";
            cameraup = false;
            playSound("put down",false);
            changeVolume("MiniDV_Tape_Eject_1",0);
            changeVolume("CAMERA_VIDEO_LOA_60105303",0);
            changeVolume("alastorsong", 0.05);
            changeVolume("stayedgone", 0.00001);
            setTimeout(() => {
              camerabg.style.visibility="hidden";
              mainhalltriggers.style.display="block";
            }, "220");
        }else{
            if (alphase<=3) {
                camerabg.src="img/monitoropen.gif";
                cameraup = true;
                playSound("MiniDV_Tape_Eject_1",true);
                playSound("CAMERA_VIDEO_LOA_60105303",false);
                changeVolume("stayedgone", 0.1);
                changeVolume("alastorsong", 0.00001);
                setTimeout(() => {
                  camerabg.style.visibility="visible";
                  mainhalltriggers.style.display="none";
                  camerassets.style.display="block";
                    if (currentcam==angeldustcamera) {
                        angedustcam.style.visibility="visible";
                    }else{
                        angedustcam.style.visibility="hidden";
                    }
                    if (currentcam==huskyroom) {
                        huskplush.style.visibility="visible";
                        huskplushtrigger.style.display="block";
                    }else{
                        huskplush.style.visibility="hidden";
                        huskplushtrigger.style.display="none";
                    }
                }, "220");
            }else{
                playSound("alastorfuck",false);
            }
            
        }
        if (alphase<=3) {
            camerabg.style.visibility="visible";
            setTimeout(() => {
              cameradelay=false;
            }, "300");
        }else{
            camerabg.style.visibility="hidden";
            setTimeout(() => {
              cameradelay=false;
            }, "3000");
        }
        
    }
    
}

function changecam(camnmb){
    playSound("blip3",false);
    document.getElementById("cam"+currentcam).style.filter ="grayscale(1)";
    currentcam=camnmb;
    document.getElementById("cam"+currentcam).style.filter ="grayscale(0)";
    cam.src="img/cam"+camnmb+"bg.png";
    if (camnmb==angeldustcamera) {
        angedustcam.style.visibility="visible";
    }else{
        angedustcam.style.visibility="hidden";
    }
    if (currentcam==huskyroom) {
        huskplush.style.visibility="visible";
        huskplushtrigger.style.display="block";
    }else{
        huskplush.style.visibility="hidden";
        huskplushtrigger.style.display="none";
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

blinkinterval = setInterval(camblink, 700);

var angeldustcamera=1;
var angelrandomtime = getRandomSeconds(1000,10000);
var waitingangel;
var angelrandomtimeboost=0;

function angeldustwalk(){
    angedustcam.style.display="block";
    if (currentcam==angeldustcamera && cameraup==true) {
        console.log("fuck");
        angedustcam.style.visibility="visible";
        changecam(currentcam);
    }else{
        if (angeldustcamera-1==currentcam && cameraup==true) {
            console.log("fuck222");
            angedustcam.style.visibility="hidden";
            changecam(currentcam);
        }
        
    }
    switch(angeldustcamera){
        case 1:
            angedustcam.src="img/angeldust1.webp";
            angedustcam.style.top="27%";
            angedustcam.style.left="5%";
            angedustcam.style.width="13.5%";
            break;
        case 2:
            angedustcam.src="img/angeldust2.webp";
            angedustcam.style.top="48%";
            angedustcam.style.left="33%";
            angedustcam.style.width="8.5%";
            break;
        case 3:
            angedustcam.src="img/angeldust3.webp";
            angedustcam.style.top="35%";
            angedustcam.style.left="23%";
            angedustcam.style.width="13.5%";
            break;
        case 4:
            angedustcam.src="img/angeldust4.png";
            angedustcam.style.top="26%";
            angedustcam.style.left="55%";
            angedustcam.style.width="13.5%";
            break;
        case 5:
            angedustcam.src="img/angeldust5.png";
            angedustcam.style.top="27.5%";
            angedustcam.style.left="5%";
            angedustcam.style.width="46.5%";
            break;
        case 6:
            angedustcam.style.display="none";
            angeldusthall.style.display="block";
            if (room==0 && cameraup==false) {
                playSound("angelshere",false);
            }
            waitingangel = setTimeout(() => {
                jumpscareangle();
            }, 7500-angelrandomtimeboost);
            break;
    }
    setTimeout(() => {
        if (angeldustcamera<=5) {
            angeldustcamera++;
            angelrandomtime = getRandomSeconds(1000,10000);
            angelrandomtime=angelrandomtime-angelrandomtimeboost;
            angeldustwalk();
        }
        
    }, angelrandomtime);
}

var huskyroom = getRandomSeconds(1,5);
var hithusky = getRandomSeconds(3,15);
var timeshit = 0;
var doyouhavehusky=false;

function spawnhuskydoll() {
    huskyroom = getRandomSeconds(1,5);
    hithusky = getRandomSeconds(3,15);
    console.log(huskyroom);
    switch(huskyroom){
        case 1:
            huskplush.style.top="33.5%";
            huskplush.style.left="46%";
            huskplush.style.width="4.5%";
            huskplushtrigger.style.top="33.5%";
            huskplushtrigger.style.left="46%";
            huskplushtrigger.style.width="4.5%";
            huskplushtrigger.style.height="8.5%";
            break;
        case 2:
            huskplush.style.top="78%";
            huskplush.style.left="88%";
            huskplush.style.width="8.5%";
            huskplushtrigger.style.top="78%";
            huskplushtrigger.style.left="88%";
            huskplushtrigger.style.width="8.5%";
            huskplushtrigger.style.height="14.5%";
            break;
        case 3:
            huskplush.style.top="67%";
            huskplush.style.left="13%";
            huskplush.style.width="7.5%";
            huskplushtrigger.style.top="67%";
            huskplushtrigger.style.left="13%";
            huskplushtrigger.style.width="7.5%";
            huskplushtrigger.style.height="13.5%";
            break;
        case 4:
            huskplush.style.top="62%";
            huskplush.style.left="26%";
            huskplush.style.width="5.5%";
            huskplushtrigger.style.top="62%";
            huskplushtrigger.style.left="26%";
            huskplushtrigger.style.width="5.5%";
            huskplushtrigger.style.height="9.5%";
            break;
        case 5:
            huskplush.style.top="73.5%";
            huskplush.style.left="60%";
            huskplush.style.width="5.5%";
            huskplushtrigger.style.top="73.5%";
            huskplushtrigger.style.left="60%";
            huskplushtrigger.style.width="5.5%";
            huskplushtrigger.style.height="9.5%";
            break;
    }
}


function clickingdoll(){
    timeshit++;
    playSound("squeak", false);
    if (timeshit>=hithusky) {
        huskplush.style.display="none";
        huskplushtrigger.style.display="none";
        doyouhavehusky=true;
        huskplushhall.style.display="block";
        timeshit=0;
    }
}

function hallangeldust() {
    if (doyouhavehusky) {
        clearTimeout(waitingangel);
        playSound("angeldustomg",false);
        doyouhavehusky=false;
        angeldusthall.style.display="none";
        huskplushhall.style.display="none";
        huskplush.style.display="block";
        huskplushtrigger.style.display="block";
        angeldustcamera=1;
        angelrandomtimeboost=angelrandomtimeboost+25;
        angeldustwalk();
        spawnhuskydoll();
    }else{
        playSound("angelsus",false);
    }
}

var death=false;

function jumpscareangle(){
    death=true;
    stopSound();
    clearTimeout(timerinterval);
    playSound("angeljumpscare",false);
    deathoverlay.style.display="block";
    setTimeout(() => {
        angeljumpscare.style.display="block";
    }, 1000);
}




var miliseconds = 0;
var timerinterval = null;

function upTimer() {
    ++miliseconds;
    
    var seconds = Math.floor((miliseconds / 10) % 60);
    var minutes = Math.floor(miliseconds / 600);

    if (minutes >= 1) {
        seconds = Math.floor((miliseconds / 10) % 60);
        minutes = Math.floor((miliseconds / 600) % 60);
    }

    exacttime.innerHTML = minutes + ":" + (seconds < 10 ? "0" : "") + seconds + ":" + (miliseconds % 10);
}



let audioContext;
let analyserNode;
let playingSources = [];
let globalVolume = 0.5;
const MAX_AUDIO_ELEMENTS = 10;

function initializeVisuals() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    analyserNode = audioContext.createAnalyser();
    analyserNode.fftSize = 256;
  }
}

function playSound(soundUrl, loop) {
  if (!audioContext || !analyserNode) {
    initializeVisuals();
  }

  if (playingSources.length >= MAX_AUDIO_ELEMENTS) {
    console.warn("Maximum number of audio elements reached");
    return;
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
    gainNode.gain.value = globalVolume;
  }

  audioElement.addEventListener('ended', function () {
    const endedSrc = this.src.split('/').pop();
    const index = playingSources.findIndex(item => item.audioElement === audioElement);

    if (index !== -1) {
      playingSources[index].source.disconnect();
      audioElement.pause();
      playingSources.splice(index, 1);
    }
  });

  audioElement.volume = globalVolume;
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
      audioElement.volume = volume * globalVolume;
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

function setGlobalVolume(volume) {
  globalVolume = volume;
  for (const { audioElement } of playingSources) {
    audioElement.volume = volume;
  }
}


function startgame(){
    alastorradio();
    start.style.display="none";
    changeVolume("alastorsong", 0.1);
    angeldustwalk();
    spawnhuskydoll();
    playSound("stayedgone",true);
    changeVolume("stayedgone", 0.0001);
    timerinterval = setInterval(upTimer, 100);
}

console.log("kurwa");