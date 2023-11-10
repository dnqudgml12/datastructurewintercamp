var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title = queryData.id
   console.log(queryData.id);
    if(_url == '/'){
      title='Welcome';  
      // root로 들어가서 최상위 경로로 되묜 title이 welcome이 된다.
    } // home으로 갔을 때 이 부분이 실행행
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    fs.readFile(`data/${queryData.id}`,'utf8',
    function(err,description){
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
    response.end(template);
 

    }) //data 디렉토리 아래에 있는
    
});
app.listen(3000);

// 페이지 넘길때마다 바뀜