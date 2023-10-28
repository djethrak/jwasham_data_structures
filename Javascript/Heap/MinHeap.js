/*
This code was created by Enarebebe Abraham Ebimawe
mail: enarebebenatthan@gmail.com
*/

class MinHeap{
    constructor() {
        this.array = []
    }

    insert(value){
        if (this.array.length == 0) {
            this.array.push(value)
        }else{
            this.array.push(value)
            if (!this.isMinHeap(this.getTheLastParentIndex())) {
                this.heapifyNodeAtIndex(this.array.length-1)
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

    getTheLastParentIndex(){
        if (this.array.length <= 3) {
            return 0
        } else{
            return Math.floor(((this.array.length-2)/2))
        }
    }
    getFirstLeafIndex(){
        return Math.floor(((this.array.length-1)/2)) + 1
    }
    getParentOfIndex(index){
        return Math.floor(((index-1)/2))
    }
    isNodeFull(index){
        return this.array[(index*2)+2] != undefined
    }
    isLeaf(index){
        return this.array[(index*2)+1] == undefined
    }
    isMinHeap(index){
        if (this.isLeaf(index)) {
            return true
        }else{
            var left = this.array[(index*2)+1]
            var right = this.array[(index*2)+2]
            var parent =this.array[index]
            
            if (right != undefined && right  < parent) {
                return false
            } else if (left != undefined && left  < parent) {
                
                return false
            } else{
                return true
            }
        }
    }
    heapifyNodeAtIndex(myCurrentIndex){
        /*
        check if parent is minheap

        if not move it up
        */
        
       var parentIndex = this.getParentOfIndex(myCurrentIndex)

       while (!this.isMinHeap(parentIndex)) {
        var left = this.array[(parentIndex*2)+1]
        var right = this.array[(parentIndex*2)+2]
        var parent =this.array[parentIndex]


        if (right != undefined && right  < parent) {
            this.swapNode((parentIndex*2)+2,parentIndex)
        }

        if (left != undefined && left  < parent) {
            this.swapNode((parentIndex*2)+1,parentIndex)
        }

        
        if (this.array[this.getParentOfIndex(parentIndex)] != undefined) {
            parentIndex = this.getParentOfIndex(parentIndex)
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

minHeap.insert(3)
minHeap.insert(2)
minHeap.insert(1)
minHeap.insert(0)

minHeap.insert(4)
minHeap.insert(5)

console.log(minHeap.array)



module.exports = {
    MinHeap
}