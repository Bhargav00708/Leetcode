function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

let obj1 = new ListNode(1);
obj1.next = new ListNode(0);
obj1.next.next = new ListNode(0);
obj1.next.next.next = new ListNode(0);
obj1.next.next.next.next = new ListNode(0);
obj1.next.next.next.next.next = new ListNode(1);

let obj2 = new ListNode(5);
obj2.next = new ListNode(6);
obj2.next.next = new ListNode(4);

var addTwoNumbers = function (l1, l2) {
    let str1 = ``;
    let str2 = ``;
    while (l1.next) {
        str1 += l1.val;
        l1 = l1.next;
    }
    str1 += l1.val;
    while (l2.next) {
        str2 += l2.val;
        l2 = l2.next;
    }
    str2 += l2.val;
    let firstString = str1.split("").reverse().join("");
    let secondString = str2.split("").reverse().join("");
    let finalAnswer = (BigInt(firstString) + BigInt(secondString)).toString().split("").reverse().join("");

    let imgNode = new ListNode(parseInt(finalAnswer[0]));
    let realAnswerNode = imgNode;
    for(let i = 1; i < finalAnswer.length; i++) {
        imgNode.next = new ListNode(parseInt(finalAnswer[i]));
        imgNode = imgNode.next;
    }
    return realAnswerNode;
};

console.log(addTwoNumbers(obj2, obj1));