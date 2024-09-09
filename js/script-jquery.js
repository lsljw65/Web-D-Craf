$(function () {
  $("button").eq(0).click(idSelector);
  function idSelector() {
    $("#selector-id").html("내용이 변경되었습니다.^^");
    $("#selector-id").css({
      backgroundColor: "darkblue",
      color: "white",
    });
  }

  $("button")
    .eq(1)
    .click(function () {
      $(".selector-class").eq(0).html("기존의 내용이 변경되었습니다.");
      $(".selector-class").eq(0).css({
        backgroundColor: "orange",
      });
    });
  $("button").eq(2).click(tag_name);
  function tag_name() {
    $("div").html("기존 div 첫번째 요소의 내용이 변경되었습니다.");
    $("div").css({
      backgroundColor: "darkred",
      color: "white",
    });
  }
});
