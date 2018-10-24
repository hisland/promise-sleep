## code

* add native Promise.prototype.sleep
* just handle resolve
* reject will continue immediately

```
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
```

## usage

### first setup

* node: `require('promise-sleep')`
* es6: `import 'promise-sleep'`

and then, native Promise was patched

### second use it

```
Promise.resolve('extend native')
.sleep(1000)
.then(function(rs) {
  console.log('after 1000ms, i got', rs);
})
```
