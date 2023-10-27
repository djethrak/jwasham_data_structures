/*
This code was created by Enarebebe Abraham Ebimawe
mail: enarebebenatthan@gmail.com
*/

class MinHeap{
    constructor() {
        this.array = [0]
    }

    insert(value){
        if (this.array.length == 1) {
            this.array.push(value)
        }else{
            if (this.isNodeFull(this.getTheLastParentIndex())) {
                this.array.push(value)
                if (!this.isMinHeap(this.getFirstLeafIndex())) {
                    this.heapifyNodeAtIndex(this.getFirstLeafIndex())
                }
                
            }else{
                this.array.push(value)
                console.log(this.getTheLastParentIndex());

                if (!this.isMinHeap(this.getTheLastParentIndex())) {
                    this.heapifyNodeAtIndex(this.getTheLastParentIndex())
                }
            }
            
        }
    }

    remove(index){}

    getMin(){
        if (this.array.length == 0) {
            console.log("No value");
        }else{
            return this.array[(this.array.length-1)]
        }
    }

    heapify(array){
        

    }

    heapSort(){}

    // private classes

    getFirstLeafIndex(){
        return Math.floor(((this.array.length-1)/2)) + 1
    }

     getTheLastParentIndex(){
        return Math.floor(((this.array.length-1)/2))
    }
    isNodeFull(index){
        return this.array[(index*2)+1] != undefined
    }
    isLeaf(index){
        return this.array[(index*2)] == undefined
    }
    isMinHeap(index){
        if (this.isLeaf(index)) {
            return true
        }else{
            var left = this.array[(index*2)+1]
            var right = this.array[(index*2)]
            var parent =this.array[index]
            if (right  < parent) {
                return false
            } else if (left != undefined && left  < parent) {
                return false
            } else{
                return true
            }
        }
    }
    heapifyNodeAtIndex(index){
        /*
        Move initial index to a spot that is min heap true 

        check children if they are  min heap 

        repeat this process untill the children of heap is true
        */
       while (!this.isMinHeap(index)) {
        var left = this.array[(index*2)+1]
        var right = this.array[(index*2)]
        var parent =this.array[index]

        if (right != undefined && right  < parent) {
            this.swapNode((index*2),index)
            // check if left or right isMinHeap
            if (condition) {
                
            }
        
        }
        if (left != undefined && left  < parent) {
            this.swapNode((index*2)+1,index)
        }

        

       }
    }
    swapNode(index1, index2){
        var temp = this.array[index1]
        this.array[index1] = this.array[index2]
        this.array[index2] = temp
    }
}

const minHeap = new MinHeap()

minHeap.insert(2)
minHeap.insert(3)
minHeap.insert(1)

console.log(minHeap.array)



module.exports = {
    MinHeap
}