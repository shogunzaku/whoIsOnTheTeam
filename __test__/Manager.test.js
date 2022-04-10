const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');
const manager = new Manager('Ronnie', "3535035", 'ronniejs@gmail.com', '505');

test('test if we can get the constructor values for the manager object', () => {
    expect(manager.name).toBe('Ronnie');
    expect(manager.id).toBe('3535035');
    expect(manager.email).toBe('ronniejs@gmail.com');
    expect(manager.officeNumber).toBe('505');
});

test('test if we can get the name from the getName() method', () => {
    expect(manager.getName()).toBe('Ronnie');
});

test('test if we can get the id from the getId() method', () => {
    expect(manager.getId()).toBe('3535035');
});

test('test id we get the email from getEmail() method', () => {
    expect(manager.getEmail()).toBe('ronniejs@gmail.com');
});

test('test if we can get the office number from the getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('505');
});

test('test if we can get the role from the getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});

