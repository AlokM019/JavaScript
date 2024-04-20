/*4. Employee Class Challenge.

Create a class called Employee with three properties: name, position, and salary. The class should have a method called getSalary that returns the employee's salary. Instantiate an instance of the Employee class and call the getSalary method.

Expected Output:
console.log(employee1.getSalary()); // Output: 80000
*/

class Employee{
    constructor(n,p,s){
        this.name = n;
        this.position = p;
        this.salary = s;
    }

    getsalary(){
        return this.salary;
    }
}

const emp1 = new Employee("Rajan", "Assistant Engineer", 80000)

console.log(emp1.getsalary());