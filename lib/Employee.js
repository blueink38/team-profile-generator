function Employee() {
  this.name = [];
  this.employeeId = [];
  this.email = [];
}

Employee.prototype.getStats = function() {
  return {
    name: this.name,
    id: this.employeeId,
    email: this.email,
  };
};

module.exports = Employee;