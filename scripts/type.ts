// Start TypeScript Document in Everyday Types 

let a = "hello world"; // 원시타입 string
let b = 100; // 원시타입 number
let c = true; // 원시타입 boolean

let stringArray:string[] = ["apple", "banana", "포도", "오렌지"];
let numArray:number[] = [1, 2, 3, 4];
let booleanArray:boolean[] = [true, false, false];

let obj:any = {x:0}; // 타입스크립트에는 any 타입도 존재하는데 특정 값으로 인한 타입 검사 오류를 우회하기 위한 타입이다. 

let myName: string = "Alice"; // 타입 명시
let myName2 = "Alice"; // 기존에도 다뤘지만 자동으로 추론해준다.

// 함수에도 타입을 표기할 수 있다. 물론 안하더라도 타입스크립트가 검사한다.
function greet2(name: string) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}
greet2("Typescript");

// 반환 타입에도 표기할 수 있는데 매개변수 뒤에 표기한다.
function getFavoriteNumber(): number {
    return 77;
}