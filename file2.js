import {readFile} from "fs/promises";
const data = await readFile("rahul.txt","utf-8");
console.log("file content:");
console.log(data);