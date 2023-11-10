var fs =require('fs') // fs 모듈을 부르고 fs를 변수이름으로 붙임

//readFileSync
// syntax바깥에서 명령실행 ,utf8해야 사람이 읽는 결과 나옴
/*
console.log('A');
var result=fs.readFileSync('syntax/sample.txt','utf8');
console.log(result); //실행되묜 result에 b가 들어감
console.log('c')
*/

//sync있으면 동기적 없으면 비동기적 없는 걸 선호한다. node.js가
// readfilesync는 리턴값을 주는데 readfile은 리턴값을 주는 것이 아니다. 대신에 함수를 세번째 인자로 준다.
console.log('A');
fs.readFile('syntax/sample.txt','utf8',function(err,result){
    console.log(result)
}); // 니가 가직호있는 readfile을 이용해서 'syntax/sample.txt'을 읽어와 근데 시간이
// 좀 걸리니까 작업이 끝난 뒤에 내가 너한테 전달한 세번째 함수를 실행시켜
// nodejs는 시간이 걸리니까 다 한다음 처리 내가마지막으로 function 호출할거를 여기 놓으면 된다.
//readfile은 자기 대로 동작하다가 안에 있는 함수에 의해 c가 나중에 호출되어 밑에 c보다 늦게 호출 
// 첫번째인자는 에러가 있더마녀 error 제공 두번째 파라미터는 파일의 내용을 인자로서 공급 약속
//실행되묜 result에 b가 들어감
console.log('c')