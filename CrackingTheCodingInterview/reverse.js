class Link {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}


var link6 = new Link(6, null);
var link5 = new Link(5, link6);
var link4 = new Link(4, link5);
var link3 = new Link(3, link4);
var link2 = new Link(2, link3);
var link1 = new Link(1, link2);


const reverse = (head) => {
  if (head === null || head.next === null) {
    return null;
  }

  let runner = head.next;
  head.next = null;

  while (runner !== null) {
    let oldHead = head;
    head = runner;
    runner = runner.next;
    head.next = oldHead;
  }

  return head;
};

console.log(reverse(link1));
