const {MyArray} = require('../Arrays/CustomArray');

class QueueArray{
    //It does not make sense to create que with a dynamic array
    constructor() {  
        this.read = 0
        this.write = 0       
        this.queueArray = [null,null,null,null,null]
    }

    enqueque(value){
        if (this.queueArray[this.write] != null) {
            console.log("List is full")
        }else if (this.write == this.queueArray.length-1) {
            this.queueArray[this.write] = value

            this.write = 0
        }else{
            this.queueArray[this.write] = value

            this.write++
        }
       
    }

    dequeque(){
        if (this.queueArray[this.read] == null) {
            console.log("List is empty")
        }else if (this.read == this.queueArray.length-1) {
            this.queueArray[this.read] = null
            this.read = 0
        }else{
            this.queueArray[this.read] = null
            this.read++
        }
    }

    viewBottom(){
        console.log(this.queueArray[this.read])
    }
}

var queque = new QueueArray()
queque.enqueque(0)
queque.enqueque(1)
queque.enqueque(2)

queque.dequeque()
queque.dequeque()
queque.dequeque()

queque.enqueque(3)
queque.enqueque(4)
queque.enqueque(0)
queque.enqueque(1)
queque.enqueque(2)
queque.dequeque()
queque.dequeque()


console.log(queque)