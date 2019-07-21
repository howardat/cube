document.addEventListener("mousemove", coordx);
document.addEventListener("mousemove", coordy);

let x, y;

function coordx(event) {
  x=event.clientX - window.innerWidth/2;
}

function coordy(event) {
  y=event.clientY - window.innerHeight/2;
  rotate(x,y);
}

function rotate(x,y) {
  let cube = document.querySelector(".cube");
  cube.style.cssText="transform: rotateX("+(x/10-15)+"deg) rotateY("+(y/10-15)+"deg);";
}