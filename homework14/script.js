let workObj = { 
    x: 10,
    y: 20, 
    inner: {
         x: 20,
         z: 30,
        },
    foo2: {
         k: 23,
         p: 13, 
        },
    };
    
function convert(obj) {
    const newObj = {};
    for(let key in obj) {
        if(typeof obj[key] === 'object') {
            let newObjSecond = convert(obj[key]);
            for(let innerKey in newObjSecond) {
                newObj[innerKey] === newObjSecond[innerKey];
            }
        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}


console.log(convert(workObj));