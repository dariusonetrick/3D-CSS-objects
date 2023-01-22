
// Initializing the object divs (as a sphere)

var circles = 45;
var inc = 1;
const faces = document.getElementsByClassName("face");
const text = document.getElementById("text");
const about = document.getElementById('about');

// About Card :)

let abtGrid = document.querySelectorAll('#about div');



// divCreation(inc, circles);

function divCreation (inc, circles) {
let deg = 0;

for (let i = 0; i < circles; i++) {
  let div = document.createElement("div");
  document.getElementById("sphere").appendChild(div);
  div.style.setProperty('transform', `rotateY(${deg}deg)`)
  div.style.setProperty('animation-delay', `${deg*0.05/inc}s`);
  div.classList.add("face");
  deg += inc;
}
text.innerText = `${circles} divs rendered, seperated by ${inc}° each`;
}

function divDeath () {
  document.getElementById('sphere').innerHTML = '';
}






let ball = document.getElementById('sphere');
let x, y, newX, newY;

// Touch interact
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
  // ball.style.animationPlayState = "paused";
  document.addEventListener("mousemove", mouseMove);

  document.addEventListener("mouseup", function () {
    // ball.style.animationPlayState = "running";
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
  newX = (x - e.clientX);
  newY = (y - e.clientY);

  x = e.clientX;
  y = e.clientY;
 

  ball.style.top = ball.offsetTop - newY + "px";
  ball.style.left = ball.offsetLeft - newX + "px";
  
}



const SphereObj = {
  borderRadius: '100%',
  width: 'var(--width)',
  height: 'var(--height)',
  opacity: '1'
}

const CylinderObj = {
  borderRadius: '9% 9% 0 0',
  width: 'calc(var(--width) * 0.7)',
  height: 'var(--height))',
  opacity: '1'
}

const EggObj = {
  borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
  width: 'calc(var(--width) * (1.8/2.4))',
  height: 'var(--height)',
  opactiy: '1'
}


var currObj = 'sphere';


// Shapes select
const shapeSelect = document.getElementById('shape-select');

shapeSelect.addEventListener('change', function () {
  switch (shapeSelect.value) {
    case 'sphere':
      render(SphereObj);
      currObj = SphereObj;
      break;
    case 'cylinder':
      render(CylinderObj);
      currObj = CylinderObj;
      break;
    case 'egg':
      render(EggObj);
      currObj = EggObj;
      break;
    case 'about':
      root.style.setProperty('--bg', 'beige');
      divDeath();
  }
} );

// Action select



function render(obj) {
  if (faces.length < 1) 
    divCreation(inc, circles)
  
  for (let i in faces) {
    for (let prop in obj) {
      faces[i].style[prop] = obj[prop];
    }
  }  
}
// Settings button
 
const settings = document.getElementById('settings-container');


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
    case "drkred":
      root.style.setProperty('--color', '#100000');
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
      root.style.setProperty('--color', '#000015'); 
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
    case "drkred":
      root.style.setProperty('--bg', '#100000');
      break;
    case "grey":
      root.style.setProperty('--bg', '#555');
      break;  
    case "drkForest":
      root.style.setProperty('--bg', "#22311d");
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
      root.style.setProperty('--bg', '#000015'); 
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
  inc = parseInt(degSep.value);
  circles = parseInt(divNum.value);
  divCreation(parseInt(degSep.value), (parseInt(divNum.value)));
  render(currObj);
  }
  else 
    window.alert("Above 180, your phone will run into performance issues. Going below 0 is redundant ;)."); 
})


// All the different menus within Settings Container
settings.addEventListener('click', (e) => {
  const target = e.target;
  if (target.matches('.tab')) {
    let targetParent = window.getComputedStyle(target.parentElement);
    if (targetParent.getPropertyValue('flex-grow') !== '0') {
      target.parentElement.style.setProperty('flex-grow', '0');
      target.parentElement.style.setProperty('height', window.getComputedStyle(target).getPropertyValue('height'));
    }
    else {
      target.parentElement.style.setProperty('flex-grow', '1');
    }
  }
}) 

// Rotates
const sphere = document.getElementById('sphere');
rotArr = document.getElementsByClassName('rotate');

Array.from(rotArr).forEach( (el) => {
  el.addEventListener('input', () => {
    rotate3d(rotArr[0].value, rotArr[1].value, rotArr[2].value)
  })
})

function rotate3d(x,y,z){
  root.style.setProperty('--rotx', `${x}deg`);
  root.style.setProperty('--roty',`${y}deg`);
  root.style.setProperty('--rotz',`${z}deg`);
}

// toggle on spin
const spinTog = document.getElementById('spin');
spinTog.addEventListener('input', function(){
  if (!this.checked) {
      sphere.style.animationPlayState = 'paused';
    }
  else {
    sphere.style.animationPlayState = 'running';
    }
})










