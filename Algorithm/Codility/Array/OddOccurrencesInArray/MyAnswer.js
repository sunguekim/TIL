function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    const uniqueIndex = A.reduce((count,number)=>{
        count[number]=count[number]?count[number]+1:1
        return count
    },{})
    
    for(key in uniqueIndex){
        if(uniqueIndex[key]%2==1){
            return Number(key)
        }
    }
}
