/**
 *
 * Stack
 *
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = data;
  }
}

class Stack {
  constructor(data) {
    // this.top = null;
    // this.bottom = null;

    this.arr = [];
    // this.length = 0;
  }
  peek() {
    // return this.top;
    return this.arr;
  }
  push(data) {
    // var new_node = new Node(data);
    // if(this.length === 0){
    //     this.top = new_node;
    //     this.bottom = new_node;
    // }else{
    //     var new_top = this.top;
    //     this.top = new_node;
    //     this.top.next = new_top;
    // }
    this.arr.push(data);
    // this.length++;
  }
  pop() {
    // if(!this.top) return null;
    // this.top = this.top.next
    this.arr.pop();
    // this.length--;
  }
  isEmpty() {
    return;
  }
}

var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
// stack.pop()
// stack.pop()
console.log(stack.peek());
