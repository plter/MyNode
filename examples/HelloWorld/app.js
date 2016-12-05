/**
 * Created by plter on 12/5/16.
 */

const mn = require("../../index");

let server = new mn.Server(8000);

let m = new mn.Module("");
server.addModule(m);

let p = new mn.Page("hello");
p.handleRequest = function (req, res) {
    res.send("<h1>Hello World</h1>");
};
m.addPage(p);


