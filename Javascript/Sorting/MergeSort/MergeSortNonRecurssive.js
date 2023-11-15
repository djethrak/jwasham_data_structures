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

            console.log("this.auxArray.length");
        }

        
    }
    merge(array1Index,array2Index){
        var array1 = this.auxArray[array1Index]
        var array2 = this.auxArray[array2Index]
        this.auxArray[array1Index] = []

        console.log(array1,array2);

        //First array is always greater or equal in length to array2 i.e time complexity O(array1.length)

        var rtIndex = 0
        var ltIndex = 0

        while (this.auxArray[array1Index].length != (array1.length+array2.length)) {

            if (array1[rtIndex] > array2[ltIndex] && array2[ltIndex] != undefined) {
                this.auxArray[array1Index].push(array2[ltIndex])
                ltIndex++
            }
            else if (array1[rtIndex] <= array2[ltIndex] && array2[ltIndex] != undefined) {
                // the equal to sign ensures stability
                 this.auxArray[array1Index].push(array1[rtIndex])
                 rtIndex++
            }
            else if(array2[ltIndex]==undefined){
                this.auxArray[array1Index].push(array1[rtIndex])
                rtIndex++
            }else  {
                this.auxArray[array1Index].push(array2[ltIndex])
                ltIndex++
            }
        }
        
        console.log(this.auxArray[array1Index]);
        
        this.auxArray.pop()
    }
}

const mergSort = new MergeSortNonRecurssive([3,4,8,6,1,1,10])

mergSort.sort()