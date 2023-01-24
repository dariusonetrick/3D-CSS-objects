
// Initializing the object divs (as a sphere)

var circles = 45;
var inc = 1;
const faces = document.getElementsByClassName("face");
const text = document.getElementById("text");


// About Card :)

let abtGrid = document.querySelectorAll('#about div');

// Objects
const about = document.getElementById('about');
const sphere = document.getElementById('sphere');



var entity = about;






// divCreation(inc, circles);

function divCreation(inc, circles) {
  let deg = 0;

  for (let i = 0; i < circles; i++) {
    let div = document.createElement("div");
    document.getElementById("sphere").appendChild(div);
    div.style.setProperty('transform', `rotateY(${deg}deg)`)
    div.style.setProperty('animation-delay', `${deg * 0.05 / inc}s`);
    div.classList.add("face");
    deg += inc;
  }
  text.innerText = `${circles} divs rendered, seperated by ${inc}° each`;
}

function divDeath() {
  document.getElementById('sphere').innerHTML = '';
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


var currObj = SphereObj;


// Shapes select
const shapeSelect = document.getElementById('shape-select');

shapeSelect.addEventListener('change', function () {
  switch (shapeSelect.value) {
    case 'sphere':
      entity.style.display = 'none';
      entity = sphere;
      entity.style.display = 'block';
      render(SphereObj);
      currObj = SphereObj;
      break;
    case 'cylinder':
      entity.style.display = 'none';
      entity = sphere;
      entity.style.display = 'block';
      render(CylinderObj);
      currObj = CylinderObj;
      break;
    case 'egg':
      entity.style.display = 'none';
      entity = sphere;
      entity.style.display = 'block';
      render(EggObj);
      currObj = EggObj;
      break;
    case 'about':
      entity.style.display = 'none';
      entity = about;
      entity.style.display = 'block';
      divDeath();
  }
});

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
const themeSelect = document.getElementById('color-theme');
const divNum = document.getElementById("div-num");
const degSep = document.getElementById("deg-sep");
const apply = document.getElementById("apply");

function themeChange(color,menC,bg,bg1,bg2,bg3,setbg) {
  root.style.setProperty('--color', color);
  root.style.setProperty('--menC', menC);
  root.style.setProperty('--bg', bg);
  root.style.setProperty('--bg1', bg1);
  root.style.setProperty('--bg2', bg2);
  root.style.setProperty('--bg3', bg3);
  root.style.setProperty('--setbg', setbg);
}
themeSelect.addEventListener('change', function () {
  switch (this.value) {
    case 'night':
      themeChange('#fee','white','rgb(0,0,30)','#614cbf','#48459a','#353283','#253569');
      break;
    case 'default':
      themeChange('#555','seashell','#aaa','none','none','none','#444')
      break;
    case 'white':
       themeChange('#222','#222','white','white','white','white','white');
       break;
  }
})

colorSelect.addEventListener('change', function () {
  switch (this.value) {
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
  if (entity != sphere)
    return;
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

rotArr = document.getElementsByClassName('rotate');

Array.from(rotArr).forEach((el) => {
  el.addEventListener('input', () => {
    rotate3d(rotArr[0].value, rotArr[1].value, rotArr[2].value, rotArr[3].value)
  })
})

function rotate3d(x, y, z, p) {
  root.style.setProperty('--rotx', `${x}deg`);
  root.style.setProperty('--roty', `${y}deg`);
  root.style.setProperty('--rotz', `${z}deg`);
  root.style.setProperty('--pers', `${p}px`)
}

// toggle on spin
const spinTog = document.getElementById('spin');
spinTog.addEventListener('input', function () {
  if (!this.checked) {
    entity.style.animationDuration = '0ms';
  }
  else {
    entity.style.animationDuration = '2000ms';
  }
})

// MOOOOOVEEEE MEEEEENNNNTTT ////!!!!!!

let x, y, newX, newY;
// Touch hold
sphere.addEventListener("touchstart", function (e) {
  x = e.touches[0].clientX;
  y = e.touches[0].clientY;
  entity.style.transition = "0s";
  document.addEventListener("touchmove", move);
  document.addEventListener("touchend", function () {
    entity.style.transition = "0.7s";
    document.removeEventListener("touchmove", move);
  });
});
about.addEventListener("touchstart", function (e) {
  x = e.touches[0].clientX;
  y = e.touches[0].clientY;
  entity.style.transition = "0s";
  document.addEventListener("touchmove", move);
  document.addEventListener("touchend", function () {
    entity.style.transition = "0.7s";
    document.removeEventListener("touchmove", move);
  });
});

// Mouse Click

  sphere.addEventListener("mousedown", function (e) {
  
    x = e.clientX;
    y = e.clientY;
    console.log(`xy: ${x},${y}`);
    document.addEventListener("mousemove", mouseMove);
    sphere.style.transition = '0s';
    document.addEventListener("mouseup", function () {
      sphere.style.transition = '0.7s';
      document.removeEventListener("mousemove", mouseMove);
    });
  });
  about.addEventListener("mousedown", function (e) {
  
    x = e.clientX;
    y = e.clientY;
    console.log(`xy: ${x},${y}`);
    document.addEventListener("mousemove", mouseMove);
    about.style.transition = '0s';
    document.addEventListener("mouseup", function () {
      about.style.transition = '0.7s';
      document.removeEventListener("mousemove", mouseMove);
    });
  });

// Touchscreen Move
function move(e) {
  newX = x - e.touches[0].clientX;
  newY = y - e.touches[0].clientY;

  x = e.touches[0].clientX;
  y = e.touches[0].clientY;


  entity.style.top = entity.offsetTop - newY + "px";
  entity.style.left = entity.offsetLeft - newX + "px";

}

// Mouse move
function mouseMove(e) {
  newX = (x - e.clientX);
  newY = (y - e.clientY);
  x = e.clientX;
  y = e.clientY;
  entity.style.top = entity.offsetTop - newY + "px";
  entity.style.left = entity.offsetLeft - newX + "px";
}








