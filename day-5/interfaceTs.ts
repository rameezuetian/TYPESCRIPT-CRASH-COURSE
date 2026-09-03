// ============================================================
// 1. TYPE ALIAS
// ============================================================

// A type alias allows us to create our own custom type.
//
// ChaiOrder must contain:
// - type: string
// - sugar: number
// - strong: boolean

type ChaiOrder = {
    type: string;
    sugar: number;
    strong: boolean;
};


// Function using an inline object type
function makeChai(order: {
    type: string;
    sugar: number;
    strong: boolean;
}) {
    console.log(order);
}


// Another function using the same inline object type
function serveChai(order: {
    type: string;
    sugar: number;
    strong: boolean;
}) {
    console.log(order);
}


// Instead of writing the complete object structure again,
// we can use our ChaiOrder type alias.

function chai(order: ChaiOrder) {
    console.log(order);
}


// Example
const myChai: ChaiOrder = {
    type: "Masala",
    sugar: 2,
    strong: true
};

chai(myChai);


// ============================================================
// 2. TYPE ALIAS FOR AN OBJECT
// ============================================================

// TeaRecipe describes the structure of a tea recipe.
//
// Any object of type TeaRecipe must have:
// water -> number
// milk  -> number

type TeaRecipe = {
    water: number;
    milk: number;
};


// A class can implement a type.
//
// The class must contain all the properties required
// by the TeaRecipe type.

class MasalaChai implements TeaRecipe {

    water = 100;

    milk = 50;
}


// Create an object from the class
const masala = new MasalaChai();

console.log(masala);


// ============================================================
// 3. INTERFACE
// ============================================================

// An interface defines the structure that an object or class
// must follow.

interface CupSize {

    // The size can ONLY be "small" or "large".
    size: "small" | "large";
}


// A class can implement an interface.
//
// Because Chai implements CupSize,
// it MUST have a "size" property.

class Chai implements CupSize {

    size: "small" | "large" = "large";
}


const cupSize = new Chai();

console.log(cupSize);


// ============================================================
// 4. UNION TYPES
// ============================================================

// A union type means a value can be one of several types/values.
//
// Here `ok` can ONLY be:
// true OR false

type Response =
    | { ok: true }
    | { ok: false };


// A class implementing Response must satisfy
// one of the union structures.

class MyResponse implements Response {

    ok: true = true;
}


const response = new MyResponse();

console.log(response);


// ============================================================
// 5. LITERAL UNION TYPE
// ============================================================

// We can restrict a variable to specific string values.
//
// TeaType can ONLY be:
// "masala"
// "ginger"
// "lemon"

type TeaType = "masala" | "ginger" | "lemon";


let tea1: TeaType = "masala";

let tea2: TeaType = "ginger";

let tea3: TeaType = "lemon";

console.log(tea1);
console.log(tea2);
console.log(tea3);


// This would give an error:
//
// let tea4: TeaType = "coffee";
// ❌ "coffee" is not allowed


// ============================================================
// 6. FUNCTION WITH A CUSTOM TYPE
// ============================================================

// The function expects an object that follows
// the TeaRecipe structure.

function orderChai(t: TeaRecipe) {

    console.log("Tea Recipe:");
    console.log(t);
}


// Calling the function with a valid TeaRecipe object

orderChai({
    water: 200,
    milk: 100
});


// ============================================================
// 7. INTERSECTION TYPES
// ============================================================

// An intersection type uses `&`.
//
// It means the new type must contain
// properties from BOTH types.

type BaseChai = {

    teaLeaves: number;
};


type Extra = {

    masala: number;
};


// MasalaChai must contain:
// teaLeaves AND masala

type MasalaChai = BaseChai & Extra;


// Create an object of MasalaChai

const cup: MasalaChai = {

    teaLeaves: 3,

    masala: 1
};


console.log(cup);


// ============================================================
// 8. OPTIONAL PROPERTIES
// ============================================================

// The `?` means the property is optional.
//
// username -> required
// bio      -> optional

type User = {

    username: string;

    bio?: string;
};


// `bio` is not provided.
// This is still valid because bio is optional.

const u1: User = {

    username: "Chai"
};


// Here we provide both username and bio.

const u2: User = {

    username: "chai",

    bio: "I love chai"
};


console.log(u1);
console.log(u2);


// ============================================================
// 9. READONLY
// ============================================================

// `readonly` means the property cannot be changed
// after the object has been created.

type Config = {

    readonly appName: string;

    version: number;
};


// Create configuration object

const cfg: Config = {

    appName: "Masterji",

    version: 1
};


console.log(cfg);


// We CAN change version because it is not readonly.

cfg.version = 2;

console.log(cfg);


// We CANNOT change appName because it is readonly.
//
// cfg.appName = "New App";
// ❌ Error: Cannot assign to 'appName' because it is a
//    read-only property.