function Intern(name = '') {
    this.name = name;
    this.internId = ('456');
    this.email = ('email');
    this.school = ('school');

}

Intern.prototype.getStats = function() {
    return {
        id: this.internId,
        email: this.email,
        school: this.school,
    };
};


module.exports = Intern;