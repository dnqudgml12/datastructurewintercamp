import React, {Component}  from 'react';

class Subject extends Component{
    render() // class안에 함수는function 생략
    {
 
     return(
       <header>
       <h1><a href='/' onClick={function(e){  //click해을때 이벤트 발새ㅇ하여 this,props.onchangepage라는 함수를 ㅎㅗ출
        e.preventDefault();
        this.props.onChangePage(); // App.js에 있는 subject에 있는 함수를 여기서 호추ㄹ 함수일거다
       }.bind(this)}>{this.props.title}</a></h1>
       {this.props.sub}
       </header> //component만들때 하나의최상위 태그만 써야함 여기서는 <header>
     );
   }
 
 
 }
 // subject라는 COMPONENT만들겟다

 export default Subject