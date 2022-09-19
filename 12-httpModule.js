const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('Welcome to our home page');
    }
//     console.log(req);
//  res.write('Welcome to our home page');
//  res.end();
    if(req.url === "/about"){
        res.end('Here is our short history');
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for, Baby!</p>
    <a href="/">Back to home</a>
    `);
});
server.listen(5000);