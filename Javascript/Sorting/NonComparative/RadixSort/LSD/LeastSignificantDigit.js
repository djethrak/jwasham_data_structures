class LeastSignificantDigit{
    /**
     * Each word in the input array must be of equal length e.g @param {["add","cab","fad"]} 
     * The details about time and space complexity is analysed in the code
     */
    constructor(stringArray) {
        this.stringArray = stringArray
    }

    countingSortHash(posOfAlphabet){
        const hash = {}
        
        for (let i = 0; i < this.stringArray.length; i++) {
          /**
            * This will asign each ascii to the total number of 
            * String that contains the ascii at that position O(n) e.g @param {98: 1, 100: 5, 101: 3}
            * The space complexity is O(h)
            * h is the size of hash
            */
            if (hash[this.stringArray[i].charCodeAt(posOfAlphabet)] == undefined) {
                hash[this.stringArray[i].charCodeAt(posOfAlphabet)] = 1
            }else{
                hash[this.stringArray[i].charCodeAt(posOfAlphabet)] = hash[this.stringArray[i].charCodeAt(posOfAlphabet)] + 1
            }
        }

        /**
         * @param {index} is to track the loop key index : helps to know if it is at index 0
         * The time complexity for this O(h)
         * The space complexity for this is O(1)
         *  */ 
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
        /**
         * Total time complexity is O(n+h)
         * Total space complexity O(h)
         */


        this.countingSortArray(posOfAlphabet,hash)

    }

    countingSortArray(posOfAlphabet, hash){
         /**
         * The total space complexity is O(n)
         * The total time complexity is O(n)
         * m is the length of the string
         */
        var arr = []
       

        for (let i = 0; i < this.stringArray.length; i++) {
            // assign each val
            arr[hash[this.stringArray[i].charCodeAt(posOfAlphabet)]] = this.stringArray[i]
            hash[this.stringArray[i].charCodeAt(posOfAlphabet)] = Number(hash[this.stringArray[i].charCodeAt(posOfAlphabet)])  + 1
        }

        this.stringArray = arr

        console.log(`array at position ${posOfAlphabet}: `, this.stringArray)
        
    }


    sort(){
        /**
         * The total space complexity is O(n)
         * The total time complexity is O(m(n + h))
         * m is the length of the string @param {this.stringArray[0].length} this get the length of the first string
         */
        for (let i = this.stringArray[0].length-1; i >= 0 ; i--) {
            this.countingSortHash(i)
        }
    }

}

const stringArray = ["add","cab","fad","fee","bad","bee","fed","bed","ace",]

const leastSignificantDigit = new LeastSignificantDigit(stringArray)

leastSignificantDigit.sort()

