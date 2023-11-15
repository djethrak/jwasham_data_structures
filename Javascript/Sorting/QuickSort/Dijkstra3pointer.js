class Dijkstra3pointer{
    constructor(array) {
        this.array = array
    }
    
    make(){
        pointer = 0
        low = 1
        high = this.array.length - 1

    }

    swap(i,j){
       var temp = this.array[i]
       this.array[i] = this.array[j]
       this.array[j] = temp
    }
}