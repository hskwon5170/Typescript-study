// extends라는 키워드를 통해 확장이 가능함
// 가능한한 type 보다는 interface로 선언해서 사용하는걸 추천 (타입스크립트 공식문서)
interface Person {
    name: string;
    age: number;
}

// 타입은 확장이 되지 않는다
// type Person = {
//     name: string;
//     age: number;
// }

var seho: Person = {
    name: '세호',
    age:30
}

type MyString = string;
var srt: MyString = 'hello'

type Todo = { id: string; title: string; done: boolean };
function getTodo(todo:Todo) {
    
}