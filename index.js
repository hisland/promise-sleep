// sleep n ms, and pass rs on
Promise.prototype.sleep = function(n) {
  return this.then(function(rs) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve(rs);
      }, n);
    });
  })
}
