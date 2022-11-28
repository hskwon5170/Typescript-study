class Person {
    // 클래스에서 사용할 멤버의 타입을 최상단에 지정해줘야함
    private name: string; // 변수의 접근 범위를 제한하는것도 가능
    public age: number;
    readonly log: string; // 접근만 가능하고 값을 변경할수 없음

    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }
}