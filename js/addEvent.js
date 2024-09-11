// boolen을 이용한 배경색상 변경(토글기능)
let bool = true;
function background() {
  if (bool) {
    console.log("bool : " + bool);
    document.querySelector("body").style.backgroundColor = "bisque";
    bool = false;
  } else {
    console.log("bool : " + bool);
    document.querySelector("body").style.backgroundColor = "beige";
    bool = true;
  }
}

const backgroundChange = document.querySelector("#select-back");
const _body = document.querySelector("body");
backgroundChange.onchange = function (e) {
  console.log("내용이 변경됨 : " + backgroundChange.value);
  _body.style.backgroundColor = backgroundChange.value;
};

// font-size 증감
let size = 16;
let lastSize = 25;
const plusMinus = document.querySelector(".plus-minus");
change();
function change() {
  if (size >= 16 && size < 25) {
    plusMinus.addEventListener("click", plus);
  } else {
    plusMinus.removeEventListener("click", plus);
    changeMinus();
  }
}
function changeMinus() {
  if (size > 16 && size <= 25) {
    plusMinus.addEventListener("click", minus);
  } else {
    plusMinus.removeEventListener("click", minus);
    change();
  }
}
function plus() {
  size++;
  change();
  console.log("사이즈 : " + size);
  document.querySelector("body").style.fontSize = size + "px";
  document.querySelector("#size").innerHTML = size;
}
function minus() {
  size--;
  changeMinus();
  console.log("사이즈 : " + size);
  document.querySelector("body").style.fontSize = size + "px";
  document.querySelector("#size").innerHTML = size;
}

const _mouse = document.querySelector(".mouse");
_mouse.addEventListener("mouseenter", swapText1);
function swapText1() {
  _mouse.innerHTML = "와우!~~^^";
}
_mouse.addEventListener("mouseleave", swapText2);
function swapText2() {
  _mouse.innerHTML = "마우스를 올려보세요!";
}
