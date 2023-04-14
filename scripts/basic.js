// Start TypeScript Document in Basic https://www.typescriptlang.org/ko/docs/handbook/2/basic-types.html
var message = "Hello World Test";
console.log(message.toLowerCase());
//console.log(message());
console.log("Hello TS world!"); // tsc basic.ts 명령어를 통해 ts 파일을 js 파일로 변환이 가능하다.
// function greet(person: string, date: Date) {
//     console.log(`Hello ${person}, today is ${date.toDateString()}!`);
//   }
//   greet("Maddison", Date());
//   Argument of type 'string' is not assignable to parameter of type 'Date'.
//   함수를 올바르게 사용하지 못한다면 오류를 발생시켜서 알려준다.
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
greet("Maddison", new Date());
var typemessage = "hello there!"; // 타입스크립트는 기본 기능으로 타입을 알려주지 않아도 올바른 타입을 잘 알아낸다.
