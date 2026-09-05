import readline from "readline/promises";
import { writeFile, readFile } from "fs/promises";

import { stdin, stdout } from "process";

const FILE = "products.json";

const saveCart = async (cart) => {
  await writeFile(FILE, JSON.stringify(cart, null, 2));
};

const getCart = async () => {
  const data = await readFile(FILE, "utf-8");
  return JSON.parse(data);
};

const addToCart = async (item) => {
  const products = await getCart();
  const productfound=product.find((p) =>p.id===item.id);
  if(productfound){
    productfound.qty+=item.qty;
    console.log('Product in cart quanttity updated');

  }else{
    product.push(item);
    console.log("Product added successfully👍");
  }
  products.push(item);
  await saveCart(products);
};
const showCart=()=>{
    console.log("show cart");
}
const deleteFromCart=()=>{
    console.log("deleteCart");
}
const updateCart=()=>{
      console.log("update cart");
      
}

const main = async () => {
  const cin = readline.createInterface({ input: stdin, output: stdout });
  let choice;
  do {
    console.log("Welcome to shopping cart 🛍️");
    console.log("1 ------- Add to cart");
    console.log("2 ------- Show Cart");
    console.log("3 ------- Remove Item");
    console.log("4 ------- Update Quantity");
    console.log("5 ------- Checkout");
    choice = await cin.question("Enter your choice:");
    switch (Number(choice)) {
      case 1:
        // await addToCart({ id: 101, name: "Mobile", price: 15000, qty: 3 });
        // console.log("add to cart");
        let data=await cin.question("enter id,name,price,qty:");
        console.log(data);

        let p=data.split(",");
        console.table(p);
        let q= p.map((item) => item.trim());
         console.table(q);

         let [id,name,price,qty] =q;
         console.log(id,name,price,qty);

         const product ={
            id:Number(id),
            price:Number(price),
            qty:Number(qty),
         };
         //console.log(product);
        await addToCart(product);
        
        break;
      case 2:
        showCart();
        console.log("show cart items");
        break;
      case 3:
        deleteFromCart();
        console.log("remove items");
        break;
      case 4:
        updateCart();
        console.log("update quantity");
        break;
      case 5:
        console.log("See you later...😃");
        process.exit();
        break;
      default:
        console.log("Invalid choice! try again 🛑");
    }
  } while (choice != "5");

  cin.close();
};

main();