var testFolder = './data'; // ./현재 디렉토리에 있는 data
// 현재 파일에 있는 것이 아닌 내가 실행하는 위치에 있는 파일명을 기준 data
var fs = require('fs');

fs.readdir(testFolder, function(error,filelist){
    console.log(filelist);
});