var entity = document.getElementById("cube-plane");
const root = document.querySelector(':root');
rotArr = document.getElementsByClassName('rotate');

Array.from(rotArr).forEach((el) => {
  el.addEventListener('input', () => {
    rotate3d(rotArr[0].value, rotArr[1].value, rotArr[2].value, rotArr[3].value, rotArr[4].value)
  })
})

function rotate3d(x, y, z, p, s) {
  root.style.setProperty('--rotx', `${x}deg`);
  root.style.setProperty('--roty', `${y}deg`);
  root.style.setProperty('--rotz', `${z}deg`);
  root.style.setProperty('--pers', `${p}px`)
  root.style.setProperty('--scale', `${s}`)
  console.log(s);
}

// MOOOOOVEEEE MEEEEENNNNTTT ////!!!!!!

let x, y, newX, newY;

const Objects = document.getElementsByClassName('object');
Array.from(Objects).forEach( (obj) => {
  obj.addEventListener("touchstart", function (e) {
    x = e.touches[0].clientX;
    y = e.touches[0].clientY;
    entity.style.transition = "0s";
    document.addEventListener("touchmove", move);
    document.addEventListener("touchend", function () {
      entity.style.transition = "0s";
      document.removeEventListener("touchmove", move);
    });
  });
  obj.addEventListener("mousedown", function (e) {
    x = e.clientX;
    y = e.clientY;
    // console.log(`xy: ${x},${y}`);
    document.addEventListener("mousemove", mouseMove);
    entity.style.transition = '0s';
    document.addEventListener("mouseup", function () {
      entity.style.transition = '0.0s';
      document.removeEventListener("mousemove", mouseMove);
    });
  });
})

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








