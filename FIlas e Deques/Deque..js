// Com um deque podemos inserir ou remover elementos tanto no inicio ou no final da estrutura.

class Deque{
    constructor(){
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    addFront(element){
        // add novo elemento na frente do deque;
        if(this.isEmpty()){
            this.addBack(element)
        } else if(this.lowestCount > 0){
            this.lowestCount--;
            this.isEmpty[this.lowestCount] = element;
        } else{
            for(let i = this.count; i > 0; i--){
                this.items[i] = this.items[i-1];
            }
            this.count++;
            this.lowestCount = 0;
            this.items[0] = element;
        }

    }

    addBack(element){
        // add novo elemento no fim do deque
    }
    removeFront(element){

    }

    removeFront(){

    }

    removeBack(){

    }

    peekFront(){

    }

    peekBack(){

    }

    isEmpty(){
        return this.count - this.lowestCount === 0;
    } 

    size(){
        return this.count - this.lowestCount;
    }

    clear(){
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    toString(){
        if(this.isEmpty) return '';
        const objString = `${this.items[this.count]}`;
        for(let i = this.lowestCount; i < this.items; i++){
            objString = `${objString}, ${this.items[i]}`;
        };

        return objString;
    }
}