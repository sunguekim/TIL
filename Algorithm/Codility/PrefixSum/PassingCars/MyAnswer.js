function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let w_car = 0;
    let pass_car = 0
    
    for(let i in A){
        if(A[i]===0){
            w_car+=1
        }else{
            pass_car+=w_car
        }
        if(pass_car>1000000000){ return -1}
    }
    return pass_car
}
//west의 입장에서 마주치는 0의 개수가 몇개냐의 따라 만들수 있는 쌍의 개수가 달라집니다
//그래서 0의 개수를 카운트해주고 w를 만날때마다 지나친 자동차의 수를 더해줍니다
