const Employee = require('../lib/Employee.js');

jest.mock('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee();

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.employeeId).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));

    console.log(new Employee);
});
