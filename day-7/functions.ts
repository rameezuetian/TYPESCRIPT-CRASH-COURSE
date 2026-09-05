// ============================================================
// TYPESCRIPT FUNCTIONS
// ============================================================


// ============================================================
// 1. FUNCTION PARAMETERS
// ============================================================

// `type` must be a string
// `cups` must be a number

function makeChai(type: string, cups: number) {

    console.log(`Making ${cups} cups of ${type}`);
}


// Calling the function

makeChai("masala", 2);


// ============================================================
// 2. FUNCTION RETURN TYPE
// ============================================================

// `: number` means this function MUST return a number.

function getChaiPrice(): number {

    return 32;
}


const price = getChaiPrice();

console.log("Chai price:", price);


// ============================================================
// 3. RETURNING DIFFERENT VALUES
// ============================================================

// If a function can return a string OR null,
// we should specify both possibilities.
//
// `string | null` means:
// - string is allowed
// - null is allowed

function makeOrder(order: string): string | null {

    // If order is an empty string,
    // return null.

    if (!order) {
        return null;
    }

    return order;
}


console.log(makeOrder("Masala Chai"));

console.log(makeOrder(""));


// ============================================================
// 4. VOID RETURN TYPE
// ============================================================

// `void` means the function does not return
// a meaningful value.

function logChai(): void {

    console.log("Chai is ready");
}


logChai();


// ============================================================
// 5. OPTIONAL PARAMETERS
// ============================================================

// `?` makes a parameter optional.
//
// type?: string
//
// This means `type` can be:
// - string
// - undefined

function orderChai(type?: string) {

    if (type) {

        console.log(`Ordering ${type} chai`);

    } else {

        console.log("Ordering chai");
    }
}


// We can call the function WITHOUT an argument.

orderChai();


// We can also provide an argument.

orderChai("Ginger");


// ============================================================
// 6. DEFAULT PARAMETERS
// ============================================================

// Instead of checking for undefined,
// we can provide a default value.
//
// If no value is provided,
// `type` automatically becomes "Masala".

function orderMasalaChai(type: string = "Masala") {

    console.log(`Ordering ${type} chai`);
}


// No argument -> uses "Masala"

orderMasalaChai();


// Argument provided -> uses the provided value

orderMasalaChai("Ginger");


// ============================================================
// 7. OPTIONAL vs DEFAULT PARAMETER
// ============================================================

// OPTIONAL PARAMETER
//
// function orderChai(type?: string)
//
// If no argument is provided,
// type will be undefined.


// DEFAULT PARAMETER
//
// function orderChai(type: string = "Masala")
//
// If no argument is provided,
// type will be "Masala".


// ============================================================
// 8. OBJECT AS A FUNCTION PARAMETER
// ============================================================

// A function parameter can be an object.
//
// The object must contain:
//
// type  -> string
// sugar -> number
// size  -> "small" OR "large"

function createChai(order: {
    type: string;
    sugar: number;
    size: "small" | "large";
}): number {

    console.log("Creating chai:");
    console.log(order);

    // Function returns a number

    return 4;
}


// Calling createChai()

const cupsCreated = createChai({
    type: "Masala",
    sugar: 2,
    size: "large"
});


console.log("Cups created:", cupsCreated);


// ============================================================
// 9. OBJECT PARAMETER WITH DIFFERENT VALUES
// ============================================================

createChai({
    type: "Ginger",
    sugar: 1,
    size: "small"
});


// This would produce an error:
//
// createChai({
//     type: "Lemon",
//     sugar: 2,
//     size: "medium"
// });
//
// ❌ "medium" is not allowed.
//
// size can ONLY be:
// "small"
// "large"


// ============================================================
// 10. FUNCTION TYPE USING A TYPE ALIAS
// ============================================================

// We can create a reusable type for a function.

type ChaiMaker = (type: string, cups: number) => void;


// A function assigned to ChaiMaker must follow
// the same parameter and return types.

const prepareChai: ChaiMaker = (type, cups) => {

    console.log(`Preparing ${cups} cups of ${type} chai`);
};


prepareChai("Masala", 3);


// ============================================================
// 11. FUNCTION TYPE THAT RETURNS A NUMBER
// ============================================================

type PriceCalculator = (cups: number) => number;


const calculatePrice: PriceCalculator = (cups) => {

    return cups * 32;
};


console.log(calculatePrice(3));


// ============================================================
// 12. FUNCTION WITH MULTIPLE PARAMETERS
// ============================================================

function calculateChaiPrice(
    type: string,
    cups: number,
    sugar: number
): number {

    console.log(`Type: ${type}`);
    console.log(`Cups: ${cups}`);
    console.log(`Sugar: ${sugar}`);

    return cups * 32;
}


const total = calculateChaiPrice(
    "Masala",
    2,
    2
);


console.log("Total:", total);