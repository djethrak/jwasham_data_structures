/*
This code was created by Enarebebe Abraham Ebimawe
mail: enarebebenatthan@gmail.com
*/
class QuickSortNonRecursive {
    constructor(array) {
        this.array = array
    }

    positionPivot(pivot){
        var low = 0
        var high = this.array.length - 1

        // put pivot in first index
        this.swap(pivot,low)
        pivot=0

        while (low <= high) { 
            if (this.array[low] > this.array[pivot] && this.array[high] <= this.array[pivot]) {
                this.swap(low,high)
                console.log(low,high);
            }

            if (this.array[low] <= this.array[pivot]) {
                low++
            }

            if (this.array[high] > this.array[pivot]) {
                high--
            }

            
        }
        console.log(high,low);
        if (this.array[high] < this.array[pivot]) {
            this.swap(high,pivot)
        }
        
        console.log(this.array);
    }
    swap(i,j){
       const temp = this.array[i]
       this.array[i] = this.array[j]
       this.array[j] = temp
    }
}

// const quickSort = new QuickSortNonRecursive([3,4,8,6,1,1,10])
const quickSort = new QuickSortNonRecursive([5,86,69,73,11,17,1,74,34,3])

quickSort.positionPivot(5)

module.exports = {
    QuickSortNonRecursive
}