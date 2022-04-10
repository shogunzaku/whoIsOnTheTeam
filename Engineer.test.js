const Engineer = require('./Engineer');
const engineer = new Engineer('Ronnie', "3535035", 'ronniejs@gmail.com', 'rongit');

test('test if we can get the constructor values for the engineer object', () => {
    expect(engineer.name).toBe('Ronnie');
    expect(engineer.id).toBe('3535035');
    expect(engineer.email).toBe('ronniejs@gmail.com');
    expect(engineer.github).toBe('rongit');
});

test('test if we can get the name from the getName() method', () => {
    expect(engineer.getName()).toBe('Ronnie');
});

test('test if we can get the id from the getId() method', () => {
    expect(engineer.getId()).toBe('3535035');
});

test('test id we get the email from getEmail() method', () => {
    expect(engineer.getEmail()).toBe('ronniejs@gmail.com');
});

test('test if we can get the github username from the getGithub() method', () => {
    expect(engineer.getGithub()).toBe('rongit');
});

test('test if we can get the role from the getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});
