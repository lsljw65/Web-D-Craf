// 상수와 변수 정의
const _dan = 2;
let input_dan;
let _value;
let result;

// 단입력
function inputDan() {
  input_dan = document.getElementById("input_dan").value;
  console.log("입력값 확인" + input_dan);
  document.getElementById("dan").innerHTML = input_dan;
}
function value_F() {
  _value = document.getElementById("danvalue2").value;
  console.log("입력값 확인" + _value);
}

// 입력받은 단과 값 계산
function resultCul2() {
  clc(input_dan, _value);
  document.getElementById("result2").innerHTML = result;
}

function clc(x, y) {
  result = x * y;
  console.log(result);
  return result;
}
