const myReduce = (arr, callback, initialValue) => {
    //여기에 구현
    let result = initialValue;
    arr.forEach(element => 
        result = callback(result, element)
    );
    return result;
    
}

const result = myReduce([1,2,3,4], (next,prev) => next + prev, 5);
console.log(result);
