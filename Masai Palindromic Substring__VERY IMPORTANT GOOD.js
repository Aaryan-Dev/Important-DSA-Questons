// You are provided a stringS.

// Write a program that returns length of the longest palindromic substring of that string.

function masaiPalSubString(S){
    
    let arr = [];
    for(let i=0; i<S.length; i++){
        let bag = "";
        for(let j=i; j<S.length;j++){
        
        bag = bag + S[j];
        rev = "";
        for(let k=bag.length-1;k>=0; k--){
            rev = rev + bag[k];
        }
        if(bag===rev){
            arr.push(rev.length);
        }
    }
}
let max = -Infinity
for(let l=0; l<arr.length;l++){
    if(arr[l]>max){
        max = arr[l];
    }
    
}
console.log(max);
}
