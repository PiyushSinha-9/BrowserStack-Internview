const fs = require('fs')
const chokidar = require('chokidar')
const EventEmitter = require('events').EventEmitter;
const readLines = require('read-last-lines');

class App extends EventEmitter{

    constructor(){
        super();
    }

    fileView(targetFile){

        try{
        console.log(`Watching over the file${targetFile}`);

        var watcher = chokidar.watch(targetFile, {
            persistent: true,
            usePolling: false
        });

        watcher.on('change', async filePath => {
            console.log(`[${new Date().toLocaleString()}] ${filePath} has been updated `);
        

        var updateData = await readLines.read(filePath, 10);    // last 10 lines

        // this.emit('file-updated', {
        //     content_updated: updateData,
        //     msg: `[${new Date().toLocaleString()}] Watching in the ${targetFile} `,
        //     new_msg: `[${new Date().toLocaleString()}] Updation is done in ${filePath}`
        // });
        
        this.emit('file-updated', {
            message: updateData
        });
    });
}   catch(err){
    console.log(err);   // in case of error
    }
    }
}

module.exports = App;