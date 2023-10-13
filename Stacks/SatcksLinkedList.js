/*
This code was created by Enarebebe Abraham Ebimawe
mail: enarebebenatthan@gmail.com
*/

const {LinkedList} = require('../LinkedList/CustomLinkedList')

class StacksLinkedList{
    constructor() {
        this.linkedList = new LinkedList()
    }

    push(value){
        this.linkedList.prepend(value)
    }
    pop(){
        const temp = this.linkedList.head.value
        this.linkedList.remove(0)
        return temp
    }
    viewTop(){
        return this.linkedList.head.value
    }
}

module.exports = {
    StacksLinkedList
}
