/*
This code was created by Enarebebe Abraham Ebimawe
mail: enarebebenatthan@gmail.com
*/
class SelectionSort {
    constructor(array) {
        this.array = array
    }

    sort(){

        for (let i = 0; i < this.array.length; i++) {
            this.swap(i,this.findMinIndex(i))
            
        }
        console.log(this.array);
    }
    findMinIndex(from){
        // Look for min from start to end then replace at appropriate
        var min = this.array[from]
        var minIndex = from


        for (let i = from; i < this.array.length; i++) {
            if (this.array[i]< min) {
                min = this.array[i]
                minIndex = i
            }
            
        }
        return minIndex
    }
    swap(left, right){
        var temp = this.array[left]
        this.array[left] = this.array[right]
        this.array[right] = temp
    }
}

const selectionSort = new SelectionSort([9,0,2,0,4])
selectionSort.sort()