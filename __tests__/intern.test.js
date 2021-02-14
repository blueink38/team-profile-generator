const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
    const intern = new Intern('Helper');

    expect(intern.name).toBe('Helper');
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));

});