// ============================================================
// TYPESCRIPT ARRAYS, TUPLES & ENUMS
// ============================================================


// ============================================================
// 1. ARRAY OF STRINGS
// ============================================================

// `string[]` means an array containing only strings.

const chaiFlavours: string[] = [
    "Masala",
    "Adrak"
];


// This is valid:
//
// chaiFlavours.push("Ginger");


// This would give an error:
//
// chaiFlavours.push(10);
// ❌ number cannot be added to string[]


console.log(chaiFlavours);


// ============================================================
// 2. ARRAY OF NUMBERS
// ============================================================

// `number[]` means an array containing only numbers.

// Original code had:
// const chaiPrice: numberp[]

// `numberp` is incorrect.
// It should be `number[]`.

const chaiPrice: number[] = [
    10,
    20
];

console.log(chaiPrice);


// ============================================================
// 3. ARRAY<T> SYNTAX
// ============================================================

// Another way to define an array is:
//
// Array<number>
//
// Both of these mean the same thing:
//
// number[]
// Array<number>

const rating: Array<number> = [
    4.5,
    5.0
];

console.log(rating);


// ============================================================
// 4. ARRAY OF OBJECTS
// ============================================================

// Create a custom type for Chai.

type Chai = {
    name: string;
    price: number;
};


// `Chai[]` means:
// An array containing Chai objects.

const menu: Chai[] = [

    {
        name: "Masala",
        price: 24
    },

    {
        name: "Adrak",
        price: 25
    }
];


console.log(menu);


// ============================================================
// 5. READONLY ARRAY
// ============================================================

// `readonly string[]` means:
// - We can read the array
// - We CANNOT modify the array

const cities: readonly string[] = [
    "Delhi",
    "Jaipur"
];


console.log(cities);


// This is NOT allowed:
//
// cities.push("Lahore");
// ❌ Property 'push' does not exist on readonly array


// This is NOT allowed:
//
// cities[0] = "Islamabad";
// ❌ Cannot assign to index of readonly array


// ============================================================
// 6. MULTIDIMENSIONAL ARRAY
// ============================================================

// `number[][]` means:
// An array containing arrays of numbers.

const table: number[][] = [

    [1, 2, 3],

    [4, 5, 6]
];


console.log(table);


// Accessing values:

console.log(table[0][0]); // 1

console.log(table[1][2]); // 6


// ============================================================
// 7. TUPLE
// ============================================================

// A tuple is an array with a FIXED structure.
//
// `[string, number]` means:
// index 0 -> string
// index 1 -> number

let chaiTuple: [string, number];


// Correct assignment

chaiTuple = [
    "Masala",
    20
];


console.log(chaiTuple);


// This would be invalid:
//
// chaiTuple = [20, "Masala"];
//
// ❌ First value must be string
// ❌ Second value must be number


// ============================================================
// 8. TUPLE WITH THREE VALUES
// ============================================================

// This tuple requires:
//
// index 0 -> string
// index 1 -> number
// index 2 -> boolean

let userInfo: [string, number, boolean];


// This is INVALID because boolean is missing:
//
// userInfo = [
//     "Hitesh",
//     100
// ];
//
// ❌ Tuple requires exactly three values.


userInfo = [
    "Hitesh",
    100,
    true
];


console.log(userInfo);


// ============================================================
// 9. READONLY TUPLE
// ============================================================

// `readonly` prevents modification of the tuple.

const location: readonly [number, number] = [
    28.66,
    32.22
];


console.log(location);


// These are NOT allowed:
//
// location[0] = 30;
// ❌ Cannot modify readonly tuple
//
// location.push(40);
// ❌ Cannot push into readonly tuple


// ============================================================
// 10. NAMED TUPLE ELEMENTS
// ============================================================

// We can give names to tuple elements.
//
// name -> string
// price -> number

const chaiItems: [name: string, price: number] = [
    "Masala",
    25
];


