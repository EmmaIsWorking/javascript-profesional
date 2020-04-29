function AutoPlay(){}

AutoPlay.prototype.run = function(player){
  if (!player.muted){
    player.muted = true
  }
  player.play()
}

export default AutoPlay


  / * Prevención de sobrescritura * /
  var obj = {
    foo: 'este es el valor de foo'
  };
  Object.defineProperties(obj, {
    'getFoo': {
      value: function () {
        return this.foo;
      }
    },
    'setFoo': {
      value: function (val) {
        this.foo = val;
      }
    }
  });
  var obj = {
    fooVal: 'este es el valor de foo',
    get foo() {
      return this.fooVal;
    },
    establecer foo(val) {
      this.fooVal = val;
    }
  }
  