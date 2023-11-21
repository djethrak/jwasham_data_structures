class BasicCountingSort{
    /*
    It is non comparerabe because we are not comparing any value 
    */
    constructor(array) {
        this.array = array
    }

    sort(){
        /*
        -This run in O(n) but it has it foors
            -The key can loose it value 
        -It requires extra space {keyMap} O(n)
        */

        let keyMap = {}
        let count = 0

        // put each int item into hash which will sort each as key
        for (let i = 0; i < this.array.length; i++) {
            if (keyMap[this.array[i]] == undefined) {
                keyMap[this.array[i]] = 1
            }else{
                keyMap[this.array[i]] = keyMap[this.array[i]]+1
            }
            
            
        }

        // This run at O(n) if You analyse it
        for(const key in keyMap){
            for (let i = 0; i < keyMap[key]; i++) {
                this.array[count] = Number(key)
                count++;
            }
        }

        console.log(this.array);
    }
}

const basicCountingSort = new BasicCountingSort([9,0,2,0,4])
basicCountingSort.sort()

module.exports = {
    BasicCountingSort
}