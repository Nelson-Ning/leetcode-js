// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

// 示例:

// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

// 第一种：
var twoSum = function(nums, target) {
    const len = nums.length-1;
    for(let i = len; i>=0; i --) {        
      const flag = nums.indexOf(target - nums[i]);
      if(flag !== -1 && flag !== i) {
        return [i, flag]
      }
    }
}
// 第二种：
var twoSum = function(nums, target) {
    const hash = {}
    let arr = []
    nums.forEach((val, index) => {
        if (hash[target - val] === undefined) {
            hash[val] = index;//{key: index}
        } else {
            arr = [hash[target - val], index];//hash[2]
        }
    })
    return arr
};

// 第三种：
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i ++) {
      if(Math.abs(nums[i]) <= Math.abs(target)) {
        for(let j = i+1; j < nums.length; j ++) {
          if(nums[i] + nums[j] === target) {
              return[i, j]
          }
        }
      }     
    }
};