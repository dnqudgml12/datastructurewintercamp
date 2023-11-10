import React, {Component}  from 'react';

class Control extends Component{
    render() // class안에 함수는function 생략
    {
 
     return(
      <ul>

      <li><a href='/create'  // onchanhemode handler가 실행되기 위하여
      onClick={function(e){ 
         e.preventDefault(); // reload막음
         this.props.onChangeMode('create') ;// mode가 create onchangemode실행하고 무엇이니 알려줌
        }.bind(this)}>create</a></li>
      <li><a href='/update' onClick={function(e){ 
         e.preventDefault(); // reload막음
         this.props.onChangeMode('update') //mode가 update onchangemode실행하고 무엇이니 알려줌
        }.bind(this)}>update</a></li> 
      <li><input type='button' value='delete' onClick={function(e){ 
         e.preventDefault(); // reload막음
         this.props.onChangeMode('delete') // mode가 delete onchangemode실행하고 무엇이니 알려줌
        }.bind(this)}></input></li>
     </ul>
     );
   }
 
 
 }
 // subject라는 COMPONENT만들겟다

 export default Control