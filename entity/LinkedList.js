const del = require('../utils/deleteItem');
const Node = require('../entity/Node');

class LinkedList {

  constructor() {
    this.head = null;
    this.tail = null;
  }

  addInTail(node) {

    if (this.head === null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;

  }

  findByValue(value) {
    let node = this.head;
    let result = [];

    while (node !== null) {
      if (node.value === value) {
        result.push(node);
      }
      node = node.next;
    }

    return result;
  }

  deleteByValue(value) {
    let node = this.head;
    let prevNode = null;
    let nextNode = node.next;

    while (node !== null) {
      if (node.value !== value) {
        prevNode = node;
      } else if (node.value === value) {

        if (node.next !== null) {
          node.value = node.next.value;
          node.next = node.next.next;
        } else {
          this.tail = prevNode;
          this.tail.next = null;
        }
        break;
      }

      node = node.next;

    }
  }

  deleteAllByValue(value) {
    let valArray = del(this.head, value);
    let list = new LinkedList();
    valArray.forEach(item => list.addInTail(new Node(item)));
    this.head = list.head;
    this.tail = list.tail;
  }

  clear() {
    this.head = null;
    this.tail = null;
  }

  getLength() {
    let node = this.head;
    let length = 0;

    while (node !== null) {
      if (node.value) {
        length++ ;
      }
      node = node.next
    }
    return length;
  }

  insertAfter(newNode, nodeNumber) {
    let node = this.head;

    if (this.getLength() < nodeNumber) {
      console.log('Введённое значение превышает размер списка!')
    } else {
      let counter = 0;

       while (node !== null) {
        if (counter !== nodeNumber) {
          counter++;

          if (node.next !== null) {
            node = node.next;
          } else {
            node.next = newNode;
            break;
          }

        } else {
          let currentNode = node;
          let nextNode = node.next;
          newNode.next = nextNode;
          currentNode.next = newNode;
          break;
        }
        node = node.next;
      }

    }
  }

}

module.exports = LinkedList;
