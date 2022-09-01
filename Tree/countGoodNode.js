var goodNodes = function (root) {
    let max = root.val;
    let count = 0;
    function wanda(node, max) {
        if (!node) {
            return;
        }
        if (node.val >= max) {
            ++count;
        }
        max = Math.max(node.val, max);
        let nextLeft = node.left;
        let nextRight = node.right;
        wanda(nextLeft, max);
        wanda(nextRight, max);
    }
    wanda(root, max);
    return count;
};