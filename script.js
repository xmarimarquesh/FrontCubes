let angleX = 0;
let angleY = 0;

const cube1 = document.getElementById('cube1');
const cube2 = document.getElementById('cube2');
const cube3 = document.getElementById('cube3');
const cube4 = document.getElementById('cube4');

function rotateCubes() {
  cube1.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
  cube2.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
  cube3.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
  cube4.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
}

document.getElementById('up').addEventListener('click', function() {
  angleX -= 90;
  rotateCubes();
});

document.getElementById('down').addEventListener('click', function() {
  angleX += 90; 
  rotateCubes();
});

document.getElementById('left').addEventListener('click', function() {
  angleY -= 90; 
  rotateCubes();
});

document.getElementById('right').addEventListener('click', function() {
  angleY += 90; 
  rotateCubes();
});
