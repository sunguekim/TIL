function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let P1 = 0;
    let P2 = A.reduce((a,b)=>a+b)
    let result = null;
    for(let i=1;i<A.length;i++){
        P1+=A[i-1]
        P2-=A[i-1]
        const minus = Math.abs(P1-P2)
        if(result===null||result>minus){
            result = minus
        }
    }
    return result
}
