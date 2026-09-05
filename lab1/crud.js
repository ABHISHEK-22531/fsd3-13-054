import readline from "readline/promises";
import {writeFile,readFile} from "fs/promises";

import {stdin,stdout} from"process";
const FILE="profucts.json";
const saveCart=(cart)=>{
await writeFile(FILE,JSON.stringify(cart,null,2));
}
const getCart=()=>{
    const data = await readFile(FILE,"utf-8");
    return JSON.parse(data);
}


const main=async()=>{
    const cin=readline.createInterface({input:stdin,output:stdout});
    let choice;
    do{
    console.log("welcome to shopping card🎁");
    console.log("1-----Add to card");
    console.log("2------Show card");
    console.log("3-----Remove item");
    console.log("4-----Update Quantity");
    console.log("5-----Checkout");
     choice=await cin.question("Enter your choice:");
    // console.log('Entered choice:',choice);
    switch(Number(choice)){
        case 1:
            console.log('add to cart');
            break;
        case 2:
            console.log('show cart items');
            break;
        case 3:
            console.log('remove items');
            break;
        case 4:
            console.log('update quantity');
            break;
        case 5:
            console.log('see you later...😄');
            break;
        default:
            console.log("Invalid choice! try again 🔴");    
    }
} while (choice!=5);
    cin.close();
};
main();