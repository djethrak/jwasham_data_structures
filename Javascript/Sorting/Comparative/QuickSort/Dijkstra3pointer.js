class Dijkstra3pointer{
    /*
    This algorithm is good for duplicates
    */
    constructor(array) {
        this.array = array
    }
    
    make(){
        /*
        Pointer is the pivot that set the upper and lower bound
        low does move if value is low and vice versa
        */
        var pointer = 0
        var low = 1
        var high = this.array.length - 1

        while (low < high) {
            if(this.array[low] > this.array[pointer] && this.array[high] <= this.array[pointer]){
                this.swap(low,high)
                // move pointer to the back of new low 
                this.swap(low,pointer)
                pointer = low
                low++
                high--
            }
            
            if (this.array[high] > this.array[pointer]) {
                high--
            }
        }
        console.log(this.array);

    }

    swap(i,j){
       var temp = this.array[i]
       this.array[i] = this.array[j]
       this.array[j] = temp
    }
}

// const dijkstra = new Dijkstra3pointer([5,86,69,73,11,17,1,74,34,3])
const dijkstra = new Dijkstra3pointer([1,4,8,6,1,1,10])
dijkstra.make()
