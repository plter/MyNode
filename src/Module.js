/**
 * Created by plter on 12/5/16.
 */

const express = require("express");
const Router = express.Router;
const Node = require("./Node");

class Module extends Node {

    /**
     * Construct a module
     * @param name if you use the default value,and this will be the root module
     */
    constructor(name = "") {
        super();
        this._router = Router();
        this._name = name;
    }

    get router() {
        return this._router;
    }

    get name() {
        return this._name;
    }

    /**
     * @param {Page} page
     */
    addPage(page) {
        this.router[page.method]("/" + page.name, page.handleRequest.bind(page));
        page.__internal_set_parent(this);
    }
}

module.exports = Module;