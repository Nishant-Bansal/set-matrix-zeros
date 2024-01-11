/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    
    let outerArrayLen = matrix.length;
    let innerArrayLen = matrix[0].length;

    let ansrow=[]
    let anscol=[]

    for(let i=0; i<outerArrayLen; i++){
        for(let j=0; j<innerArrayLen; j++){
            if(matrix[i][j] == 0){
                ansrow.push(i);
                anscol.push(j);
            }
        }
    }

    for(let i=0; i<outerArrayLen; i++){
        for(let j=0; j<innerArrayLen; j++){
            if(ansrow.includes(i) || anscol.includes(j)){
                matrix[i][j] = 0
            }
        }
    }

    return matrix;

};
console.log("setZeroes ===> ", setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]))
