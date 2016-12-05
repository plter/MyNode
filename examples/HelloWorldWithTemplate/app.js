/**
 * Created by plter on 12/5/16.
 */

const mn = require("../../index");
const Root = require("./Root");

new mn.Server(8000).addModule(new Root());

