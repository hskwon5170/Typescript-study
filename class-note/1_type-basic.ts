// JS 문자열 선언
// var str = "hello";

// TS 문자열 선언
let str: string = "hello";

// TS 숫자
let num: number = 1;

// TS 배열
let arr: Array<number> = [1, 2, 3];
let heroes: Array<string> = ["captain", "thor", "hulk"];
let items: number[] = [1, 2, 3];
let items2: Array<number> = [1, 2, 3];

// TS 튜플
// 배열 특정 순서에 올 타입까지 지정
// 배열 각각 인덱스에 타입 지정
let address: [string, number] = ["gangnam", 100];

// TS 객체
let obj: object = {};
// let person: object = {
//   name: "capt",
//   age: 100,
// };
let person: { name: string; age: number } = {
  name: "thor",
  age: 100,
};

// TS 진위값.
let show: boolean = true;
