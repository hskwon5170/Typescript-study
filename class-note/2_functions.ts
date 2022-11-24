// 함수의 파라미터에 타입을 정의하는 방식
// function sum(a: number, b: number) {
//   return a + b;
// }
// sum(1, 2);

// 함수의 반환 값에 타입을 정의하는 방식
function sums(): number {
  return 10;
}

// 함수에 타입을 정의하는 방식
function sum(a: number, b: number): number {
  return a + b;
}
sum(10, 20, 30, 40); // 자바스크립트는 인수를 추가적으로 넣어도 유연하지만, 타입스크립트는 스펙을 정확히 이해하고 제한함

// 함수의 옵셔널 파라미터
function log(a: string, b?: string) {}
log("hello world");
log("hello ts", "abc");
