function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var partition = function (head, x) {
    let smallNode = new ListNode();
    let bigNode = new ListNode();

    let realSmallNode = smallNode
    let realBigNode = bigNode
    while (head != null) {
        if (head.val < x) {
            smallNode.next = new ListNode(head.val);
            smallNode = smallNode.next;
            head = head.next;
        }
        else {
            bigNode.next = new ListNode(head.val);
            bigNode = bigNode.next;
            head = head.next;
        }
    }
    smallNode.next = realBigNode.next;
    return realSmallNode;
};

let wanda = new ListNode(1);
wanda.next = new ListNode(4);
wanda.next.next = new ListNode(3);
wanda.next.next.next = new ListNode(2);
wanda.next.next.next.next = new ListNode(5);
wanda.next.next.next.next.next = new ListNode(2);

console.log(partition(wanda,3));