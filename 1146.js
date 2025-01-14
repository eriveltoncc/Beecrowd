let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

let x, y;
let str = ""
let arr1 = [];

for(i=0;i<lines.length;i++){
    x = parseInt(lines[i]);
    if (x === 0){
        console.log(str.trim());
        break;
    }
    else{
        for(j=1;j<=x;j++){
            if(j===x){
                str += j+"\n";
            }else{
                str += j +" ";
            }
        }
    }
}