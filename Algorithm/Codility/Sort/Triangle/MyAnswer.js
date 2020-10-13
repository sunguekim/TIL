function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const sort = A.sort((a,b)=>a-b)
    
    for(let i=0;i<A.length-2;i++){
        if(A[i+1]+A[i]>A[i+2]){
            return 1
        }
    }
    return 0;
}
