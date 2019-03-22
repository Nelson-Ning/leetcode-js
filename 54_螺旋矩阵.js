// 给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。

// 示例 1:

// 输入:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]
// 输出: [1,2,3,6,9,8,7,4,5]
// 示例 2:

// 输入:
// [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9,10,11,12]
// ]
// 输出: [1,2,3,4,8,12,11,10,9,5,6,7]


const data = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
];

var spiralOrder = function(matrix) {
    let m = 0;
    var state = ['right', 'down', 'left', 'up'];
    var results = [];
    var curState = 0;
    var totalNums = (matrix.length * matrix[0].length); 
    if(matrix.length !== 0) {
        while (results.length < totalNums) {
            switch(state[curState]) {
                //  第一步right
                case 'right': {
                    if(matrix[m].length !==0) {
                        results.push(matrix[m].shift());
                    } else {
                        // 应该往下走了
                        curState = 1;
                        ++m;
                        console.log(m);
                    }
                    break;
                }
                case 'down': {
                    if(matrix[m] !== undefined && matrix[m].length !== 0) {
                        results.push(matrix[m].pop());
                        m++;
                    } else {
                        // 应该往左走了
                        curState = 2;
                        --m;
                    }
                    break;
                }
                case 'left': {
                    if(matrix[m].length !== 0) {
                        results.push(matrix[m].pop());
                    } else {
                        // 应该往上走了
                        curState = 3;
                        --m;
                    }
                    break;
                }
                case 'up': {
                    if(matrix[m] !== undefined && matrix[m].length !== 0) {
                        results.push(matrix[m].shift());
                        --m
                    } else {
                        // 应该往左走了
                        curState = 0;
                        ++m;
                    }
                    break;
                }
            }
        }
    }
    console.log(results);
};

spiralOrder(data);