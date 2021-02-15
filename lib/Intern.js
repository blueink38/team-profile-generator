function Intern() {
    this.school = [];

}

Intern.prototype.getStats = function() {
    return {
        school: this.school,
    };
};


module.exports = Intern;