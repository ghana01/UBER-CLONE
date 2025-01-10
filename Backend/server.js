const http = require('http');
const app=require('./app.js');
const dotenv=require('dotenv');
dotenv.config();

const Port =3000;



const server=http.createServer(app);

server.listen(Port,()=>{
    console.log(`Server is running on port ${Port}`);
});