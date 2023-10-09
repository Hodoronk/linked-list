export class linkedList {

    preapend(value) {
        const newNode = new Node(value)
        listHead.pointer = newNode.value;

    }
    append ( value ) {
        const newNode = new Node (value) ;
        newNode.pointer = listEnd.value;

    }
}

export class Node {
    constructor( value = null, pointer = null ) {
        this.value = value ;
        this.pointer = pointer ;
    }
}

const listHead = new Node(null, null) ;
const listEnd = new Node (null, null) ;

