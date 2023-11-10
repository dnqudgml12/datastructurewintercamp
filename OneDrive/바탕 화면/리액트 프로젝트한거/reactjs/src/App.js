/* eslint-disable */
import React, {Component}  from 'react';
import TOC from "./components/TOC"; // TOC를 components directory에 TOC라는 파일에서 가져온다
import ReadContent from "./components/ReadContent"; 
import Subject from './components/Subject';
import UpdateContent from './components/UpdateContent';
import Control from './components/control';
import './App.css';
import Createcontent from './components/Createcontent';
//App이라고 하는 App.js안에 들어있는 react의컴포넌트가 로드됬을 때 App.css도 같이 로드
// 디자인도 같이 한다.



// constructor(props)전에는 subject,toc,content js에서 props를 통해 값 실행

class App extends Component {
  constructor(props){
  super(props);
  // contents끝에다가 추가해야하므로 기존에 있던 id를 쭉읽어서1더 큰 id값을 만들어야 한다
  // 적어둔다
  this.max_content_id=3; // 마지막 id랑 같아야 한다 ui에 영향준는 것ㅇ 나미
  this.state={
    mode:'create', // welcome page인지 읽기 page인지 구분위에 mode
    //기본을 create로 하면 추가 수월
    select_content_id:1,// 2번을 선택, 시작하는 숫자만 다르지 다 잘 작동
  

    subject:{title:'WEB',sub:'world wid web!'},
    welcome:{title:'welcome',desc:'Hello, React!!'},
    // react는 props나 state가 바뀌면 해당되어 있는 render함수가 다시 호출 즉, 화면이 다시 그려짐
    contents:[
      {id:1,title:'HTML',desc:'HTML is HyperText ....'},
    
      {id:2,title:'CSS',desc:'CSS is for design ....'},
      
      {id:3,title:'JavaScript',desc:'JavaScript is for interactive ....'},
    ]
    // subjetc의 값을 state화 시킬 건데state에 subject의 property값으로 
    //web, world wid web 이 값을 준 state
    // 부모인 app입장에서는 state사용하고 자식한테는 props로 전달 app은 toc가 어떻게 돌아가는지
    // 알필요 업음 그냥 data라고 하는 props로는 어떤 형태의 정보를 전달하면 되는지 사용자의 입장에서 알거만 알면 된다.
  }
      }// state값 초기화하고  subject의 title과 sub애 있는 값으로 설정
  // component가 실행 될때 constructor라는 함수가 제일 먼저 실행되서 초기화 담당
  
