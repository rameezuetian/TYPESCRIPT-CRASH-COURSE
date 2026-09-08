# TypeScript Crash Course 🚀

A complete collection of my **TypeScript learning journey and practice code**, following the **Chai aur Code TypeScript series**.

This repository contains my daily practice, examples, experiments, and exercises that I completed while learning TypeScript from fundamentals to practical usage with React.

---

## 📌 About This Repository

I created this repository while completing the **TypeScript series by Chai aur Code**.

The goal was to build a strong foundation in TypeScript and understand how TypeScript improves JavaScript development through:

* Static typing
* Interfaces
* Type aliases
* Functions
* Object-oriented programming
* Generics
* Type safety
* Modern TypeScript development
* TypeScript with React

The repository is organized into **Day 1 → Day 11**, along with a separate **React + TypeScript** section.

---

## 🗂️ Repository Structure

```text
TYPESCRIPT-CRASH-COURSE/
│
├── day-1/
├── day-2/
├── day-3/
├── day-4/
├── day-5/
├── day-6/
├── day-7/
├── day-8/
├── day-9/
├── day-10/
├── day-11/
│
├── React-With-TypeScript/
│   └── reactTypscript/
│
├── .gitignore
└── README.md
```

---

## 📚 What I Learned

During this learning journey, I worked with concepts such as:

### 🔹 TypeScript Fundamentals

* What is TypeScript?
* TypeScript vs JavaScript
* Type annotations
* Type inference
* Primitive types
* Arrays
* Objects
* Tuples
* Functions

### 🔹 Type System

* Union types
* Intersection types
* Literal types
* Type aliases
* Interfaces
* Optional properties
* Readonly properties
* Type narrowing
* Type guards

### 🔹 Functions

* Function type annotations
* Optional parameters
* Default parameters
* Function return types
* Function interfaces
* Callback functions

### 🔹 Object-Oriented Programming

* Classes
* Constructors
* Access modifiers
* `public`
* `private`
* `protected`
* `readonly`
* Inheritance
* Abstract classes
* Method overriding
* Static members
* Getters and setters

### 🔹 Advanced TypeScript

* Generics
* Generic functions
* Generic interfaces
* Type constraints
* Reusable types
* Type-safe programming

### 🔹 React + TypeScript

The repository also contains a **React with TypeScript** section where I practiced applying TypeScript concepts to React development.

---

## 💻 Example

One of the concepts I practiced was defining interfaces:

```typescript
interface Chai {
    flavour: string;
    price: number;
    milk?: boolean;
}

const masala: Chai = {
    flavour: "Masala",
    price: 30
};
```

I also practiced function interfaces:

```typescript
interface DiscountCalculate {
    (price: number): number;
}

const apply50: DiscountCalculate = (price) => price * 0.5;
```

These examples demonstrate how TypeScript can provide better type safety and make code easier to understand and maintain.

---

## ⚛️ React With TypeScript

After learning the TypeScript fundamentals, I also started applying TypeScript concepts with React.

The repository contains:

```text
React-With-TypeScript/
└── reactTypscript/
```

This section represents the transition from learning TypeScript syntax to using TypeScript in a practical frontend environment.

---

## 🛠️ Technologies Used

* TypeScript
* JavaScript
* React
* Node.js
* npm
* VS Code
* Git & GitHub

---

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/rameezuetian/TYPESCRIPT-CRASH-COURSE.git
```

Move into the project:

```bash
cd TYPESCRIPT-CRASH-COURSE
```

Install dependencies if required:

```bash
npm install
```

Compile TypeScript:

```bash
npx tsc
```

For projects containing their own `package.json`, navigate into the respective directory and follow its setup instructions.

---

## 🎯 Learning Progress

| Day                | Status      |
| ------------------ | ----------- |
| Day 1              | ✅ Completed |
| Day 2              | ✅ Completed |
| Day 3              | ✅ Completed |
| Day 4              | ✅ Completed |
| Day 5              | ✅ Completed |
| Day 6              | ✅ Completed |
| Day 7              | ✅ Completed |
| Day 8              | ✅ Completed |
| Day 9              | ✅ Completed |
| Day 10             | ✅ Completed |
| Day 11             | ✅ Completed |
| React + TypeScript | ✅ Practiced |

---



---

## 🙏 Acknowledgment

Special thanks to **Chai aur Code** for the TypeScript learning series and practical teaching approach.

This repository represents my own practice and learning while following the series.

---

## 👨‍💻 Author

**Muhammad Rameez**

GitHub: [@rameezuetian](https://github.com/rameezuetian)

---

## ⭐ Support

If you find this repository useful, feel free to **star ⭐ the repository** and explore the code.

> **Learn → Practice → Build → Repeat 🚀**
