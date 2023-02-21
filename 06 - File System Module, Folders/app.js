const fs = require('fs');


//if there is a folder with the same name, it will return an error

// fs.mkdir('./example_folder', (err)=>{
//     if(err) console.log(err);
//     else{
//         console.log("Succesfully Created Folder");
//         fs.rmdir('./example_folder',(err)=>{
//             if(err) console.log(err)
//             else console.log("Succesfully deleted folder");
//         })
//     }
// })

// fs.mkdir('./example_folder', (err)=>{
//     if(err) console.log(err);
//     else{
//         console.log("Successfully Created Folder");
//         fs.writeFile('./example_folder/example.txt', "example text", (err)=>{
//             if(err) console.log(err);
//             else{
//                 console.log("Successfully Created File")
//                 fs.readFile('./example_folder/example.txt', 'utf8', (err,file)=>{
//                     if(err) console.log(err);
//                     else console.log(file);
//                 })
//             }
//         })
//     }
// })

//If the folder is not empty, this will return an error
// fs.rmdir('./example_folder', (err)=>{
//     if(err) console.log(err);
//     else console.log("Successfully Deleted Folder");
// })

//first delete the file inside
// fs.unlink('./example_folder/example.txt', (err)=>{
//     if(err) console.log(err);
//     else{
//         console.log("Successfully Deleted File inside");
//         fs.rmdir('./example_folder', (err)=>{
//             if(err) console.log(err)
//             else console.log("Successsfully Deleted Direactory");
//         })
//     }
// })

//for multiple file delete

// fs.mkdir('./example_folder2', (err)=>{
//     if(err) console.log(err)
//     else console.log("Dir Created");
// })

// fs.writeFile('./example_folder2/exampleA.txt','EXA', (err)=>{
//     if(err) console.log(err);
//     else console.log("File created");
// })

// fs.writeFile('./example_folder2/exampleB.txt',"EXB", (err)=>{
//     if(err) console.log(err);
//     else console.log("File created");
// })


// fs.readdir('./example_folder2', (err, _files)=>{
//     if(err) console.log(err);
//     else{
//         console.log("Dir Read: " + _files);
//         remover(_files);
//     }
// })

// let remover=(files)=>{
// for(let f of files){
//     fs.unlink('./example_folder2/'+f, (err)=>{
//         if(err) console.log(err);
//         else{
//             console.log("File Deleted: " + f);
//         }
//     })
// }
// }