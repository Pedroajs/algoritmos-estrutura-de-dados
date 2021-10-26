class Queue{
    constructor(){
        this.count = 0; // para ajudar a controlar o tamanho da fila
        this.lowestCount = 0; // para ajudar a manter o controle do primeiro elemento da fila
        this.items = {};
    }

    enqueue(element){
        //add de novos elementos (no final da fila)
        this.items[this.count] = element;
        this.count++;
    }

    dequeue(){
        if(this.isEmpty()) return undefined;

        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result
    }

    peek(){
        if(this.isEmpty()) return undefined;
        return this.items[this.lowestCount];
    }

    isEmpty(){
        return this.count - this.lowestCount === 0;
    }

    size(){
        return this.count - this.lowestCount;
    }

    clear(){
        this.items = {}
        this.count = 0;
        this.lowestCount = 0;
    }

    toString(){
        if(this.isEmpty()) return '';
        let objString = `${this.items[this.lowestCount]}`;
        for(let i = this.lowestCount + 1; i < this.count; i++){
            objString = `${objString}, ${this.items[i]}`;
        };
        return objString;
    }
}

const queue = new Queue();
queue.enqueue('Pedro');
queue.enqueue('Bruno');
queue.enqueue('Camila');
console.log(queue.toString());
console.log(queue.isEmpty());
console.log(queue.size());
queue.dequeue();
queue.dequeue();
console.log(queue.toString(), queue.size());
