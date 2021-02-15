const Manager = require('../lib/Manager.js');

jest.mock('../lib/Manager.js');

test('creates an manager object', () => {
    const manager = new Manager();

    expect(manager.officeNumber).toEqual(expect.any(String));

    console.log(new Manager);

});