function Manager(name = '') {
  this.name = name;
  this.managerId = ('1234');
  this.email = ('email');
  this.officeNumber = ('office number');

}

Manager.prototype.getStats = function() {
  return {
    name: this.name,
    id: this.managerId,
    email: this.email,
    officeNumber: this.officeNumber,
  };
};

module.exports = Manager;