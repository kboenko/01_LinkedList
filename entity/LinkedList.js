const Node = require('../entity/Node');
const deleteItemsByValue = require('../utils/deleteItemsByValue');

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

    while (node !== null) {
      if (node.value !== value) {
        prevNode = node;
      } else if (node.value === value && prevNode !== null) {

        if (node.next !== null) {
          prevNode.next = node.next;
        } else {
          prevNode.next = null;
          this.tail = prevNode;
          this.tail.next = null;
        }
        break;
      } else if (node.value === value && prevNode === null) {
        node === node.next;
        break;
      }

      node = node.next;

    }
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

  getValues() {
    let node = this.head;
    let values = [];

    while (node !== null) {
      values.push(node.value);
      node = node.next;
    }

    return values;
  }

  deleteAllByValue (value) {
    let reducedList = deleteItemsByValue(this.head, value);

    let node = reducedList;
    let tail = null;

    while (node !== null) {
      if (node.next === null) {
        this.tail = node;
      }
      node = node.next;
    }
    this.head = reducedList;
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
