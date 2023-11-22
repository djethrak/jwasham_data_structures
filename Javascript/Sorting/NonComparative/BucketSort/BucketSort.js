
const {LinkedList} = require('../../../LinkedList/CustomLinkedList')


class BucketSort{
    constructor(array) {
        this.array = array
    }

    sort(){
        let keyMap = {}

        // put each int item into hash which will sort each as key
        for (let i = 0; i < this.array.length; i++) {
            if (keyMap[this.array[i]] == undefined) {
                // create the new linked list and input value key
                var linkedList = new LinkedList()
                linkedList.append(this.array[i])

                keyMap[this.array[i]] = linkedList
            }else{
                // chain the new value to previously stored linked list value

                var linkedList = new LinkedList()
                linkedList = keyMap[this.array[i]]
                linkedList.append(this.array[i])

                keyMap[this.array[i]] = linkedList
            }
        }

        var sortedBucketList = []

        for (const key in keyMap) {

            // extract each linked list from hash map

            var extractedlinkedList = new LinkedList()
            extractedlinkedList = keyMap[key]
            var tempArray = extractedlinkedList.lookupArray()

            for (let i = 0; i < tempArray.length; i++) {
                //Merge the arrays
                sortedBucketList.push(tempArray[i])
            }
        }
        console.log(sortedBucketList);

        
    }
}

const bucketSort = new BucketSort([9,0,2,0,4])
bucketSort.sort()