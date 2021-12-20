const express = require("express");
const app = express();
const path = require("path");
const homeRouter = require("./routers/main");

app.listen(3001 , ()=>{
    console.log("Servidor funcionando! 3001 ");
});

app.use(express.static(path.join(__dirname, 'public')));
app.use("/", homeRouter);