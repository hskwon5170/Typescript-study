// function logText(text) {
//     console.log(text)
//     return text;
// }
// logText("10") 
// logText(10);
// logText("안녕");
// logText(true);

// "호출 시점"에 타입을 넘겨줄수있음
function logText<T>(text:T):T {
    console.log(text);
    return text;
}
logText<string>("안녕") // logText에 명시적으로 string 타입을 넘기겠다

// 제네릭에 어떤 장점이 있는지 확인해보기
// 단순히 파라미터의 타입을 바꾸기 위해 동일한 형태의 코드를 계속 작성해나가는것은 유지보수 측면에서 좋지 않음
// function logText2(text:string) {
//     console.log(text)
//     // text.split('').reverse().join('')
//     return text;
// }

// function logNumber(num:number) {
//     console.log(num)
//     return num
// }

// 유니온 타입
function logText2(text: string | number) {
console.log(text);
  return text;
}
const a = logText2('a');
// a.split() text를 유니온타입으로 string 또는 number로 타입지정해줬는데
// number 타입에 대해서는 split()을 사용할 수 없으므로 a.split()에 에러가 뜸
// split은 오로지 string에 대해서만 쓸수있기 때문임 (확정되어야함)
logText2(2);



// 제네릭
// 동일한 함수에 대해 다양한 타입을 지정할 수 있는 장점이 있다!
function logText3<T>(text:T):T {
  console.log(text);
  return text;
}
const str = logText3<string>("안녕");
const istrue = logText3<boolean>(true)


// 인터페이스에 제네릭을 선언하는 방법
// interface Dropdown {
//   value: string;
//   selected: boolean;
// }
// const obj: Dropdown = {
//   value:"10", selected:false
// };

interface Dropdown <T>{
  value: T;
  selected: boolean;
}
const obj: Dropdown<string> = { value: 'abc', selected: false }


// 제네릭의 타입 제한 (타입 힌트를 추가적으로 제공)
function logTextLength<T>(text: T[]): T[] {
  console.log(text.length)
  text.forEach((text) => {
    console.log(text)
  })
  return text
}
logTextLength(['hi','abc'])