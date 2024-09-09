// javascript 선택자 지정
function idSelector() {
  document.getElementById("selector-id").innerHTML = "내용이 변경되었습니다.^^";
  document.getElementById("selector-id").style.backgroundColor = "darkblue";
  document.getElementById("selector-id").style.color = "white";
}
function classSelector() {
  document.getElementsByClassName("selector-class")[0].innerHTML =
    "기존의 내용이 변경되었습니다.";
  document.getElementsByClassName("selector-class")[0].style.backgroundColor =
    "orange";
}
function tag_name() {
  document.getElementsByTagName("div")[0].innerHTML =
    "기존 div 첫번째 요소의 내용이 변경되었습니다.";
  document.getElementsByTagName("div")[0].style.backgroundColor = "darkred";
  document.getElementsByTagName("div")[0].style.color = "white";
}
function query_selector() {
  document.querySelector(".selector-class").innerHTML =
    "기존 클래스가 첫번째 요소의 내용이 변경되었습니다.";
  document.querySelector(".selector-class").style.backgroundColor = "purple";
  document.querySelectorAll(".selector-class")[1].innerHTML =
    "기존 클래스의 두 번째 요소 내용이 변경되었습니다.";
  document.querySelectorAll(".selector-class")[1].style.backgroundColor =
    "darkred";
}
