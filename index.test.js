require('./index.js')

test('has sleep fn', done => {
  expect(Promise.prototype.sleep).toBeInstanceOf(Function)
  expect(Promise.resolve().sleep).toBeInstanceOf(Function)
  done()
})

test('resolve will sleep', done => {
  const t1 = new Date()
  Promise.resolve('foo')
    .sleep(500)
    .then(rs1 => {
      const t2 = new Date()
      expect(t2 - t1 >= 500).toBe(true)
      expect(rs1).toBe('foo')
      done()
    })
})

test('reject immediately', done => {
  const t1 = new Date()
  Promise.reject('bar')
    .sleep(1000)
    .then(null, err => {
      const t2 = new Date()
      expect(t2 - t1 < 10).toBe(true)
      expect(err).toBe('bar')
      done()
    })
})
