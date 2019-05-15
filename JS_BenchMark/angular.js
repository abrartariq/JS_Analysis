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


var app = angular.module('myApp', []);
app.controller('customersCtrl', ($scope) => {
    
    start = 0;
    data = [];
    id = 1;

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
    $scope.add = () => {
        startMeasure("add");
        start = performance.now();
        $scope.names = $scope.names.concat(buildData(100));
        printDuration();
    }
    $scope.update = () => {
        startMeasure("update");
        start = performance.now();
        for (let i=0;i<$scope.names.length;i+=10) {
            $scope.names[i].label += ' !!!';
        }
        printDuration();
    }
    $scope.updateStyle = () => {
        startMeasure("updateStyle");
        start = performance.now();
        $scope.styleObj = {'font-weight':'bold' }
        printDuration();
    }
    $scope.run = () => {
        startMeasure("run");
        start = performance.now();
        $scope.names = buildData(5000);
        printDuration();
    };
    $scope.runLots = () => {
        startMeasure("runLots");
        start = performance.now();
        $scope.names = buildData(1000);
        printDuration();
    };
    $scope.clear = () => {
        startMeasure("clear");
        start = performance.now();
        $scope.names = [];
        printDuration();
    };
    
    $scope.swapRows = ()=> {
        startMeasure("swapRows");
        if($scope.names.length) {
            var a = $scope.names[1];
            $scope.names[1] = $scope.names[$scope.names.length-1];
            $scope.names[$scope.names.length-1] = a;
        }
        printDuration();
    };
    $scope.run();
    $scope.add();
    $scope.updateStyle();
    $scope.swapRows();
    $scope.update();
    $scope.clear();
});
