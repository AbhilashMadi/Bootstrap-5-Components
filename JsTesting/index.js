'use strict';

const asyncFunction = function(){
    return new Promise((resolve,reject) => {
        setTimeout(() => resolve("Promise Rejected...", 4000));
        reject("Rejected!");
    })
};

const promise = asyncFunction();

promise.then((val) => console.log(`Yes!! ${val}`),(val) => console.log(`Rejected ${val}`));