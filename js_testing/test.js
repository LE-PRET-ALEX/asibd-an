/*let nome = "Alexandre";
console.log(typeof(nome));

let num = 10;
console.log(typeof(num));

let status = false;
console.log(typeof(status));*/

let a = prompt("Insira um numero:");
let b = prompt("Insira outro numero:");
let c = prompt("Insira mais um numero:");

if(a>b){
    if(b>c){
        console.log(`O numero ${a} e o maior`);
    }
    else if(c>a){
        console.log(`O numero ${c} e o maior`);
        }
        else {
            console.log(`O numero ${a} e o maior`);
        }
}
else {

}