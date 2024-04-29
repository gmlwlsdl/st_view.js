// var http = require('http');
// var port = 8080;
// console.log(`Start at ${port}`);
// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hello World!');
// }).listen(port);


// fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error));


// async function f(){
//     const r = await fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             title: "Test",
//             body: "I am testing!",
//             userId: 1,
//         }),
//     });
    
//     data = await r.json();
//     console.log(data);        
// }

// f();

// 151.101.16.162 registry.npmjs.org
// npm 8.5.1
// node 12.22.9
// https://stackoverflow.com/questions/48158939/getaddrinfo-eai-again-registry-npmjs-org80

// const {odd, even} = require('./var');
// console.log(odd);
// console.log(even);

// const a = require('./func');
// a();

const http = require('http')
const fs = require('fs').promises;

http.createServer(async (req, res) =>{
    console.log(req.method);
    console.log(req.url)

    if(req.url === '/') {
        const data = await fs.readFile('./index.html');
        res.writeHead(200, {'Content-Type': 'test.html; charset:utf-8'});
        res.end(data);
    }
    else if (req.url === '/about') {
        const data = await fs.readFile('./about.html');
        res.writeHead(200, {'Content-Type': 'test.html; charset:utf-8'});
        res.end(data);
    }
    else {
        const data = await fs.readFile('./err.html');
        res.writeHead(404, {'Content-Type': 'test.html; charset:utf-8'});
        res.end();
    }
}).listen(8080,  () =>{
    console.log('8080 포트 시작');
})