  getreadContent(){
    var i =0;
    while(i< this.state.contents.length){
      var data = this.state.contents[i]; // 현재 순번에 해당되는 contents를 data
      if(data.id=== this.state.select_content_id) // data id랑 content_id랑 같다면 title과 본문이될자격있다.
      { return data;
        break; // 일치되면 반복문 끝
      }
      i+=1
  }
}
  getContent(){
    var _title,_desc, _article=null; //기본적으로 없는 값
    if (this.state.mode=='welcome'){
      _title=this.state.welcome.title;
      // content title에 값할당
      _desc=this.state.welcome.desc
      _article= <ReadContent title={_title} desc={_desc}></ReadContent>

    }else if (this.state.mode ==='read'){
    var  _content= this.getreadContent()
      _article= <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
      

    }
    else if (this.state.mode ==='create'){
      _article=<Createcontent onSubmit={function(_title,_desc){
        this.max_content_id+=1
        ///this.state.contents.push(
         // {id:this.max_content_id, title:_title, desc:_desc})
           //state값을 직접 수정하면 react가 모른다.
           // setstate해야함
           // this.setState({contents:this.state.contents})
           // push는 원본을 수정하고 concat은 원본을 두고 다시 수정한다.
           //성능개선시에 복잡하다

          var _contents =  this.state.contents.concat(
        {id:this.max_content_id, title:_title, desc:_desc})
        this.setState({contents:_contents,
        mode:'read',
      select_content_id:this.max_content_id})
       // 원본 안바꾸는 다른방법
      /* var newArray= Array.from(this.state.contents)
       newArray.push({id:this.max_content_id, title:_title, desc:_desc})
       this.setState({contents:_contents })*/

 

      }.bind(this)}></Createcontent>
      // onsubmit이라는 event실행시 입력값으로 title,desc가 전달 될 수 있다면
      //setState를 통해 새로운 content값을 this.state.content에 추가
    } 

    else if (this.state.mode ==='update'){
      var _content = this.getreadContent();
      // var data = this.state.contents;
      _article=<UpdateContent data={_content} onSubmit={function(_id,_title,_desc){
       //id, title, description이 잘들어온다
       var _contents= Array.from( this.state.contents)
       var i=0;
       while(i<_contents.length){
       
        if(_contents[i].id===_id) // 우리가ㅏ 입력 받은 id값과 _contents의 id값이같다면
                {
                  _contents[i]={id:_id,title:_title,desc:_desc}
                  // true이면 새로운 걸로 교체한다.
                  break
                }
        i+=1
       }
    
        this.setState({contents:_contents,
        mode:'read'}) //본ㅁㅜㄴ에 updateㅎㅏㄴ게 나와야 하니


      }.bind(this)}></UpdateContent>
  } 
  return _article;
}
  
  
  render() // component를 상속해서 appclass를 만들고 render라는 메소드 실행
   { return (
    <div className="App"> 
      <Subject 
      title={this.state.subject.title}  // 상위에state값을 하위에 props로 전달 얼마든지 가능
      sub={this.state.subject.sub} 
      
      
      //이벤트를 설치하고 싶다면 onChangePage라는 event를 써라 함수를 설치하면
      // a 태그의 클릭 시 설치한 함수를 실행하겠다.
      onChangePage= {function(){
        this.setState({mode:'welcome'});
      }.bind(this)} >
      </Subject>
      
    {/*<header>
       <h1><a href='/' onClick={function(e){
        console.log(e); //event호출
        e.preventDefault(); //reload를 막는다 ,tag의 기본적인 동작방법을 못하게 막는 것 page 전환안함
        // event안에서는 this가 아무도 가르키지 않는다 자신도 아니다 undefined
        //그럴때는 bind(this)
        
        //this.state.mode='welcome'//한줄의 코드가 두가지 문제
        //react입장에서는 몰래 바꾼 것
        // 그냥 위에 것만 적으면 안바뀜


        this.setState({
          mode:'welcome'
        }); //state 바뀌면setState로 바껴야 한다


        // bind를 통해서 함수안에 this를 bind 괄호안에 값으로 설정
        // 그래서 component 자체를 가르키는 this를 결합시켜서 this로 설정
       }.bind(this)}>{this.state.subject.title}</a></h1>
       {this.state.subject.sub} 
      </header>*/}
     

      <TOC  onChangePage={function(id)
      //onchangepage가 발생했을때 
      {
        this.setState({mode:'read',
      select_content_id:Number(id)});
      // id가 1,2,3으로 잘 넘어감
      //숫자여서 인식이 잘 안됨
      }.bind(this)}
      data={this.state.contents}
      // data라는 props로 this.state.content를 주입
      ></TOC>
      {/* App이라는 상위 컴포넌트가  내부적으로 사용하는 toc라는 하위컴포넌트의 값을 전달시 Data라는 props의 값을 전달*/}
      {/*하위 캄포넌트가 상위 컴포넌트로 data전달시 props못쓰고 event활용 event라는 값에서 수정하여서 event실행 시에 state 값을 호출하여 상위컴포넌트 state바꿈*/}

        {/*이벤트 실행시 실행되어야 하는 함수 이벤트 헨들러 {function(){}.bind(this)} */}
       <Control onChangeMode={function(_mode){  // mode로 인자 mode라는 변수로 현재 상태 전달
          if(_mode==='delete'){
            if(window.confirm('진짜 삭제?')==true){
              var _contents = Array.from(this.state.contents)
              var i=0;
              while(i<_contents.length){
                if( _contents[i].id== this.state.select_content_id)
                {_contents.splice(i,1); //우리가 발견한 id부터 한개를지우겠다
                    break
              }
                i+=1
              }
              this.setState({
                
                mode:'welcome',
                contents:_contents})
                alert('delete')
                
            }

          }else{
          this.setState({mode:_mode})  //함수가 호출 될 때마다 mode를 바꾸면 됨
         }
         }.bind(this)}></Control>

        


      {/* 가변적 변화를 위해 _article <ReadContent title={_title} desc={_desc}></ReadContent>*/}
     
      {/*content를 Readcontent로 바꾸고 create를 누르면 create content로 바뀌게한다 */}
      
       {this.getContent()}
    </div>
    // react는 html이아니다 그레서 onclick이 아니라 onClick
  ); //title 값과 sub값이 subject라는 component의 입력값이 되서 그에 따라 달라지는 출력값을 화면에 표사
  // 여기서는 div태그가 최상위
}
}
// 자바스크립트는 아님 태그나오는 부분 ''를 사용해야 하므로

export default App;
