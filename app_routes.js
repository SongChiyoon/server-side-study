var express = require('express');
var app = express();

var p1 = require('./routes/p1.js')(app); //require를 통해 갖고온 이것이 함수라는 의미
app.use('/p1', p1);  //p1에게 오는 접속을 router에게 위임한다.

var p2 = require('./routes/p2.js')(app); 

app.use('/p2', p2);

app.listen(3003, function(){
  console.log('connected');
});
