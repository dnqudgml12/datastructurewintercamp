var args = process.argv;
console.log(args);
// args 배열이라는 형식인데 
/**
 * [
    노드 js런타임 'C:\\Program Files\\nodejs\\node.exe',
     우리가 실행시킨 파일의 경로'C:\\Users\\우병희\\OneDrive\\바탕 화면\\node.js\\syntax\\conditional.js',
    우리가입력한입력값 '우병희'
  ] 이게 드가 있음
  노드 js는 3번쨰(컴퓨터 적으로는 2번쨰자리)부터 입력값 주도록 약속 */ 
console.log('A');
console.log('B');

if (args[2]=='1'){
    console.log('C1')
}else{
    console.log('C2')
}

console.log('D');