var detectCycle = function (head) {
    let obj1 = new Map();
    while (head) {
        if(obj1.has(head))
        {
            return head;
        }
        obj1.set(head,`Wanda Is Love`);
        head = head.next;
    }
    return null;
};  
