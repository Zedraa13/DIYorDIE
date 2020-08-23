var http = require('http');

 var server = http.createServer(function(req,res){
   res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'})
 res.end('Я смог сделать это! Мои 9 строчек кода работают! Сервер живет! А я рад как ребенок. Наконец-то я что-то смог сделать в разработке и полностью понять это. От charset до writeHead!!!!!!!!!! ');
 });

 server.listen(3000, '127.0.0.1');
 console.log("мы отслеживаем порт 3000")
