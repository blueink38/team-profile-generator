const Manager = require('../lib/Manager.js');

jest.mock('../lib/Manager.js');

test('creates an manager object', () => {
    const manager = new Manager();

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.managerId).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(String));

    console.log(new Manager);

});