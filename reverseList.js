function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

let obj1 = new ListNode(20);
obj1.next = new ListNode(30);
obj1.next.next = new ListNode(40);

function reverse(val)
{
    let reverseNode = new ListNode();
    let realReverseNode = reverseNode;
}

console.log(reverse(obj1));