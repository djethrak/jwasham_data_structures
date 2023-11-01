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

    heapSortDescendingOrder(){
        /*
        We are not creating extra space - space complexity 0(1)
        Time complexity O(nlogn)
        */ 
        var restrictedIndex = this.array.length

        while (restrictedIndex > 0) {
         restrictedIndex--
         this.swapNode(0,restrictedIndex)
         this.heapifyRestrictedNodeAtIndex(0,restrictedIndex)
         
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
        
        if (!this.isMinHeap(index)) {
            
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
       if (myCurrentIndex<1) {
            parentIndex = 0
       }


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

// minHeap.insert(3)
// minHeap.insert(2)
// minHeap.insert(1)
// minHeap.insert(0)

// minHeap.insert(4)
// minHeap.insert(5)

minHeap.heapArrayInsert([1,4,5,2,3])

console.log(minHeap.array)

minHeap.removeAt(0)

console.log(minHeap.array)



module.exports = {
    MinHeap
}