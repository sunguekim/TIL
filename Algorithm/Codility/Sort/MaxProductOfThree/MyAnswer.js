function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const sortA = A.sort((a,b)=>a-b);
    const N = A.length;
    
    const a = sortA[N-1]*sortA[N-2]*sortA[N-3];
    const b = sortA[0]*sortA[1]*sortA[N-1]
    
    return Math.max(a,b)
}
