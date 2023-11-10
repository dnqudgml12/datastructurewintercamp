


import './App.css';
import { useState } from 'react';

function Article(props){

  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}

    </article>)


 

}

function Header(props){
  return (
    <header>
    <h1><a href='/' onClick={(e)=>{
      e.preventDefault();
      props.onChangeMode();
    }}>{props.title}</a></h1>
    </header>)
  
}

function Nav(props){
  const lis=[]
  for (let i=0;i<props.topics.length;i++){
    let t=props.topics[i]
    lis.push(<li key={t.id}><a id={t.id} href={'/read/'+t.id} onClick={(e)=>{
      e.preventDefault();
      props.onChangeMode(Number(e.target.id));
    }}>{t.title}</a></li>)
  }

  return (
    <nav>
      <ol>
        {lis}
      </ol>
      </nav>
      )


}

function Create(props){
  return <article>
    <form onSubmit={(e)=>{
      e.preventDefault();
      const crtitle= e.target.crtitle.value;
      const crbody= e.target.crbody.value;
      props.onCreate(crtitle,crbody);


    }}>
      <p>
      <input type='text' name='crtitle' placeholder='title'></input>
      </p>
      <p>
      <textarea name='crbody' placeholder='body'></textarea>
      </p>
      <p>
      <input type='submit' value='create'></input>
      </p>


    </form>
    </article>
}

function Update(props){
  const[upptitle,settuptitle]=useState(props.uptitle)
  const[uppbody,settupbody]=useState(props.upbody)
  return <article>
    <form onSubmit={(e)=>{
      e.preventDefault();
      const uptitle= e.target.uptitle.value;
      const upbody= e.target.upbody.value;
      props.onUpdate(uptitle,upbody);


    }}>
      <p>
      <input type='text' name='uptitle' placeholder='title' value={upptitle} onChange={(e)=>{
        settuptitle(e.target.value)
      }}></input>
      </p>
      <p>
      <textarea name='upbody' placeholder='body' value={uppbody} onChange={(e)=>{
        settupbody(e.target.value)
      }}
      ></textarea>
      </p>
      <p>
      <input type='submit' value='update'></input>
      </p>


    </form>
    </article>
}

function App() {
  const [topics,settopics]=useState([{id:1,title:'html',body:'html is Hypertextmarkup language'},
                {id:2,title:'css',body:'css is cssss'},
                 {id:3,title:'javascript',body:'javascript'}])

  let content=null; 
  let contextcontrol=null;
  const [mode,setMode]=useState('WELCOME')
  const [id,setID]= useState(null);
  const [nextID,setnextid]=useState(4);
  if (mode ==='WELCOME'){
    content=<Article title='Welcome' body='hi'></Article>}
  else if (mode==='READ'){
    let title,body=null;
    for (let i=0;i<topics.length;i++){
      if(topics[i].id===id){
        title=topics[i].title;
        body=topics[i].body
      }
    }

    content=<Article title={title} body={body} ></Article>
    contextcontrol=<>
    <li><a href={'/update'+id} onClick={(e)=>{
      e.preventDefault();
      setMode('UPDATE')
    }}>UPDATE

    </a>
    </li>
    <li>
     <input type='button' value='delete' onClick={()=>{
      const delTopics=[]
      for(let i=0;i<topics.length;i++){
        if(topics[i].id!==id){
          delTopics.push(topics[i])
        }
      }
      settopics(delTopics)
      setMode('WELCOME')
     }}></input>
    </li>

    
    </>

  }

  else if (mode==='CREATE'){
    content=<Create onCreate={(_title,_body)=>{
      const newtopic={id:nextID,title:_title,body:_body}
      const ttopics=[...topics]
      ttopics.push(newtopic)
      settopics(ttopics)
      setMode('READ')
      setID(nextID)
      setnextid(nextID+1)
      

    }}></Create>


  }


  else if (mode==='UPDATE'){
    let title1,body1=null;
    for (let i=0;i<topics.length;i++){
      if(topics[i].id===id){
        title1=topics[i].title
        body1=topics[i].body
      }
    }
    // update component의 props.up title이면 uptitle.
    // props 이름에 따라 달라짐
    content=<Update uptitle={title1} upbody={body1} onUpdate={(_title,_body)=>{
      const uptopics={id:id,title:_title,body:_body}
      const newuptopics=[...topics]
      for (let i=0;i<topics.length;i++){
        if(newuptopics[i].id===id){
           newuptopics[i]=uptopics

        }
      }
      settopics(newuptopics)
      setMode('READ')

    }}></Update>


  }
  return (
    <div>
      <Header title='WEB' onChangeMode={()=>{
        // 각 컴포넌트에서 onclick한뒤에 이 함수가 실행되면 mode를 바꿔주고 mode에 따른 대처 나옴
        // Nav에서는 id에 따라 read일때 화면에 출력되는 title,body가 다름
        setMode('WELCOME')

      }}></Header>
      
      <Nav topics={topics} onChangeMode={(_id)=>{
        setMode('READ')
        setID(_id)


      }} ></Nav>
      {content}

      <li><a href='/create' onClick={(e)=>{

        e.preventDefault();
        setMode('CREATE')

      }}>Create</a></li>

      {contextcontrol}


      
    </div>
  );
}

export default App;
