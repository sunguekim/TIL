function solution(answers) {
    let result = [];
    let member=[
        [1,2,3,4,5],
        [2,1,2,3,2,4,2,5],
        [3,3,1,1,2,2,4,4,5,5]
    ];
    
    member.map((pattern) => answers.filter((answer, index) =>
                                           answer === pattern[index % pattern.length]).length)
        .map((ele, index, matchedNumArr) => 
             {Math.max(...matchedNumArr) === ele ? result.push(index+1) : ""});
    
    
    return result;
}
