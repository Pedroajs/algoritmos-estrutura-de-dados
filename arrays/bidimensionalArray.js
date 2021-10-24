let averageTemp = [];
averageTemp[0] = [54,36,47,55,43];
averageTemp[1] = [81,52,56,88,74];

function printMatrix(myMatrix){
    for(let i = 0; i < myMatrix.length; i++){
        for(let j = 0; j< myMatrix[i]; j++){
            console.log(myMatrix[i][j]);
        }
    }

    return myMatrix;
}

console.log(printMatrix(averageTemp));