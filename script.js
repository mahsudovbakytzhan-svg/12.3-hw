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
  try {
    const result = await fetchData; 
    console.log(result); 
  } catch (error) {
    console.error("Произошла ошибка:", error); 
  }
}

fetchDataAsync();


//7 tapsyrma 

async function fetchDataAsyncWithError() {
  try {
    const result = await fetchDataWithError;
    console.log(result);
  } catch (error) {
    console.error("Произошла ошибка:", error);
  }
}

fetchDataAsyncWithError(); 





// 8 tapsyrma
function task1(){
  return new Promise((resolve)=>{
    setTimeout (()=>{
      resolve("Задача 1 выполнена")
    },1000)
  })
}

function task2 (){
  return new Promise((resolve)=>{
    setTimeout (()=>{
      resolve("Задача 2 выполнена")
    },2000)
  })
}

async function runTaks() {
  try{
    const result1 = await task1();
    console.log(result1)
    const result2 = await taks2 ();
    console.log (result2)
  }catch(error){
   console.error ("Произошла ошибка:", error)
  }
  
}
runTaks()

//9 tapsyrma 
function taskA(){
  return new Promise((resolve)=>{
    setTimeout (()=>{
      resolve("Задача A выполнена")
    },2000)
  })
}

function taskB (){
  return new Promise((resolve)=>{
    setTimeout (()=>{
      resolve("Задача B выполнена")
    },3000)
  })
}

async function runParallelTaks() {
  try{
    const result3 = await Promise.all ([taskA(),taskB()])
    console.log(result3[0])
    console.log(result3[1])
  }catch(error){
    console.error("Произошла ошибка:", error)
  }
}
runParallelTaks();

// 10 tapsyrma


console.log("Задача B выполнена")


async function delayedMessage(delay,message) {
  setTimeout(()=>{
    console.log("Задача B выполнена")
  },200)
}
delayedMessage();
