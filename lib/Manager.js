function Manager(officeNumber = '') {
  this.officeNumber = officeNumber;

}

Manager.prototype.getStats = function() {
  return {
    officeNumber: this.officeNumber,
  };
};

module.exports = Manager;