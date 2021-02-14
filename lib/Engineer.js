function Engineer(name = '') {
  this.name = name;

  this.id = ('1234');
  this.email = ('email');
  this.github = ('github');

}

Engineer.prototype.getStats = function() {
  return {
    id: this.id,
    email: this.email,
    github: this.github,
  };
};


module.exports = Engineer;