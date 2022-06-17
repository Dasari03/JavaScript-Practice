
const sampleObj = {
    firstName: 'min',
    lastName: 'Kim',
    Nickname: 'maguro',
    greet(){
        return `My name is ${this.firstName} ${this.lastName} and my nick name is ${this.Nickname}.`
    },
    repeatGreet(){
       return `Let me repeat what I have just said....${this.greet()}`;
    }
}
// console.log(sampleObj.greet());

console.log(sampleObj.repeatGreet());