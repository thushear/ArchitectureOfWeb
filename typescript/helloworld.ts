
class Student {

    fullName: string;
    constructor(public firstName,public middleName,public lastName){
        this.fullName = firstName + "  " + middleName + "  " + lastName;
    }

}

interface Person{
    firstName:string;
    lastName:string;
}

function greetPesron(person:Person){
    return "hello ," + person.firstName + ":" + person.lastName;
}

function greet(user:string){
	return "hello," + user;
}

var user = 'thushear';
// var user = [1,2,3];

var stu = new Student("thushear","kong","lucas");

var person = {firstName:"thushear",lastName:"lucas"};
var greeting = greetPesron(person);
alert(greeting);
document.body.innerText = greeting;
document.body.innerHTML = greet(user);
// document.body.innerHTML = greeting;

