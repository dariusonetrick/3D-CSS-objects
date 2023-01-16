
// Initializing the object divs (as a sphere)
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

const sphereObj = {
  borderRadius: '100%',
  width: 'var(--width)',
  height: 'var(--height)',
  opacity: '0.3'
}

const CylinderObj = {
  borderRadius: '10%',
  width: 'var(--width)',
  height: 'var(--height)',
  opacity: '0.3' 
}

let faces = document.getElementsByClassName("face");

// Sphere btn
btn1.addEventListener("click", function () {
  for (let i in faces) {
    for (let prop in sphereObj) {
      faces[i].style[prop] = sphereObj[prop];
    }
  }
});

btn2.addEventListener("click", function () {
  for (let i in faces) {
    for (let prop in CylinderObj) {
      faces[i].style[prop] = CylinderObj[prop];
    }
  }
});

btn3.addEventListener("click", function () {

});

// Settings button
 
const setMenu = document.getElementById('settings-menu');
settingsBtn.addEventListener('click', function () {
  if (window.getComputedStyle(setMenu).top < '0') {
    setMenu.classList.remove('slide-up');
    setMenu.classList.add('slide-down');
  }
  else {
    setMenu.classList.remove('slide-down');
    setMenu.classList.add('slide-up');
  }
  
});
