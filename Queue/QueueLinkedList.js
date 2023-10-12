const {LinkedList} = require('../LinkedList/CustomLinkedList')

class QueueLinkedList{ 
    constructor() {
        this.linkedList = new LinkedList()
    }
    enqueque(value){
        this.linkedList.append(value)
    }
    dequeque(){
        console.log(this.linkedList.head.value)
        this.linkedList.remove(0)
    }
    viewBottom(){
        console.log(this.linkedList.head.value)
    }
}