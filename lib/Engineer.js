function Engineer(github ='') {
  this.github = github;

}

Engineer.prototype.getStats = function() {
  return {
    github: this.github,
  };
};


module.exports = Engineer;