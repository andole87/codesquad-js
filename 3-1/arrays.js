const rawData = require('./data.json');
let obj = rawData;
//async
// fs.readFile('./o.json', 'utf8', function(err,data){
//     if (err) throw Error ("Cant't read json");
//     obj = JSON.parse(data);
// })
let resultArray = [];


const getNumberKeyfromObject = function(objectArg){
    for (key in objectArg){
        if (typeof objectArg[key] === "object"){
            getNumberKeyfromObject(objectArg[key]);
        }
        if (typeof objectArg[key] === "number" && Number.isFinite(objectArg[key])){
            resultArray.push(key);
        }
    }
};

getNumberKeyfromObject(obj);
console.log(resultArray);

