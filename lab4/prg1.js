import express from "express";
const app =express()

app.get("/",(req,res)=>{
    res.send("<h1>Hello Express</h1>")
})
app.get("/about",(req,res)=>{
    res.send("<h2>About Page</h2>")
})


const products = [
    { id: 1, name: 'maker', qty: 100, price: 15 },
     { id: 2, name: 'creator', qty: 10, price: 1500 },
];
app.get("/products",(req, res)=>{
    res.status(200).send(products);
})



app.use((req,res) => {
    res.status(404).send("<h1>Page Not found</h1>")
})
app.listen(3333,()=>console.log("prg1 is running at 3333"));