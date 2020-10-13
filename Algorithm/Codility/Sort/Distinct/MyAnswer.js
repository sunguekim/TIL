function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const distinct = new Set();
    
    for(let values of A){
        distinct.add(values)
    }
    return distinct.size
}
