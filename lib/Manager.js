function Manager() {
  this.officeNumber = [];

}

Manager.prototype.getStats = function() {
  return {
    officeNumber: this.officeNumber,
  };
};

module.exports = Manager;