let startTime;
let lastMeasure;
let state = {'data':[],'styleObj':{}};
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

const setState = (data) => {
    Object.assign(state,data);
    ReactDOM.render(
        React.createElement('table',{style:state.styleObj},
            state.data.map(a => React.createElement('tr',null, 
                React.createElement('td',null,a.id), 
                React.createElement('td',null,a.label)))
        )
        ,document.getElementById('root'));
}
const add = () => {
    startMeasure("add");
    start = performance.now();
    let data = state.data.concat(buildData(100));
    setState({'data':data})
    // render();
    printDuration();
}
const update = () => {
    startMeasure("update");
    start = performance.now();
    let data = state.data;
    for (let i = 0;i < data.length;i += 10) {
        data[i].label += ' !!!';
    }
    setState({'data':data})
    printDuration();
}
const run = () => {
    startMeasure("run");
    start = performance.now();
    let data = buildData(5000);
    setState({'data':data});
    printDuration();
};
const runLots = () => {
    startMeasure("runLots");
    start = performance.now();
    let data = buildData(1000);
    setState({'data':data});
    printDuration();
};
const clearA = () => {
    startMeasure("clear");
    start = performance.now();
    setState({'data':[]})
    printDuration();
};
const swapRows = ()=> {
    startMeasure("swapRows");
    let data = state.data;
    if(data.length) {
        var a = data[1];
        data[1] = data[data.length-1];
        data[data.length-1] = a;
    }
    setState({'data':data});
    printDuration();
};

const updateStyle = () => {
    startMeasure("updateStyle");
    start = performance.now();
    setState({'styleObj':{fontWeight: 'bold'}})
    printDuration();
}

run();
add();
updateStyle();
swapRows();
update();
clearA();