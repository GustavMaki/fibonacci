var i= 2; var fibo = [];

fibo[0]= 0; 
fibo[1]= 1;

while(i < 50){

    fibo[i] = fibo[i-1] + fibo[i-2];
    console.log(fibo[i]);
    i++
}