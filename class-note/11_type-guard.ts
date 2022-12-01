interface Developer {
    name: string;
    skill: string;

}

interface Person {
    name: string;
    age: number;
}


// 유니온타입 = 두 타입의 공통된 속성(name) 에만 접근가능함
function introduce(): Developer | Person {
    return {name : 'Tony', age:33, skill: 'Iron Making'}
}
var tony = introduce()

if ((tony as Developer).skill) {
    var skill = (tony as Developer).skill;
    console.log(skill)
} else if ((tony as Person).age) {
    var age = (tony as Person).age;
    console.log(age)
}