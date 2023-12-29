"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function Node(data) {
  _classCallCheck(this, Node);

  this.data = data;
  this.next = null;
};

var LinkedList =
/*#__PURE__*/
function () {
  function LinkedList() {
    _classCallCheck(this, LinkedList);

    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  _createClass(LinkedList, [{
    key: "print",
    value: function print() {
      var arr = [];
      var current = this.head;

      while (current) {
        arr.push(current.data);
        current = current.next;
      }

      console.log(arr);
    }
  }, {
    key: "traverse",
    value: function traverse(idx) {
      var count = 0;
      var current = this.head;

      while (count <= idx) {
        count++;
        current = current.next;
      }

      return current;
    }
  }, {
    key: "size",
    value: function size() {
      console.log("Size: " + (this.length !== 0 ? this.length : 0));
    }
  }, {
    key: "append",
    value: function append(data) {
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
  }, {
    key: "prepend",
    value: function prepend(data) {
      var new_node = new Node(data);

      if (this.head) {
        new_node.next = this.head;
        this.head = new_node;
      } else {
        this.head = new_node;
        this.tail = new_node;
      }

      this.length++;
    } // 90 , 2

    /* 
                  p1  p2  p1   p2
          *--*    *   *   *    *
                   \       \  /
           *        *       *
           new      new    new
      */

  }, {
    key: "insert",
    value: function insert(val, idx) {
      var new_node = new Node(val);
      var p1 = this.traverse(idx - 1);
      var p2 = p1.next;
      p1.next = new_node;
      new_node.next = p2;
    }
  }, {
    key: "reverse",
    value: function reverse() {
      var prev = null,
          next = null;
      var current = this.head;

      while (current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
      }

      this.head = prev;
      console.log(this.head);
    }
  }]);

  return LinkedList;
}();

var ll = new LinkedList();
ll.append(19);
ll.append(9);
ll.append(56);
ll.append(89);
ll.prepend(99);
ll.prepend(10);
ll.insert(123, 4);
ll.reverse();
ll.print();