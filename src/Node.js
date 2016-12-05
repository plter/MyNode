/**
 * Created by plter on 12/5/16.
 */

class Node {

    constructor(parent = null) {
        this._parent = parent;
    }

    get parent() {
        return this._parent;
    }

    __internal_set_parent(p) {
        this._parent = p;
    }

    get root() {
        if (this.parent) {
            return this.parent.root;
        } else {
            return this;
        }
    }
}

module.exports = Node;