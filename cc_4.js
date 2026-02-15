let product = [  // [name, category, price, inventory]
    ["10x pack pens", "Office supplies", 4.99, 102],
    ["Oreos","Snack", 5.99, 54],
    ["6x pack T shirts", "Clothing", 4.99, 86],
    ["Computer Mouse", "Computer supplies", 14.99, 29],
    ["Lucky Strike Cigarettes", "Cigarettes", 9.99, 17]
]


product.forEach(element => {
    const name = element[0]
    const category = element[1]
    const price = element[2]
    const inventory = element[3]

    console.log(`${name} | ${category} | $${price} | Stock: ${inventory}`)
});