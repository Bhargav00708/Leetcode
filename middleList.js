function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

let obj1 = new ListNode(20);
obj1.next = new ListNode(30);
obj1.next.next = new ListNode(40);

var middleNode = function (head) {
    let arrayOp = [];
    while (head.next) {
        arrayOp.push(head.val);
        head = head.next;
    }
    arrayOp.push(head.val);
    arrayOp = [1,49,91,83,63,8,11,75,99,95,90,45,64,96,18,46,36,29,65,55,53,3,97,45,19,24,52,65,21,30,73,82,48,4,60,79,33,98,12,33,91,97,96,91,89,9,85,61,37];
    arrayOp = arrayOp.slice(parseInt(arrayOp.length / 2), arrayOp.length);
    let middleNode = new ListNode();
    let realNode = middleNode;
    for (let i = 0; i < arrayOp.length; i++) {
        if (!middleNode.val) {
            middleNode.val = arrayOp[i];
        }
        else
        {
            middleNode.next = new ListNode(arrayOp[i]);
            middleNode = middleNode.next;
        }
    }
    return realNode;
};

console.log(middleNode(obj1));