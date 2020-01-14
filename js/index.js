//MOUSE OVER
const mouseOver = document.querySelector(".main-navigation");

mouseOver.addEventListener("mouseenter", () => {
  mouseOver.style.transform = "scale(1.2)";
  mouseOver.style.transition = "transform 0.3s";
});
mouseOver.addEventListener("mouseleave", function() {
  mouseOver.style.transform = "scale(1)";
});

//MOUSE CLICK
document.querySelectorAll(".nav-link").forEach(el => {
  el.addEventListener("click", () => {
    el.style.color = "hotpink";
  });
});

//DOUBLE CLICK
const dblClick = document.querySelector(".intro");
dblClick.addEventListener("dblclick", () => {
  dblClick.style.color = "purple";
});

//WHEEL
document.querySelectorAll(".text-content").forEach(el => {
  el.addEventListener("wheel", () => {
    el.style.color = "yellow";
  });
});

//MOUSEMOVE
document.querySelectorAll(".img-content").forEach(el => {
  el.addEventListener("wheel", () => {
    el.style.transform = "scale(1.2)";
    el.style.transition = "transform 0.3s";
  });
});

//KEYDOWN
document.querySelectorAll(".btn").forEach(el => {
  el.addEventListener("keydown", () => {
    el.style.color = "green";
  });
});

//KEYUP
document.querySelectorAll(".btn").forEach(el => {
  el.addEventListener("keydown", () => {
    el.style.color = "";
  });
});

//MOUSE OUT
const mouseOut = document.querySelector(".destination");
mouseOut.addEventListener("mouseout", () => {
  mouseOut.style.color = "teal";
});

//CONTEXT MENU
const contextMenu = document.querySelector("p");
contextMenu.addEventListener("contextmenu", () => {
  contextMenu.style.color = "maroon";
});

//PREVENT DEFAULT
const stopLink = document.querySelector(".nav-link");

stopLink.addEventListener("click", event => {
  event.preventDefault();
  console.log("stopped the link");
});

//PROPOGATION
const outer = document.querySelector(".content-section");

outer.addEventListener("click", () => {
  outer.style.backgroundColor = "red";
});

const inner = document.querySelector(".text-content");

inner.addEventListener("click", event => {
  inner.style.backgroundColor = "orange";
  event.stopPropagation();
});
