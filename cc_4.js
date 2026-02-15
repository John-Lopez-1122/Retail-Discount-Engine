let product = [  // [name, category, price, inventory]
    {name: "10x pack pens", category: "Office supplies", price: 4.99, stock: 102},
    {name: "Oreos", category: "groceries", price: 5.99, stock: 54},
    {name: "6x pack T shirts", category: "apparel", price: 4.99, stock: 86},
    {name: "Computer Mouse", category: "electronics", price: 14.99, stock: 29},
    {name: "Lucky Strike Cigarettes", category: "Cigarettes", price: 9.99, stock: 17}
]


product.forEach(element => {
    const name = element.name
    const category = element.category
    const price = element.price
    const inventory = element.stock

    console.log(`${name} | ${category} | $${price} | Stock: ${inventory}`)

});

console.log("        ") //couldnt find a better line break solution





for (element of product) // used switch inside loop
    switch (element.category){
    
    case "electronics":
        element.price *= .8
        break;

    case "apparel":
        element.price *= .85
        break;

    case "groceries":
        element.price *= .9
        break;
    
    case "household":
        element.price *= .9
        break;
    }


product.forEach(element => {
    const name = element.name
    const category = element.category
    const price = element.price
    const inventory = element.stock

    console.log(`${name} | ${category} | $${price} | Stock: ${inventory}`)

});

console.log("        ")

let customerType = ("senior")

let discount = 1
let subTotal = null

if (customerType == "student")
    discount = .05 && console.log(`5% Discount!!!`)
else if (customerType == "senior")
    discount = .07 && console.log(`7% Discount!!!`)
else if (customerType == "regular")
    discount = 1 && console.log(`No Discount : (`)

console.log("        ")

customer = [  // customer number, items, type
    [32133,["10x pack pens", "Computer Mouse"], "regular"],
    [73456,["Oreos", "Lucky Strike Cigarettes"], "senior"],
    [77725,["10x pack pens", "6x pack T shirts", "Computer Mouse"], "student"]
]

for (element1 of customer) {//entire customer array
let subtotal = 0
    for (element2 of element1[1]) {//(hopefully) nested customer item array
        for (element3 of product) {//entire product array
if (element2 == element3.name) {
    subTotal += element3.price
    element3.stock--;
    break;
}
        }
    }

console.log(`Customer Number: ${element1[0]}`)
console.log(`Sub Total: $${subTotal.toFixed(2)}`)
let discount = 0
if (element1[2] == "student")
    discount = .05
else if (element1[2] == "senior")
    discount = .07
else if (element1[2] == "regular")
    discount = 0
console.log(`Discount rate: ${discount}`)
total = subTotal * (1-discount)
console.log(`Total: $${total.toFixed(2)}`)
console.log("         ")
}