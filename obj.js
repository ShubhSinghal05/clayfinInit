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

let rd= arr.reduce((max,min)=>{
    if(min>max);
    max=min
    return max
},0)

console.log(rd)