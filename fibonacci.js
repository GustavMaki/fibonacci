const readline = require('readline');
var i= 2; var seq = [];

seq[0]= 0; 
seq[1]= 1;


const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

input.question('Please enter amount: ', (answer) => {

    while(i < answer){
        seq[i] = seq[i-1] + seq[i-2];
        console.log((i+1)+ ". " + seq[i-2]);
        i++
    }

    input.close();
});
