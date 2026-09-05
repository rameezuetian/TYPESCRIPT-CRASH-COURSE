// ============================================================
// 1. TYPE INFERENCE
// ============================================================

// TypeScript automatically infers the types:
// name -> string
// price -> number
// isHot -> boolean

const chai = {
    name: "Masala Chai",
    price: 20,
    isHot: true
};


// ============================================================
// 2. EXPLICIT OBJECT TYPE
// ============================================================

let tea: {
    name: string;
    price: number;
    isHot: boolean;
};

tea = {
    name: "Ginger",
    price: 24,
    isHot: true
};


// ============================================================
// 3. TYPE ALIAS
// ============================================================

type Tea = {
    name: string;
    price: number;
    ingredients: string[];
};

const adrakChai: Tea = {
    name: "Adrak",
    price: 25,
    ingredients: ["ginger", "tea", "leaves"]
};


// ============================================================
// 4. STRUCTURAL TYPING
// ============================================================

type Cup = {
    size: string;
};

let smallCup: Cup = {
    size: "200ml"
};

// bigCup has an extra property: material
let bigCup = {
    size: "500ml",
    material: "steel"
};

// This is allowed because bigCup contains
// at least all properties required by Cup.
smallCup = bigCup;


// ============================================================
// 5. STRUCTURAL TYPING WITH ANOTHER EXAMPLE
// ============================================================

type Brew = {
    brewTime: number;
};

const coffee = {
    brewTime: 5,
    beans: "Arabica"
};

// coffee has brewTime,
// so it can be assigned to Brew.
const chaiBrew: Brew = coffee;


// ============================================================
// 6. NESTED TYPES
// ============================================================

type Item = {
    name: string;
    quantity: number;
};

type Address = {
    street: string;
    pin: number;
};

type Order = {
    id: string;
    items: Item[];
    address: Address;
};

const order1: Order = {
    id: "ORD-101",

    items: [
        {
            name: "Masala Chai",
            quantity: 2
        },
        {
            name: "Ginger Chai",
            quantity: 1
        }
    ],

    address: {
        street: "Main Road",
        pin: 54000
    }
};


// ============================================================
// 7. PARTIAL<T>
// ============================================================

// This is the original type.
type Chai = {
    name: string;
    price: number;
    isHot: boolean;
    ingredients: string[];
};

// Partial<Chai> makes ALL properties optional.
//
// Original:
// name: string
// price: number
//
// Partial:
// name?: string
// price?: number
// isHot?: boolean
// ingredients?: string[]

const updateChai = (updates: Partial<Chai>) => {
    console.log("Updating chai with:", updates);
};


// We only want to update price.
// This is valid because Partial makes the other
// properties optional.
updateChai({
    price: 25
});

updateChai({
    name: "Special Masala Chai"
});

updateChai({
    price: 30,
    isHot: true
});


// ============================================================
// 8. REQUIRED<T>
// ============================================================

type ChaiOrder = {
    name?: string;
    quantity?: number;
};

// Normally both properties are optional.
//
// Required<ChaiOrder> converts all optional
// properties into required properties.

const placeOrder = (order: Required<ChaiOrder>) => {
    console.log(order);
};

placeOrder({
    name: "Masala Chai",
    quantity: 2
});


// This would give an error:
//
// placeOrder({
//     name: "Masala Chai"
// });
//
// ❌ quantity is required because of Required<ChaiOrder>


// ============================================================
// 9. PICK<T, Keys>
// ============================================================

// Chai has:
//
// name
// price
// isHot
// ingredients
//
// Pick allows us to select only some properties.

type BasicChaiInfo = Pick<Chai, "name" | "price">;

const chaiInfo: BasicChaiInfo = {
    name: "Masala Chai",
    price: 34
};

console.log(chaiInfo);


// ============================================================
// 10. MORE PICK EXAMPLES
// ============================================================

type ChaiTemperatureInfo = Pick<Chai, "name" | "isHot">;

const temperatureInfo: ChaiTemperatureInfo = {
    name: "Ginger Chai",
    isHot: true
};


// ============================================================
// OUTPUTS
// ============================================================

console.log(chai);
console.log(tea);
console.log(adrakChai);
console.log(smallCup);
console.log(chaiBrew);
console.log(order1);
console.log(chaiInfo);
console.log(temperatureInfo);