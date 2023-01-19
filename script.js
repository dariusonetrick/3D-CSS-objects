
// Initializing the object divs (as a sphere)

const circles = 90;
const inc = 2;
const faces = document.getElementsByClassName("face");
const text = document.getElementById("text");



divCreation(inc, circles)

function divCreation (inc, circles) {
let deg = 0;
for (let i = 0; i < circles; i++) {
  let div = document.createElement("div");
  document.getElementById("sphere").appendChild(div);
  div.classList.add("face");
  div.style.background = "transparent";
  
  div.style.transform = `rotateY(${deg}deg)`;
  deg += inc;
}
text.innerText = `${circles} divs rendered, seperated by ${inc}° each`;
}

function divDeath () {
  document.getElementById('sphere').innerHTML = '';
}







// let x, y, newX, newY;

// // Touch interact
// ball.addEventListener("touchstart", function (e) {
//   if (!moveEnable)
//     return;
//   x = e.touches[0].clientX;
//   y = e.touches[0].clientY;
//   ball.style.animationPlayState = "paused";
//   document.addEventListener("touchmove", move);

//   document.addEventListener("touchend", function () {
//     ball.style.animationPlayState = "running";
//     document.removeEventListener("touchmove", move);
//   });
// });

// // Mouse Interact
// ball.addEventListener("mousedown", function (e) {
//   if (!moveEnable)
//     return;
//   x = e.clientX;
//   y = e.clientY;
//   ball.style.animationPlayState = "paused";
//   document.addEventListener("mousemove", mouseMove);

//   document.addEventListener("mouseup", function () {
//     ball.style.animationPlayState = "running";
//     document.removeEventListener("mousemove", mouseMove);
//   });
// });

// // Touchscreen Move
// function move(e) {
//   newX = x - e.touches[0].clientX;
//   newY = y - e.touches[0].clientY;

//   x = e.touches[0].clientX;
//   y = e.touches[0].clientY;

//   ball.style.transform = `rotateY(${y}deg) rotateX(${x}deg)`;
    
//   if (moveEnable) {
//     ball.style.top = ball.offsetTop - newY + "px";
//     ball.style.left = ball.offsetLeft - newX + "px";
//     }
// }




// // Mouse move
// function mouseMove(e) {
//   newX = (x - e.clientX);
//   newY = (y - e.clientY);

//   x = e.clientX;
//   y = e.clientY;
 
//   ball.style.transform = `rotateY(${y}deg) rotateX(${x}deg)`;

//   if (moveEnable) {
//     ball.style.top = ball.offsetTop - newY + "px";
//     ball.style.left = ball.offsetLeft - newX + "px";
//     }
// }

// // Expermenting with rotate manipulation by client crusor pos
// document.addEventListener('mousemove',  mouseMove);

const settingsBtn = document.getElementById("settings-btn");

const SphereObj = {
  borderRadius: '100%',
  width: 'var(--width)',
  height: 'var(--height)',
  opacity: '0.3'
}

const CylinderObj = {
  borderRadius: '1%',
  width: 'calc(var(--width) * 0.5)',
  height: 'var(--height))',
  opacity: '0.3' 
}

const EggObj = {
  borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
  width: 'calc(var(--width) * (1.8/2.4))',
  height: 'var(--height)',
}



// Shapes select
const shapeSelect = document.getElementById('shape-select');

shapeSelect.addEventListener('change', function () {
  switch (shapeSelect.value) {
    case 'sphere':
      render(SphereObj);
      break;
    case 'cylinder':
      render(CylinderObj);
      break;
    case 'egg':
      render(EggObj);
      break;
  }
} );

// Action select



function render(obj) {
  for (let i in faces) {
    for (let prop in obj) {
      faces[i].style[prop] = obj[prop];
    }
  }  
}
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

//Select options

const root = document.querySelector(':root');
const colorSelect = document.getElementById("color-select");
const bgSelect = document.getElementById("bg-select");
const divNum = document.getElementById("div-num");
const degSep = document.getElementById("deg-sep");
const apply = document.getElementById("apply");


colorSelect.addEventListener('change', function () {
  switch (colorSelect.value) {
    case "white":
      root.style.setProperty('--color', 'white');
      break;
    case "black":
      root.style.setProperty('--color', 'black');
      break;   
    case "turquoise":
      root.style.setProperty('--color', 'var(--turquoise)');
      break;  
    case "grey":
      root.style.setProperty('--color', '#555');
      break;  
    case "crimson":
      root.style.setProperty('--color', 'crimson');
      break;  
    case "pink":
      root.style.setProperty('--color', 'pink'); 
      break;  
    case "orange":
      root.style.setProperty('--color', 'orange');
      break;  
    case "drkMidnight":
      root.style.setProperty('--color', '#191970'); 
      break;  
    case "tron":
      root.style.setProperty('--color', '#7DFDFE'); 
      break;  
    case "gains":
      root.style.setProperty('--color', '#DCDCDC');
      break;
  }
})


bgSelect.addEventListener('change', function () {
  switch (bgSelect.value) {
    case "white":
      root.style.setProperty('--bg', 'white');
      break;
    case "black":
      root.style.setProperty('--bg', 'black');
      break;      
    case "grey":
      root.style.setProperty('--bg', '#555');
      break;  
    case "crimson":
      root.style.setProperty('--bg', 'crimson');
      break;  
    case "pink":
      root.style.setProperty('--bg', 'pink'); 
      break;  
    case "orange":
      root.style.setProperty('--bg', 'orange'); 
      break;  
    case "drkMidnight":
      root.style.setProperty('--bg', '#191970'); 
      break;  
    case "tron":
      root.style.setProperty('--bg', '#7DFDFE'); 
      break;  
    case "gains":
      root.style.setProperty('--bg', '#DCDCDC');
      break;
  }
})

apply.addEventListener('click', function () {
  if (divNum.value >= 0 && divNum.value <= 180) {
  divDeath();
  divCreation(parseInt(degSep.value), (parseInt(divNum.value)));
  }
  else 
    window.alert("Above 180, your phone will run into performance issues. Going below 0 is redundant ;)."); 
})


