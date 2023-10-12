/*
This code was created by Enarebebe Abraham Ebimawe
mail: enarebebenatthan@gmail.com
*/

class MyArray{
    constructor() {
        this.arrays = {}
        this.length = 0
        this.space = 0
    }

    add(value){

         if ( this.space > 1 && this.space == this.length) {
            for (let i = 0; i < this.length*2; i++) {
                if (i<this.length) {
                    this.arrays[i] = this.arrays[i]
                }else if (i==this.length) {
                    this.arrays[this.length] = value
                    this.space++
                }
                else{
                    this.arrays[i] = ''
                    this.space++
                }
            }
        }else{
            this.arrays[this.length] = value
            if (this.space<2) {
                this.space++
            }
        }
        
        this.length++
    }

    insert(value,index){
        if (index<this.length) {
            if ( this.space > 1 && this.space == this.length) {
                var prevVal = this.arrays[0]
                for (let i = 0; i < this.length*2; i++) {
                    
                    if (i<=this.length) {
                        if (i<index) {
                            this.arrays[i] = this.arrays[i]
                        }else if (i == index) {
                            prevVal = this.arrays[i]
                            this.arrays[i] = value
                        }else{
                            const temp = this.arrays[i]
                            this.arrays[i] = prevVal
                            prevVal = temp
                            this.space++
                        }
                        
                    }else{
                        this.arrays[i] = ''
                        this.space++
                    }
                }
            }else{
                if (this.space<2) {
                    this.arrays[index] = value
                    this.space++
                }else{
                    var prevVal = this.arrays[0]
                    for (let i = 0; i <= this.length; i++) {
                    
                        if (i<index) {
                            this.arrays[i] = this.arrays[i]
                        }else if (i == index) {
                            prevVal = this.arrays[i]
                            this.arrays[i] = value
                        }else{
                            const temp = this.arrays[i]
                            this.arrays[i] = prevVal
                            prevVal = temp
                        }
                }
                }
            }
            
            this.length++
        }
        else{
            console.log("Invalid index!")
        }
        
    }
    remove(index){
        if (index<this.length) {

        if (this.length == (this.space/4)) {
            //reduce by half
            for (let i = 0; i < this.space; i++) {
                if (i<this.length && i>=index) {
                    this.arrays[i] = this.arrays[i+1]
                }else if(i>this.space/2){
                    delete this.arrays[i]
                }
            }
            this.space = this.space/2
        }else{
            for (let i = 0; i < this.length; i++) {
                if (i>=index) {
                    this.arrays[i] = this.arrays[i+1]
                }
                
            }
        }
        this.length--
    }
    else{
        console.log("Invalid index!")
    }
    }
    update(value,index){
        if (index<this.length) {
            this.arrays[index] = value
        }
        else{
            console.log("Invalid index!")
        }

    }
    get(index){
        if(index<this.length){
            console.log(this.arrays[index])
        }else{
            console.log("Out of bounds")
        }
        
    }
}

module.exports = {
    MyArray
}

