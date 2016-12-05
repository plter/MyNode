/**
 * Created by plter on 12/5/16.
 */


const Module = require("../../index").Module;
const Hello = require("./Hello");

class Root extends Module {

    constructor() {
        super();

        this.addPage(new Hello());
    }
}

module.exports = Root;