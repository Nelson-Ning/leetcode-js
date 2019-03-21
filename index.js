var data = {
    val: 11,  // root 指向 val 为 11 的对象。
    left: {
      val: 7,
      left:  { 
        val: 5, 
        left: {
          val: 3,
          left: null,  
          right: null  
        },  
        right: null  
      },
      right:  {  
        val: 9,  
        left: null,  
        right: null  
      } 
    },
    right: {  
      val: 13,  
      left: null,  
      right: null  
    }  
}


var rightSideView = function(root) {
    if (root == null) {
        return [];
    }
    // console.log(root.left);
    rightSideView(root.left);
    rightSideView(root.right);
    // var checkArr = [root];
    // var resArr = [root.val];
    // while (checkArr.length > 0) {
    //     var newCheckArr = [];
    //     for (var i = 0; i < checkArr.length; i++) {
    //         var item = checkArr[i];
    //         if (item.right) {
    //             newCheckArr.push(item.right);
    //         }
    //         if (item.left) {
    //             newCheckArr.push(item.left);
    //         }
    //     }
    //    // console.log(newCheckArr);
    //     checkArr = newCheckArr;
    //     if (checkArr.length > 0) {
    //         resArr.push(checkArr[checkArr.length - 1].val);
    //     }
    // }
    // return resArr;
};


console.log(rightSideView(data));