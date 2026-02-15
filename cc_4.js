let product = [  // [name, category, price, inventory]
    ["10x pack pens", "Office supplies", 4.99, 102],
    ["Oreos","groceries", 5.99, 54],
    ["6x pack T shirts", "apparel", 4.99, 86],
    ["Computer Mouse", "electronics", 14.99, 29],
    ["Lucky Strike Cigarettes", "Cigarettes", 9.99, 17]
]


product.forEach(element => {
    const name = element[0]
    const category = element[1]
    const price = element[2]
    const inventory = element[3]

    console.log(`${name} | ${category} | $${price} | Stock: ${inventory}`)

});

console.log("        ") //couldnt find a better line break solution





for (element of product) // used switch inside loop
    switch (element[1]){
    
    case "electronics":
        element[2] *= .8
        break;

    case "apparel":
        element[2] *= .85
        break;

    case "groceries":
        element[2] *= .9
        break;
    
    case "household":
        element[2] *= .9
        break;
    }


product.forEach(element => {
    const name = element[0]
    const category = element[1]
    const price = element[2]
    const inventory = element[3]

    console.log(`${name} | ${category} | $${price} | Stock: ${inventory}`)

});

console.log("        ")

let customerType = ("senior")

let discount = null
let total = null


if (customerType == "student")
    discount = .05 && console.log(`5% Discount!!!`)
else if (customerType == "senior")
    discount = .07 && console.log(`7% Discount!!!`)
else if (customerType == "regular")
    discount = null && console.log(`No Discount : (`)

console.log("        ")

customer = [  // customer number, items, type
    [32133,["10x pack pens", "Computer Mouse"], "regular"],
    [73456,["Oreos", "Lucky Strike Cigarettes"], "senior"],
    [77725,["10x pack pens", "6x pack T shirts", "Computer Mouse"], "student"]
]

for (element1 of customer)
    for (element2 of product)
if (element1[1] == element2[0])
    total = element2[2]
    console.log(total)