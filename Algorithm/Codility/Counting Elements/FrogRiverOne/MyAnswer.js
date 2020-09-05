function solution(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const target = new Set();
    
    for(let i=0;i<A.length;i++){
        target.add(A[i])
        if(target.size==X){
            return i
        }
    }
    return -1;
}
