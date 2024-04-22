const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const backgroundImageRoom0 = new Image();
const backgroundImageRoom1 = new Image();
let room = 0;

backgroundImageRoom0.src = 'img/bg/house_interior.png';
backgroundImageRoom1.src = 'img/bg/house_interior2.png';

class Trigger {
  constructor(x, y, width, height, color, action) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.action = action;
  }

  draw() {
    if (this.color) {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x * canvas.width, this.y * canvas.height, this.width * canvas.width, this.height * canvas.height);
    }
  }

  handleClick(mouseX, mouseY) {
    if (
      mouseX >= this.x * canvas.width &&
      mouseX <= (this.x + this.width) * canvas.width &&
      mouseY >= this.y * canvas.height &&
      mouseY <= (this.y + this.height) * canvas.height
    ) {
      this.action();
    }
  }
}

const triggers = [
  new Trigger(0, 0, 300 / canvas.width, 1050 / canvas.height, null, () => {
    console.log('Trigger 1 clicked!');
    room = (room === 0) ? 1 : 0;
    drawBackgroundAndTriggers();
  })
];

function drawBackgroundAndTriggers() {
  if (room === 0) {
    ctx.drawImage(backgroundImageRoom0, 0, 0, canvas.width, canvas.height);
  } else {
    ctx.drawImage(backgroundImageRoom1, 0, 0, canvas.width, canvas.height);
  }
  triggers.forEach((trigger) => trigger.draw());
}

canvas.addEventListener('click', (event) => {
  const mouseX = event.clientX - canvas.getBoundingClientRect().left;
  const mouseY = event.clientY - canvas.getBoundingClientRect().top;

  triggers.forEach((trigger) => trigger.handleClick(mouseX, mouseY));
});

backgroundImageRoom0.onload = function () {
  drawBackgroundAndTriggers();
};

window.addEventListener('resize', function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  drawBackgroundAndTriggers();
});
