// function multiply(num){
//     return num*5;
// }

// const ans = multiply(5);
// const ans2 = multiply.power = 2;
// console.log(ans);
// console.log(ans2);
// console.log(multiply.prototype);

// new keyword
// function createUser (name , score){
//     this.name = name,
//     this.score = score
// }

// createUser.prototype.increment = function(){
//     this.score++;
// }
// createUser.prototype.printMe = function(){
//     console.log(`price of tea is ${this.score}`);
// }
// const first = new createUser('abhi', 12);
// const second = new createUser('abhi', 10);

// console.log(first)
// console.log(second)
// first.increment();
// second.printMe();

//prototype

// let name = 'abhishek   ';

// console.log(name.trueLength);

let hero = ['king','queen'];

let equipment = {
    king: 'sword',
    queen: 'arrow',

    getKingPower : function(){
        console.log(`king power is ${this.king}`)
    }
}

Object.prototype.abhi = function(){
    console.log('i am present in all objects')
}
hero.abhi()

Array.prototype.test = function(){
    console.log('test');
}
hero.test()
// equipment.test();


// inheritence
const user = {
    name : 'chai',
    email: 'someone@gmail.com'
}
const teacher = {
    makeVideo: true
}
const teachingSupoort = {
    isAvailable: true
}
const TASupport = {
    makeAssingments : 'js assignment',
    fullTime : true,
    __proto__ : teachingSupoort
}
teacher.__proto__ = user;

//modern syntax
Object.setPrototypeOf(teachingSupoort , teacher);

let anotherUserName = 'abhi       '
String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`the length is : ${this.trim().length}`)
}

anotherUserName.trueLength()
