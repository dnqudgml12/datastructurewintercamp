function f123(){
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
}
f123();

console.log(Math.round(1.6));
console.log(Math.round(1.4));

function sum(a,b){
   console.log('a')
 return (a+b); //return을 만나면 함수는 즉시 실행 종료 b는 안나오니까
 console.log('b')
}

console.log(sum(2,4));