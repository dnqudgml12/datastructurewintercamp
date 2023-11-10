/*
function a(){
    console.log('A');
}
var a= function (){
    console.log('A')
} //익명 함수
a();
*/
var a= function (){
    console.log('A')
} //익명 함수


function slowfunc(callback){
    callback();
}
// 오랜시간 걸린다.
slowfunc(a);