import { Group } from './Group.js';
import { Teacher } from './Teacher.js';
import { Student } from './Student.js';

let newTeacher = new Teacher('Chester', 'male', 'JavaScripts', 'Professor');

let student1 = new Student('Công', 'male', 1001, '2018-2020', 8);
let student2 = new Student('Thắng', 'male', 2002, '2022-2024', 10);
let student3 = new Student('Vân', 'female', 3003, '2016-2018', 5);

let group1 = new Group(1, 'JavaScripts');

group1.newTeacher = newTeacher;
group1.addStudent(student1);
group1.addStudent(student2);
group1.addStudent(student3);

console.log(group1);

group1.findStudent("Công");
group1.studentPoint(6);