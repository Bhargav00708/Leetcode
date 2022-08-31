var hasCycle = function (head) {
    if (head == null || head.next == null) {
        return false;
    }
    for (let i = 0; i <= 10000; i++) {
        if (head != null) {
            head = head.next;
            continue;
        }
        else {
            return false;
        }
    }
    return true;

};