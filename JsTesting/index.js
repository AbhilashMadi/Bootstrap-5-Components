'use strict';

// const asyncFunction = function(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => resolve("Promise Rejected...", 4000));
//         reject("Rejected!");
//     })
// };

// const promise = asyncFunction();

// promise.then((val) => console.log(`Yes!! ${val}`),(val) => console.log(`Rejected ${val}`)); 


// const asyncFunc = function(num) {
//     return new Promise((resolve,reject) => {
//         if(Number.isInteger(num)){
//             setTimeout(() => resolve("Promise is resolved"),num);
//         } else {
//             reject(`${typeof num} is not valid`);
//         }
//     });
// };

// asyncFunc(null)
//   .then((val) => console.log(`Yes!! ${val}`),(val) => console.log(`Rejected!! ${val}`));


const jsonUrl = "https://jsonplaceholder.typicode.com/posts?100";

// function fetchDataWithRetries(url,headers={},retries=3){
//     return new Promise((resolve,reject) => {
//         const fetchIt = async (attemp) => {
//             try{
//                 const response = await fetch(url,{headers});

//                 if(response.ok){
//                     const data = response.json();
//                     resolve(data);
//                 } else {
//                     console.log(`HTTP error! ${response.status}`)
//                 }
//             } catch(error) {
//                 if(attemp<retries){
//                     setTimeout(fetchIt,3000);
//                 } else {
//                     reject(error);
//                 }
//             }
//         }
//         fetchIt(1);
//     })
// }

// async function fetchData(url){
//     try{
//         const res = await fetch(url);
//         const data =await res.json();
//         return data;
//     } catch(error){
//         console.error(error);
//     }
// }

// console.log(fetchData(jsonUrl));


// function returnWithUserID(users,givenUserID){
//     return users.filter((arr) => arr.id === givenUserID);
// }

// fetch(jsonUrl)
// .then(response => response.json())
// .then(data => {
//     const userData = returnWithUserID(data,3)
//     console.log(userData)
// })
// .catch((error) => {
//     console.error(error)
// });

