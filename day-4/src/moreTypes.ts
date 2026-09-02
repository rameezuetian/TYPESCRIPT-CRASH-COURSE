//
// 1. TYPE ASSERTION
//

let response: any = "42";

// We tell TypeScript:
// "Treat response as a string."
//
// IMPORTANT:
// `as string` does NOT convert the value into a string.
// It only tells TypeScript what type we expect.
//
// .length = 2
let numericLength: number = (response as string).length;

console.log(numericLength); // 2


//
// 2. TYPE ASSERTION WITH JSON.parse()
//

type Book = {
    name: string;
};

let bookString = '{"name":"Who Moved My Cheese"}';

// JSON.parse() normally returns `any`.
//
// `as Book` tells TypeScript that we expect
// the parsed object to have the Book structure.
let bookObject = JSON.parse(bookString) as Book;

console.log(bookObject);
console.log(bookObject.name);


// 
// 3. DOM TYPE ASSERTION
//

// getElementById() returns:
// HTMLElement | null
//
// We are telling TypeScript:
// "I know this element is an HTMLInputElement."
const inputElement = document.getElementById(
    "username"
) as HTMLInputElement;


// Now TypeScript allows input-specific properties
let inputValue: string = inputElement.value;

console.log(inputValue);


// 
// 4. `any` TYPE
//

let value: any;

// `any` can hold ANY type
value = "chai";

value = [1, 2, 3, 4];

value = 2.5;

// TypeScript does NOT complain about this.
//
// Why?
// Because `value` is `any`.
//
// But at runtime this will cause an error because
// number does not have a toUpperCase() method.
value.toUpperCase();


// 
// 5. `unknown` TYPE
//

let newValue: unknown;

// unknown can also store ANY type
newValue = "chai";

newValue = [1, 2, 3, 4];

newValue = 2.5;

// ❌ ERROR
//
// You cannot directly call methods on `unknown`.
//
// newValue.toUpperCase();


// 
// 6. NARROWING `unknown` WITH typeof
//

// Before using a value of type unknown,
// we first check its actual type.

if (typeof newValue === "string") {

    // Now TypeScript knows:
    // newValue is a string

    console.log(newValue.toUpperCase());
}


//
// 7. IMPORTANT DIFFERENCE BETWEEN any AND unknown
//

/*
    any:

    let value: any = 10;

    value.toUpperCase();

    TypeScript → No error
    Runtime    → Error


    unknown:

    let value: unknown = 10;

    value.toUpperCase();

    TypeScript → Error

    We must first check the type.
*/


//
// 8. ERROR HANDLING
//

try {

    // Some code that could throw an error
    throw new Error("Something went wrong");

} catch (error) {

    // In modern TypeScript, catch variables are treated
    // as `unknown`.

    // So we check whether error is an Error object.
    if (error instanceof Error) {

        console.log(error.message);
    }

    console.log("Error:", error);
}


//
// 9. TYPE ASSERTION WITH unknown
//

const data: unknown = "chai aur code";

// TypeScript does not automatically know that
// data is a string.
//
// We can use a type assertion:
const strData: string = data as string;

console.log(strData);


// 
// 10. LITERAL UNION TYPE
//

type Role = "admin" | "user" | "superadmin";


// The function only accepts one of these values:
// "admin"
// "user"
// "superadmin"

function redirectBasedOnRole(role: Role): void {

    if (role === "admin") {

        console.log("Redirecting to admin dashboard");

        return;
    }


    if (role === "user") {

        console.log("Redirecting to user dashboard");

        return;
    }


    // At this point TypeScript knows that
    // role can only be "superadmin".

    if (role === "superadmin") {

        console.log("Redirecting to superadmin dashboard");

        return;
    }
}