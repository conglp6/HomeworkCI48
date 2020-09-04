import { Teacher } from './Teacher.js'
import { Student } from './Student.js'

export class Group {
    idClass;
    subject;
    teacher;
    students = [];

    constructor(idClass, subject) {
        this.idClass = idClass;
        this.subject = subject;
    }

    set newTeacher(teacher) {
        if (teacher instanceof Teacher) {
            this.teacher = teacher;
        }
    }

    addStudent(student) {
        if (student instanceof Student) {
            this.students.push(student);
        } else {
            console.log('ko thêm được');
        };
    }

    findStudent(name) {
        console.log(this.students.filter(function (x) {
            return x.name == name;
        }));
    }

    studentPoint(point) {
        console.log(this.students.filter(function (y) {
            return y.point > point;
        }));
    }

}