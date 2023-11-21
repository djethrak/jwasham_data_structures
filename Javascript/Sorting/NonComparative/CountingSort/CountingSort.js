class CountingSort{
/*
    It is non comparerabe because we are not comparing any value 
    */
    constructor(array) {
        this.array = array
    }

    sort(){
         /*
        -This run in O(q+n) but it has it foors
            -The key can not loose it value 
        -It requires extra space {keyMap} O(n)
        */

        let keyMap = {}

        // put each int item into hash which will sort each as key
        for (let i = 0; i < this.array.length; i++) {
            if (keyMap[this.array[i]] == undefined) {
                keyMap[this.array[i]] = 1
            }else{
                keyMap[this.array[i]] = keyMap[this.array[i]]+1
            }
        }

        /*
        Asign each position to the hash
            -Do it from left to right for linear time O(n) else it will be quadratic O(n(n-1)/2)
        */
       var lastKeyValue = 0
       var loopCount = 0
        for (const key in keyMap) {

            var tempKeyValue =0

            if (loopCount == 0) {
                tempKeyValue = keyMap[key]
                keyMap[key] = 0
            }else{
                tempKeyValue = keyMap[key]
                keyMap[key] = lastKeyValue
            }
            
            lastKeyValue = lastKeyValue + tempKeyValue
            loopCount++
        }

        /*
        Sort array based on the location
        */
        var newArray = []

        for (let i = 0; i < this.array.length; i++) {

            // put value in it location assoc with key
            newArray[keyMap[this.array[i]]] = this.array[i]

            // Increment the value to create space for the next similar item
            keyMap[this.array[i]] = keyMap[this.array[i]]+1
        }

        console.log(newArray);

    }
}

const countingSort = new CountingSort([9,0,2,0,4])
countingSort.sort()

module.exports = {
    CountingSort
}