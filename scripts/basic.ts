// Start TypeScript Document in Basic https://www.typescriptlang.org/ko/docs/handbook/2/basic-types.html

const message = "Hello World Test";

console.log(message.toLowerCase());
//console.log(message());
console.log("Hello TS world!"); // tsc basic.ts 명령어를 통해 ts 파일을 js 파일로 변환이 가능하다.

// function greet(person: string, date: Date) {
//     console.log(`Hello ${person}, today is ${date.toDateString()}!`);
//   }
   
//   greet("Maddison", Date());
//   Argument of type 'string' is not assignable to parameter of type 'Date'.
//   함수를 올바르게 사용하지 못한다면 오류를 발생시켜서 알려준다.

function greet(person: string, date: Date) { // 명시적 타입을 선언해준다.
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
  }
   
  greet("Maddison", new Date());

let typemessage = "hello there!"; 
// 타입스크립트는 기본 기능으로 타입을 알려주지 않아도 올바른 타입을 잘 알아낸다.

// 타입 스크립트는 변환시에 기본적으로 구형 ES3를 타깃으로 변환하는데 (다운레벨링)
// tsc --target <version> basic.ts 을 통해서 다른 ECMA스크립트 버전을 선택할 수 있다. (es2015)

// 타입 스크립트의 사용 목적중 하나인 검사기는 사용자에 따라서 쓰임새가 다르다.
// 각 사용자마다 검사의 대한 엄격치가 다를테고 그래서 엄격도를 지원하고 있다.
// noImplicitAny: any로 추론되는 변수에 대한 오류를 발생 시킨다.
// strictNullChecks: null이나 undefined를 보다 명시적으로 처리해주고 처리를 했는지에 대한 검사를 해준다.