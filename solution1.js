/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let resultArr = JSON.parse(JSON.stringify(matrix));
    let outerArrayLen = matrix.length;
    let innerArrayLen = matrix[0].length;
    let indexArr = [];

    for(let i=0; i<outerArrayLen; i++){
        if(matrix[i].includes(0)){
            let newArr = [];
            for(let n=0; n<innerArrayLen; n++){
                newArr.push(0)
            }
            resultArr.splice(i, 1, [...newArr])

            for(let j=0; j<innerArrayLen; j++){
                if(matrix[i][j] === 0){
                    indexArr.push(j)
                }
            }
        } 
    }

    for(let i=0; i<outerArrayLen; i++){
        let newArr = [...resultArr[i]];
        for(let j=0; j<indexArr.length; j++){
            newArr.splice(indexArr[j], 1, 0)
        }
        resultArr.splice(i, 1, newArr)
    }

    return resultArr;
};

console.log("setZeroes ===> ", setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]))
