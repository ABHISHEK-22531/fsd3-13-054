import{mkdir} from 'fs/promises';
// await mkdir('upload');
// console.log("folder created");

// import { mkdir } from "fs/promises";

// await mkdir("upload/resume", { recursive: true });

// console.log("resume created");

// await mkdir("images/profile/logo", { recursive: true });

// console.log(" created");
await rm("upload",{recursive:true});