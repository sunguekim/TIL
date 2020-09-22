function solution(array, commands) {
    var answer = [];
    let ar = []
    if(array===null){answer = []}
    for (const key in commands) {
    ar = array.slice(commands[key][0]-1, commands[key][1]).sort((a,b)=>a-b)
    answer.push(ar[commands[key][2]-1])
}
    
    return answer;
}
