import './index'
import {
  expect,
  assert
}
from 'chai'

describe('Promise.prototype', function() {
  it('has sleep', function(done) {
    assert.isFunction(Promise.prototype.sleep)
    assert.isFunction(Promise.resolve().sleep)
    done();
  })
})
