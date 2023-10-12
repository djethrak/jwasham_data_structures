const {LinkedList} = require('../LinkedList/CustomLinkedList')

class StackedLinkedList{
    constructor() {
        this.linkedList = new LinkedList()
    }

    push(value){
        this.linkedList.prepend(value)

    }
    pop(){
        console.log(this.linkedList.head.value)
        this.linkedList.remove(0)
    }
    viewTop(){
        console.log(this.linkedList.head.value)
    }
}
