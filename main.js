var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var velocityX = 1;
var velocityY = 1;
var width = canvas.width;
var height = canvas.height;
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Circle(x, y, velocityX, velocityY, color, colorStroke, radius) {
  this.x = x;
  this.y = y;
  this.velocityX = velocityX;
  this.velocityY = velocityY;
  this.color = color;
  this.colorStroke = colorStroke;
  this.radius = radius;
}

Circle.prototype.draw = function() {
  context.beginPath();
  context.fillStyle = this.color;
  context.lineWidth = 5;
  context.strokeStyle = this.colorStroke;
  context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
  context.fill();
  context.stroke();
};

Circle.prototype.update = function() {
  if (this.x >= canvas.width - this.radius || this.x <= radius) {
    this.velocityX = -this.velocityX;
  }

  if (this.y >= canvas.height - this.radius || this.y <= radius) {
    this.velocityY = -this.velocityY;
   
  }

  for (const key in balls) {
    console.log(balls[key].x);
  }

  this.x += this.velocityX;
  this.y += this.velocityY;
};

var balls = [];


function createBalls() {
  while (balls.length < 10) {
    radius = 30;
    var ball = new Circle(
      31,
      31,
      2,
      2,
      "rgb(" +
        random(0, 255) +
        "," +
        random(0, 255) +
        "," +
        random(0, 255) +
        ")",
      "rgb(" +
        random(0, 255) +
        "," +
        random(0, 255) +
        "," +
        random(0, 255) +
        ")",
      radius
    );
    balls.push(ball);
    // balls[balls.length-1].draw();
  }
}

function animation() {
  setInterval(() => {
    context.fillStyle = "rgba(0, 0, 0, 0.25)";
    context.fillRect(0, 0, width, height);
  }, 2);

  setInterval(() => {
    balls[0].draw();
    balls[0].update();
  }, 4);
  setTimeout(() => {
    setInterval(() => {
      balls[1].draw();
      balls[1].update();
    }, 4);
  }, 5000);
  setTimeout(() => {
    setInterval(() => {
      //context.clearRect(0, 0, canvas.width, canvas.height);
      balls[2].draw();
      balls[2].update();
    }, 4);
  }, 1000);
  setTimeout(() => {
    setInterval(() => {
      //context.clearRect(0,0,canvas.width,canvas.height)
      balls[3].draw();
      balls[3].update();
    }, 4);
  }, 15000);
  setTimeout(() => {
    setInterval(() => {
      //context.clearRect(0,0,canvas.width,canvas.height)
      balls[4].draw();
      balls[4].update();
    }, 4);
  }, 20000);
  setTimeout(() => {
    setInterval(() => {
      //context.clearRect(0,0,canvas.width,canvas.height)
      balls[5].draw();
      balls[5].update();
    }, 5);
  }, 25000);
  setTimeout(() => {
    setInterval(() => {
      //context.clearRect(0,0,canvas.width,canvas.height)
      balls[6].draw();
      balls[6].update();
    }, 6);
  }, 30000);
  setTimeout(() => {
    setInterval(() => {
      //context.clearRect(0,0,canvas.width,canvas.height)
      balls[7].draw();
      balls[7].update();
    }, 7);
  }, 35000);
  setTimeout(() => {
    setInterval(() => {
      //context.clearRect(0,0,canvas.width,canvas.height)
      balls[8].draw();
      balls[8].update();
    }, 8);
  }, 40000);
  setTimeout(() => {
    setInterval(() => {
      //context.clearRect(0,0,canvas.width,canvas.height)
      balls[9].draw();
      balls[9].update();
    }, 9);
  }, 35000);

  //setTimeout(()=>{loop},25000);
}
createBalls();
animation();

//  var testBall = new Circle(radius,radius,velocityX,velocityY,"blue","green",radius);
//  testBall.draw();
//  testBall.update();
// var testBall = new Circle(0,0,velocityX,velocityY,"blue","green",radius);
// testBall.draw();
