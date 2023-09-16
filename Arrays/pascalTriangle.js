function pascalTriangle(n) {
    var triangle = [n];

    for (let i = 0; i < n; i++) {
        var innerVal = [i+1]

        innerVal[0]=1

        for (let j = 1; j < i+1; j++) {
            innerVal[j] = triangle[i-1][j-1] + triangle[i-1][j]
            
        }
        innerVal[i]=1

        triangle[i] = innerVal
        
    }

    return triangle
}

console.log(pascalTriangle(6))