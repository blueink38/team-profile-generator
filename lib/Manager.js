function Manager(name = '') {
    this.name = name;

    this.id = ('1234');
    this.email = ('email');
    this.officeNumber = ('office number');

}

Manager.prototype.getStats = function() {
    return {
        id: this.id,
        email: this.email,
        officeNumber: this.officeNumber,
    };
};

module.exports = Manager;