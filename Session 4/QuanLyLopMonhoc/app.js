import { Class } from './Class.js';
import { Teacher } from './Teacher.js';
import { Student } from './Student.js';

let teacher1 = new Teacher('Chester', 'male', 'JavaScripts', 'Professor');

let student1 = new Student('Công', 'male', 1001, '2018-2020', 8);
let student2 = new Student('Thắng', 'male', 2002, '2022-2024', 10);
let student3 = new Student('Vân', 'female', 3003, '2016-2018', 5);

let class1 = new Class(1, 'JavaScripts');

class1.addTeacher(teacher1);
class1.addStudent(student1);
class1.addStudent(student2);
class1.addStudent(student3);

console.log(class1);

class1.findStudent('Công');
class1.studentPoint(6);