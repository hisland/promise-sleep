## code

* add native Promise.prototype.sleep
* just handle resolve, reject will continue immediately

```
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
```

## usage

### first setup

* node: `require('promise-sleep')`
* es6: `import 'promise-sleep'`

and then, native Promise was patched

### second use it

```
Promise.resolve('extend native')
.wait(1000)
.then(function(rs) {
  console.log('after 1000ms, i got', rs);
})
```















