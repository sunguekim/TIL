import java.util.*;

class Solution {
    public String solution(String[] participant, String[] completion) {
        String answer = "";
        Map<String,Integer>mm = new HashMap<String,Integer>();
        for(String a:participant)mm.put(a, mm.getOrDefault(a,0)+1);
        for(String a:completion)mm.put(a,mm.get(a)+1);
        
        for(String a:mm.keySet()){
            if(mm.get(a)!=2){
                answer = a;
                break;
            }
        }
        
        
        return answer;
    }
}
