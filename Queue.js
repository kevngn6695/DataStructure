/**
 *
 * Queue
 *
 */
class Node {
  constructor(data) {
    this.data = data;
    this.next = data;
  }
}

class Queue {
  constructor(data) {
    // this.top = null;
    // this.bottom = null;

    // this.arr = []
    // this.length = 0;

    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    // return this.top;
    // return this.arr;
    return this.first;
  }
  enqueue(data) {
    // var new_node = new Node(data);
    // if(this.length === 0){
    //     this.top = new_node;
    //     this.bottom = new_node;
    // }else{
    //     var new_top = this.top;
    //     this.top = new_node;
    //     this.top.next = new_top;
    // }
    // this.arr.push(data)
    // this.length++;

    var new_node = new Node(data);
    if (this.length === 0) {
      this.first = new_node;
      this.last = new_node;
    } else {
      var p1 = this.first;
      this.last.next = new_node;
      this.last = new_node;
    }

    this.length++;
  }
  dequeue() {
    // if(!this.top) return null;
    // this.top = this.top.next
    // this.arr.pop();
    // this.length--;

    if (!this.first) return null;
    if (this.last === this.first) this.last = null;
    this.first = this.first.next;

    this.length--;
  }
  isEmpty() {
    return;
  }
}

// var stack = new Stack();
// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.pop()
// stack.pop()
// console.log(stack.peek());

var queue = new Queue();
queue.enqueue(1);
queue.enqueue(20);
queue.dequeue();
console.log(queue.peek());
