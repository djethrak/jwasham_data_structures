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

    getFirstLeafIndex(){
        return Math.floor(((this.array.length-1)/2)) + 1
    }

     getTheLastParentIndex(){
        return Math.floor(((this.array.length-1)/2))
    }
    getParentOfIndex(index){
        return Math.floor(((index)/2))
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
            var left = this.array[(index*2)]
            var right = this.array[(index*2)+1]
            var parent =this.array[index]
            if (right != undefined && right  > parent) {
                return false
            } else if (left != undefined && left  > parent) {
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
        console.log(parentIndex,this.isMinHeap(parentIndex));
        var left = this.array[(parentIndex*2)]
        var right = this.array[(parentIndex*2)+1]
        var parent =this.array[parentIndex]
        

        if (right != undefined && right  > parent) {
            this.swapNode((parentIndex*2),parentIndex)
        }

        if (left != undefined && left  > parent) {
            this.swapNode((parentIndex*2)+1,parentIndex)
        }

        // check if parent of index is minheap
        parentIndex = this.getParentOfIndex(myCurrentIndex)
        
        
        
        if (parentIndex !=0 && !this.isMinHeap(parentIndex)) {
            // console.log(parentIndex);
            // set index to parent
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

minHeap.insert(2)
minHeap.insert(3)
minHeap.insert(1)
// minHeap.insert(0)

console.log(minHeap.array)



module.exports = {
    MinHeap
}