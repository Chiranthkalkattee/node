// const nw=process.argv.splice(2);
// for(let i=0;i<=nw.length-1;i++){
//     console.log("hi"+nw[i]);
// }

const fs=require('fs');
const folder=process.argv[2]||'Project'
fs.mkdirSync(folder)
fs.writeFileSync(`${folder}/index.html`)