function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const sortArray = A.sort((a,b)=>a-b)
    let answer = 1
    
    for(let i=0;i<A.length;i++){
        if(sortArray[i]!==i+1){
            answer = 0;
        }
    }
    
    return answer
}
