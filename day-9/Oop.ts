// ============================================================
// TYPESCRIPT CLASSES
// Constructors, Access Modifiers, Getters/Setters,
// Static Members, Abstract Classes & Composition
// ============================================================


// ============================================================
// 1. CLASS AND CONSTRUCTOR
// ============================================================

// A class is a blueprint for creating objects.

class Chai {

    flavour: string;

    price: number;


    // Constructor runs automatically when we create
    // an object using `new`.

    constructor(flavour: string, price: number) {

        this.flavour = flavour;

        this.price = price;
    }


    // Method

    describe() {

        console.log(
            `${this.flavour} chai costs ${this.price}`
        );
    }
}


// Create an object

const masalaChai = new Chai("Masala", 25);

console.log(masalaChai);

masalaChai.describe();


// IMPORTANT:
//
// You cannot have two constructors with the same
// implementation in a TypeScript class.
//
// Your original code had:
//
// constructor(flavour: string, price: number) { ... }
//
// constructor(flavour: string, price: number) { ... }
//
// ❌ Duplicate constructor implementation.
//
// A class can have only ONE constructor implementation.


// ============================================================
// 2. ACCESS MODIFIERS
// ============================================================
//
// TypeScript has three main access modifiers:
//
// public
// private
// protected
//
// public    -> accessible everywhere
// private   -> accessible only inside the class
// protected -> accessible inside class + child classes


class ChaiShop {

    // PUBLIC
    //
    // Can be accessed from anywhere.

    public flavour: string = "Masala";


    // PRIVATE
    //
    // Can ONLY be accessed inside ChaiShop.

    private secretIngredients = "Cardamom";


    // This method is public by default.
    //
    // It can access the private property because
    // it is inside the same class.

    reveal() {

        return this.secretIngredients;
    }
}


const shopChai = new ChaiShop();

console.log(shopChai.flavour);


// This works because flavour is public.

console.log(shopChai.reveal());


// This would NOT work:
//
// console.log(shopChai.secretIngredients);
//
// ❌ secretIngredients is private.


// ============================================================
// 3. PROTECTED
// ============================================================

// `protected` means:
//
// - The property can be accessed inside the class.
// - The property can be accessed by child classes.
// - The property CANNOT be accessed directly outside.


class Shop {

    protected shopName = "Chai Corner";
}


// Branch inherits from Shop.

class Branch extends Shop {

    getName() {

        // We can access shopName here because
        // Branch is a child class of Shop.

        return this.shopName;
    }
}


const branch = new Branch();

console.log(branch.getName());


// This would NOT work:
//
// console.log(branch.shopName);
//
// ❌ shopName is protected.


// ============================================================
// 4. PRIVATE FIELD USING #
// ============================================================

// JavaScript/TypeScript also supports private fields
// using the `#` syntax.
//
// This is runtime private.

class Wallet {

    #balance = 100;


    getBalance() {

        return this.#balance;
    }
}


const wallet = new Wallet();

console.log(wallet.getBalance());


// This would NOT work:
//
// console.log(wallet.#balance);
//
// ❌ Private field cannot be accessed outside the class.


// ============================================================
// 5. READONLY
// ============================================================

// `readonly` means the property can be assigned,
// but after initialization it cannot be changed.

class Cup {

    readonly capacity: number;


    constructor(capacity: number) {

        this.capacity = capacity;
    }
}


const cup = new Cup(250);

console.log(cup.capacity);


// This would NOT work:
//
// cup.capacity = 500;
//
// ❌ Cannot assign to readonly property.


// ============================================================
// 6. GETTER
// ============================================================

// A getter allows us to access a method like a property.
//
// Instead of:
//
// c.getSugar()
//
// we can write:
//
// c.sugar


class ModernChai {

    private _sugar = 2;


    // GETTER

    get sugar() {

        return this._sugar;
    }


    // SETTER

    set sugar(value: number) {

        if (value > 5) {

            throw new Error("Too Sweet");
        }

        this._sugar = value;
    }
}


const modernChai = new ModernChai();


// Getter

console.log(modernChai.sugar);


// Setter

modernChai.sugar = 3;

console.log(modernChai.sugar);


