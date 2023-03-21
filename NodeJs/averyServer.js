const http =require('http');
const fs = require('fs')


const server = http.createServer((req, res) => {
    console.log('Request was made');
    console.log(req.url);
    res.setHeader('Content-Type', 'text/html');
    let path = './views';
    switch(req.url){
        case '/':
            path+='/firstPage.html';
            res.statusCode = 200;
            break;
        case '/contacts':
            path += '/contacts.html';
            res.statusCode = 200;
            break;

        default:
            path += '/404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
        }
        else{
            res.write(data);
            res.end();
        }
    })
});


server.listen(3000, 'localhost', () => {
    console.log('listening requests on port 3000 ');
});