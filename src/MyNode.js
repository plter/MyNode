/**
 * Created by plter on 12/4/16.
 */

const http = require("http");
const express = require("express");

class MyNode {
    constructor(port) {
        this._expressApp = express();
        this._port = port;
        this._server = http.createServer(this._expressApp);
        this._server.listen(port);
    }

    get port() {
        return this._port;
    }

    get expressApp() {
        return this._expressApp;
    }
}

module.exports = MyNode;