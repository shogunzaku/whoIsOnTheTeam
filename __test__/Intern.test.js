const Intern = require('../lib/Intern');
const intern = new Intern('Ronnie', "3535035", 'ronniejs@gmail.com', 'Denver');

test('test if we can get the constructor values for the intern object', () => {
    expect(intern.name).toBe('Ronnie');
    expect(intern.id).toBe('3535035');
    expect(intern.email).toBe('ronniejs@gmail.com');
    expect(intern.school).toBe('Denver');
});

test('test if we can get the name from the getName() method', () => {
    expect(intern.getName()).toBe('Ronnie');
});

test('test if we can get the id from the getId() method', () => {
    expect(intern.getId()).toBe('3535035');
});

test('test id we get the email from getEmail() method', () => {
    expect(intern.getEmail()).toBe('ronniejs@gmail.com');
});

test('test if we can get the school from the getSchool() method', () => {
    expect(intern.getSchool()).toBe('Denver');
});

test('test if we can get the role from the getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});

