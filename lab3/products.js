const product = [
    { id: 1, name: 'maker', qty: 100, price: 15 },
     { id: 2, name: 'creator', qty: 10, price: 1500 },
     { id: 1, name: 'hat', qty: 5, price: 10 },
      { id: 1, name: 'laptop', qty: 1, price: 55 },
];
let nextID = 3;
export const getAllProducts = () => {
    return product;
}
export const addProduct = () =>{
    item.id = nextID;
    nextID++;
    product.push(item);
    return item;
};
export const deleteProduct =(pid)=> {
 const item = product.findIndex((prd)=>prd.id === pid);
 if(item == -1)
    return false;
product.slice(item,1)
console.log('products remaining:',product);
return true;
};