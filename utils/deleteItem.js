const LinkedList = require('../entity/LinkedList');
const Node = require('../entity/Node');

module.exports = (node, value) => {

  let values = [];

  while (node !== null) {
    if (node.value !== value) {
      values.push(node.value);
    }
    node = node.next;
  };

  return values;
};
