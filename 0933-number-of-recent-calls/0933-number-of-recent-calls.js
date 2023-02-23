
var RecentCounter = function() {
    this.counter = []
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.counter.push(t)
    const begginingOfRange = t - 3000
    while(this.counter[0] < begginingOfRange){ 
      this.counter.shift()
  } 
    return this.counter.length
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */