/*
This code was created by Enarebebe Abraham Ebimawe
mail: enarebebenatthan@gmail.com
*/

const {MyArray} = require('../Arrays/CustomArray');

class StackedArray{
    constructor() {
        this.stackedArray = new MyArray()
    }
    
    push(value){
        this.stackedArray.add(value)
    }

    pop(){
        this.stackedArray.remove(this.stackedArray.length-1)
    }

    viewTop(){
       this.stackedArray.get(this.stackedArray.length-1)
    }
}


