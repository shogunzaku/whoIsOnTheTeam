// take our test questions using jest
const Employee = require('./Employee');
const employee = new Employee('Ronnie', '3535035', 'ronniejs@gmail.com');

test('test if we can get the constructor values for the employee object', () => {
    expect(employee.name).toBe('Ronnie');
    expect(employee.id).toBe('3535035');
    expect(employee.email).toBe('ronniejs@gmail.com');

});

test('test if we can get the name from the getName() method', () => {
});

test('test if we get the id from the getId() method', () => {
});

test('test id we get the email from getEmail() method',() => {
});