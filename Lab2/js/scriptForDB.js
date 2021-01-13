let dbVersion = 2;
let ButtonAddPers = document.getElementById('ButtonAdd1');
let ButtonAddProd = document.getElementById('ButtonAdd2');
let ButtonAddRaw = document.getElementById('ButtonAdd3');
let ButtonAddProvider = document.getElementById('ButtonAdd4');
let ButtonAddUser = document.getElementById('ButtonAdd5');
let inputData1 = document.getElementById('InputT1');
let inputData2 = document.getElementById('InputT2');
let inputData3 = document.getElementById('InputT3');
let inputData4 = document.getElementById('InputT4');
let inputData5 = document.getElementById('InputT5');
let inputData6 = document.getElementById('InputT6');
let inputData7 = document.getElementById('InputT7');
let inputData8 = document.getElementById('InputT8');
let inputData9 = document.getElementById('InputT9');
let inputData10 = document.getElementById('InputT10');
let openRequest = indexedDB.open("Company", dbVersion);

openRequest.onupgradeneeded = function(event) {
    let db = event.target.result;
        db.createObjectStore('employee', {keyPath: 'name'});   
        db.createObjectStore('product', {keyPath: 'id'});
        db.createObjectStore('raw_material', {keyPath: 'id'});
        db.createObjectStore('provider', {keyPath: 'email'});
        db.createObjectStore('user', {keyPath: 'phone'});
    console.log('onupgrade');
    dbVersion++;
};
  
openRequest.onerror = function() {
    console.error("Error", openRequest.error);
};

openRequest.onsuccess = function() {
    console.log('Succes');
    dbVersion++;
};

  function addItemToObject(objectName, objectToPast) {
    openRequest = indexedDB.open("Company", dbVersion);
    openRequest.onsuccess = function(event) {
        let db = event.target.result;
        let transaction = db.transaction(objectName, "readwrite");
        let cars = transaction.objectStore(objectName);
        let request = cars.add(objectToPast);

        request.onsuccess = function() {
            console.log("succ", request.result);
        };
      
        request.onerror = function() {
            console.log("error", request.error);
        }; 
        console.log('succ');
    }
} 
ButtonAddPers.addEventListener('click', ()=>{
    let content2 = inputData1.value;
    let content1 = inputData2.value; 
    let objectName = {name:content2, post:content1};
    addItemToObject("employee", objectName);
    inputData1.value= "";
    inputData2.value= "";
});

ButtonAddProd.addEventListener('click', ()=>{
    let content2 = inputData3.value;
    let content1 = inputData4.value; 
    let objectName = {name:content2, id:content1};
    addItemToObject("product",objectName);
    inputData3.value= "";
    inputData4.value= "";
});

ButtonAddRaw.addEventListener('click', ()=>{
    let content2 = inputData5.value;
    let content1 = inputData6.value; 
    let objectName = {name:content2, id:content1};
    addItemToObject("raw_material",objectName);
    inputData5.value= "";
    inputData6.value= "";
});

ButtonAddProvider.addEventListener('click', ()=>{
    let content2 = inputData7.value;
    let content1 = inputData8.value; 
    let objectName = {name:content2, email:content1};
    addItemToObject("provider",objectName);
    inputData7.value= "";
    inputData8.value= "";
});

ButtonAddUser.addEventListener('click', ()=>{
    let content2 = inputData9.value;
    let content1 = inputData10.value; 
    let objectName = {name:content2, phone:content1};
    addItemToObject("user",objectName);
    inputData9.value= "";
    inputData10.value= "";
});
