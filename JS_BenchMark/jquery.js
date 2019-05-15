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


const render = (data) => {
    var number_of_rows = data.length;
    var table_body = '<table id="tableDiv">';
    for(var i = 0; i < number_of_rows; i++){
        table_body += '<tr>';
        table_body += '<td>';
        table_body += data[i].id;
        table_body += '</td>';
        table_body += '<td>';
        table_body += data[i].label;
        table_body += '</td>';
        table_body += '</tr>';
    }
    table_body += '</table>';
    $('#root').html(table_body);
}


const getRender = (data) => {
    var number_of_rows = data.length;
    var table_body = '';
    for(var i = 0; i < number_of_rows; i++){
        table_body += '<tr>';
        table_body += '<td>';
        table_body += data[i].id;
        table_body += '</td>';
        table_body += '<td>';
        table_body += data[i].label;
        table_body += '</td>';
        table_body += '</tr>';
    }   
    return table_body;
}
const add = () => {
    startMeasure("add");
    start = performance.now();
    let data = buildData(100);
    $('#tableDiv tr:last').after(getRender(data));
    printDuration();
}
const update = () => {
    startMeasure("update");
    start = performance.now();
    let table = $('tableDiv');
    let T = document.getElementById('tableDiv');
    let i =0;
    $(T).find('> tbody > tr').each(function () {
        if(i%10 === 0)
            $(this).append('!!!')
        i++;
    });    
    printDuration();
}
const run = () => {
    startMeasure("run");
    start = performance.now();
    let data = buildData(4000);
    render(data);
    printDuration();
};
const runLots = () => {
    startMeasure("runLots");
    start = performance.now();
    let data = buildData(1000);
    render(data);
    printDuration();
};
const clearA = () => {
    startMeasure("clear");
    start = performance.now();
    $("#tableDiv").empty();     
    printDuration();
};

const swapRows = ()=> {
    startMeasure("swapRows");
    var table = $('#tableDiv');
    var rowF = table.find('tr:first');
    var rowL = table.find('tr:last');
    table.prepend(rowL)
    table.append(rowF)
    printDuration();
};

const updateStyle = () => {
    startMeasure("update");
    start = performance.now();
    let table = $('tableDiv');
    let T = document.getElementById('tableDiv');
    $(T).find('> tbody > tr > td').each(function () {
        let a = $(this).html()
        $(this).html('').append('<b> '+a+'<b>');
    });    
    printDuration();
}

run();
add();
updateStyle();
swapRows();
update();
clearA();