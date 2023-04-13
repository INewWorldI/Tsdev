// Start TypeScript Document in Basic https://www.typescriptlang.org/ko/docs/handbook/2/basic-types.html
var message = "Hello World Test";
console.log(message.toLowerCase());
//console.log(message());
console.log("Hello TS world!"); // tsc basic.ts 명령어를 통해 ts 파일을 js 파일로 변환이 가능하다.
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString(), "!"));
}
greet("Maddison", new Date());
