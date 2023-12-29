class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.data);
      current = current.next;
    }
    console.log(arr);
  }

  traverse(idx) {
    let count = 0;
    let current = this.head;
    while (count <= idx) {
      count++;
      current = current.next;
    }
    return current;
  }

  size() {
    console.log("Size: " + (this.length !== 0 ? this.length : 0));
  }

  append(data) {
    var new_node = new Node(data);
    if (!this.head) {
      this.head = new_node;
      this.tail = new_node;
    } else {
      this.tail.next = new_node;
      this.tail = new_node;
    }
    this.length++;
  }

  prepend(data) {
    var new_node = new Node(data);
    if (this.head) {
      new_node.next = this.head;
      this.head = new_node;
    } else {
      this.head = new_node;
      this.tail = new_node;
    }
    this.length++;
  }
  // 90 , 2
  /* 
                p1  p2  p1   p2
        *--*    *   *   *    *
                 \       \  /
         *        *       *
         new      new    new
    */
  insert(val, idx) {
    var new_node = new Node(val);
    var p1 = this.traverse(idx - 1);
    const p2 = p1.next;

    p1.next = new_node;
    new_node.next = p2;
  }

  reverse() {
    let prev = null,
      next = null;
    let current = this.head;

    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
    console.log(this.head);
  }
}

const ll = new LinkedList();
ll.append(19);
ll.append(9);
ll.append(56);
ll.append(89);
ll.prepend(99);
ll.prepend(10);
ll.insert(123, 4);
ll.reverse();

ll.print();
