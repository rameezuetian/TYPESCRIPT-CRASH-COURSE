//
// 1. TYPE NARROWING WITH typeof
//

function getChai(kind: string | number) {
    // TypeScript checks whether kind is a string
    if (typeof kind === "string") {
        return `Making ${kind} chai ...`;
    }

    // Here TypeScript knows kind is a number
    return `Chai order ${kind}`;
}


//
// 2. OPTIONAL PARAMETER + TRUTHY CHECK
//

function serveChai(msg?: string) {
    // msg can be string OR undefined
    if (msg) {
        return `Serving ${msg}`;
    }

    // Default message when msg is undefined
    return `Serving default masala chai`;
}


//
// 3. UNION TYPES + LITERAL TYPES
//

function orderChai(
    size: "small" | "medium" | "large" | number
) {
    // TypeScript narrows size to "small"
    if (size === "small") {
        return `small cutting chai...`;
    }

    // size can be "medium" or "large"
    if (size === "medium" || size === "large") {
        return `make extra chai`;
    }

    // At this point size is treated as a number
    return `chai order #${size}`;
}


//
// 4. INSTANCEOF NARROWING
//

class KulhadChai {
    serve() {
        return `Serving kulhad chai`;
    }
}


class CuttingChai {
    serve() {
        return `Serving cutting chai`;
    }
}


function serve(Chai: KulhadChai | CuttingChai) {

    // instanceof checks which class the object belongs to
    if (Chai instanceof KulhadChai) {
        return Chai.serve();
    }

    // If it is not KulhadChai,
    // TypeScript knows it is CuttingChai
    return Chai.serve();
}


//
// 5. OBJECT TYPE
//

type ChaiOrder = {
    type: string;
    sugar: number;
};


// 
// 6. CUSTOM TYPE GUARD
//

function isChaiOrder(obj: unknown): obj is ChaiOrder {

    return (
        // Check that obj is an object
        typeof obj === "object" &&

        // Check that obj is not null
        obj !== null &&

        // Check that "type" property exists
        "type" in obj &&

        // Check that "sugar" property exists
        "sugar" in obj &&

        // Check type of type property
        typeof obj.type === "string" &&

        // Check type of sugar property
        typeof obj.sugar === "number"
    );
}


//
// 7. USING A CUSTOM TYPE GUARD
//

function serveOrder(item: ChaiOrder | string) {

    // isChaiOrder() tells TypeScript
    // that item is ChaiOrder
    if (isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar}`;
    }

    // Otherwise TypeScript knows item is a string
    return `Serving custom chai: ${item}`;
}


//
// 8. DISCRIMINATED UNION
//

type MasalaChai = {
    // "type" is the discriminant
    type: "masala";
    spiceLevel: number;
};


type GingerChai = {
    type: "ginger";
    spiceLevel: number;
};


type ElaichiChai = {
    type: "elaichi";
    spiceLevel: number;
};


// Chai can be one of these three types
type Chai = MasalaChai | GingerChai | ElaichiChai;


// 
// 9. DISCRIMINATED UNION WITH switch
//

function makeChai(order: Chai) {

    // TypeScript uses order.type
    // to determine the exact type of order
    switch (order.type) {

        case "masala":
            return `Masala Chai`;

        case "elaichi":
            return `Elaichi Chai`;

        case "ginger":
            return `Ginger Chai`;
    }
}


//
// 10. "in" OPERATOR NARROWING
//

function brew(order: MasalaChai | GingerChai) {

    // Checks whether spiceLevel exists in order
    if ("spiceLevel" in order) {
        return `Brewing ${order.type} chai with spice level ${order.spiceLevel}`;
    }
}


//
// 11. TYPE GUARD FOR STRING ARRAY
//

function isStringArray(arr: unknown): arr is string[] {

    // First check if it is an array
    // Then check that every element is a string
    return (
        Array.isArray(arr) &&
        arr.every((item) => typeof item === "string")
    );
}