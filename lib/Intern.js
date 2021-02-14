function Intern(name = '') {
    this.name = name;

    this.id = ('456');
    this.email = ('email');
    this.school = ('school');

}

Intern.prototype.getStats = function() {
    return {
        id: this.id,
        email: this.email,
        school: this.school,
    };
};


module.exports = Intern;