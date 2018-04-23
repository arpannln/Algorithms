// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
//
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

//traverse thru the lists and add the numbers at respective positions
//keep track of carry over and if one list ends before the other make sure to follow that through
//store the sum into linked list
const addTwoNumbers = (l1, l2) => {
  let runner1 = l1;
  let runner2 = l2;
  let carryOver = 0;
  let result = [];

  while (runner1 || runner2) {
    let value1 = 0;
    let value2 = 0;
    //collect possible first value
    if (runner1) {
      value1 = runner1.val;
      runner1 = runner1.next;
    }
    //collect possible second value
    if (runner2) {
      value2 = runner2.val;
      runner2 = runner2.next;
    }
    //sum em and account for carryOver
    let sum = value1 + value2 + carryOver;
    if (sum >= 10) {
      carryOver = 1;
    } else {
      carryOver = 0;
    }

    result.push(sum % 10);
  }

  var head = new ListNode(result[0]);
  var current = head;
  for (let i = 0; i < result.length - 1; i++) {
    current.next = new ListNode(result[i + 1]);
    current = current.next;
  }

  return head;
};
