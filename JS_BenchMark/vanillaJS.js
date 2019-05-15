let startTime;
let lastMeasure;

const startMeasure = (name) => {
    startTime = performance.now();
    lastMeasure = name;
};

const stopMeasure = () => {
    window.setTimeout(() => {
        const stop = performance.now();
        console.log(lastMeasure + " took " + (stop-startTime));
    }, 0);
};

let start = 0;
let id = 1;

const buildData = (count = 100) => {
    const adjectives = ["pretty", "large", "big", "small", "tall", "short", "long", "handsome", "plain", "quaint", "clean", "elegant", "easy", "angry", "crazy", "helpful", "mushy", "odd", "unsightly", "adorable", "important", "inexpensive", "cheap", "expensive", "fancy"];
    const colours = ["red", "yellow", "blue", "green", "pink", "brown", "purple", "brown", "white", "black", "orange"];
    const nouns = ["table", "chair", "house", "bbq", "desk", "car", "pony", "cookie", "sandwich", "burger", "pizza", "mouse", "keyboard"];
    const data = [];
    for (let i = 0, len = count; i < len; i++) {
        data.push({ id: id++, label: adjectives[_random(adjectives.length)] + " " + colours[_random(colours.length)] + " " + nouns[_random(nouns.length)] });
    }
    return data;
};
const printDuration = () =>  {
    stopMeasure();
};
const _random = (max) => {
    return Math.round(Math.random() * 1000) % max;
};


const add = () => {
    startMeasure("add");
    start = performance.now();
    let data = buildData(100);
    let length = document.getElementById("tableDiv").rows.length;
    for (let j = length; j < length+10; j++) {
        var table = document.getElementById("tableDiv");
        var row = table.insertRow(j);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = data[j-length].id;
        cell2.innerHTML = data[j-length].label;
    }
    printDuration();
}
const update = () => {
    startMeasure("update");
    start = performance.now();
    for (let j = 0; j < 100; j+=10) {
        var table = document.getElementById("tableDiv");
        table.rows[j].cells[1].append("!!!");
    }
    printDuration();
}
const run = () => {
    startMeasure("run");
    start = performance.now();
    let data = buildData(5000);
    for (let j = 0; j < 100; j++) {
        var table = document.getElementById("tableDiv");
        var row = table.insertRow(j);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);

        cell1.innerHTML = data[j].id;
        cell2.innerHTML = data[j].label;
    }
    printDuration();
};
const runLots = () => {
    startMeasure("runLots");
    start = performance.now();
    let data = buildData(1000);
    for (let j = 0; j < 1000; j++) {
        var table = document.getElementById("tableDiv");
        var row = table.insertRow(j);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);

        cell1.innerHTML = data[j].id;
        cell2.innerHTML = data[j].label;
    }
    printDuration();
};
const clearA = () => {
    startMeasure("clear");
    start = performance.now();
    var Parent = document.getElementById('tableDiv');
    while(Parent.hasChildNodes())
    {
       Parent.removeChild(Parent.firstChild);
    }
    printDuration();
};
const swapRows = ()=> {
    startMeasure("swapRows");
    let table = document.getElementById("tableDiv");
    let lastRowIndex = table.rows.length-1;
    let firstRowIndex = 0;
    let lastCellContent = table.rows[lastRowIndex].cells[1].innerHTML;
    let firstCellContent = table.rows[firstRowIndex].cells[1].innerHTML;
    table.rows[firstRowIndex].cells[1].innerHTML = lastCellContent;
    table.rows[lastRowIndex].cells[1].innerHTML = firstCellContent;
    printDuration();
};

const updateStyle = () => {
    startMeasure("updateStyle");
    start = performance.now();
    let el = document.getElementById('tableDiv');
    el.style.fontWeight = 'bold';
    printDuration();
}

run();
add();
updateStyle();
swapRows();
update();
clearA();