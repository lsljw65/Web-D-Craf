// 상수와 변수 정의
const _dan = 2;
let input_dan;
let _value;
let result;

// 2단 출력
function resultCul() {
  _value = document.getElementById("danvalue").value;
  console.log(_value);
  result = _dan * _value;
  console.log(result);
  document.getElementById("result").innerHTML = result;
}

// 단입력
function inputDan() {
  input_dan = document.getElementById("input_dan").value;
  console.log("입력값 확인" + input_dan);
  document.getElementById("dan").innerHTML = input_dan;
}

// 입력받은 단과 값 계산
function resultCul2() {
  _value = document.getElementById("danvalue2").value;
  result = input_dan * _value;
  document.getElementById("result2").innerHTML = result;
}
