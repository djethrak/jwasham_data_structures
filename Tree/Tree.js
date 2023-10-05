/*
This code was written by Enarebebe Abraham Ebimawe
mail: enarebebenatthan@gmail.com
*/


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
        var locationOfChild = ""
        var sideOfTheTree = ""

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
                        // this handles deleting the parent node
                        if (tree.right != null) {
                            this.replaceTheHighestLowestRight(tree.right)
                            
                        }else if (tree.left != null && tree.right == null) {
                            this.tree = tree.left
                            this.tree.parent = null
                        }else{
                            tree = {}
                        }
                    }else{
                        // Not leaf or parent
                        if (sideOfTheTree == "right") {
                            // you are at the right side of the tree relative to the parent
                        if (tree.right != null) {
                            // We are at the right node of parent
                            this.deleteNonParentRightNode(tree,locationOfChild)
                        }
                        else{
                            // there is no right node 
                            tree.parent.right = tree.left
                        }
                        }
                        else{
                            // side of tree we are deleting from is left
                            if (tree.left != null) {
                                // We are at the right node of parent
                                this.deleteNonParentRightNode(tree,locationOfChild)
                            }
                            else{
                                // there is no right node 
                                tree.parent.left = tree.left
                            }
                        }
                        
                     }
                    isNotFound = false
                }
            }
            else{
                if (tree.value < value) {
                    if (tree.right != null) {
                        tree = tree.right 
                        locationOfChild = "right"
                        if (tree.parent.parent == null) {
                            // This navigate the side of the tree the node is located relative to the parent node
                            sideOfTheTree = "right" 
                            
                        }
                    }
                    else{
                        isNotFound = false
                        console.log("Value not found!")
                    }
                    
                }
                else{
                    if (tree.left != null) {
                        tree = tree.left 
                        locationOfChild = "left"

                        if (tree.parent.parent == null) {
                            // This navigate the side of the tree the node is located relative to the parent node
                            sideOfTheTree = "left" 
                        }
                    }
                    else{
                        isNotFound = false
                        console.log("Value not found!")
                    }
                }
            }
        }
    }

    deleteNonParentRightNode(tree, locationOfChild){
        var loopEnabled = true
        var currentTreeNode = tree.right
        var itNeverWentLeft = true

        while(loopEnabled){
            if (currentTreeNode.left == null) {
                if (itNeverWentLeft) {
                    currentTreeNode.left = tree.left

                    if (locationOfChild == "right") {
                        console.log("object");
                        tree.parent.right = currentTreeNode
                    }else{
                        // I need to properly evaluate the importance of this line
                        tree.parent.left = currentTreeNode.left
                    }
                }
                else{
                    currentTreeNode.parent.left = currentTreeNode.right
                    currentTreeNode.right = tree.right
                    currentTreeNode.left = tree.left
                    

                    if (locationOfChild == "right") {
                        tree.parent.right = currentTreeNode
                    }else{
                        tree.parent.left = currentTreeNode
                    }
                    
                }
                loopEnabled=false
              }else{
                itNeverWentLeft = false
                currentTreeNode = currentTreeNode.left
            }
        }
    }

    replaceTheHighestLowestRight(tree){
        // This is for the parent node
        var isNotFound = true
        var currentTreeNode = tree
        var itNeverWentLeft = true

        while(isNotFound){
            if (currentTreeNode.left == null) {
                if (currentTreeNode.right == null) {
                    // this checks if it is a leaf
                    if (itNeverWentLeft) {
                        currentTreeNode.parent.right = currentTreeNode.right
                    }
                    else{
                        currentTreeNode.parent.left = currentTreeNode.left
                    }
                    currentTreeNode.left = this.tree.left
                    currentTreeNode.right = this.tree.right
                    currentTreeNode.parent = null
                    // delete this.tree
                    this.tree = currentTreeNode
                    this.length--
                    
                }
                else{
                    // There is a right node
                    if (itNeverWentLeft) {
                        currentTreeNode.parent.right = currentTreeNode.right
                    }
                    else{
                        currentTreeNode.parent.left = currentTreeNode.right
                    }
                    currentTreeNode.left = this.tree.left
                    currentTreeNode.right = this.tree.right
                    currentTreeNode.parent = null
                    delete this.tree
                    this.tree = currentTreeNode
                    this.length--                
                } 
                
                isNotFound = false
            }else{
                itNeverWentLeft = false
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

tree.add(20)
// tree.add(30)
// tree.add(31)
// tree.add(32)
// tree.add(22)
// tree.add(21)
// tree.add(25)
// tree.add(26)
// tree.add(23)
// tree.add(24)

tree.add(15)
tree.add(16)
tree.add(17)
tree.add(10)
tree.add(12)
tree.add(14)
tree.add(11)
tree.add(13)

tree.delete(25)
// tree.delete(21)


tree.travasalLevelOrder()
