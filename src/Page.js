/**
 * Created by plter on 12/5/16.
 */

const Component = require("./Component");

class Page extends Component {


    constructor(name = "", templatePath = null, method = "get") {
        super(name, templatePath);
        this._method = method;
    }

    get method() {
        return this._method;
    }

    handleRequest(req, res) {
        res.send(this.toHtml());
    }
}

module.exports = Page;