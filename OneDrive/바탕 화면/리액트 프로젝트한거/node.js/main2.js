var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    // 주어진 url을 분석해서 재공
    var pathname = url.parse(_url, true).pathname


    if(pathname==='/')
   // home에 가도pathname은 / 특별한게 지정 안했으므로 다른 거에 드가도 pathname /
   // /로 구분 힘들다
    { if (queryData.id===undefined) 
        // 없는 값을 지정 undefined 그렇기에 id랑 undefined이 같다면 home
        {
 //특정 디렉토리에서 파일을 읽어서 description이라는  변수 값을 생성해주는
         fs.readFile(`data/${queryData.id}`,'utf8',
        function(err,description){
            var title = 'Welcome';
            var description= ' hello,Node.js';
         var template=`
        <!doctype html>
        <html>
         <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      <ul>
        <li><a href="/?id=HTML">HTML</a></li>
        <li><a href="/?id=CSS">CSS</a></li>
        <li><a href="/?id=JavaScript">JavaScript</a></li>
      </ul>
      <h2>${title}</h2>
      <p>${description}</p>
    </body>
    </html>  `;
        response.writeHead(200);
        response.end(template);
    })

    } else{
        fs.readFile(`data/${queryData.id}`,'utf8',
        function(err,description){
            var title = queryData.id
         var template=`
        <!doctype html>
        <html>
         <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      <ul>
        <li><a href="/?id=HTML">HTML</a></li>
        <li><a href="/?id=CSS">CSS</a></li>
        <li><a href="/?id=JavaScript">JavaScript</a></li>
      </ul>
      <h2>${title}</h2>
      <p>${description}</p>
    </body>
    </html>  `;
        response.writeHead(200);
        response.end(template);
        });
     }
        //data 디렉토리 아래에 있는
    } else{
        response.writeHead(404); 
        // writehead에서 200은 웹브라우저가 웹서버에 접속시 웹서버가 응답, 
        // 이때 웹브라우저가 웹서버에 200을 주는 경우는
        // 파일을 성공적으로 전달
        // 안되면 404라는 번호
        response.end('Not found');
    }
   
  

   
 

  
    
});
app.listen(3000);

