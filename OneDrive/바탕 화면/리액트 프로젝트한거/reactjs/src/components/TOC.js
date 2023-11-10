import React, {Component}  from 'react'; // react라는 라이브러리에서 Component라는 class를 로딩




class TOC extends Component{
    // toc밑에 밑줄 만들어 놓고 안쓰네요
    // toc의 render가 content가 바뀌면 호출 아니면 안되야 하는데 바뀌지 않아도 호출됨
    // 불합리함 그래서 나온 것이 shouldComponentUpdate
    shouldComponentUpdate(newProps, newState){ //1.render이전에 실행된다
       //2.shouldecompoen가 true면 render호출 false면render호출 안함
       //3. 이전 값과 새로운 값을호출 가능
       // toc라하는 data라는 props값이 바뀌면 render호출, 안되면 호출 안하는게 좋더
      console.log(newProps.data, this.props.data) 
      // 새로운 Props, 기존 data
      // 확인 해보면 새로운 데이터는creat로 작동시 새로운거 추가 기조은 아님님
      // render함수와 여기 함수에 모두 넣어서 확인 가능console.log(==>lender)
      if (this.props.data===newProps.data){
      return false;} // true하면 이전과 같이 render가 불합리하게호출, false시에는 render호출 안됨
       return true;
    }

    render(){
      var lists=[]
      var data=this.props.data  // toc는 this.props.data를 가지고 있다.
      var i=0;
      while (i<data.length  // props의 값만큼 가지고있음
      ){
        lists.push( 
        <li  key={data[i].id}>
          <a 
          href={"/content/"+data[i].id //this.state.contents의 id값이 됨
        }
          data-id={data[i].id}
          onClick={function(e){  //clickㅎㅐㅆ을떄 function발생
            // e.target   event가 소지한 a값 주소값 a태그가 가지고 이ㅆ느ㄴ data-id값에 접속

            e.preventDefault();
            this.props.onChangePage(e.target.dataset.id); // e.target.dataset.id는 id의 를 클릭하여ㅆ을때 dataset이 id
            // 인자로 넣어줌 
            //id값으로 2가 잘 나오는거 확인 위에서 content id를 2로 설정하여서
          }.bind(this)}
          >{data[i].title}</a>
          </li>)
        // 각각 리스트의 항목은 key란느 props가져야 되는데 그게 없으므로 만들어주면됨
        i+=1;
      }
      return(
        <nav>
        <ul>           
         {lists}
 
        </ul>
    </nav>
      );
    }
  }

  export default TOC; // TOC.js를 가져다 쓰는 쪽에서 TOC라는 class를 가져다 쓸수 있음