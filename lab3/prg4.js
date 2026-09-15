import http from 'http'
import { reviews , item} from './data.js';   

const server = http.createServer((req,res)=>{
    const products ={
    id:1,
    Name: "Mobile",
    price: 250000,
    rating: 4.5,
    review: 123,

    };
    
if (req.url === '/api/products'){
    // res.end(JSON.stringify(products));
    res.end(JSON.stringify(item));
    
} else if(req.url === '/api/reviews'){
    res.end(JSON.stringify(reviews))
}


else{
    res.statusCode= 404;
    res.end();
}
});
server.listen(4444,()=>console.log('prg4 is running...'))