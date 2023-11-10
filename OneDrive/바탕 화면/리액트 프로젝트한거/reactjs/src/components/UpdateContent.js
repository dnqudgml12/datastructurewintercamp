import React, {Component}  from 'react'; // react라는 라이브러리에서 Component라는 class를 로딩

class UpdateContent extends Component{
  constructor(props){ //props state화
    super(props);
    this.state={
      id: this.props.data.id,
      title:this.props.data.title,
      desc:this.props.data.desc
      // props의 값을 state로
      // state의값을 각각form과 동기호=화
    }
    this.inputFormHandler=this.inputFormHandler.bind(this);

  }


  inputFormHandler(e){
    this.setState({[e.target.name]:e.target.value});

    // target의 name값이 들어오게 된다.
  }
  
    render(){
      return(        
      <article>
        <h2>update</h2>
      <form action='/create_process' method='post' 
        onSubmit={function(e){ // onSubmit event실핼할때 이 컴포넌트로들어온 onsubmit props실행
          e.preventDefault(); // page전환 없이 구현되는 app을 위해 page전환을 막는다.
          this.props.onSubmit(
            this.state.id,
            this.state.title,
            this.state.desc // 동기화 되므로 this.state로

            //e.target.title.value, // create title의 입력값을 나타내는 용어 console에치면나옴
           // e.target.desc.value                       // create description의 입력값을 나타내는 용어 console에치면나옴
             ); //onsubmit을 실행위해 propsfh
         }.bind(this)} //event, submit클릭시 submit에포함하는 form태그의 onSubmit이라는 이벤트 설치시 그 이벤트 실행 html의 form기능이 고유하게 가지고 있음 
       > 
       <input type='hidden' name='id' value={this.state.id}></input>

        <p><input 
        type='text'
        name='title'
        placeholder='title'
        value={this.state.title}
        // props는 read only니까 수정안됨 state라 해도 수정할 근거 없다
        // input과의  연결 끊김
        onChange={this.inputFormHandler}
        ></input>
       </p>
       <p>
        <textarea 
        onChange={this.inputFormHandler}
        name='desc' 
        placeholder='description'
        
        value={this.state.desc}></textarea>
       </p>
       <p>
        <input type='submit'></input>
       </p>
      </form>
      </article>
    



      );
}
}

export default UpdateContent;