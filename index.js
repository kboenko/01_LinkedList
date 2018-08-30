const Node = require('./entity/Node');
const LinkedList = require('./entity/LinkedList');
const getSum = require('./utils/getSum');

(() => {

      let node1 = new Node(3);
      let node2 = new Node(58);

      node1.next = node2;

      let linkedList = new LinkedList();

      linkedList.addInTail(node1);
      linkedList.addInTail(node2);
      linkedList.addInTail(new Node(21));
      linkedList.addInTail(new Node(58));
      // linkedList.addInTail(new Node(100));
      // linkedList.addInTail(new Node(58));

      console.log('---------------------------------------------------');
      console.log(linkedList);
      console.log(`Linked List Length: ${linkedList.getLength()}` );
      console.log('---------------------------------------------------');
      console.log(linkedList.findByValue(58));
      console.log('---------------------------------------------------');
      linkedList.deleteByValue(58);
      //linkedList.deleteAllByValue(58);
      console.log('---------------------DelByVal----------------------');
      console.log(linkedList);
      console.log('---------------------------------------------------');
      console.log(`Linked List Length: ${linkedList.getLength()}` );
      console.log('---------------------------------------------------');
      linkedList.insertAfter(new Node(4), 1);
      console.log('---------------------------------------------------');
      console.log(`Linked List Length: ${linkedList.getLength()}` );
      console.log('---------------------------------------------------');
      linkedList.clear();
      console.log(linkedList);

      let list1 = new LinkedList();
      let list2 = new LinkedList();

      list1.addInTail(new Node(1));
      list1.addInTail(new Node(1));
      list1.addInTail(new Node(1));
      //list1.addInTail(new Node(1));

      list2.addInTail(new Node(2));
      list2.addInTail(new Node(2));
      list2.addInTail(new Node(2));

      let resultList = getSum(list1, list2);
      console.log(resultList);

      console.log('ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ');

      let list3 = new LinkedList();

      list3.addInTail(new Node(1));
      list3.addInTail(new Node(2));
      list3.addInTail(new Node(1));
      list3.addInTail(new Node(10));
      list3.addInTail(new Node(1));
      list3.addInTail(new Node(1));

      list3.deleteAllByValue(1);

      console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
      console.log(list3);
      console.log(list3.getLength());
      console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');

})();
