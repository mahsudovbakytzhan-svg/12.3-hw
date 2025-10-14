//1 tapsyrma
console.log("Salem,Alem")
setTimeout (() => {
console.log ("Salem Alem")},1000)



// 2 tapsyrma
const intervalld = setInterval (() =>{
 date = new Date(Date.now())
 console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
},1000);

//3 Tapsyrma
setTimeout (()=>{
  clearInterval(intervalld);
},5000);

// 4 tapsyrma
const fetchData = new Promise((resolve, reject)=>{
  setTimeout (()=>{
    resolve("Данные получены!")
  },3000);
});

fetchData   .then(resolve => console.log(resolve))  

//5 tapsyrma 
const fetchDataWithError = new Promise((resolve,reject)=>{
  setTimeout (()=>{
    reject("Ошибка загрузки!")
  },2000);
});

fetchDataWithError .catch(error=>console.error(error))

//6 tapsyrma
async function fetchDataAsync() {
    let result = await fetchData.then(resolve => {return resolve})
    console.log(result)
}
fetchDataAsync()
//7 tapsyrma 

async function fetchDataAsync() {
  let result = await fetchDataWithError.catch(error=>{return error})
  console.log(result)
}
fetchDataAsync()
//8 tapsyrma 
//1. Напишите две асинхронные функции `task1` и `task2`, которые возвращают промисы, разрешающиеся через 1 и 2 секунды соответственно.
//2. Используйте `async/await` для последовательного выполнения этих задач. Выведите результаты обеих задач в консоль.

const task1_prom = new Promise((resolve, reject)=>{
  setTimeout (()=>{
    return resolve("task1:completions")
  },3000);
});

function prom(){ return new Promise((resolve, reject)=>{
  setTimeout (()=>{
    return resolve("task1:completions")
  },3000);})}

async function task1(){
  console.log("task1:start")
  let result2 = await prom()
  return result2;
}

async function getResults(params) {
  t1res = await task1()
  console.log(t1res) 
}

getResults()

const task2_prom = new Promise((resolve, reject)=>{
  setTimeout (()=>{
    return resolve("task2:completions")
  },3000);
});

function prom(){ return new Promise((resolve, reject)=>{
  setTimeout (()=>{
    return resolve("task1:completions")
  },3000);})}

async function task2(){
  console.log("task2:start")
  let result2 = await prom()
  return result2;
}

async function getResults(params) {
  t2res = await task2()
  console.log(t2res) 
}

getResults()

