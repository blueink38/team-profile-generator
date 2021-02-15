const Engineer = require('../lib/Engineer.js');

jest.mock('../lib/Engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer();

    expect(engineer.github).toEqual(expect.any(String));

    console.log(new Engineer);

});