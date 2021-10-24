  class Stack{
    constructor(){
        this.count = 0; // para ajudar a manter o controle do tamanho da pilha
        this.items = {};
    }

    push(element){
        this.items[this.count] = element;
        this.count++;
    }

    pop(){
        if(this.isEmpty()) return undefined;
        this.count--;

        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }

    peek(){
        if(this.isEmpty()) return undefined;
        return this.items[this.count -1];
    }

    size(){
        return this.count
    }
    isEmpty(){
        return this.count === 0;
    }

    clear(){
        while(!this.isEmpty()){
            this.pop();
        }
    }

    toString(){
        if(this.isEmpty()) return '';
        let objString = `${this.items[0]}`;

        for(let i = 0; i < this.count; i++){
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }
}

let stack = new Stack();
stack.push(5);
stack.push(8);


console.log(stack);
console.log(stack.toString())

module.exports = Stack;