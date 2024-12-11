export const QUESTIONS = [
	{
		id: 1,
		question: "What is HTML ?",
		answer:
			"HTML stands for HyperText Markup Language and is used to structure content on web pages.",
		category: "/html-css",
	},
	{
		id: 4,
		question: "What is the `<meta>` tag used for?",
		answer:
			"The `<meta>` tag defines metadata such as charset, viewport, and descriptions.",
		category: "/html-css",
	},
	{
		id: 2,
		question: "What are semantic elements in HTML?",
		answer:
			"Semantic tags like `<header>`, `<footer>`, `<article>`, `<section>`, and `<nav>` improve SEO and accessibility.",
		category: "/html-css",
	},
	{
		id: 5,
		question: "What is the purpose of the `<iframe>` tag?",
		answer:
			"The `<iframe>` tag is used to embed third-party web content into a web page.",
		category: "/html-css",
	},
	{
		id: 10,
		question: "How can you use input validation in HTML?",
		answer:
			"Using HTML5 form attributes like `required`, `pattern`, and `type='email'`.",
		category: "/html-css",
	},
	{
		id: 13,
		question: "How do you use custom attributes with HTML?",
		answer:
			"Custom attributes use the `data-*` syntax. Example: `<div data-id='123'></div>`.",
		category: "/html-css",
	},
	{
		id: 8,
		question: "What are ARIA roles, and why are they important?",
		answer:
			"ARIA roles improve accessibility by defining roles for assistive technologies.",
		category: "/html-css",
	},
	{
		id: 9,
		question: "What is the difference between `<ul>` and `<ol>`?",
		answer:
			"`<ul>` creates unordered lists, while `<ol>` creates ordered lists.",
		category: "/html-css",
	},
	{
		id: 3,
		question: "What is the difference between `<div>` and `<span>`?",
		answer:
			"`<div>` is a block-level element, while `<span>` is an inline element.",
		category: "/html-css",
	},
	{
		id: 6,
		question: "How do you include JavaScript in an HTML document?",
		answer:
			"Using the `<script>` tag. Example: `<script src='script.js'></script>`.",
		category: "/html-css",
	},
	{
		id: 12,
		question: "What are forms, and what are common form input types?",
		answer:
			"Forms are used for user input. Common types include `<input>`, `<textarea>`, `<select>`, and `<button>`.",
		category: "/html-css",
	},
	{
		id: 7,
		question: "What is the difference between `absolute` and `relative` URLs?",
		answer:
			"An absolute URL contains the full path, while a relative URL depends on the current document's location.",
		category: "/html-css",
	},
	{
		id: 11,
		question:
			"What is the difference between `<button>` and `<input type='button'>`?",
		answer:
			"Both create clickable buttons, but `<button>` can include HTML content, while `<input type='button'>` cannot.",
		category: "/html-css",
	},
	{
		id: 14,
		question: "What is CSS?",
		answer:
			"CSS stands for Cascading Style Sheets and is used to style HTML content.",
		category: "/html-css",
	},
	{
		id: 24,
		question: "What is `flexbox` in CSS?",
		answer:
			"Flexbox is a layout model for distributing space and aligning items. Example: `display: flex;`.",
		category: "/html-css",
	},
	{
		id: 27,
		question: "What is `opacity` in CSS?",
		answer:
			"The `opacity` property controls the transparency of an element. Values range from `0` (completely transparent) to `1` (completely opaque).",
		category: "/html-css",
	},
	{
		id: 23,
		question: "What are transitions in CSS?",
		answer:
			"Transitions enable smooth changes between CSS properties over time using `transition: all 0.3s ease;`.",
		category: "/html-css",
	},
	{
		id: 18,
		question: "What are CSS pseudo-classes?",
		answer:
			"Pseudo-classes define a specific state for an element, e.g., `:hover`, `:nth-child()`, or `:focus`.",
		category: "/html-css",
	},
	{
		id: 28,
		question: "What are CSS pseudo-elements?",
		answer:
			"Pseudo-elements like `::before` and `::after` let you style parts of elements without adding extra HTML.",
		category: "/html-css",
	},
	{
		id: 26,
		question: "How can you use `calc()` in CSS?",
		answer:
			"The `calc()` function dynamically calculates property values. Example: `width: calc(100% - 50px);`.",
		category: "/html-css",
	},
	{
		id: 21,
		question: "What are CSS keyframe animations?",
		answer:
			"CSS animations use `@keyframes` to define animation states over time and apply them with the `animation` property.",
		category: "/html-css",
	},
	{
		id: 29,
		question: "How can you optimize CSS performance?",
		answer:
			"By minimizing CSS rules, combining selectors, and removing unused styles.",
		category: "/html-css",
	},
	{
		id: 19,
		question: "What is the CSS `z-index` property used for?",
		answer:
			"The `z-index` determines the stacking order of overlapping elements.",
		category: "/html-css",
	},
	{
		id: 20,
		question: "How does `position: sticky;` behave in CSS?",
		answer:
			"It allows an element to act as `relative` until a certain scroll position, then acts as `fixed`.",
		category: "/html-css",
	},
	{
		id: 25,
		question: "What is the difference between `grid` and `flexbox`?",
		answer:
			"Grid is for 2D layouts (both rows and columns), while flexbox is for 1D (row or column) layouts.",
		category: "/html-css",
	},
	{
		id: 15,
		question: "What is the difference between `padding` and `margin`?",
		answer:
			"Padding is the space inside an element, while margin is the space outside the element.",
		category: "/html-css",
	},
	{
		id: 31,
		question: "How do you implement CSS animations with `keyframes`?",
		answer:
			"Define a keyframe with `@keyframes` and use the `animation` property to apply it. Example: `@keyframes move { ... } animation: move 2s infinite;`.",
		category: "/html-css",
	},
	{
		id: 30,
		question:
			"What is the difference between `min-width`, `max-width`, and `width`?",
		answer:
			"`min-width` sets the minimum width, `max-width` sets the maximum allowed width, and `width` sets a fixed width.",
		category: "/html-css",
	},
	{
		id: 16,
		question:
			"How do you center an element horizontally and vertically with CSS?",
		answer:
			"Using `flexbox`: `display: flex; justify-content: center; align-items: center;`.",
		category: "/html-css",
	},
	{
		id: 17,
		question:
			"What is the difference between `relative`, `absolute`, and `fixed` positioning?",
		answer:
			"`relative`: positions an element relative to itself, `absolute`: relative to the nearest positioned ancestor, `fixed`: relative to the browser window.",
		category: "/html-css",
	},
	{
		id: 22,
		question:
			"What is the difference between `inline`, `block`, and `inline-block` elements?",
		answer:
			"`inline` stays on the same line, `block` spans the full width, `inline-block` allows box properties while remaining inline.",
		category: "/html-css",
	},
	{
		id: 54,
		question: "What is IIFE?",
		answer:
			"An IIFE (Immediately Invoked Function Expression) is a function that runs immediately after it is defined. Example: `(function() { /* code */ })();`.",
		category: "/javascript",
	},
	{
		id: 48,
		question: "What is Webpack?",
		answer:
			"Webpack is a module bundler for JavaScript applications. It bundles multiple files into a single output file and supports loaders and plugins for advanced features.",
		category: "/javascript",
	},
	{
		id: 56,
		question: "What is a Recursive Function?",
		answer:
			"A recursive function is a function that calls itself until a base condition is met.",
		category: "/javascript",
	},
	{
		id: 52,
		question: "What is a Closure in JavaScript?",
		answer:
			"A closure is a function that retains access to its outer scope, even after the outer function has returned.",
		category: "/javascript",
	},
	{
		id: 53,
		question: "What is Hoisting in JavaScript?",
		answer:
			"Hoisting is JavaScript's behavior of moving declarations to the top of their scope during compilation.",
		category: "/javascript",
	},
	{
		id: 55,
		question: "What is a First-Class Function?",
		answer:
			"A first-class function is treated as a value in JavaScript, allowing functions to be passed as arguments, returned from other functions, or assigned to variables.",
		category: "/javascript",
	},
	{
		id: 57,
		question: "What is Currying in JavaScript?",
		answer:
			"Currying is a technique where a function takes multiple arguments one at a time. Example: `f(a, b)` becomes `f(a)(b)`.",
		category: "/javascript",
	},
	{
		id: 42,
		question: "What is a Callback in JavaScript?",
		answer:
			"A callback is a function passed as an argument to another function and executed after some operation is completed.",
		category: "/javascript",
	},
	{
		id: 46,
		question: "What are the error types in JavaScript?",
		answer:
			"Common error types include SyntaxError, TypeError, ReferenceError, RangeError, EvalError, and URIError.",
		category: "/javascript",
	},
	{
		id: 43,
		question: "What is Async and Await in JavaScript?",
		answer:
			"Async and Await simplify working with Promises. `async` functions return a Promise, and `await` pauses execution until the Promise resolves.",
		category: "/javascript",
	},
	{
		id: 44,
		question: "What are Object descriptors and flags?",
		answer:
			"Object descriptors define properties of an object. Flags include `writable`, `enumerable`, and `configurable`.",
		category: "/javascript",
	},
	{
		id: 78,
		question: "How do you handle errors in JavaScript?",
		answer:
			"Errors can be handled using `try...catch` blocks, custom error objects, and global error event listeners for unhandled exceptions.",
		category: "/javascript",
	},
	{
		id: 58,
		question: "What are the OOP concepts in JavaScript?",
		answer:
			"JavaScript's OOP concepts include classes, objects, inheritance, polymorphism, encapsulation, and abstraction.",
		category: "/javascript",
	},
	{
		id: 32,
		question: "What are the array methods in JavaScript?",
		answer:
			"JavaScript array methods include push, pop, shift, unshift, map, filter, reduce, find, findIndex, slice, splice, forEach, concat, includes, indexOf, and sort, among others.",
		category: "/javascript",
	},
	{
		id: 35,
		question: "What is Garbage Collection in JavaScript?",
		answer:
			"Garbage Collection in JavaScript automatically frees memory occupied by objects that are no longer in use. This is managed by the JavaScript engine.",
		category: "/javascript",
	},
	{
		id: 47,
		question: "What are REST APIs and JSON in JavaScript?",
		answer:
			"REST APIs provide a standardized way to interact with web services using HTTP methods. JSON (JavaScript Object Notation) is a lightweight data format for exchanging data between a client and server.",
		category: "/javascript",
	},
	{
		id: 73,
		question: "What is JavaScript and what is its purpose?",
		answer:
			"JavaScript is a lightweight, interpreted programming language primarily used for creating interactive web applications by manipulating the DOM and handling client-side behavior.",
		category: "/javascript",
	},
	{
		id: 36,
		question: "What are the logical operators in JavaScript?",
		answer: "Logical operators include AND (`&&`), OR (`||`), and NOT (`!`).",
		category: "/javascript",
	},
	{
		id: 38,
		question: "What is a Higher-Order Function in JavaScript?",
		answer:
			"A Higher-Order Function is a function that takes another function as an argument or returns a function as its result. Examples include map, filter, and reduce.",
		category: "/javascript",
	},
	{
		id: 39,
		question: "What is WeakSet and WeakMap in JavaScript?",
		answer:
			"WeakSet is a collection of objects with weak references, while WeakMap is a collection of key-value pairs where keys are objects and have weak references. They do not prevent garbage collection.",
		category: "/javascript",
	},
	{
		id: 74,
		question: "What are the different data types in JavaScript?",
		answer:
			"JavaScript has primitive data types (string, number, boolean, null, undefined, symbol, bigint) and non-primitive types (objects, arrays, functions).",
		category: "/javascript",
	},
	{
		id: 34,
		question: "What is Destructuring assignment in JavaScript?",
		answer:
			"Destructuring allows you to extract values from arrays or properties from objects into variables. Example: `const {name, age} = person;`.",
		category: "/javascript",
	},
	{
		id: 77,
		question: "What is the difference between var, let, and const?",
		answer:
			"`var` is function-scoped and hoisted, `let` is block-scoped and can be updated, and `const` is block-scoped and immutable once assigned.",
		category: "/javascript",
	},
	{
		id: 40,
		question: "What is the difference between Set and WeakSet?",
		answer:
			"Set can store any value and is iterable, while WeakSet only stores objects, is not iterable, and does not prevent garbage collection of objects.",
		category: "/javascript",
	},
	{
		id: 41,
		question: "What are the benefits of using WeakMap over Map?",
		answer:
			"WeakMap allows garbage collection of keys (which must be objects), making it ideal for cases like caching where keys may become unreachable.",
		category: "/javascript",
	},
	{
		id: 64,
		question: "How does memory management work in JavaScript?",
		answer:
			"JavaScript uses automatic memory management with garbage collection to free up memory used by unreachable objects.",
		category: "/javascript",
	},
	{
		id: 75,
		question: "How does JavaScript handle asynchronous operations?",
		answer:
			"JavaScript handles asynchronous operations using callbacks, Promises, and async/await, with the event loop managing the execution of asynchronous tasks.",
		category: "/javascript",
	},
	{
		id: 70,
		question: "What is the Symbol data type in ES6, and when is it used?",
		answer:
			"The Symbol data type is a unique and immutable primitive value. It is often used for creating unique object keys to avoid property name collisions.",
		category: "/javascript",
	},
	{
		id: 71,
		question: "What are generators in JavaScript, and how are they used?",
		answer:
			"Generators are functions that can be paused and resumed using the `yield` keyword. They are used for implementing iterators or asynchronous workflows.",
		category: "/javascript",
	},
	{
		id: 83,
		question: "What is the difference between == and === in JavaScript?",
		answer:
			"`==` compares values after type coercion, while `===` compares values and types without coercion, ensuring strict equality.",
		category: "/javascript",
	},
	{
		id: 79,
		question: "What is the event loop in JavaScript and how does it work?",
		answer:
			"The event loop ensures that the JavaScript runtime handles asynchronous operations by checking the call stack and executing tasks from the callback queue.",
		category: "/javascript",
	},
	{
		id: 76,
		question: "What are closures in JavaScript? Can you provide an example?",
		answer:
			"A closure is a function that retains access to its outer scope even after the outer function has returned. Example: `function outer() { let count = 0; return function inner() { return ++count; } }`.",
		category: "/javascript",
	},
	{
		id: 66,
		question: "What is event delegation, and when is it appropriate to use it?",
		answer:
			"Event delegation is a technique where a parent element handles events for its child elements using event bubbling. It is appropriate for dynamic content or when you want to improve performance by adding fewer event listeners.",
		category: "/javascript",
	},
	{
		id: 62,
		question: "When do you use the async and defer attributes in JavaScript?",
		answer:
			"Use `async` for scripts loaded asynchronously and executed immediately. Use `defer` for scripts loaded asynchronously and executed after the document is parsed.",
		category: "/javascript",
	},
	{
		id: 61,
		question:
			"What is the difference between Promise.all() and Promise.race()?",
		answer:
			"`Promise.all()` resolves when all promises resolve, while `Promise.race()` resolves when the first promise resolves or rejects.",
		category: "/javascript",
	},
	{
		id: 45,
		question:
			"What is the `this` keyword and how do call, apply, and bind work?",
		answer:
			"The `this` keyword refers to the context in which a function is called. `call` and `apply` invoke functions with a specified `this` value, while `bind` returns a new function with a bound `this` value.",
		category: "/javascript",
	},
	{
		id: 82,
		question:
			"What is the DOM and how do you interact with it using JavaScript?",
		answer:
			"The DOM (Document Object Model) is a programming interface for HTML documents. JavaScript interacts with it using methods like `getElementById`, `querySelector`, and event listeners.",
		category: "/javascript",
	},
	{
		id: 60,
		question:
			"How do you solve issues related to the `this` keyword in JavaScript?",
		answer:
			"Use methods like `bind`, `call`, `apply`, or arrow functions to explicitly define the `this` context.",
		category: "/javascript",
	},
	{
		id: 50,
		question:
			"What is the difference between Filter and Find methods of an array?",
		answer:
			"Filter returns all elements that match a condition, while Find returns the first matching element.",
		category: "/javascript",
	},
	{
		id: 51,
		question:
			"What is the difference between Some and Every methods of an array?",
		answer:
			"Some checks if at least one element meets a condition, while Every checks if all elements meet a condition.",
		category: "/javascript",
	},
	{
		id: 49,
		question:
			"What is the difference between Map and Reduce methods of an array?",
		answer:
			"Map transforms each element of an array and returns a new array. Reduce applies a function cumulatively to array elements, returning a single value.",
		category: "/javascript",
	},
	{
		id: 67,
		question:
			"What is the difference between mutation and immutability in JavaScript?",
		answer:
			"Mutation refers to changing the original data, while immutability means creating a new copy with the changes, leaving the original data intact. For example, modifying an array directly is mutation, while using methods like `concat` creates a new array and is immutable.",
		category: "/javascript",
	},
	{
		id: 63,
		question:
			"Explain block scope and hoisting concepts with let, const, and var in JavaScript.",
		answer:
			"`let` and `const` have block scope and are not hoisted to the top of their block. `var` has function scope and is hoisted to the top of its function or global scope.",
		category: "/javascript",
	},
	{
		id: 37,
		question:
			"What is the difference between synchronous and asynchronous programming?",
		answer:
			"Synchronous operations are executed in sequence, blocking further execution until completion. Asynchronous operations do not block and allow other operations to continue while they complete.",
		category: "/javascript",
	},
	{
		id: 59,
		question:
			"How does the event loop work in JavaScript, and what are its main components?",
		answer:
			"The event loop processes tasks from the call stack and the message queue, enabling asynchronous behavior. Key components include the call stack, message queue, and Web APIs.",
		category: "/javascript",
	},
	{
		id: 80,
		question:
			"What is the difference between a function declaration and a function expression?",
		answer:
			"Functions are reusable blocks of code. A function declaration is hoisted and defined with `function`, while a function expression is assigned to a variable and not hoisted.",
		category: "/javascript",
	},
	{
		id: 72,
		question:
			"How do setTimeout and setInterval work in JavaScript, and what are their differences?",
		answer:
			"`setTimeout` executes a function once after a specified delay, while `setInterval` executes a function repeatedly at fixed intervals until cleared.",
		category: "/javascript",
	},
	{
		id: 68,
		question:
			"How do debouncing and throttling techniques work, and when should they be applied?",
		answer:
			"Debouncing delays the execution of a function until a specified time has passed since the last call, useful for search inputs. Throttling ensures a function is executed at most once in a specified interval, suitable for scrolling events.",
		category: "/javascript",
	},
	{
		id: 69,
		question:
			"How can callback hell be avoided in JavaScript, and what strategies are used to handle it?",
		answer:
			"Callback hell can be avoided using Promises, async/await, or modularizing the code into smaller functions. These approaches improve readability and manage asynchronous code more effectively.",
		category: "/javascript",
	},
	{
		id: 33,
		question:
			"What are the data types, and what is the difference between primitive and non-primitive types in JavaScript?",
		answer:
			"Primitive types include string, number, boolean, null, undefined, Symbol, and BigInt. Non-primitive types include objects, arrays, and functions. Primitive values are immutable and stored by value, while non-primitive values are mutable and stored by reference.",
		category: "/javascript",
	},
];
