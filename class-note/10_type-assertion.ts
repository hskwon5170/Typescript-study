// 타입 단언

var a;
a = 20;
a='a'
var b = a as string;

//  dom api 조작
// <div id='app'>hi</div>
var div = document.querySelector('div');
if (div) {
    div.innerHTML
}