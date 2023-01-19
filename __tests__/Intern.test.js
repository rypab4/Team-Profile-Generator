const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('creates an Intern',()=>{
    const employee = new Intern('John');
})

test('set school with constructor',()=>{
    const testValue = 'UniversityX';
    const e = new Intern('Tremain',1, 'Intern@gmial.com',testValue);
    expect(e.school).toBe(testValue);
})

test('get GitHub account with getGithub()',()=>{
    const testValue = 'UniversityX';
    const e = new Intern('Tremain', 1 ,'Intern@gmail.com',testValue);
    expect(e.getSchool()).toBe(testValue);
})

test('getRole() return Intern',()=>{
    const testValue = 'Intern';
    const e = new Intern('Tremain', 1 , 'Intern@email.com', 'UniversityX');
    expect(e.getRole()).toBe(testValue);
})