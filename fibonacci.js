var i;
var fibo = [];

fibo[0]= 0; 
fibo[1]= 1;

console.log(fibo[0]);
console.log(fibo[1]);

for(i= 2; i < 50; i++){
    fibo[i] = fibo[i-1] + fibo [i-2];
    console.log(fibo[i]);
}