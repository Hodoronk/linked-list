class LinkedList {
    constructor() {
        this.head = new Node(null)
        this.end = new Node()
        this.size = 0
        this.tail = null
        
    }

    prepend(value) {
        if (this.head.next === this.end) {
            const newNode = new Node(value, this.end)
            this.head.next = newNode
            this.size++
        } else {
            const newNode = new Node(value, this.head.next)
            this.head.next = newNode
            this.size++
        }
    }

    append(value) {
        if(this.head.next === this.end){
            const newNode = new Node(value, this.end)
            this.head.next = newNode;
            this.size++;
        } else {
            const lastElement = findLast(this.head) 
            const newNode = new Node(value)
            lastElement.next = newNode
            newNode.next = null
            this.size++
        }
    }

    listSize() { console.log(`Size of list:  ${this.size}`)  }
    firstElement() { console.log(`First element: ${this.head.next.value}`) }
    lastElement() {console.log(`Last Element: ${this.tail.value}`)}
    at(index){
        indexCount = -1;

        const findIndex = (element, index) => {
            if(element.index === index) {
                return element.value
            } else{
                return findIndex(element.next, index)
            }
        }
        assignIndices(this.head);
        if(index > indexCount) {
            console.log(`Index too large`) 
        } else {

            console.log(`Element at index ${index} is ${findIndex(this.head, index)}`) 
        }
    }
    pop(){
        const crawler = (element) => {
            if(element.next == this.tail) {
                this.size --
                this.tail = element;
                element.next = this.end
                return
            } else {
                crawler(element.next) 
            }
        }
        crawler(this.head) 
    }

    contains(value) {
        const search = (element, value) => {
            if(element.value === value) {
                return console.log(true)
            } else if(element.next == this.end) {
                return console.log(false)
            } else {
                search(element.next, value) 
            }
        }
        search(this.head, value) ;
    }

    find(value) {
        indexCount = -1;
        assignIndices(this.head) 
        const findValueIndex = (element, value) => {
            if(element.value == value) {
                return console.log(`Element value ${element.value} is at ${element.index}`)
            } else {
                return findValueIndex(element.next, value) ;
            }
        }
        findValueIndex(this.head, value) ;
    }

}

const findLast = (element) => {
    if (element.next == this.end) {
        console.log(`RETURNED ELEMENT: ${element.value}` ) ;
        linkedList.tail = element
        return element
    } else {
        console.log(`element value : ${element.value}`);
        return findLast(element.next)
    }
}

class Node {
    constructor(value = null, next = null, index = null) {
        this.value = value
        this.next = next
        this.index = index
    }
}


let indexCount;
const assignIndices = (element) => {
    if(element.next == null) {
        element.index = indexCount
        return
    } else {
        element.index = indexCount
        indexCount++;
        assignIndices(element.next) 
    }
}


const linkedList = new LinkedList()

const val = '1'
const val2 = '2'
const val3 = '3'
const val4 = '4'
const val5 = '5' 
const val6 = '6' 
const val7 = '7'
linkedList.prepend(val)
linkedList.prepend(val2)
linkedList.prepend(val3)
linkedList.prepend(val4)
linkedList.append(val5)
linkedList.append(val6)
linkedList.append(val7)

findLast(linkedList.head)
linkedList.listSize()
linkedList.firstElement()
linkedList.lastElement()
linkedList.at(6) 


linkedList.pop();
linkedList.contains('2') 
linkedList.find('5') ;
linkedList.find('5') ;
linkedList.find('5') ;
