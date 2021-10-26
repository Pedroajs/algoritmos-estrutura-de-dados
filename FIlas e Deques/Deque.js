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
            //caso vazio o elemento é add no fim do deck(que tb é o inicio)
            this.addBack(element)
            
        } else if(this.lowestCount > 0){
            // nesse segundo cenario um elemento é removido da frente do deck
            //o que significa que a prop lowestCount é >= 1
            //nesse caso basta decrementar lowestCount e atribuir o elemento a chave desse obj

            this.lowestCount--;
            this.items[this.lowestCount] = element;
        } else{
            // nesse cenario lowestCount é 0
            for(let i = this.count; i > 0; i--){
                this.items[i] = this.items[i - 1];
            }
            this.count++;
            this.lowestCount = 0;
            this.items[0] = element;
        }

    }

    addBack(element){
        // add novo elemento no fim do deque
        this.items[this.count] = element;
        this.count++;
    }
    removeFront(element){
        if(this.isEmpty()) return undefined;
        
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }

    removeBack(){
        if(this.isEmpty()) return undefined;

        this.lowestCount--;
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        return result;
    }

    peekFront(){
        if(this.isEmpty()) return undefined;
        return this.items[this.lowestCount];
    }

    peekBack(){
        if(this.isEmpty()) return undefined;
        return this.items[this.lowestCount - 1];
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
    if (this.isEmpty()) return '';
      
      let objString = `${this.items[this.lowestCount]}`;
      for (let i = this.lowestCount + 1; i < this.count; i++) {
        objString = `${objString},${this.items[i]}`;
      }
      return objString;
    }
}


const deque = new Deque();
console.log(deque.isEmpty());
deque.addBack('pedro');
deque.addBack('john');
deque.addBack('camila');
console.log(deque.toString());
console.log(deque.size());
console.log(deque.isEmpty());
deque.removeFront();
console.log(deque.toString());
deque.addFront('pedro');
console.log(deque.toString());