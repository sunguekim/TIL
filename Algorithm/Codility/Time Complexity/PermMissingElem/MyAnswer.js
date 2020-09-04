function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if(A.length===0){
        return 1;
    }
    let N = A.length+1
    let total = (N*(N+1))/2
    let sum = 0;
    
    A.forEach(element=>{
        sum+=element
    })
    
    return total-sum
    
}
