const http = require('http');

const dbConnection = false;

if(!dbConnection){
    process.exit(0);
}

const server = http.createServer((req,res) => {
    switch(req.url){ 
        case '/':
            res.end(`
        <html>
            <head>
                <title>First node app</title>
            </head>
            <body>
                <h1>Welcome to my node app</h1>
            </body>
        </html>`
        );
        break;
        case 'asd':
            break
        case 'admin':
            res.end(`<html><head>admin page</head><body><h1>admin page</h1></body></html>`);
            break;
        case 'user':
            res.end('welcome to the user page');
            break;
        default:
            res.end('Not Found');
    }
    
    
});


const port = 5050;

 server.listen(port,() => { 
    console.log(`Server is now listening on port ${port}`),
    console.log('asdasd') 
 });





