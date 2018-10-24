require('./index.js')

test('has sleep fn', done => {
  expect(Promise.prototype.sleep).toBeInstanceOf(Function)
  expect(Promise.resolve().sleep).toBeInstanceOf(Function)
  done()
})

test('resolve will sleep', done => {
  Promise.resolve('foo')
    .sleep(500)
    .then(() => {
      done()
    })
})

test('reject immediately', done => {
  Promise.reject('bar')
    .sleep(1000)
    .then(null, () => {
      done()
    })
})
