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

// font-size 증감
let size = 16;
function plus() {
  size++;
  console.log("사이즈 : " + size);
  document.querySelector("body").style.fontSize = size + "px";
  document.querySelector("#size").innerHTML = size;
}
function minus() {
  size--;
  console.log("사이즈 : " + size);
  document.querySelector("body").style.fontSize = size + "px";
  document.querySelector("#size").innerHTML = size;
}
