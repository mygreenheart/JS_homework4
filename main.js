var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var velocityX = 1;
var velocityY = 1;
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
var balls = [];
var sqaures = [];
let figure = [];
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Circle {
  constructor(x, y, velocityX, velocityY, color, colorStroke, radius) {
    this.x = x;
    this.y = y;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
    this.color = color;
    this.colorStroke = colorStroke;
    this.radius = radius;
    this.area = Math.PI * this.radius * this.radius;
    this.displayName = "Круг";
  }

  draw() {
    context.beginPath();
    context.fillStyle = this.color;
    context.lineWidth = 5;
    context.strokeStyle = this.colorStroke;
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
    context.fill();
    context.stroke();
  }

  update() {
    setTimeout(() => {
      if (this.x >= canvas.width - this.radius || this.x <= this.radius) {
        this.velocityX = -this.velocityX;
      }

      if (this.y >= canvas.height - this.radius || this.y <= this.radius) {
        this.velocityY = -this.velocityY;
      }

      for (let i = 0; i < figure.length; i++) {
        if (Math.abs(this.x - figure[i].x) + Math.abs(this.y - figure[i].y) <= this.radius * 2) {
          this.velocityX = -this.velocityX;
          this.velocityY = -this.velocityY;
          figure[i].velocityX = -figure[i].velocityX;
          figure[i].velocityY = -figure[i].velocityY;
        }
      }
    }, 300);

    this.x += this.velocityX;
    this.y += this.velocityY;
  }
}

class Square {
  constructor(x, y, velocityX, velocityY, color, colorStroke, squareWidth, squareHeight) {
    this.x = x;
    this.y = y;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
    this.color = color;
    this.colorStroke = colorStroke;
    this.squareHeight = squareHeight;
    this.squareWidth = squareWidth;
    this.area = this.squareWidth * this.squareHeight;
    this.displayName = "Квадрат";
  }

  draw() {
    context.beginPath();
    context.fillStyle = this.color;
    context.lineWidth = 5;
    context.strokeStyle = this.colorStroke;
    context.rect(this.x, this.y, this.squareWidth, this.squareHeight);
    context.fill();
    context.stroke();
  }

  update() {
    setTimeout(() => {
      if (this.x >= canvas.width - this.squareWidth || this.x <= this.squareWidth - this.squareWidth) {
        this.velocityX = -this.velocityX;

      }
      if (this.y >= canvasHeight - this.squareHeight || this.y <= this.squareHeight - this.squareHeight) {
        this.velocityY = -this.velocityY;
      }

      for (let i = 0; i < figure.length; i++) {
        if (Math.abs(this.x - figure[i].x) + Math.abs(this.y - figure[i].y) <= this.squareWidth) {
          this.velocityX = -this.velocityX;
          this.velocityY = -this.velocityY;
          figure[i].velocityX = -figure[i].velocityX;
          figure[i].velocityY = -figure[i].velocityY;
        }

      }
    }, 300);



    this.x += this.velocityX;
    this.y += this.velocityY;
  }
}


function createBalls() {
  while (balls.length < 10) {
    radius = random(20, 50);
    var ball = new Circle(
      0,
      0,
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

  }
}
function createSquare() {
  while (sqaures.length < 10) {
    width = random(20, 50);
    var square = new Square(0, 0, 2, 2, "rgb(" +
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
      ")", width, width
    );
    sqaures.push(square);
  }
}

function concatFigure() {
  figure = balls.concat(sqaures);
  figure.sort(() => {
    return Math.random() - 0.5;

  })
  console.log(figure);
}

function animation() {
  let count = 0;
  let timeOut = 0;
  setInterval(() => {
    context.fillStyle = "rgba(0, 0, 0, 0.25)";
    context.fillRect(0, 0, canvasWidth, canvasHeight);
  }, 2);

  for (let i = 0; i < figure.length; i++) {
    setTimeout(() => {
      setInterval(() => {
        figure[i].draw();
        figure[i].update();
      }, 2);
      console.log("Площадь:", figure[i].area.toFixed(2), "Цвет:", figure[i].color, "Тип фигуры:", figure[i].displayName, "Порядковый номер:", count++)
    }, timeOut += 5000);

  }

}
createBalls();
createSquare();
concatFigure();
animation();
