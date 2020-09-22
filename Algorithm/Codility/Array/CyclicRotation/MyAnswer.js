function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    let result = [...A]

    for(let i=0;i<K;i++){
        result.unshift(result[result.length-1])
        result.pop()
    }
    return result
}
