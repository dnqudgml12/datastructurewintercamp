import React, {Component}  from 'react'; // react라는 라이브러리에서 Component라는 class를 로딩

class Createcontent extends Component{
    render(){
      return(        <article>
        <h2>Create</h2>
       <form action='/create_process' method='post' 
        onSubmit={function(e){
          e.preventDefault(); // page전환 없이 구현되는 app을 위해 page전환을 막는다.
          
          this.props.onSubmit(
            e.target.title.value, // create title의 입력값을 나타내는 용어 console에치면나옴
            e.target.desc.value                       // create description의 입력값을 나타내는 용어 console에치면나옴

          ); //onsubmit을 실행위해 propsfh
         
        }.bind(this)} //event, submit클릭시 submit에포함하는 form태그의 onSubmit이라는 이벤트 설치시 그 이벤트 실행 html의 form기능이 고유하게 가지고 있음 
       >  
       {/*어디로 전달할것인지 경로 적고 method로 post */}

        <p>
<input type='text'name='title'placeholder='Title'></input>

       </p>
       <p>
        <textarea name='desc' placeholder='description'></textarea>
       </p>
       <p>
        <input type='submit' value='submit'></input>
       </p>
        </form>
        </article>
        );
    }
  }

export default  Createcontent