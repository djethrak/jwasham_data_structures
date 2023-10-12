/*
This code was created by Enarebebe Abraham Ebimawe
mail: enarebebenatthan@gmail.com
*/
const {StacksLinkedList} = require('../Stacks/SatcksLinkedList');

const {QueueLinkedList} = require('../Queue/QueueLinkedList');


const {TreeNode} = require('../Tree/TreeNode')


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
                                this.deleteNonParentLeftNode(tree,locationOfChild)
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

    deleteNonParentLeftNode(tree, locationOfChild){
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

    inOrderTraversalStacks(){
        if (this.length == 0) {
            console.log("No TreeNode in tree!")
        }else{
            // We are using stacks here to implement this function 
            var isLooping = false
            var stack = new StacksLinkedList()
            stack.push(this.tree)

            while (isLooping) {
            
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

tree.delete(10)
// tree.delete(21)


tree.travasalLevelOrder()
