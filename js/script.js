// javascript와 jQuery의 기술방식에 차이가 있습니다.
/* javascript */
function external() {
  alert("External Hello Word");
}
// jQuery
$(function () {
  $("#button1").click(function () {
    alert("External Hello Word");
  });
});
