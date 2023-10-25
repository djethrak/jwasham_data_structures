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
            console.log("object");
        }
    }

    remove(index){}

    getMin(){}

    heapify(array){}

    heapSort(){}

    // private classes

     getTheLastParent(){
        return this.array.length/2
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
    swapNode(index1, index2){
        var temp = this.array[index1]
        this.array[index1] = this.array[index2]
        this.array[index2] = temp
    }
}


module.exports = {
    MinHeap
}