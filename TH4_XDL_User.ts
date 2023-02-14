enum Role{
    admin=1,
    user1=2,
    user2=3
}

class User{
    protected _name:string;
    protected _email:string;
    protected _role:Role;


    constructor(name: string, email: string, role: Role) {
        this._name = name;
        this._email = email;
        this._role = role;
    }

    getInfor(A:User){
        console.log(A);

    }
    isAdmin(){
        if (this._role==1){
            console.log("this a admin");
        }else {
            console.log("this a user");
        }
    }

    setname(name: string):void {
        this._name = name ;
    }

    setemail(email: string):void {
        this._email = email;
    }

    setrole(role: Role):void {
        this._role = role;
    }
}
let adim1=new User("admin","123@gmail.com",1);
let user1=new  User("user","12345@gmail.com",2);
let user2=new  User("user","123456@gmail.com",3);
let user3=new  User("user","1234567@gmail.com",4);
adim1.setname("phong");
adim1.getInfor(adim1);
adim1.isAdmin()
user1.isAdmin()






