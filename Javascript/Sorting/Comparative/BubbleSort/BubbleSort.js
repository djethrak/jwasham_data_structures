/*
This code was created by Enarebebe Abraham Ebimawe
mail: enarebebenatthan@gmail.com
*/
class BubbleSort{
    constructor(array) {
        this.array = array
    }

    /**
     * This run at O(n(n-1)/2)
     *  - O((n^2)/2) = O(n^2)
     * This run at quadratic time 
     */

    sort(){
        var iLastIndex = this.array.length
        for (let i = 0; i < this.array.length; i++) {
            /**
             * This runs at O({this.array.length})
             * This also ensure that since the last index is already sorted so there is no need to compare it
             */

            iLastIndex--
            for (let j = 0; j < iLastIndex; j++) {
                 // this runs at O(iLastIndex-1)
                if (this.array[j] > this.array[j+1]) {
                    this.swap(j,j+1)
                }
                
            }
            
        }
        console.log(this.array);
    }
    swap(left, right){
        var temp = this.array[left]
        this.array[left] = this.array[right]
        this.array[right] = temp
    }
}

const bubbleSort = new BubbleSort([9,0,2,0,4])
bubbleSort.sort()