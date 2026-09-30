import http from 'http'

const server= http.createServer((req,res)=>{
    //req method -> GET,POST,PUT,DELETE,PATCH
    console.log('Method:',req.method);
    console.log("URL:",req.url);
//browser can send only GET requesr to the server
// POST/PUT/PATCH/DELETE -> can be checked by api tester
//API Tester:- postman,echo api, thunder client


});