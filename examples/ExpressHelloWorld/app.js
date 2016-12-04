/**
 * Created by plter on 12/4/16.
 */

const MyNode = require("../../index");

const mn = new MyNode(8000);

mn.expressApp.use("/",(req,res)=>{
    res.send("<h1>Hello World</h1>");
});