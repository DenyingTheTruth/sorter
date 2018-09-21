class Sorter {
  constructor(arr = [],k) {
    this.arr = arr;
    this.k = k;
  }

  add(element) {
    this.arr[this.arr.length] = element;
  }
  
  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    var buf = [];

    for(var i = 0; i < indices.length;i++){
      if (this.arr.length > 0){
        buf[buf.length] = this.arr[indices[i]];
      }
    }

    buf.sort(function(a,b){
      return a-b;
    });

    if (this.k != undefined){
      buf.sort(this.k);
    }

    indices.sort(function(a,b){
      return a-b;
    });

    for(var i = 0; i < indices.length;i++){
      this.arr[indices[i]] = buf[i];
    } 
    
    return this.arr;
  }

  setComparator(compareFunction) {
    return this.k = compareFunction;
  }
}

module.exports = Sorter;