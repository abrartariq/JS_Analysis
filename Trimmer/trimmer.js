const esprima = require('esprima');
const fs = require('fs');

//Reading a File Asynchronously
const readFile = f => new Promise((resolve, reject) =>
    fs.readFile(f, 'utf-8', (e, d) => e ? reject(e) : resolve(d)))

//Writing A file
const writeFile = (f, data) => new Promise((resolve, reject) =>
    fs.writeFile(f, data, (e) => e ? reject(e) : resolve("Done")))

function isImage(node) {
    //Removing src settting => img.src = 'image.png';
    if ((node.type === 'ExpressionStatement') &&
        (node.expression.type === 'AssignmentExpression') &&
        (node.expression.left.type === 'MemberExpression') &&
        (node.expression.left.property.type === 'Identifier') &&
        (node.expression.left.property.name === 'src')) {
        return true;
    }
    //Removing jQuery Cal => $(".image2").attr("src","image1.jpg");
    else if ((node.type === 'ExpressionStatement') &&
        (node.expression.type === 'CallExpression') &&
        (node.expression.callee.type === 'MemberExpression') &&
        (node.expression.callee.object.type === 'CallExpression') &&
        (node.expression.callee.object.callee.name === '$') &&
        (node.expression.callee.property.type === 'Identifier') &&
        (node.expression.callee.property.name === 'attr') &&
        (node.expression.arguments) &&
        (node.expression.arguments[0].type === 'Literal') &&
        (node.expression.arguments[0].value === 'src')) {
        return true;
    } else {
        return false;
    }
}

function isRegex(node) {
    //Removing regex
    if (node.constructor.name === 'RegexLiteral') {
        return true;
    }else {
        return false;
    }
}

function isDOMInsertion(node) {
    //Remove DOM Insertion
    /* 
        Possible Ways: appendChild, prepend, insertBefore, insertAdjacentHTML, append
    */
    let possibilities = ["appendChild", "prepend", "insertBefore", "insertAdjacentHTML", "append"];

    if ((node.type === 'ExpressionStatement') &&
        (node.expression.type === 'CallExpression') &&
        (node.expression.callee.property.type === 'Identifier') &&
        (possibilities.includes(node.expression.callee.property.name)) ) {
            return true;
        } else {
        return false;
    }
}

// console.log(x) or console['error'](y)
function isConsoleCall(node) {
    return (node.type === 'CallExpression') &&
        (node.callee.type === 'MemberExpression') &&
        (node.callee.object.type === 'Identifier') &&
        (node.callee.object.name === 'console');
}


function removeImages(source) {
    const entries = [];
    esprima.parseScript(source, {}, function (node, meta) {
        if (isImage(node)) {
            entries.push({
                start: meta.start.offset,
                end: meta.end.offset
            });
        }
    });
    entries.sort((a, b) => { return b.end - a.end }).forEach(n => {
        source = source.slice(0, n.start) + source.slice(n.end);
    });
    return source;
}


function removeRegex(source) {
    const entries = [];
    esprima.parseScript(source, {}, function (node, meta) {
        if (isRegex(node)) {
            entries.push({
                start: meta.start.offset,
                end: meta.end.offset
            });
        }
    });
    entries.sort((a, b) => { return b.end - a.end }).forEach(n => {
        source = source.slice(0, n.start) + "\'\'" + source.slice(n.end);
    });
    return source;
}

function removeDOMInsertion(source) {
    const entries = [];
    esprima.parseScript(source, {}, function (node, meta) {
        if (isDOMInsertion(node)) {
            entries.push({
                start: meta.start.offset,
                end: meta.end.offset
            });
        }
    });
    entries.sort((a, b) => { return b.end - a.end }).forEach(n => {
        source = source.slice(0, n.start)  + source.slice(n.end);
    });
    return source;
}

function removeConsoleCalls(source) {
    const entries = [];
    esprima.parseScript(source, {}, function (node, meta) {
        if (isConsoleCall(node)) {
            entries.push({
                start: meta.start.offset,
                end: meta.end.offset
            });
        }
    });
    entries.sort((a, b) => { return b.end - a.end }).forEach(n => {
        source = source.slice(0, n.start)  + source.slice(n.end);
    });
    return source;
}


const main = async () => {
    const args = process.argv;
    if (args.length < 2) {
        console.log("Error: node trimmer.js jsFile")
    }
    let source = '';
    source = await readFile(args[2]);
    await writeFile(args[2].split('.')[0] + "updated.js", removeConsoleCalls(source));
    console.log("Done!");
}
main();