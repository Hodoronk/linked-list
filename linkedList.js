class LinkedList {
    constructor() {
        this.head = new Node(null);
        this.end = new Node();
    }

    prepend(value) {
        if (this.head.next === this.end) {
            const newNode = new Node(value, this.end);
            this.head.next = newNode;
        } else {
            const newNode = new Node(value, this.head.next);
            this.head.next = newNode;
        }
    }

    append(value) {
        if(this.head.next === this.end){
            const newNode = new Node(value, this.end);
            this.head.next = newNode; 
        } else {
            const lastElement = findLast(this.head) ;

            
            const newNode = new Node(value);
            lastElement.next = newNode;
            newNode.next = null;
        }
    }

    size() {
        let counter = 0;
        const count = (element) => {
            if(element.next === null) {
                counter++;
                console.log(`counter in the end: ${counter}`) ;
                return counter;
            } else if(element.value === null) {             //
                count(element.next);
            }
            
            else{
                counter++;
                console.log(`counter: ${counter}`) ;
                return count(element.next)
            }
        }
        console.log(`SIZE OF LINKED LIST: ${count(this.head)}`) ;
        
    }
}

const findLast = (element) => {
    if (element.next == null) {
        console.log(`RETURNED ELEMENT: ${element.value}` ) ;
        return element;
    } else {
        console.log(`element value : ${element.value}`);
        return findLast(element.next);
    }
}

class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

const linkedList = new LinkedList();

const val = '1';
const val2 = '2';
const val3 = '3';
const val4 = '4';
const val5 = '5' ;
const val6 = 'big value' ;
const val7 = 'bigger value'; 
linkedList.prepend(val);
linkedList.prepend(val2);
linkedList.prepend(val3);
linkedList.prepend(val4);
linkedList.append(val5);
linkedList.append(val6);
linkedList.append(val7);

findLast(linkedList.head);
linkedList.size();
