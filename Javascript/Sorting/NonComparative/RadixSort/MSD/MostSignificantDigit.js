/*
This code was created by Enarebebe Abraham Ebimawe
mail: enarebebenatthan@gmail.com
*/
//Not finished, we need recursion
class MostSignificantDigit {
    /**
     * Each word in the input array must be of equal length e.g @param {["add","cab","fad"]} 
     * The details about time and space complexity is analysed in the code
     */
    constructor(stringArray) {
        this.stringArray = stringArray
    }

    sort(){
        this.breakArray(this.stringArray,0)
    }
    breakArray(array,posOfAlphabet){
        /**
         * Break array like [add,ace] into [[add],[ace]]
         * We will use counting sort algorithm
         */
        var hash = {}
        for (let i = 0; i < array.length; i++) {
             /**
            * This will asign each ascii to the total number of 
            * String that contains the ascii at that position O(n) e.g @param {98: 1, 100: 5, 101: 3}
            * The space complexity is O(h)
            * h is the size of hash
            */
            if (hash[array[i].charCodeAt(posOfAlphabet)] == undefined) {
                hash[array[i].charCodeAt(posOfAlphabet)] = 1
            }
        }

        /**
         * The time complexity for this O(h)
         * The space complexity for this is O(1)
         *  */ 
        var lastTotalCount = 0
        for (const key in hash) {

            //Number each key from 0..n in order of increasing value
            hash[key]= lastTotalCount

            
            lastTotalCount++
        }
        /**
         * For the above algorithm 
         * Total time complexity is O(n+h)
         * Total space complexity O(h)
         */


        var arr = []

        console.log(hash)
        for (let i = 0; i < array.length; i++) {

            var currentAscii = array[i].charCodeAt(posOfAlphabet)

            if (arr[hash[currentAscii]] == undefined) {
                
                arr[hash[currentAscii]] = [array[i]]
                
            }else{
                arr[hash[currentAscii]].push(array[i])
            }
        }

        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            console.log(element)
            
        }
        
    }
}
const stringArray = ["add","cab","fad","fee","bad","bee","fed","bed","ace"]

const mostSignificantDigit = new MostSignificantDigit(stringArray)

mostSignificantDigit.sort()