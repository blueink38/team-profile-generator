function Engineer(name ='') {
  this.name = name;
  this.engineerId = ('213');
  this.email = ('email');
  this.github = ('github');

}

Engineer.prototype.getStats = function() {
  return {
    name: this.name,
    id: this.engineerId,
    email: this.email,
    github: this.github,
  };
};


module.exports = Engineer;