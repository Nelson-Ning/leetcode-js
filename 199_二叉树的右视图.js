// 给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

// 示例:

// 输入: [1,2,3,null,5,null,4]
// 输出: [1, 3, 4]
// 解释:

//    1            <---
//  /   \
// 2     3         <---
//  \     \
//   5     4       <---

const common_tree = require('./binary_tree_data.js/index.js').common_tree;

var rightSideView = function(root) {
    if (root == null) {
        return [];
    }
    var checkArr = [root];
    var resArr = [root.val];
    while (checkArr.length > 0) {
        var newCheckArr = [];
        for (var i = 0; i < checkArr.length; i++) {
            var item = checkArr[i];
            if (item.right) {
                newCheckArr.push(item.right);
            }
            if (item.left) {
                newCheckArr.push(item.left);
            }
        }
        checkArr = newCheckArr;
        if (checkArr.length > 0) {
            resArr.push(checkArr[checkArr.length - 1].val);
        }
    }
    return resArr;
};


console.log(rightSideView(common_tree));