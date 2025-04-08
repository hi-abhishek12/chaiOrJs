class user {
    constructor(username){
        this.username
    }
    logme(){
        console.log(`username : ${this.username}`)
    }
    static createId(){
        return `12#0`
    }
}
const client = new user('someone')
console.log(client.createId())

class teacher extends user{
    constructor(username , email){
        super(username);
        this.email = email;
    }
}

const user2 = new teacher('rahul','rahul@gmail.com')
user2.createId()