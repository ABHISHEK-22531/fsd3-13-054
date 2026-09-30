import http from 'http';

const server = http.createServer((req, res) => {

    // req method -> GET, POST, PUT, DELETE, PATCH
    console.log('Method:', req.method);
    console.log('URL:', req.url);

    // Browser can send only GET request to the server
    // POST/PUT/PATCH/DELETE -> can be checked by API tester
    // API Tester -> Postman, EchoAPI, Thunder Client

    if (req.url === '/' && req.method === 'GET') {
        res.end('Home Page');
    }
    else if (req.url === '/products' && req.method === 'GET') {
        res.end('Products Page');
    }
    else {
        res.statusCode = 404;
        res.end('Route not found');
    }

});

server.listen(3333, () => {
    console.log('Server is running on port 3333');
});