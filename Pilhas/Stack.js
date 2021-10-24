export class Stack{
    constructor(){
        this.items = [];
    }

    push(element){
        this.items.push(element)
    }
    pop(element){
        this.items.pop(element);
    }

    peek(){
        return this.items[this.items.length -1];
    }
    isEmpty(){
        return this.items.length === 0;
    }

    clear(){
        for(let i = 0; i < this.items.length; i++){
            this.items.pop();
        }
    }

    toString(){
       return this.items.toString();
    }

    size(){
        return this.items.length;
    }
}

let newArray = new Stack();
newArray.pop(1,2,3,4);
console.log(newArray.peek());