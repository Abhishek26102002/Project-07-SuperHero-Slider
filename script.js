let backbtn = document.getElementById("back");
let prevbtn = document.getElementById("prev");
let nextbtn = document.getElementById("next");
let seemorebtn = document.querySelectorAll(".seemore");
let box = document.querySelector(".box");

let listHTML = document.querySelector(".box .list");

nextbtn.onclick = function () {
  showslider("next");
};
prevbtn.onclick = function () {
  showslider("prev");
};

// only can click after 2 sec
let canClick = true;

function enableButton() {
  canClick = true;
}

document.onkeydown = function (e) {
  if (canClick) {
      canClick=false;
  if (e.keyCode == 39) {
    showslider("next");
  }
  if (e.keyCode == 37) {
    showslider("prev");
  }
  setTimeout(enableButton, 2000);
  } 
};
// only can click after 2 sec

//avoid multiple continuous clicks;
let unAcceptclick;
const showslider = (type) => {
  nextbtn.style.pointerEvents = "none";
  prevbtn.style.pointerEvents = "none";
  //---------to avoid unnecessary clicks

  box.classList.remove("prev", "next");
  console.log("Clicked");
  let items = document.querySelectorAll(".box .list .item");
  let bgdiv = document.querySelector(".bgdiv");
  let firstImg = bgdiv.firstElementChild;

  if (type === "next") {
    listHTML.appendChild(items[0]);
    bgdiv.appendChild(firstImg);
    box.classList.add("next");
  } else {
    let positionlast = items.length - 1;
    listHTML.prepend(items[positionlast]);

    let lastImg = bgdiv.lastElementChild;
    bgdiv.prepend(lastImg);
    box.classList.add("prev");
  }

  clearTimeout(unAcceptclick);
  unAcceptclick = setTimeout(() => {
    nextbtn.style.pointerEvents = "auto";
    prevbtn.style.pointerEvents = "auto";
  }, 1500);
};

seemorebtn.forEach((button) => {
  button.onclick = function () {
    box.classList.add("details");
  };
});

backbtn.onclick = function () {
  box.classList.remove("details");
};

// hover
let home = document.getElementById("home");
let contact = document.getElementById("contact");
let info = document.getElementById("Info");
let homeinfo = document.getElementById("homeinfo");
let contactinfo = document.getElementById("contactinfo");
let infoinfo = document.getElementById("infodetail");
home.onmouseenter = function () {
  homeinfo.style.opacity = "1";
};
home.onmouseleave = function () {
  homeinfo.style.opacity = "0";
};
contact.onmouseenter = function () {
  contactinfo.style.opacity = "1";
};
contact.onmouseleave = function () {
  contactinfo.style.opacity = "0";
};
info.onmouseenter = function () {
  infoinfo.style.opacity = "1";
};
info.onmouseleave = function () {
  infoinfo.style.opacity = "0";
};
