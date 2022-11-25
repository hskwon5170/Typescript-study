// 여러 타입을 쓰기위해 any 타입을 선언하면 사실상 타입스크립트를 쓰는 이점이 사라지는것 
// function logMessage(value: any) {
//     console.log(value)
// }
// logMessage('hello')
// logMessage(100)
// logMessage(false)

var seho: string | number | boolean;
// 유니온 타입 (하나 이상의 타입을 쓸 수 있도록 하는 타입)
function logMessage(value: string | number) {
    // 타입 가드: 특정 타입으로 타입의 범위를 좁혀나가는 (필터링) 과정
    if (typeof value === 'number') {
        value.toLocaleString()
    }
    if (typeof value === 'string') {
        value.toString()
    }
    throw new TypeError('value must be string or number');
}
logMessage('hello')
logMessage(100)

interface Developer {
    name: string;
    skill: string;
}
interface Person {
    name: string;
    age: number;
}

//     //interface 구조체인 Developer와 Person으로 유니언타입을(|) 써주면 이 둘의 공통된 속성에 대해서만 제공해준다
// function askSomeone(someone:Developer | Person) {
//     someone.name
//     someone.skill
//     someone.age
// }
// askSomeone({ name: '디벨로퍼', skill: '웹개발' })
// askSomeone({name:'캡틴', age:100})


// intersection 타입 (&), Developer와 person의 모든 속성을 제공
function askSomeone(someone: Developer & Person) {
someone.name;
someone.skill;
someone.age;
}
askSomeone({ name: '디벨로퍼', skill: '웹개발', age:100 })

// var seho: string | number | boolean;
// var capt: string & number & boolean;