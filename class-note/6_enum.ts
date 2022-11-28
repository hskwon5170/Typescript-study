enum Shoes {
  // 별도의 값을 지정하지 않으면(초기화 하지 않으면) 전부 숫자형 enum으로 취급함
  Nike = '나이키',
  Adidas = '아디다스',
}

var myShoes = Shoes.Nike; // Nike의 실질값은 0이다
console.log(myShoes); // "나이키"

// 예제
enum Answer {
    Yes = 'Y',
    No = 'N'
}

function askQuestion(answer:Answer) {
    // if (answer === 'yes') {
    //     console.log("정답")
    // }
    // if (answer === 'no') {
    //     console.log("오답")
    // }
    if (answer === Answer.Yes) {
      console.log("정답");
    }
    if (answer === Answer.No) {
      console.log("오답");
    }
}

askQuestion(Answer.Yes)

// askQuestion('예스')
// askQuestion("y");
// askQuestion("Yes");
