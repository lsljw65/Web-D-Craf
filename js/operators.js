// 상수와 변수 정의
let op;
let result;
function oper() {
  const op_test = document.querySelector("#op_input").value;
  if (
    op_test == "+" ||
    op_test == "-" ||
    op_test == "*" ||
    op_test == "**" ||
    op_test == "/" ||
    op_test == "%"
  ) {
    console.log("연산자 : " + op_test);
    op = op_test;
  } else {
    alert("+,-,*,**,/,% 에 없는 연산자 입니다.");
  }
}

function opresult() {
  const first_value = Number(document.querySelector("#value1").value);
  const second_value = Number(document.querySelector("#value2").value);
  let result_text;
  //   console.log("첫 번째 값 : " + first_value);
  //   console.log("두 번째 값 : " + second_value);
  //   console.log("연산자 : " + op);
  if (op == "+") {
    result = first_value + second_value;
    result_text = "는 두 수의 합을 계산합니다";
  } else if (op == "-") {
    result = first_value - second_value;
    result_text = "는 두 수의 뺄셈을 계산합니다";
  } else if (op == "*") {
    result = first_value * second_value;
    result_text = "는 두 수의 곱을 계산합니다";
  } else if (op == "**") {
    result = first_value ** second_value;
    result_text = "는 두 수의 거듭제곱을 계산합니다";
  } else if (op == "/" && second_value !== 0) {
    result = first_value / second_value;
    result_text = "는 두 수의 나누기를 계산합니다";
  } else if (op == "%") {
    result = first_value % second_value;
    result_text = "는 두 수를 나누어 나머지를 계산합니다";
  } else {
    op = "";
    result_text = "사용할 수 없는 연산자이거나 0으로 나누려고 합니다.";
  }
  document.querySelector(".op_dis").innerHTML = op;
  document.querySelector(".op-text").innerHTML = result_text;
  document.querySelector(".result").innerHTML = result;
  console.log(result);
}
