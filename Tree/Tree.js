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
        var temp =  this.linkedList.head.value
        this.linkedList.remove(0)
        return temp
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
                        newTreeNode.parent = currentTreeNode
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
                        newTreeNode.parent = currentTreeNode
                        currentTreeNode.right = newTreeNode
                        this.length++
                    }else{
                        currentTreeNode = currentTreeNode.right
                    }
                }
            }
            
        }

    }

    update(value,atValue){
        var isNotFound = true
        var tree = this.tree

        while(isNotFound){
            if (tree.value == atValue) {
                tree.value = value
                isNotFound = false
            }else{
                if (tree.value < atValue) {
                    if (tree.right != null) {
                        tree = tree.right 
                    }
                    else{
                        isNotFound = false
                        console.log("Value not found!")
                    }
                    
                }else{
                    if (tree.left != null) {
                        tree = tree.left 
                    }
                    else{
                        isNotFound = false
                        console.log("Value not found!")
                    }
                }
            }
        }
    }

    delete(value){
        var isNotFound = true
        var tree = this.tree
        // var newHigestLowestNode = null

        while(isNotFound){
            if (tree.value == value) {
                if (this.isLeaf(tree)) {
                    // Let's delete leaf 
                    if (tree.parent != null) {
                        if (tree.parent.value < value) {
                            tree.parent.right = null 
                        }
                        else{
                            tree.parent.left = null 
                        }
                        this.length--
                    }else{
                        // This means we have only one parent
                        this.tree = {}
                        this.length = 0
                    }
                    isNotFound = false
                }
                else{
                    if (tree.parent == null) {
                        if (tree.right != null) {
                            replaceTheHighestLowestRight(tree.right)
                            
                        }
                    }
                    isNotFound = false
                }


                
            }
            else{
                if (tree.value < value) {
                    if (tree.right != null) {
                        tree = tree.right 
                    }
                    else{
                        isNotFound = false
                        console.log("Value not found!")
                    }
                    
                }
                else{
                    if (tree.left != null) {
                        tree = tree.left 
                    }
                    else{
                        isNotFound = false
                        console.log("Value not found!")
                    }
                }
            }
        }
    }

    replaceTheHighestLowestRight(tree){
        var isNotFound = true
        var currentTreeNode = tree

        while(isNotFound){
            if (currentTreeNode.left == null) {
                if (currentTreeNode.right == null) {
                    tree.value = currentTreeNode.value
                    currentTreeNode = null
                }
                else{
                    tree.value = currentTreeNode.value
                    currentTreeNode = currentTreeNode.right
                }
                isNotFound = false
                
            }else{
                currentTreeNode = currentTreeNode.left
            }
        }
    }


    isLeaf(treeNode){
        return (treeNode.left == null && treeNode.right == null)
    }

    travasalLevelOrder(){
        if (this.length == 0) {
            console.log("No TreeNode in tree!")
        }else{
            const queue = new QueueLinkedList()
            queue.enqueque(this.tree)

            while (queue.linkedList.length>0) {
                const treeNode = queue.dequeque()
                console.log(treeNode.value)
                if (treeNode.left != null) {
                    queue.enqueque(treeNode.left)
                }
                if (treeNode.right != null) {
                    queue.enqueque(treeNode.right)
                }
            }
             
            
        }

    }

}

const tree =  new Tree()

tree.add(10)
tree.add(7)
tree.add(9)
tree.add(5)
tree.add(90)

tree.update(20,90)

tree.travasalLevelOrder()
console.log("\n\n")

// tree.delete(20)
// tree.delete(7)
// tree.delete(5)
// tree.delete(9)
// tree.delete(7)
// tree.delete(10)


tree.travasalLevelOrder()

// console.log(tree)
