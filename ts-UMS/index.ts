class Person{                 //Person Class
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    getName(): string{
        return this.name;
    }
}

class Student extends Person{  // Student Class

    rollNumber: string;
    courses: Course[] = [];
    constructor(name: string, age:number, rollNumber: string){
        super(name,age)
        this.rollNumber =rollNumber;   
    }  

    regForCourse(course: Course){
        this.courses.push(course)
    }
}



class Instructor extends Person{  // Teacher class
    private salary: number;
    courses: Course[] = []

    constructor(name: string, age: number, salary:number){
        super(name,age)
        this.salary = salary;
    }
    assignCourse(course: Course){
        this.courses.push(course)
    }

}

class Course{
    id: string
    name: string
    students: Student[] = [];
    instructor!: Instructor;

    constructor(id: string, name: string){
        this.id = id;
        this.name = name;
    }
    addStudent(student:Student){
        this.students.push(student)
        student.regForCourse(this)
    }

    setInstructor(instructor: Instructor){
        this.instructor = instructor;
        instructor.assignCourse(this)
    }
}

class Department{
    name: string;
    courses: Course[]= [];

    constructor(name: string){
        this.name = name;
    }
    addCourse(course: Course){
        this.courses.push(course)
    }
}

const stud1 = new Student("Mohsin", 26, "piaic4041")
const stud2 = new Student("Ahsan", 22, "piaic1283")

const Inst1 = new Instructor("sir zia", 55,10000)
const Inst2 = new Instructor("sir imran", 35,1000)

const course1 = new Course("Course 1", "meta")
const course2 = new Course("sir imran", "bbc")

const dept1 = new Department("Copt cs")
course1.addStudent(stud1)
course1.addStudent(stud2)

course1.setInstructor(Inst1)

dept1.addCourse(course1)
dept1.addCourse(course2)



console.log(dept1);


