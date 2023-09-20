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

class TreeNode{
    constructor(value) {
        this.parent = null
        this.value = value
        this.left = null
        this.right = null
    }
}

class Tree {
    constructor() {
        this.tree = {}
        this.length = 0
    }

    add(value){
        if (this.length == 0) {
            const newTreeNode = new TreeNode(value)
            this.tree = newTreeNode
            this.length++
        }else{
            var loopEnabled = true
            var currentTreeNode = this.tree
            const newTreeNode = new TreeNode(value)

             while (loopEnabled) {
                if (value < currentTreeNode.value) {
                    // go left
                    if (currentTreeNode.left == null ) {
                        // insert
                        loopEnabled = false
                        currentTreeNode.left = newTreeNode
                        this.length++
                    }else{
                        currentTreeNode = currentTreeNode.left
                    }
                }else{
                    //go right
                    if (currentTreeNode.right == null ) {
                        // insert
                        loopEnabled = false
                        currentTreeNode.right = newTreeNode
                        this.length++
                    }else{
                        currentTreeNode = currentTreeNode.right
                    }
                }
            }
            
        }

    }

    travasalInOrder(){
        if (this.length == 0) {
            console.log("No TreeNode in tree!")
        }else{
            var loopEnabled = true
            var currentTreeNode = this.tree

             while (loopEnabled) {
                
            }
            
        }

    }
}

const tree =  new Tree()

tree.add(10)
tree.add(9)
tree.add(90)

console.log(tree)
