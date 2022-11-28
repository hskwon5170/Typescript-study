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
logText(true)