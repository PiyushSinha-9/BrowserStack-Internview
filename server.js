const App = require('./app')

const express = require('express');
const app = express();

var appClass = new App();

const file1 = 'Logs/info.log'; 
const file2 = 'Logs/temp.log'; 

appClass.on('file-updated', log =>{
    console.log(log.message);
})

appClass.fileView(file1);
appClass.fileView(file2);

// app.get('/logs', (req,res) => {
//     try{
//         appClass.on('file-updated', log => {
//            console.log(log.message);
//            // res.status(200).json({new_content:log});
//         });
//     }catch(err){
//         console.log(err);
//         //res.status(400).json({errMsg : "Error occured"});
//     }
// });

// appClass.fileView(file1);
// app.listen(3000, () => {
//     console.log('Making connection on post 3000...');
// })  
