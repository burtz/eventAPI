let express = require('express');
let app = express();
let eventRoute = require('./routes/api');
let path = require('path');

app.use((req,res,next)=> {
    console.log(`${new Date().toString()} => ${req.orignalUrl}`);
    next()
});

app.use(eventRoute);
app.use(express.static('public'));

// handler for 404
app.use((req,res,next)=> {
    res.status(404).send('We think you are lost!')
});

// handler for 500
app.use((req,res,next)=> {
    console.error(err.stack);
    res.sendFile(path.join(__dirname,'..public/500.html'))
});


const PORT = process.env.PORT || 3000;
app.listen(PORT,() => console.info(`Server has started on ${PORT}`));

console.log("hello");