// You are given an arrayAofNintegers.

// Write a program to find thesumof the absolute difference between all such pairs (A[i], A[j]) such that i < j and ( j-i ) is prime.

function sumOfSpecialPairs(N,A){
    sum = 0;
for(i=0; i<N; i++){
 for(j=i+1; j<N; j++){
    //  console.log(i);
    //  console.log(j);
     let prime = j-i; 
    count = 0
 for(l=1; l<=prime; l++){
     if(prime%l==0){
         count++
     }
 }
    //  console.log(count);
     if(count==2){
         let it = (A[j] - A[i])
         if(it<0){
             sum = sum -it                 
         }else{
             sum = sum + it
         }
             
     }
 }

} 
    console.log(sum);
}


