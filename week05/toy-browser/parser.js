let currentToken = null;

function emit(token) {
    console.log(token)
}


const EOF = Symbol("EOF") //EOF: End Of File

function data(c) {
    if (c == "<") {
        return tagOpen
    } else if (c == EOF) {
        emit({
            type: 'EOF'
        })
        return;
    } else {
        emit({
            type: 'EOF'
        })
        return data
    }
}

function tagOpen(c) {
    if (c == "/") {
        return endTagOpen
    } else if (c.match(/^[a-zA-z]$/)) {
        currentToken = {
            type: 'startTag',
            tagName: ""
        }
        return tagName(c)
    } else {
        return;
    }
}


function tagName(c) {
    if (c.match(/^[\t\n\f ]$/)) {
        return beforeAttributeName
    } else if (c == '/') {
        return selfClosingStartTag
    }
}

function attributeName(c) {

}

function beforeAttributeName(c) {
    if (c.match(/^[\t\n\f ]$/)) {
        return beforeAttributeName
    } else if (c == '/' || c == ">" || c == EOF) {
        return afterAttributeName(c)
    } else if (c == '\u0000') {

    } else {

    }
}

function afterAttributeName() {}

function selfClosingStartTag(c) {}

module.exports.parseHTML = function parseHTML(html) {
    let state = data;
    for (let c of html) {
        state = state(c)
    }
    state = state(EOF)
}