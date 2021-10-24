let numbers = [1,2,3,4,5];

// insere no novo array todo item que for diferente de undefined
Array.prototype.reIndex = function(array){
    const newarray = [];
    for(let i = 0; i < array.length; i++){
        if(numbers[i] !== undefined) newarray.push(numbers[i]);
    }
    return newarray;
}
//move os itens para a esquerda, porem mantem o tamanho do array, sendo o ultimo undefined;
//chama a funcao reIndex e redefine a primeira posicao
Array.prototype.removeFirstPosition = function(){
    for(let i = 0; i < this.length; i++){
        numbers[i] = numbers[i+1];
    }
    return this.reIndex(this);
}
numbers = numbers.removeFirstPosition();
console.log(numbers);