import React, {Component}  from 'react'; // react라는 라이브러리에서 Component라는 class를 로딩

class ReadContent extends Component{
    render(){
      return(        <article>
        <h2>{this.props.title}</h2>
       {this.props.desc}
       {/*상위가 하위로 data 전달시 props사용*/}
  
    </article>)
    }
  }

export default  ReadContent