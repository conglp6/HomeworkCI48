import { Person } from './Person.js';

export class Student extends Person {
    idStudent;
    schoolYear;
    point;

    constructor(name, gender, idStudent, schoolYear, point) {
        super(name, gender);
        this.idStudent = idStudent;
        this.schoolYear = schoolYear;
        this.point = point;
    }
}