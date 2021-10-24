// criando uma matrix 3x3. Cada célula contém a soma i(linha) + j(coluna) + z(rofunidade)

const matriz3x3x3= [];

for(let i = 0; i < 3; i++){
    matriz3x3x3[i] = []; //inicializando cada array;

    for(let j = 0; j < 3; j++){
        matriz3x3x3[i][j] = [];

        for(let z = 0; z < 3; z++){
            matriz3x3x3[i][j][z] = i + j + z;
        }
    }
}

for(let i = 0; i < matriz3x3x3.length; i++){
    for(let j = 0; j < matriz3x3x3[i]; j++){
        for(let z = 0; z < matriz3x3x3[i][j].length; z++){
            matriz3x3x3[i][j][z] = i + j+ z;
        }
    }
}

console.log(matriz3x3x3)