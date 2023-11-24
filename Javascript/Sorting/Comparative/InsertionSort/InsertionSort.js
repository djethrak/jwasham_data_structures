class InsertionSort{
    constructor(array) {
        this.array = array
    }
    sort(){

        for (let i = 0; i < this.array.length; i++) {

            // move this {index} forward
            var index = i

            while (this.array[index+1] < this.array[index]) {
                this.swap(index+1, index)
                index--
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
const insertionSort = new InsertionSort([9,0,2,0,4])
insertionSort.sort()