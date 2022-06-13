// freeze


let obj = {
    name: "a",
    age: {
        ag1: 2,
        ag2: 3,
    }
}
Object.freeze(obj)
console.log(obj)

obj.name = "b"
obj.age.ag1 = "b"

console.log(obj)

// join

let a = ["str1", "str2", ["str3", ["str4"]]];
let b = a.join()

console.log(b)

// keys

let array1 = ['a', 'b', 'c'];
let iterator = array1.keys();

for (let key of iterator) {
    console.log(key);

}

// Map

let arr = [1, 2, 3, 4, 5];
console.log(arr)

let mp = arr.map(i => {
    return i * 3;
})
console.log(mp)

// reduce

let rd = arr.reduce((max, min) => {
    if (min > max);
    max = min
    return max
}, 0)

console.log(rd)


class Bike {
    function() {
        console.log(this)
    }
}
// Bike()
var ab = new Bike()

class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
}

const car1 = new Car('Toyota', 'Yaris');
console.log(car1);



// ajax fetching Data

async function fetchText() {
    let response = await fetch('/readme.txt');
    let data = await response.json();
    console.log(data);
}


var xhttp = new XMLHttpRequest();



    <button onclick="makeRequest()">Make a request</button>


  
 var httpRequest;
  function makeRequest(){

    httpRequest = new XMLHttpRequest();

    if(!httpRequest){
        alert('Cannot create an XMLHTTP instance')
        return false
    }

        httpRequest.onreadystatechange = getContents;
        httpRequest.open('GET','ajax.html');
        httpRequest.send()
  }

  function getContents(){
    if(httpRequest.readyState == XMLHttpRequest.DONE){
        if(httpRequest.status == 200){
            alert(httpRequest.responseText)
        }else{
            alert('There was a problem with the request.');
        }
    }
  }

//   To send a request to a server, we use the open() and send() methods of the XMLHttpRequest object:

  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
 

