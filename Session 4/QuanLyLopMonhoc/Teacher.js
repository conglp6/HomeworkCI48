import { Person } from './Person.js';

export class Teacher extends Person {
    degree;

    constructor(name, gender, degree) {
        super(name, gender);
        this.degree = degree;
    }
}
