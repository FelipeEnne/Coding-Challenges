/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
  this.arr = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  if (this.arr.length == 0) {
    this.arr.push(num);
    return;
  }

  let f = 0;
  let l = this.arr.length;

  while (l >= f) {
    let mid = Math.floor((f + l) / 2);

    if (num > this.arr[mid]) {
      f = mid + 1;
    } else {
      l = mid - 1;
    }
  }

  this.arr.splice(f, 0, num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  let mid = Math.floor(this.arr.length / 2);

  if (this.arr.length == 1) return this.arr[0];

  if (this.arr.length % 2 == 0) {
    return (this.arr[mid] + this.arr[mid - 1]) / 2;
  } else {
    return this.arr[mid];
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
