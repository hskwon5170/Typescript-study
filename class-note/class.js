// ES2015 (ES6)

function Person(name, age) {
    this.name = name;
    this.age = age;

}
var capt = new Person('캡틴', 100)

// 위와 아래의 코드는 완전 동일함
// 위와같은 생성자함수를 클래스형 문법을 사용하지 않고도 작성할수있다

class Person {
    // 클래스 로직
    constructor(name, age) {
        console.log('생성 되었습니다');
        this.name = name;
        this.age = age;
    }
}

var seho = new Person('세호', 30); // 생성 되었습니다.
console.log(seho)

// 프로토타입
// var user = { name: 'capt', age: 100 }
// var admin = {};
// admin.__proto__ = user;
// admin.name
// admin.age