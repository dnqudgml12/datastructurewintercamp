// array, object

var f = function(){
    console.log(1+1);
    console.log(1+2);
    
}

console.log(f)
f()

/*
var i = if(true){
    console.log(1);
}  오류가 난다 조건문은자바스크립트에서 값이 아니다

var w = while(true){console.log}
오류가 난다 반복문은 값이 아님
*/ 
var a= [f];
a[0]()

var o ={
    func:f  // 함수
}
o.func();


var p={
    v1:'v1',
    v2:'v2',
    f1:
    function (){
        console.log(this.v1)
    },
    f2:
    function (){
        console.log(this.v2)
    }
    
}

p.f1();
p.f2();

