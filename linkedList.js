class LinkedList {
    constructor() {
        this.head = new Node(null);
        this.end = new Node();
        this.size = 0;
    }

    prepend(value) {
        if (this.head.next === this.end) {
            const newNode = new Node(value, this.end);
            this.head.next = newNode;
            this.size++;
        } else {
            const newNode = new Node(value, this.head.next);
            this.head.next = newNode;
            this.size++;
        }
    }

    append(value) {
        if(this.head.next === this.end){
            const newNode = new Node(value, this.end);
            this.head.next = newNode; 
            this.size++;
        } else {
            const lastElement = findLast(this.head) ;
            const newNode = new Node(value);
            lastElement.next = newNode;
            newNode.next = null;
            this.size++;
        }
    }

    listSize() { console.log(`Size of list:  ${this.size}`)  }

    firstElement() {
        console.log(`First element: ${this.head.next.value}`);
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
linkedList.listSize();
linkedList.firstElement();
