class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username is ${this.username}`)
    }
}
//const user = new User('someone')
class teacher extends User{
    constructor(username , email , password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course is added by ${this.username}`)
    }
}
const teach = new teacher('someteacher','some@gmail', 123);
teach.addCourse();


const user1 = new User('user')
console.log(teach instanceof(User))