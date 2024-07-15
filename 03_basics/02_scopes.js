// var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
   // console.log("INNER: ", a);
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }
// :)' Not to let i wrangle and mess around with the global scope

// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const username = "pratap"

    function two() {
        const website = "github"
        console.log(username);
    }
    // console.log(website);

    two()

}

// one()

if (true) {
    const username = "pratap"
    if (username === "pratap") {
        const website = " github"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// +++++++++++++++++ awesome ++++++++++++++++++++++


console.log(addone(5));
function addone(num) {
    return num + 1
}



addTwo(5)
const addTwo = function(num) {
    return num + 2
}
