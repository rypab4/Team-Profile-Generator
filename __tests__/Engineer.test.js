const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('creates an engineer',()=>{
    const employee = new Engineer('Grace');
})

test('set GitHub with constructor',()=>{
    const testValue = 'GitHubAccount';
    const e = new Engineer('Leto',1, 'engineer@gmial.com',testValue);
    expect(e.id).to.Be(testValue);
})

test('get GitHub account with getGithub()',()=>{
    const testValue = 'GitHubAccount';
    const e = new Engineer('Leto', 1 ,'engineer@gmail.com',testValue);
    expect(e.email).to.Be(testValue);
})

test('getRole() return Engineer',()=>{
    const testValue = 'Engineer';
    const e = new Engineer('Grace', 1 , 'grace@email.com', 'GitHubAcount');
    expect(e.getRole()).to.Be(testValue);
})