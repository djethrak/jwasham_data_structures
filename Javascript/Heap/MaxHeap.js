/*
This code was created by Enarebebe Abraham Ebimawe
mail: enarebebenatthan@gmail.com
*/

class MaxHeap{
    constructor() {
        this.array = []
    }

    insert(value){
        if (this.array.length == 0) {
            this.array.push(value)
        }else{
            this.array.push(value)
            if (!this.isMaxHeap(this.getTheLastParentIndex())) {
                this.heapifyNodeAtIndex(this.array.length-1)
            }
        }
    }
    

    removeAt(index){

        if (index == this.array.length-1) {
            this.array.pop()
        }else{
        // replace last item with the item you want to remove

        this.array[index] = this.array[this.array.length-1]

        // remove the last item
        this.array.pop()

        // heapify at index
        
        if (!this.isMaxHeap(index)) {
            
            this.heapifyNodeAtIndex(index)
        }

        }
    }

    getMin(){
        if (this.array.length == 0) {
            console.log("No value");
        }else{
            return this.array[0]
        }
    }

    heapifyArray(array){
        /*
        this require extra space because we have to create this.array and write into it
        
        the big o of this algorithm is Nlogn
        */ 

        this.array = array
        for (let index = array.length; 0 <= index; index--) {
            this.heapifyNodeAtIndex(index)
        }
    }

    heapArrayInsert(array){
        /*
        this require extra space because we have to create this.array and write into it
        
        the big o of this algorithm is Nlogn
        */ 
        for (let index = 0; index < array.length; index++) {
            this.insert(array[index])
            
        }

    }

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
    isMaxHeap(index){
        if (this.isLeaf(index)) {
            return true
        }else{
            var left = this.array[(index*2)+1]
            var right = this.array[(index*2)+2]
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
       if (myCurrentIndex<1) {
            parentIndex = 0
       }

       console.log(parentIndex);

       while (!this.isMaxHeap(parentIndex)) {
        var left = this.array[(parentIndex*2)+1]
        var right = this.array[(parentIndex*2)+2]
        var parent =this.array[parentIndex]


        if (right != undefined && right  > parent) {
            this.swapNode((parentIndex*2)+2,parentIndex)
        }

        if (left != undefined && left  > parent) {
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

const maxHeap = new MaxHeap()

maxHeap.heapArrayInsert([1,4,5,2,3])

console.log(maxHeap.array)

maxHeap.removeAt(0)

console.log(maxHeap.array)

module.exports = {
    MaxHeap
}