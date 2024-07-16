// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    if (greet == "o") {
       // console.log(`o detected`);
        continue
    }
    // console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()
map.set('AUS', "Australia")
map.set('US', "United States")
map.set('UK', "United Kingdom")
map.set('AUS', "Australia")

// map. only holds the unique [key, value] pairs ani in the original order.

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }

