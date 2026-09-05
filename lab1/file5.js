import { stat } from "fs/promises";
const stat= await stat("readme.md");
console.log('is file',Stats.isFile());
console.log("is directory:",Stats.isDirectory());
console.log("size(bytes):",Stats.size);
console.log("last modified:",Stats.mtime);