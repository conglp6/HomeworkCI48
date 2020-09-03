import { Teacher } from './Teacher.js'
import { Student } from './Student.js'

export class Class {
    idClass;
    subject;
    teachers = [];
    students = [];

    constructor(idClass, subject) {
        this.idClass = idClass;
        this.subject = subject;
        this.teachers = [];
        this.students = [];
    }

    addTeacher(teacher) {
        if (teacher instanceof Teacher) {
            this.teachers.push(teacher);
        } else {
            console.log('ko thêm được');
        };
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