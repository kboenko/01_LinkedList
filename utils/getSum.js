const LinkedList = require('../entity/LinkedList');
const Node = require('../entity/Node');

module.exports = (list1, list2) => {
  if (list1.getLength() !== list2.getLength()) {
    return 'Размерности списков не совпадают!';
  } else {
    let node1 = list1.head;
    let node2 = list2.head;
    let sumValues = [];

    while (node1 !== null && node2 !== null) {
      sumValues.push(node1.value + node2.value);
      node1 = node1.next;
      node2 = node2.next;
    }

    let list = new LinkedList();
    sumValues.forEach(item => list.addInTail(new Node(item)));

    return list;
  }
}
