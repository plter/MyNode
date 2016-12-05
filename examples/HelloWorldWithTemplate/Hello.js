/**
 * Created by plter on 12/5/16.
 */

const Page = require("../../index").Page;

class Hello extends Page {

    constructor() {
        super("hello", `${__dirname}/Hello.tpl.htm`);
    }
}

module.exports = Hello;