/**
 * Created by plter on 12/4/16.
 */

const http = require("http");
const express = require("express");
const Node = require("./Node");

class Server extends Node {
    constructor(port) {
        super();
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

    /**
     * @param {Module} module
     */
    addModule(module) {
        this.expressApp.use("/" + module.name, module.router);
        module.__internal_set_parent(this);
    }
}

module.exports = Server;