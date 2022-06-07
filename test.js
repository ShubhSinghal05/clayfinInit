let arr = [1, 2, 3, 4, 5];
console.log(arr)

let mp = arr.map(i => {
    return i * 3;
})
console.log(mp)

let fl = arr.filter(i => {
    return i % 2!=0;
})

console.log(fl)

let rd= arr.reduce((max,min)=>{
    if(min>max);
    max=min
    return max
},0)

console.log(rd)

// entries
// keys
// flat
// flatmap
// splice



let numbers = [1, 2, [3, 4, 5]];
let flatNumbers = numbers.flat();
console.log(flatNumbers);


let months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months);



let arr2 = ['a', 'b', 'c'];
let iterator1 = arr2.entries();
console.log(iterator1)


let array1 = ['a', 'b', 'c'];
let iterator = array1.keys();

for (let key of iterator) {
  console.log(key);
}