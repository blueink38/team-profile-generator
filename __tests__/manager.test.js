const Manager = require('../lib/Manager.js');

test('creates an manager object', () => {
    const manager = new Manager('Boss');

    expect(manager.name).toBe('Boss');
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(String));

});