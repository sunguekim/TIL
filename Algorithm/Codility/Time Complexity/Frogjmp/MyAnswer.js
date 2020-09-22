function solution(X, Y, D) {
    // write your code in JavaScript (Node.js 8.9.4)
    const minJump = Y-X;
    return minJump % D ? (Math.floor(minJump/D)+1) : (Math.floor(minJump/D));
}

//일단 최소 횟수는 Y-X 의 차를 주어진 점프 거리만큼 뛰어 차를 넘는 횟수이기 때문에
//두거리를 D 만큼 나누는데 딱떨어지면 그 횟수가 정답이고 나머지가 있다면
//Y를 보다 크거나 같아야 하기때문에 횟수 +1 을 해줍니다


//오늘은 생각이 잘안되어 이렇게 쓰면서해봤습니다 :)
