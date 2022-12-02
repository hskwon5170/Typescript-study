// 타입 호환 
interface Developer {
    name: string;
    skill: string;
}
interface Persona {
  name: string;
  skill: string;
}
var developer: Developer;
var person: Persona;
developer = person;
// person = developer;

// 함수 (sum함수가 add함수 구조보다 더 크다 (포함))
var add = function (a: number) {
    // return
}
var sum = function (a: number, b: number) {
    // return 
}
// add = sum 
sum = add; // 더 큰 함수에 작은 함수를 할당 가능


// 제네릭
interface Empty<T> {
 // ..
}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
    data: T;
}
var notempty1: NotEmpty<string>; // data가 string으로 들어옴
var notempty2: NotEmpty<number>; // data가 number로 들어옴
// notempty1 = notempty2;
// notempty2 = notempty1;