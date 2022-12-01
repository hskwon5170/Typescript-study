// 타입 추론 기본 1
var a = 10;

function getB(b = 10) {
    var c = 'hi'
    return b+c;
}

// 타입 추론 기본 2
// interface Dropdown<T> {
//     value: T;
//     title: string;
// }
// var shoppingItem: Dropdown<string> = {
//     value: 'abc',
//     title: 'hello'
// }

// 타입 추론 기본 3
interface Dropdown<T> {
  value: T;
  title: string;
}

interface DetailedDropdown<K> extends Dropdown<K>{
    tag: K;
    description: string;
}

var detailedItem: DetailedDropdown<number> = {
    title: 'abc',
    description: 'ab',
    value: 10,
    tag: 1,
}

//  Best Common Type
var arr = [1, 2, 3];
