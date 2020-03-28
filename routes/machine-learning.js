const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {
    
    const {
        spawn
    } = require('child_process');
    
    // const child = spawn('pwd');
    const child = spawn('python', ['./ml.py']);
    
    child.on('exit', function (code, signal) {
        console.log('child process exited with ' +
            `code ${code} and signal ${signal}`);
    });
    
    
    child.stdout.on('data', (data) => {
        console.log(`child stdout: ${data}`);
        res.send(`<h1>${data}</h1>`);
    });
    
    child.stderr.on('data', (data) => {
        console.error(`child stderr: ${data}`);
        res.send(`stderr: <h1>${data}</h1>`);
    });
    
    child.on('error', (err) => {
        console.error(`child error: ${err}`);
        res.send(`<h1>error: ${data}</h1>`);
    });
});







module.exports = router;