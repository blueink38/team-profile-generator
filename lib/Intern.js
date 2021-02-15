function Intern(name = '') {
    this.school = ('school');

}

Intern.prototype.getStats = function() {
    return {
        school: this.school,
    };
};


module.exports = Intern;