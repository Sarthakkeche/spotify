class Student {
    constructor(studentname, studentemail) {
        this.name = studentname;
        this.email = studentemail;
        this.enrolledCourses = [];
    }
    displayEnrolledCourses() {
        return `${this.name}'s enrolled courses: ${this.enrolledCourses.join(course)}`;
    }

    
}

class Admisson extends Student{   
    admit(student){
        this.student=student;
        console.log(`${this.student} is get enrolled succefully`)
        

    }
     enrollInCourse(course) {
        this.enrolledCourses.push(course);
        return `${this.name} has successfully enrolled in ${course}.`;
    }

   
}
/*class Admission {
    constructor() {
        this.students = [];
        this.availableCourses = ['Web develpoment', 'Datascience', 'Ethical hacking'];
    }

    admitStudent(studentName) {
        const studentId = this.students.length + 1;
        const newStudent = new Student(studentId, studentName);
        this.students.push(newStudent);
        return newStudent;
    }

    displayEnrolledStudents() {
        return this.students.map(student => `${student.studentName} (ID: ${student.studentId})`).join('\n');
    }

    displayAvailableCourses() {
        return `Available courses: ${this.availableCourses.join(', ')}`;
    }}
*/

// Example Usage:
const Admit1 =new Admisson();

const student1 =new Student("sarthak" , "sak@gmail.com");
const student2 =new Student("sarthak" , "sak@gmail.com");

Admit1.admit(student1);