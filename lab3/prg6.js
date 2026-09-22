import http from "http";
import { getAllProducts, addProduct,deleteProduct} from "./products.js";
const server = http.createServer((req, res) => {
  if (req.url === "/api/v1/products" && req.method === "GET") {
    res.statusCode = 200;

    const data=getAllProducts();
    res.setHeader('content-type','application/json')
    res.end(JSON.stringify({
    count:data.length,
    data,

      }),
    );
    res.end("GET Request");
  }
  else if (req.url === "/api/v1/products" && req.method === "POST") {
    // console.log("Request",req);
    let body='';
    req.on('data',(chunk)=>{
      body+=chunk;
    });
    req.on("end",()=>{
      const product=JSON.parse(body);
      console.log("recieved Producut:",product);
    res.statusCode = 200;
    res.end(JSON.stringify({msg:'product added ',data:product}));
    });

  }

  else if (req.url.startsWith("/products/") === "/" && req.method === "PUT") {
    res.url.split('/').pop();
    console.log('update product id:',productID);

    let body='';
    req.on('data',(chunk)=>{
      body+=chunk;
    });
    req.on("end",()=>{
    product.id=productID;
    res.statusCode = 200;
    res.end(JSON.stringify({msg:'product Updated ',product}));
    });

    res.statusCode = 200;
    res.end("PUT Request");
  }

  else if (req.url === "/api/v1/products" && req.method === "DELETE") {

    const pid = Number(req.url.split('/').pop());
    res.statusCode = 200;
    if(deleteProduct(pid)){
      res.end(JSON.stringify({msg:'item delted'}))
    }else{
      res.end(JSON.stringify({msg:`products with id ${pid} not found`}));
    }
    res.end("DELETE Request");
  }
  
  else {
    res.statusCode = 404;
    res.end("request not found");
  }
});

server.listen(5001, () => console.log("prg6 is running"));

