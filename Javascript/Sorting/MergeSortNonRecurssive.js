class MergeSortNonRecurssive{
    constructor(array) {
        this.array = array
        this.auxArray = []
    }

    sort(){
        for (let i = 0; i < this.array.length; i=i+2) {

            if (this.array[i] > this.array[i+1] && this.array[i+1] != undefined) {
                const tempArry = [this.array[i+1],this.array[i]]
                this.auxArray.push(tempArry)
            }
            else if (this.array[i] <= this.array[i+1] && this.array[i+1] != undefined) {
                // the equal to sign ensures stability
                const tempArry = [this.array[i],this.array[i+1]]
                this.auxArray.push(tempArry)
            }
            else if(this.array[i]!=undefined && this.array[i+1]==undefined){
                const tempArry = [this.array[i]]
                this.auxArray.push(tempArry)
            }

        }

        var arrayIndex = this.auxArray.length - 1

        while (this.auxArray.length > 1) {
            console.log("obk");

            if (arrayIndex <= 1 && this.auxArray.length ==2 ) {
                // that means there is only 2 items in aux Length merge 0 and 1
                this.merge(0,1)
            }else if (arrayIndex <= 1 && this.auxArray.length > 2 ) {
                // that means there is more item aux, reset arrayIndex
                arrayIndex = this.auxArray.length - 1

            }else{
                this.merge(arrayIndex-1,arrayIndex) 
                arrayIndex = arrayIndex - 2
            }
        }

        
    }
    merge(array1Index,array2Index){
        const array1 = this.auxArray[array1Index]
        const array2 = this.auxArray[array2Index]

        //First array is always greater or equal in length to array2 i.e time complexity O(array1.length)

        for (let i = 0; i < array1.length; i++) {

            if (array1[i] > array2[i] && array2[i] != undefined) {
                this.auxArray[array1Index].push(array2[i])
            }
            else if (array1[i] <= array2[i] && array2[i] != undefined) {
                // the equal to sign ensures stability
                 this.auxArray[array1Index].push(array1[i])
            }
            else if(array2[i]==undefined){
                this.auxArray[array1Index].push(array1[i])
            }

        }
        this.auxArray.pop()
        
    }
}

const mergSort = new MergeSortNonRecurssive([3,4,8,6,1,1])

mergSort.sort()