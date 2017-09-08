var Student = (function () {
    function Student(firstName, middleName, lastName) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.lastName = lastName;
        this.fullName = firstName + "  " + middleName + "  " + lastName;
    }
    return Student;
}());
function greetPesron(person) {
    return "hello ," + person.firstName + ":" + person.lastName;
}
function greet(user) {
    return "hello," + user;
}
var user = 'thushear';
// var user = [1,2,3];
var stu = new Student("thushear", "kong", "lucas");
var person = { firstName: "thushear", lastName: "lucas" };
var greeting = greetPesron(person);
alert(greeting);
document.body.innerText = greeting;
document.body.innerHTML = greet(user);
// document.body.innerHTML = greeting;
//# sourceMappingURL=helloworld.js.map