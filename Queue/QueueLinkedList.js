/*
This code was written by Enarebebe Abraham Ebimawe
mail: enarebebenatthan@gmail.com
*/

const {LinkedList} = require('../LinkedList/CustomLinkedList')

class QueueLinkedList{ 
    constructor() {
        this.linkedList = new LinkedList()
    }
    enqueque(value){
        this.linkedList.append(value)
    }
    dequeque(){
        var temp =  this.linkedList.head.value
        this.linkedList.remove(0)
        return temp
    }
    viewBottom(){
        console.log(this.linkedList.head.value)
    }
}

module.exports = {
    QueueLinkedList
}