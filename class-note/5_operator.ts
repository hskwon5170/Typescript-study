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