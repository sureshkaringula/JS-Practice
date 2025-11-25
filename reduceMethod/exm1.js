let arr = [12,99,15,73];

let max = arr.reduce((acc,cur) =>{
    return cur > acc ? cur:acc;
},arr[0]);
console.log(max);