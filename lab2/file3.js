import { readFile,writeFile ,appendFile,unlink} from "fs/promises";
const writedata= async(fname,contents) => {
 await writeFile(fname,contents);
 console.log('file written')
};
const readData= async (fname) => {
    const data =await readFile(fname,"utf-8");
    console.log("file content");
    console.log(data);
};
await writedata("happy.txt","i am happy");
await readData("happy.txt");

const appendData= async(fname,contents) =>{
await appendFile(fname,"\n"+contents);

};
await writedata("happy.txt","i am happy");
await readData("happy.txt");
await appendData("happy.txt","FSD is intresting");
await readData("happy.txt");