console.log(chaiItems);


// We can access them normally:

console.log(chaiItems[0]); // Masala

console.log(chaiItems[1]); // 25


// ============================================================
// 11. ENUM
// ============================================================

// An enum allows us to define a set of named constants.
//
// By default, numeric enum values start at 0.

enum CupSize {

    SMALL,   // 0

    MEDIUM,  // 1

    LARGE     // 2
}


const size = CupSize.LARGE;


console.log(size); // 2


// We can also access the enum name:

console.log(CupSize.SMALL);  // 0
console.log(CupSize.MEDIUM); // 1
console.log(CupSize.LARGE);  // 2


// ============================================================
// 12. ENUM WITH CUSTOM NUMBERS
// ============================================================

// We can manually assign the first value.
//
// PENDING = 100
// SERVED = 101
// CANCELLED = 102

enum Status {

    PENDING = 100,

    SERVED,

    CANCELLED
}


console.log(Status.PENDING);   // 100
console.log(Status.SERVED);    // 101
console.log(Status.CANCELLED); // 102


// ============================================================
// 13. STRING ENUM
// ============================================================

// Enums can also contain strings.

enum ChaiTypes {

    MASALA = "masala",

    GINGER = "ginger"
}


console.log(ChaiTypes.MASALA);
console.log(ChaiTypes.GINGER);


// ============================================================
// 14. USING ENUM AS A FUNCTION PARAMETER
// ============================================================

// The function only accepts values from ChaiTypes.

function makeChai(type: ChaiTypes) {

    console.log(`Making: ${type}`);
}


// Correct

makeChai(ChaiTypes.MASALA);

makeChai(ChaiTypes.GINGER);


// This would be invalid:
//
// makeChai("coffee");
//
// ❌ "coffee" is not a ChaiTypes value


// ============================================================
// 15. MIXED ENUM
// ============================================================

// An enum can contain different types,
// although mixing types is generally discouraged.

enum Random {

    ID = 1,

    NAME = "chai"
}


console.log(Random.ID);
console.log(Random.NAME);


// ============================================================
// 16. CONST ENUM
// ============================================================

// `const enum` is optimized by TypeScript.
//
// It is useful when you don't need the enum object
// at runtime.

const enum Sugar {

    LOW = 1,

    MEDIUM = 2,

    HIGH = 3
}


const s = Sugar.HIGH;


console.log(s); // 3


// ============================================================
// 17. TUPLE + ARRAY METHODS
// ============================================================

// A tuple has a fixed type/structure,
// but TypeScript still allows some array methods.

let t: [string, number] = [
    "chai",
    10
];


// IMPORTANT:
//
// TypeScript allows `push()` here.
//
// Even though the tuple is:
//
// [string, number]
//
// push() can add another value at runtime.


t.push("extra");


console.log(t);


// The resulting value can become:
//
// ["chai", 10, "extra"]
//
// However, you should be careful with this behavior.
// If you want a tuple that cannot be modified,
// use `readonly`:

const readonlyTuple: readonly [string, number] = [
    "chai",
    10
];


// readonlyTuple.push("extra");
// ❌ Not allowed


// ============================================================
// SUMMARY
// ============================================================


// string array:
//
// string[]


// number array:
//
// number[]


// Generic array:
//
// Array<number>


// Array of objects:
//
// Chai[]


// Readonly array:
//
// readonly string[]


// Two-dimensional array:
//
// number[][]


// Tuple:
//
// [string, number]


// Readonly tuple:
//
// readonly [number, number]


// Named tuple:
//
// [name: string, price: number]


// Numeric enum:
//
// enum CupSize { SMALL, MEDIUM, LARGE }


// String enum:
//
// enum ChaiTypes {
//     MASALA = "masala",
//     GINGER = "ginger"
// }


// Const enum:
//
// const enum Sugar {
//     LOW = 1,
//     MEDIUM = 2,
//     HIGH = 3
// }