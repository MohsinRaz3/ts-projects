class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
}
class Student extends Person {
    rollNumber;
    courses = [];
    constructor(name, age, rollNumber) {
        super(name, age);
        this.rollNumber = rollNumber;
    }
    regForCourse(course) {
        this.courses.push(course);
    }
}
class Instructor extends Person {
    salary;
    courses = [];
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }
    assignCourse(course) {
        this.courses.push(course);
    }
}
class Course {
    id;
    name;
    students = [];
    instructor;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    addStudent(student) {
        this.students.push(student);
        student.regForCourse(this);
    }
    setInstructor(instructor) {
        this.instructor = instructor;
        instructor.assignCourse(this);
    }
}
class Department {
    name;
    courses = [];
    constructor(name) {
        this.name = name;
    }
    addCourse(course) {
        this.courses.push(course);
    }
}
const stud1 = new Student("Mohsin", 26, "piaic4041");
const stud2 = new Student("Ahsan", 22, "piaic1283");
const Inst1 = new Instructor("sir zia", 55, 10000);
const Inst2 = new Instructor("sir imran", 35, 1000);
const course1 = new Course("Course 1", "meta");
const course2 = new Course("sir imran", "bbc");
const dept1 = new Department("Copt cs");
course1.addStudent(stud1);
course1.addStudent(stud2);
course1.setInstructor(Inst1);
dept1.addCourse(course1);
dept1.addCourse(course2);
console.log(dept1);
export {};
