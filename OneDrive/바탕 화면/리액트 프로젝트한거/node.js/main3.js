var http = require('http');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
//  <h2>${title}</h2>
// <p>${description}</p> body
//<a href='/'update>update</a>  id값 있을 때는 나오지 않는게 좋다
var template=require('./lib/template.js')

var path =require('path');
var sanitizeHtml = require('sanitize-html');




// app안에 http.server라 하는 객체가 담겨져있다
var app = http.createServer(function(request,response){
    //nodejs로 웹브라우저 접속이 들어올 때마다 createserver에 callback함수를 nodejs가 호출
    // 이때 저 함수에 인자를 두개 준다 request는 요청 할때 웹브라우저가보낸 정보들
    // response는 응답할때 우리가 웹브라우저에 보낼 정보를 담은 것
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    // 주어진 url을 분석해서 재공
    var pathname = url.parse(_url, true).pathname;


    if(pathname==='/') //pathname이 /면 밑에 실행
   // home에 가도pathname은 / 특별한게 지정 안했으므로 다른 거에 드가도 pathname /
   // /로 구분 힘들다
    { if (queryData.id===undefined) 
        // 없는 값을 지정 undefined 그렇기에 id랑 undefined이 같다면 home
        { 
            fs.readdir('./data',function(error,filelist){
                
                var title = 'Welcome';
            var description= 'hello,Node.js';


       var list = template.list(filelist)

         var html=template.HTML(title,list,`  <h2>${title}</h2>
         <p>${description}</p>`,
         `<a href ="/create">create</a>`);  // 이부분이 home인데 home에서는 update가 있으면 안되므로
        response.writeHead(200);
        response.end( html);
            })//data디렉토리에서 파일 목록가져아서 끝나면
            // nodejs는 중괄호안에 생성하고 끝


           /* var list = templatelist(filelist)

            var template=templateHTML(title,list,`  <h2>${title}</h2>
            <p>${description}</p>`,
            `<a href ="/create">create</a>`);  // 이부분이 home인데 home에서는 update가 있으면 안되므로
           response.writeHead(200);
           response.end(template);
               })*/
    } else{ 
        fs.readdir('./data',function(error,filelist){
            var filteredId= path.parse(queryData.id).base;
            //오염된 정보 처낸다
            //${queryData.id}형태로 들어온다. 외부에서 들어오는 정보
        fs.readFile(`data/${filteredId}`,'utf8',
        function(error,description){
            var title = queryData.id
            var sanitizedTitle= sanitizeHtml(title);
            var sanitizeddescription= sanitizeHtml(description,{
                allowedTags:['h1'] // h1태그허락하겠다 원래는 안됨 근데 내 컴터는 되누
            }); 
            var list= template.list(filelist)
         var html=template.HTML(sanitizedTitle,list,`<h2>${sanitizedTitle}</h2>
         <p>${sanitizeddescription}</p>`,
         `<a href ="/create">create</a> 
         <a href='/update?id=${sanitizedTitle}'>update</a> 
         <form action='delete_process' method='post' onsubmit="">
         <input type='hidden' name='id' value='${sanitizedTitle}'>
         <input type='submit' value='delete'>
         </form>`
         // onsubmit으로 삭제 누르면 바로 삭제 안되도록 자바로 잡아둠
         ); // delete는 페이지 이동이 아닌 원래 페이지에서 삭제 하는 것 
         // 즉 링크를 설정하는 것은 잘못된 것, 링크로 이동하면 누군가에게 옮겨질 수 있으므로

        response.writeHead(200);
        response.end(html);
        });
    });
     }
        //data 디렉토리 아래에 있는
    } else if(pathname==='/create'){ // create 누르면 home으로 온다
       
        fs.readdir('./data',function(error,filelist){
                
            var title = 'WEB - create';
             var list = template.list(filelist)

             var html=template.HTML(title,list,`  
             <form action="/create_process" method="post">
            
         
         <p><input type="text" name="title" placeholder='title'></p>
         <p>
            
             <textarea name="description" placeholder='description'></textarea>
         </p>
         <p>
             <input type="submit" > 
            
         </p>
         </form>

             
             `,''); 
             response.writeHead(200);
             response.end(html)

                 })

    } else if(pathname==='/create_process'){
        var body='';
        request.on('data',function(data){
            body+=data;

        }); // 웹브라우저가 post방식으로 데이터 전송시 데이터가 엄청 많으면
        // 데이터를 한번에 하면 컴퓨터 문제 발생 그래서 nodejs는 post로 전송하는게 많을 때 제공
        /// data는 callback, 조각 조각을 서버쪽에서 수신 할때마다 이 callback함수 요청 data인자를 통해 수신할 정보를 주기로 확인
        request.on('end',function(){
            var post= qs.parse(body);
           
            var title= post.title
            var description= post.description
            fs.writeFile(`data/${title}`,description,'utf8',function(err){
                response.writeHead(302, {Location:`/?id=${title}`}); // 302는 다른데로 redirection // 사용자를 다른페이지로 팅기는 것
                 response.end()
                 // response응답해라 302로 Location은  302가 location으로 영원히 바꼈다
                 //근데 우리는 그냥  일시적으로 지금 바꼈을뿐
 
            })// err은 error있으면 처리 방법 제공
            // callback실행은 파일 저장 끝났다 저장후에success해야되니 함수 아으로
            //post.title하면 title, post.description하면 description됨
            // data를 totle,description으로 나눔

        }) // 그러다가 들어오는 정보가 없으면 end함수 호출 약속, end callback수신시 정보끝남
        // post는 qsㅁ듈 중에 parse라는 함수에다가 우리가 이때까지 저장한 body를 입력값으로 주면 post에 postdata가 들어가있다.
        // create를 누른 뒤 title, description에 입력하면 file명이  data folder에 title로 생기고 
         //웹에 리스트에 추가되어 바로 웹에서 파일의 title,description을  출력



    }else if(pathname=='/update'){
                     // update에서는 hidden에 있는 값이 title input이랑 다르면 
             // 그 전과 달리 추가하지 않는다. 수정되지 않은 수정할 파일의 이름 받는다.

        fs.readdir('./data',function(error,filelist){
            var filteredId= path.parse(queryData.id).base;
            fs.readFile(`data/${filteredId}`,'utf8',
            function(error,description){
                var title = queryData.id
                var list= template.list(filelist)
             var html=template.HTML(title,list,`
             <form action="/update_process" method="post">
             <input type='hidden' name="id" value="${title}">

            
         
         <p><input type="text" name="title" placeholder='title' value="${title}"></p>
         
         <p>
            
             <textarea name="description" placeholder='description' >${description}</textarea>
         </p>
         <p>
             <input type="submit" > 
            
         </p>
         </form>
             
             `,
             `<a href ="/create">create</a> <a href='/update?id=${title}'>update</a> `
             );
            response.writeHead(200);
            response.end( html);
            });

    })
    // post 방식으로 들어온 data를 받는다.
} else if(pathname==='/update_process'){
    var body='';
    request.on('data',function(data){
        body+=data;

    });      
    
    request.on('end',function(){
        var post= qs.parse(body);
        
        var id= post.id;
        var title= post.title;
        var description= post.description;
        fs.rename(`data/${id}`,`data/${title}`,function(error){
            
            fs.writeFile(`data/${title}`,description,'utf8',function(err){
                response.writeHead(302, {Location:`/?id=${title}`}); 
                 response.end()
                 // file이름 수정후에는 수정된 file에 우리가 받은 description정보 주고 id값으로 들어간다.

        })
        
        // 예전파일이름,새로운파일이름, callbackfunction
        // 기존에 있던 id에 이름을 title에 이름으로 바꾼다.

        /*
       })*/
       
    })
    
})
 
} else if(pathname==='/delete_process'){
    var body='';
    request.on('data',function(data){
        body+=data;

    }); 
    request.on('end',function(){
        var post= qs.parse(body);
        
        var id= post.id;
        var filteredId= path.parse(id).base; // 들어오는 id값을 받고
        // 원래는 `data/${id}`
        fs.unlink(`data/${filteredId}`,function(error){
            response.writeHead(302, {Location:`/`})
            response.end()
            // 삭제가 끝나면 홈으로 보내버린다 302 redirection conde number
            // id값이 없는 쪽으로 보낸다.
            // file delete fs.unlink
            // delete버튼 누르면 눌러졌을 떄 형식의 파일이 없어진다.

        })
        
}) }
else { // if, else if 조건 만족 못하면 즉 이도 저도 아닌 것 404한다. 
        response.writeHead(404); 
        // writehead에서 200은 웹브라우저가 웹서버에 접속시 웹서버가 응답, 
        // 이때 웹브라우저가 웹서버에 200을 주는 경우는
        // 파일을 성공적으로 전달
        // 안되면 404라는 번호
        response.end('Not found');
    }
    
});
app.listen(2000); //server.listen([port][,host])
// 요청에 대해서 응답할 수 있도록 http.server를 구동시키는 것.
// node에서 file없어지면 아는 법