// This will throw an error:
//
// modernChai.sugar = 7;
//
// ❌ Too Sweet


// ============================================================
// 7. STATIC PROPERTY
// ============================================================

// A static property belongs to the CLASS itself,
// not to individual objects.
//
// We access it using:
//
// ClassName.property


class EkChai {

    static shopName = "Chai Code Cafe";


    constructor(public flavour: string) {}
}


console.log(EkChai.shopName);


// Create objects

const chai1 = new EkChai("Masala");

const chai2 = new EkChai("Ginger");


console.log(chai1.flavour);

console.log(chai2.flavour);


// `shopName` belongs to the class:
//
// EkChai.shopName
//
// Not:
//
// chai1.shopName


// ============================================================
// 8. PARAMETER PROPERTIES
// ============================================================

// TypeScript provides a shortcut.
//
// Instead of writing:
//
// class Example {
//
//     flavour: string;
//
//     constructor(flavour: string) {
//         this.flavour = flavour;
//     }
// }
//
// We can write:

class SimpleChai {

    constructor(public flavour: string) {}
}


const simple = new SimpleChai("Masala");

console.log(simple.flavour);


// `public flavour: string` automatically:
//
// 1. Creates the property
// 2. Assigns the constructor parameter to it


// ============================================================
// 9. PRIVATE PARAMETER PROPERTY
// ============================================================

class SecretChai {

    constructor(
        private secret: string
    ) {}


    revealSecret() {

        return this.secret;
    }
}


const secretChai = new SecretChai("Cardamom");

console.log(secretChai.revealSecret());


// This would NOT work:
//
// console.log(secretChai.secret);
//
// ❌ secret is private.


// ============================================================
// 10. ABSTRACT CLASS
// ============================================================

// An abstract class cannot be directly instantiated.
//
// It is designed to be inherited by other classes.


abstract class Drink {

    // Abstract method.
//
// Child classes MUST provide an implementation.

    abstract make(): void;
}


// MyChai extends Drink.

class MyChai extends Drink {

    // Implementation of abstract method.

    make(): void {

        console.log("Brewing chai...");
    }
}


const myChai = new MyChai();

myChai.make();


// This would NOT work:
//
// const drink = new Drink();
//
// ❌ Cannot create an instance of an abstract class.


// ============================================================
// 11. COMPOSITION
// ============================================================

// Composition means one class HAS another class.
//
// Example:
//
// ChaiMaker HAS a Heater.
//
// This is called a "has-a" relationship.


class Heater {

    heat(): void {

        console.log("Heating...");
    }
}


class ChaiMaker {

    private heater: Heater;


    constructor(heater: Heater) {

        this.heater = heater;
    }


    make(): void {

        // Call the heater's heat method.

        this.heater.heat();

        console.log("Making chai...");
    }
}


// Create a Heater

const heater = new Heater();


// Give the Heater to ChaiMaker

const maker = new ChaiMaker(heater);


// Make chai

maker.make();


// ============================================================
// 12. COMPOSITION WITH PARAMETER PROPERTY
// ============================================================

// We can make the previous example shorter
// using a parameter property.

class ModernChaiMaker {

    constructor(
        private heater: Heater
    ) {}


    make(): void {

        this.heater.heat();

        console.log("Making modern chai...");
    }
}


const modernMaker = new ModernChaiMaker(
    new Heater()
);


modernMaker.make();


// ============================================================
// SUMMARY
// ============================================================
//
// class
// -> Blueprint for creating objects.
//
// constructor
// -> Runs when an object is created.
//
// public
// -> Accessible everywhere.
//
// private
// -> Accessible only inside the class.
//
// protected
// -> Accessible inside the class and child classes.
//
// #private
// -> JavaScript runtime-private field.
//
// readonly
// -> Cannot be changed after initialization.
//
// getter
// -> Read a method like a property.
//
// setter
// -> Control how a property is changed.
//
// static
// -> Belongs to the class rather than an object.
//
// abstract
// -> Base class that cannot be instantiated directly.
//
// extends
// -> Inherit from another class.
//
// implements
// -> Make a class follow an interface.
//
// composition
// -> One class contains/uses another class.
//
// parameter property
// -> Shortcut for declaring and initializing
//    constructor properties.