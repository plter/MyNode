/**
 * Created by plter on 12/5/16.
 */

const fs = require("fs");
const Node = require("./Node");

class Component extends Node {

    constructor(name, templatePath = null) {
        super();
        this._name = name;
        this._templatePath = templatePath;
    }

    get name() {
        return this._name;
    }

    get templatePath() {
        return this._templatePath;
    }

    toHtml() {
        if (!this.templatePath) {
            throw new Error("This component dose not have a template");
        }
        let content = fs.readFileSync(this.templatePath);
        return content.toString();
    }
}

module.exports = Component;