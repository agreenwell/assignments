var employees = [];

function Employee(name, job, salary){
    this.name = name;
    this.jobTitle = job;
    this.salary = salary;
    this.status = "Full Time";
    this.printEmployeeForm = function () {
        console.log("Name: " + this.name+ ", Job Title: " + this.jobTitle+ ", Salary: " + this.salary+ ", Status: " + this.status);  
    };
}

var John = new Employee("John", "Salesman", "$75,000 yearly");
var Alice = new Employee("Alice", "Graphic Designer", "$66,500 yearly");
var Dennis = new Employee("Dennis", "Mailroom Clerk", "$13 hourly");

Dennis.status = "Part Time";

John.printEmployeeForm();
Alice.printEmployeeForm();
Dennis.printEmployeeForm();

employees.push(John, Alice, Dennis)

