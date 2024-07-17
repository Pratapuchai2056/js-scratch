const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, curval) {
//     console.log(`acc: ${acc} and curval: ${curval}`);
//     return acc + curval
// }, 0 )

const myTotal = myNums.reduce( (acc, curval) => acc + curval, 0)

// This is just a revision on arrow function 

// const myTotal = myNums.reduce( (acc, curval) => {
//     console.log(`acc: ${acc} and curval: ${curval}`);
//     return acc + curval}, 0)

// console.log(myTotal);

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price:119
    },
    {
        itemName: "py course",
        price: 129
    },
    {
        itemName: "mobile dev course",
        price: 299
    },
    {
        itemName: "data science course",
        price: 599
    } 
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay);