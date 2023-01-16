let n;
let inc = 2;
let circles = 180;
circles++;
for (let i = 0; i < circles; i += inc) {
  if (i < circles / 2) n = i;
  else n--;
  let div = document.createElement("div");
  document.getElementById("sphere").appendChild(div);
  div.classList.add("face");
  div.style.background = "transparent";
  div.style.background.backgroundSize = "cover";
  div.style.transform = `rotateY(${i}deg)`;
}

// Touch screen
const ball = document.getElementById("sphere");
const rect = ball.getBoundingClientRect();
let x, y, newX, newY;
ball.addEventListener("touchstart", function (e) {
  x = e.touches[0].clientX;
  y = e.touches[0].clientY;
  ball.style.animationPlayState = "paused";
  document.addEventListener("touchmove", move);

  document.addEventListener("touchend", function () {
    ball.style.animationPlayState = "running";
    document.removeEventListener("touchmove", move);
  });
});

// Mouse Interact
ball.addEventListener("mousedown", function (e) {
  x = e.clientX;
  y = e.clientY;
  ball.style.animationPlayState = "paused";
  document.addEventListener("mousemove", mouseMove);

  document.addEventListener("mouseup", function () {
    ball.style.animationPlayState = "running";
    document.removeEventListener("mousemove", mouseMove);
  });
});

// Touchscreen Move
function move(e) {
  newX = x - e.touches[0].clientX;
  newY = y - e.touches[0].clientY;

  x = e.touches[0].clientX;
  y = e.touches[0].clientY;

  ball.style.top = ball.offsetTop - newY + "px";
  ball.style.left = ball.offsetLeft - newX + "px";
}

// Mouse move
function mouseMove(e) {
  newX = x - e.clientX;
  newY = y - e.clientY;

  x = e.clientX;
  y = e.clientY;

  ball.style.top = ball.offsetTop - newY + "px";
  ball.style.left = ball.offsetLeft - newX + "px";
}

const settingsBtn = document.getElementById("settings-btn");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

// Sphere btn
btn1.addEventListener("click", function () {
  let faces = document.getElementsByClassName("face");
  for (let i = 0; i < faces.length; i++) {
    faces[i].style.borderRadius = "100%";
  }
});

btn2.addEventListener("click", function () {
  let faces = document.getElementsByClassName("face");
  for (let i = 0; i < faces.length; i++) {
    faces[i].style.borderRadius = "20%";
    faces[i].style.transform = `rotateY(${i}deg)`;
    faces[i].style.transform = `translateZ(${i})`;
    faces[i].style.width = "10rem";
    faces[i].style.height = "10rem";
  }
});

btn3.addEventListener("click", function () {
  let faces = document.getElementsByClassName("face");
  for (let i = 0; i < faces.length; i++) {
    faces[i].style.borderRadius = "0";
    faces[i].style.transform = "rotateX(0deg)";
    faces[i].style.transform = `translateZ(${i}px)`;
    faces[i].style.width = `${faces.length}px`;
    faces[i].style.height = `${faces.length}px`;
  }
});

// Settings button
 
settingsBtn.addEventListener('click', function () {
  document.getElementById("settings-menu").style.display = 'block';
});
