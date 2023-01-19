const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('creates an Manager',()=>{
    const employee = new Manager('Jared');
})

test('set office number with constructor',()=>{
    const testValue = 200;
    const e = new Manager('Leto',1, 'Manager@gmial.com',testValue);
    expect(e.officeNumber).toBe(testValue);
})

test('get office number with getOfficeNumber()',()=>{
    const testValue = 200;
    const e = new Manager('Leto', 1 ,'Manager@gmail.com',testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
})

test('getRole() return Manager',()=>{
    const testValue = 'Manager';
    const e = new Manager('Jared', 1 , 'Manager@email.com', 200);
    expect(e.getRole()).toBe(testValue);
})