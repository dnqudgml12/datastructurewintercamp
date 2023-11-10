var M={
    v:'v',
    f:function(){
        console.log(this.v)
    }

}

module.exports = M;
// 약속 우리가 만든모듈인 Mparts.js에 있는 기능중에서 
//M이 가르킨 객체를 모듈 바깥에서 사용할 수 있도록 exports하겠다.
