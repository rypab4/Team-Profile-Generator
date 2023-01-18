const { default: test } = require('test');
const Employee = require('../lib/Employee');

test('creates an employee',()=>{
    const employee = new Employee('Grace');
})

test('set id with constructor',()=>{
    const testValue = 100;
    const e = new Employee('Leto',testValue);
    expect(e.id).to.Be(testValue);
})

test('set email with constructor',()=>{
    const testValue = 'grace@email.com';
    const e = new Employee('Leto', 1 ,testValue);
    expect(e.email).to.Be(testValue);
})

test('getRole() return Employee',()=>{
    const testValue = 'Employee';
    const e = new Employee('Grace', 1 , 'grace@email.com');
    expect(e.getRole()).to.Be(testValue);
})