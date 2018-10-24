// sleep sleepTime ms, and pass rs on
// error will pass immediately
Promise.prototype.sleep = function(sleepTime) {
  return this.then(rs => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(rs)
      }, sleepTime)
    })
  })
}
