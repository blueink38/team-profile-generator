function Employee(name = '') {
  this.name = name;
  this.employeeId = ('E numb');
  this.email = ('email');
}

Employee.prototype.getStats = function() {
  return {
    name: this.name,
    id: this.employeeId,
    email: this.email,
  };
};

module.exports = Employee;