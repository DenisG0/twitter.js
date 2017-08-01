const express = require('express');
const app = express();
var morgan = require('morgan')

app.use(morgan(':method :url :status'))

// app.use(function (req, res, next) {
//   // console.log('Request Type:', req.method);
//   // next();
//   console.log('\nRequest Type:', req.method, req.originalUrl, res.statusCode );
//   next();
//   console.log('Request Url:', req.originalUrl);
//   process.stdout.write("\nprompt > ");
//   next();

// })


// morgan(function(tokens, req, res){
//   return [
//     tokens.method(req, res),
//     tokens.url(req, res),
//     tokens.status(req, res),
//     tokens.res(req, res, 'content-length'), '-',
//     tokens['response-time'](req, res), 'ms'
//   ].join(' ')

// })

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(3000, function(){
    console.log("Server listening");
})

