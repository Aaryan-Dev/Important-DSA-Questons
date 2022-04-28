// You are given an arrayAwithNelements. You are allowed toremove only one element, which makes thesum of all the remaining elements exactly divisible by 7.

// Your task is to find thefirst index of smallest elementthat can be removed from array. If there is no answer print-1

function applyBasicMaths(N,A){
    
      
    min = Infinity; 
 for(i=0; i<N; i++){
 sum = 0;
 let cum;
     for(j=0; j<N; j++){
         sum = sum + A[j];
         cum = sum - A[i]
      }
   if(cum%7==0){
   
   if(A[i]< min){
       min = A[i];
   }
   }
 }
 
      console.log(A.indexOf(min));
      
}

       