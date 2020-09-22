function solution(brown, yellow) {
    var answer = [];
    var total = brown+yellow
    for(var i=yellow;1<=i;i--){
        var u = Math.floor(yellow/i);
        if((yellow%i==0)&&((i+2)*(u+2)==(brown+yellow))){
            answer=[u+2,i+2]
        }
    }
    return answer
    
}
