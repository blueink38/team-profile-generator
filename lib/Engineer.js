function Engineer() {
  this.github = [];

}

Engineer.prototype.getStats = function() {
  return {
    github: this.github,
  };
};


module.exports = Engineer;