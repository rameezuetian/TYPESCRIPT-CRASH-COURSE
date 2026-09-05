// ============================================================
// TYPESCRIPT INTERFACES & GENERICS
// ============================================================


// ============================================================
// 1. BASIC INTERFACE
// ============================================================

// An interface defines the structure that an object must follow.
//
// A Chai object must have:
// - flavour -> string
// - price   -> number
//
// milk is optional because of `?`.

interface Chai {

    flavour: string;

    price: number;

    milk?: boolean;
}


// Create an object that follows the Chai interface.

const masala: Chai = {

    flavour: "Masala",

    price: 30
};


console.log(masala);


// `milk` is optional, so this is also valid:

const gingerChai: Chai = {

    flavour: "Ginger",

    price: 35,

    milk: true
};


console.log(gingerChai);


// ============================================================
// 2. READONLY PROPERTY IN INTERFACE
// ============================================================

// `readonly` means the property cannot be changed
// after the object has been created.

interface Shop {

    readonly id: number;

    name: string;
}


const s: Shop = {

    id: 1,

    name: "Chai Code Cafe"
};


console.log(s);


// We CAN change name because it is not readonly.

s.name = "New Chai Cafe";


// We CANNOT change id:
//
// s.id = 2;
//
// ❌ Cannot assign to 'id' because it is readonly.


console.log(s);


// ============================================================
// 3. FUNCTION INTERFACE
// ============================================================

// An interface can describe the structure of a function.
//
// This means:
//
// The function:
// - receives a number
// - returns a number

interface DiscountCalculate {

    (price: number): number;
}


// Create a function that follows DiscountCalculate.

const apply50: DiscountCalculate = (p) => {

    return p * 0.5;
};


console.log(apply50(100));


// Result:
//
// 50
//
// Because:
//
// 100 * 0.5 = 50


// ============================================================
// 4. INTERFACE FOR AN OBJECT WITH METHODS
// ============================================================

// An interface can require methods.

interface TeaMachine {

    start(): void;

    stop(): void;
}


// Create an object that implements the TeaMachine structure.

const machine: TeaMachine = {

    start() {

        console.log("Start");
    },

    stop() {

        console.log("Stop");
    }
};


// Call the methods.

machine.start();

machine.stop();


// IMPORTANT:
//
// Your original code used:
//
// start() {
//     ...
// };
//
// stop() {
//     ...
// }
//
// Inside an object literal, use a COMMA:
//
// start() {
//     ...
// },
//
// stop() {
//     ...
// }


// ============================================================
// 5. INDEX SIGNATURE
// ============================================================

// An index signature allows an object to have
// many dynamic property names.
//
// Here:
//
// [flavor: string]: number
//
// means:
// - property names must be strings
// - property values must be numbers

interface ChaiRatings {

    [flavor: string]: number;
}


const ratings: ChaiRatings = {

    masala: 4.5,

    ginger: 4.5,

    lemon: 4.2,

    elaichi: 4.8
};


console.log(ratings);


// We can access properties dynamically.

console.log(ratings["masala"]);

console.log(ratings["ginger"]);


// This would be invalid:
//
// const badRatings: ChaiRatings = {
//     masala: "excellent"
// };
//
// ❌ Value must be a number.


// ============================================================
// 6. INTERFACE MERGING / DECLARATION MERGING
// ============================================================

// TypeScript allows us to declare the SAME interface
// multiple times.
//
// TypeScript automatically combines them.

interface User {

    name: string;
}


interface User {

    age: number;
}


// Now User contains BOTH:
//
// name
// age

const u: User = {

    name: "Hitesh",

    age: 42
};


console.log(u);


// ============================================================
// 7. INTERFACE EXTENSION
// ============================================================

// Interface A

interface A {

    a: string;
}


// Interface B

interface B {

    b: string;
}


// Interface C extends BOTH A and B.
//
// Therefore C must contain:
// a
// b

interface C extends A, B {}


// Create an object of C.

const c: C = {

    a: "Hello",

    b: "World"
};


console.log(c);


// ============================================================
// 8. GENERICS
// ============================================================

