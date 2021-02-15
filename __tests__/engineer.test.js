const Engineer = require('../lib/Engineer.js');

jest.mock('../lib/Engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer();

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.engineerId).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));

    console.log(new Engineer);

});