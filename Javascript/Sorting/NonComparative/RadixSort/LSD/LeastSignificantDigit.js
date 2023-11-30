class LeastSignificantDigit{
    constructor(stringArray) {
        this.stringArray = stringArray
    }

    countingSortHash(posOfAlphabet){
        const hash = {}

        for (let i = 0; i < this.stringArray.length; i++) {
            /*
            * This will asign each ascii to the total number of 
            * string that contains the ascii at that position O(n) e.g {98: 1, 100: 5, 101: 3}
            */
            if (hash[this.stringArray[i].charCodeAt(posOfAlphabet)] == undefined) {
                hash[this.stringArray[i].charCodeAt(posOfAlphabet)] = 1
            }else{
                hash[this.stringArray[i].charCodeAt(posOfAlphabet)] = hash[this.stringArray[i].charCodeAt(posOfAlphabet)] + 1
            }
        }

        // {index} is to track the loop key index : helps to know if it is at index 0
        var index = 0
        var lastTotalCount = 0
        for (const key in hash) {
            // Save the value to the current key
            var currentKeyValue = hash[key]
            if (index == 0) {
                // assign the first key to 0
                hash[key]= 0
            }else{
                // Save the last total count of the value to current key
                hash[key]= lastTotalCount
            }
            // Add current key value to the last total count 
            lastTotalCount = lastTotalCount + currentKeyValue
            index++
        }

        return hash

    }
    countingSortArray(){
        var arr = []
        var hash = this.countingSortHash(2)

        for (let i = 0; i < this.stringArray.length; i++) {
            arr[hash[this.stringArray[i].charCodeAt(2)]] = this.stringArray[i]
            hash[this.stringArray[i].charCodeAt(2)] = hash[this.stringArray[i].charCodeAt(2)] + 1
        }

        this.stringArray = arr

        console.log(this.stringArray)
    }



}

const stringArray = ["add","cab","fad","fee","bad","bee","fed","bed","ace",]

const leastSignificantDigit = new LeastSignificantDigit(stringArray)

leastSignificantDigit.countingSortArray()