// Generics allow us to write reusable code
// that works with different types.
//
// `<T>` is a type parameter.
//
// T can become:
// string
// number
// object
// etc.

function wrapInArray<T>(item: T): T[] {

    return [item];
}


// TypeScript automatically determines T.

const stringArray = wrapInArray("masala");

const numberArray = wrapInArray(42);

const objectArray = wrapInArray({
    flavor: "Ginger"
});


console.log(stringArray);

console.log(numberArray);

console.log(objectArray);


// ============================================================
// 9. HOW GENERICS WORK
// ============================================================

// When we write:
//
// wrapInArray("masala")
//
// TypeScript understands:
//
// T = string
//
// So the function becomes approximately:
//
// (item: string) => string[]


// When we write:
//
// wrapInArray(42)
//
// TypeScript understands:
//
// T = number
//
// So the function becomes:
//
// (item: number) => number[]


// ============================================================
// 10. MULTIPLE GENERIC TYPES
// ============================================================

// We can have more than one generic type.
//
// A -> type of first value
// B -> type of second value

function pair<A, B>(a: A, b: B): [A, B] {

    return [a, b];
}


// A = string
// B = string

const pair1 = pair(
    "masala",
    "test"
);


console.log(pair1);


// A = string
// B = object

const pair2 = pair(
    "masala",
    {
        flavor: "Ginger"
    }
);


console.log(pair2);


// A = number
// B = boolean

const pair3 = pair(
    10,
    true
);


console.log(pair3);


// ============================================================
// 11. GENERIC INTERFACE
// ============================================================

// Interfaces can also use generics.
//
// Box<T> can contain ANY type.

interface Box<T> {

    content: T;
}


// Box<number>
//
// T becomes number.

const numberBox: Box<number> = {

    content: 10
};


console.log(numberBox);


// Box<string>
//
// T becomes string.

const stringBox: Box<string> = {

    content: "Masala Chai"
};


console.log(stringBox);


// Box<boolean>
//
// T becomes boolean.

const booleanBox: Box<boolean> = {

    content: true
};


console.log(booleanBox);


// ============================================================
// 12. GENERIC FUNCTION WITH CONSTRAINT
// ============================================================

// Sometimes we don't want T to accept every type.
//
// We can use `extends` to restrict T.

function getLength<T extends { length: number }>(item: T): number {

    return item.length;
}


// String has a length property.

console.log(getLength("Masala"));


// Array has a length property.

console.log(getLength(["Masala", "Ginger"]));


// This would NOT work:
//
// getLength(42);
//
// ❌ number does not have a length property.


// ============================================================
// SUMMARY
// ============================================================
//
// INTERFACE
//
// interface Chai {
//     flavour: string;
//     price: number;
// }
//
// Defines the structure of an object.
//
//
// OPTIONAL PROPERTY
//
// milk?: boolean;
//
// Property is optional.
//
//
// READONLY
//
// readonly id: number;
//
// Property cannot be reassigned.
//
//
// FUNCTION INTERFACE
//
// interface DiscountCalculate {
//     (price: number): number;
// }
//
// Defines the structure of a function.
//
//
// METHOD INTERFACE
//
// interface TeaMachine {
//     start(): void;
//     stop(): void;
// }
//
// Requires an object to have those methods.
//
//
// INDEX SIGNATURE
//
// [flavor: string]: number;
//
// Allows dynamic string keys with number values.
//
//
// INTERFACE MERGING
//
// interface User {
//     name: string;
// }
//
// interface User {
//     age: number;
// }
//
// Both declarations are combined.
//
//
// INTERFACE EXTENSION
//
// interface C extends A, B {}
//
// C inherits properties from A and B.
//
//
// GENERICS
//
// function wrapInArray<T>(item: T): T[]
//
// Makes reusable, type-safe functions.
//
//
// MULTIPLE GENERICS
//
// function pair<A, B>(a: A, b: B): [A, B]
//
// Allows multiple independent types.
//
//
// GENERIC INTERFACE
//
// interface Box<T> {
//     content: T;
// }
//
// Allows an interface to work with different types.