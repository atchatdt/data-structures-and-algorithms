class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  deleteAtIndex(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
  unShiftItems(item) {
    for (let i = this.length; i >= 1; i--) {
      this.data[i] = this.data[i - 1]
    }
    this.data[0] = item
  }
  printData() {
    console.log(this.data)
  }
}

const myArray = new MyArray();
myArray.push('hi');
myArray.push('you');
// myArray.push('!');
// myArray.pop();
// myArray.deleteAtIndex(0);
// myArray.push('are');
// myArray.push('nice');
// myArray.shiftItems(0);
// console.log(myArray);
// myArray.getType()

myArray.printData()
myArray.unShiftItems('ok')
myArray.printData()