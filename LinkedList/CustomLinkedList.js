class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor() {
        this.head = {}
        this.tail = {}
        this.length = 0
    }

    append(value){
        const newNode = new Node(value)
        if(this.length== 0){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
    }

    prepend(value){
        const newNode = new Node(value)
        if(this.length== 0){
            this.head = newNode
            this.tail = newNode
        }else{
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
    }

    remove(index){
        if (this.length == 0) {
            console.log("No item!")
        }else if (index >= this.length) {
            console.log("Invalid index!")
        }else if (index == 0 && this.length ==1) {
            this.head = {}
            this.tail = this.head
            this.length--
        }else if (index==0) {
            this.head = this.head.next
            this.length--
        }
        else{
                var currentNode = this.head
                var count = 0
                while(count < index){
                    if (count == index-1) {
                        if (index == this.length -1) {
                            this.tail = currentNode
                        }
                        currentNode.next = currentNode.next.next
                    }
                    
                        currentNode = currentNode.next
                    
                    count++
                }
                this.length--
        }
    }
    insert(value, index){
        if (index > this.length) {
            console.log("Invalid index!")
        }else{
            if (index == this.length) {
                this.append(value)
            }else if (index==0) {
                this.prepend(0)
            }else{
                const newNode = new Node(value)
                var currentNode = this.head
                var count = 0
                while(count < index){
                    if (count == index-1) {
                        newNode.next = currentNode.next
                        currentNode.next = newNode
                    }
                    currentNode = currentNode.next
                    count++
                }
                this.length++
            }
        }

    }
    lookup(){
        var list = ""
        var currentNode = this.head
        var count = 0

        while(count < this.length){
            if(count!= 0){
                list = list +"-->"+ currentNode.value
            }else{
                list = ""+ currentNode.value
            }
            currentNode = currentNode.next
            count++
        }
        console.log(list)
    }
}

// const linkedList = new  LinkedList()

// linkedList.prepend(1)
// linkedList.append(3)
// linkedList.append(4)
// linkedList.append(5)

// linkedList.insert(7,4)
// linkedList.insert(6,4)
// linkedList.insert(0,0)
// linkedList.insert(2,2)

// linkedList.remove(7)

// // console.log(linkedList)
// linkedList.lookup()

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

// const stackedLinkedList = new StackedLinkedList()

// stackedLinkedList.push(20)
// stackedLinkedList.push(2)
// stackedLinkedList.push(1)

// stackedLinkedList.pop()
// stackedLinkedList.pop()

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

// const queueLinkedList =  new QueueLinkedList()

// queueLinkedList.enqueque(1)
// queueLinkedList.enqueque(2)
// queueLinkedList.enqueque(3)
// queueLinkedList.enqueque(4)

// queueLinkedList.dequeque()
// queueLinkedList.dequeque()
// queueLinkedList.dequeque()
