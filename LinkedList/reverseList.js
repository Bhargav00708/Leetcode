function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

let obj1 = new ListNode(20);
obj1.next = new ListNode(30);
obj1.next.next = new ListNode(40);

var reverseList = function (head) {
    let reverseList = new ListNode(head.val);
    while (head.next != null) {
        head = head.next;
        let newNode = new ListNode(head.val,reverseList);
        reverseList = newNode;
    }
    return reverseList;
};

console.log(reverseList(obj1)); 