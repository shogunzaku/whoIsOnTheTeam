// take our test questions using jest
const { expect, test } = require('@jest/globals');
const Employee = require('../lib/Employee');
const employee = new Employee('Ronnie', '3535035', 'ronniejs@gmail.com');

test('test if we can get the constructor values for the employee object', () => {
    expect(employee.name).toBe('Ronnie');
    expect(employee.id).toBe('3535035');
    expect(employee.email).toBe('ronniejs@gmail.com');

});

test('test if we can get the name from the getName() method', () => {
    expect(employee.getName()).toBe('Ronnie');
});

test('test if we get the id from the getId() method', () => {
    expect(employee.getId()).toBe('3535035');
});

test('test id we get the email from getEmail() method', () => {
    expect(employee.getEmail()).toBe('ronniejs@gmail.com');
});

test('test if we can get the role from the getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');  
});
