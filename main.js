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
    if (this.x >= canvas.width - this.radius || this.x <= radius) {
      this.velocityX = -this.velocityX;
    }

    if (this.y >= canvas.height - this.radius || this.y <= radius) {
      this.velocityY = -this.velocityY;
    }

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
    if (this.x >= canvas.width - this.squareWidth || this.x <= this.squareWidth - this.squareWidth) {
      this.velocityX = -this.velocityX;

    }

    if (this.y >= canvasHeight - this.squareHeight || this.y <= this.squareHeight - this.squareHeight) {
      this.velocityY = -this.velocityY;
    }

    if ( Math.abs(figure.x  - figure.x) + Math.abs(figure.y - figure.y) <= 50)
        {
             
            vX1 = -vX1;
            vX3 = -vX3;
            vY1 = -vY1;
            vY3 = -vY3;
            
       }
    this.x += this.velocityX;
    this.y += this.velocityY;
  }
}


function createBalls() {
  while (balls.length < 10) {
    radius = random(20, 50);
    var ball = new Circle(
      1 + radius,
      1 + radius,
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
    var square = new Square(0 + width, 0 + width, 2, 2, "rgb(" +
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
  setInterval(() => {
    context.fillStyle = "rgba(0, 0, 0, 0.25)";
    context.fillRect(0, 0, canvasWidth, canvasHeight);
  }, 2);

  setInterval(() => {
    figure[0].draw();
    figure[0].update();
  }, 4);

  setTimeout(() => {
    setInterval(() => {
      figure[1].draw();
      figure[1].update();
    }, 4);
  }, 5000);
  setTimeout(() => {
    setInterval(() => {
      //context.clearRect(0, 0, canvas.width, canvas.height);
      figure[2].draw();
      figure[2].update();
    }, 4);
  }, 10000);
  setTimeout(() => {
    setInterval(() => {
      //context.clearRect(0,0,canvas.width,canvas.height)
      figure[3].draw();
      figure[3].update();
    }, 4);
  }, 15000);
  setTimeout(() => {
    setInterval(() => {
      //context.clearRect(0,0,canvas.width,canvas.height)
      figure[4].draw();
      figure[4].update();
    }, 4);
  }, 20000);
  setTimeout(() => {
    setInterval(() => {
      //context.clearRect(0,0,canvas.width,canvas.height)
      figure[5].draw();
      figure[5].update();
    }, 4);
  }, 25000);
  setTimeout(() => {
    setInterval(() => {
      //context.clearRect(0,0,canvas.width,canvas.height)
      figure[6].draw();
      figure[6].update();
    }, 4);
  }, 30000);
  
  setTimeout(() => {
    setInterval(() => {
      //context.clearRect(0,0,canvas.width,canvas.height)
      figure[7].draw();
      figure[7].update();
    }, 4);
  }, 35000);
  setTimeout(() => {
    setInterval(() => {
      //context.clearRect(0,0,canvas.width,canvas.height)
      figure[8].draw();
      figure[8].update();
    }, 4);
  }, 40000);
  setTimeout(() => {
    setInterval(() => {
      //context.clearRect(0,0,canvas.width,canvas.height)
      figure[9].draw();
      figure[9].update();
    }, 4);
  }, 45000);
  setTimeout(() => {
    setInterval(() => {
      //context.clearRect(0,0,canvas.width,canvas.height)
      figure[10].draw();
      figure[10].update()
    }, 4);
  }, 50000);

  setTimeout(() => {
    setInterval(() => {
      //context.clearRect(0,0,canvas.width,canvas.height)
      figure[11].draw();
      figure[11].update();
    }, 4);
  }, 55000);

  setTimeout(() => {
    setInterval(() => {
      //context.clearRect(0,0,canvas.width,canvas.height)
      figure[12].draw();
      figure[12].update();
    }, 4);
  }, 60000);

  setTimeout(() => {
    setInterval(() => {
      //context.clearRect(0,0,canvas.width,canvas.height)
      figure[13].draw();
      figure[13].update();
    }, 4);
  }, 65000);

  setTimeout(() => {
    setInterval(() => {
      //context.clearRect(0,0,canvas.width,canvas.height)
      figure[14].draw();
      figure[14].update();
    }, 4);
  }, 70000);

  setTimeout(() => {
    setInterval(() => {
      //context.clearRect(0,0,canvas.width,canvas.height)
      figure[15].draw();
      figure[15].update();
    }, 4);
  }, 75000);

  setTimeout(() => {
    setInterval(() => {
      //context.clearRect(0,0,canvas.width,canvas.height)
      figure[16].draw();
      figure[16].update();
    }, 4);
  }, 80000);

  setTimeout(() => {
    setInterval(() => {
      //context.clearRect(0,0,canvas.width,canvas.height)
      figure[17].draw();
      figure[17].update();
    }, 4);
  }, 85000);

  setTimeout(() => {
    setInterval(() => {
      //context.clearRect(0,0,canvas.width,canvas.height)
      figure[18].draw();
      figure[18].update();
    }, 4);
  }, 900000);
  setTimeout(() => {
    setInterval(() => {
      //context.clearRect(0,0,canvas.width,canvas.height)
      figure[19].draw();
      figure[19].update();
    }, 4);
  }, 95000);


}
createBalls();
createSquare();
concatFigure();
animation();
