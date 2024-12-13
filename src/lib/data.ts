export const QUESTIONS = [
	{
		id: 1,
		question: "What is HTML ?",
		answer:
			"HTML stands for HyperText Markup Language and is used to structure content on web pages.",
		category: "/html-css",
	},
	{
		id: 2,
		question: "What is the `<meta>` tag used for?",
		answer:
			"The `<meta>` tag defines metadata such as charset, viewport, and descriptions.",
		category: "/html-css",
	},
	{
		id: 3,
		question: "What are semantic elements in HTML?",
		answer:
			"Semantic tags like `<header>`, `<footer>`, `<article>`, `<section>`, and `<nav>` improve SEO and accessibility.",
		category: "/html-css",
	},
	{
		id: 4,
		question: "What is the purpose of the `<iframe>` tag?",
		answer:
			"The `<iframe>` tag is used to embed third-party web content into a web page.",
		category: "/html-css",
	},
	{
		id: 5,
		question: "How can you use input validation in HTML?",
		answer:
			"Using HTML5 form attributes like `required`, `pattern`, and `type='email'`.",
		category: "/html-css",
	},
	{
		id: 6,
		question: "How do you use custom attributes with HTML?",
		answer:
			"Custom attributes use the `data-*` syntax. Example: `<div data-id='123'></div>`.",
		category: "/html-css",
	},
	{
		id: 7,
		question: "What are ARIA roles, and why are they important?",
		answer:
			"ARIA roles improve accessibility by defining roles for assistive technologies.",
		category: "/html-css",
	},
	{
		id: 8,
		question: "What is the difference between `<ul>` and `<ol>`?",
		answer:
			"`<ul>` creates unordered lists, while `<ol>` creates ordered lists.",
		category: "/html-css",
	},
	{
		id: 9,
		question: "What is the difference between `<div>` and `<span>`?",
		answer:
			"`<div>` is a block-level element, while `<span>` is an inline element.",
		category: "/html-css",
	},
	{
		id: 10,
		question: "How do you include JavaScript in an HTML document?",
		answer:
			"Using the `<script>` tag. Example: `<script src='script.js'></script>`.",
		category: "/html-css",
	},
	{
		id: 11,
		question: "What are forms, and what are common form input types?",
		answer:
			"Forms are used for user input. Common types include `<input>`, `<textarea>`, `<select>`, and `<button>`.",
		category: "/html-css",
	},
	{
		id: 12,
		question: "What is the difference between `absolute` and `relative` URLs?",
		answer:
			"An absolute URL contains the full path, while a relative URL depends on the current document's location.",
		category: "/html-css",
	},
	{
		id: 13,
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
		id: 15,
		question: "What is `flexbox` in CSS?",
		answer:
			"Flexbox is a layout model for distributing space and aligning items. Example: `display: flex;`.",
		category: "/html-css",
	},
	{
		id: 16,
		question: "What is `opacity` in CSS?",
		answer:
			"The `opacity` property controls the transparency of an element. Values range from `0` (completely transparent) to `1` (completely opaque).",
		category: "/html-css",
	},
	{
		id: 17,
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
		id: 19,
		question: "What are CSS pseudo-elements?",
		answer:
			"Pseudo-elements like `::before` and `::after` let you style parts of elements without adding extra HTML.",
		category: "/html-css",
	},
	{
		id: 20,
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
		id: 22,
		question: "How can you optimize CSS performance?",
		answer:
			"By minimizing CSS rules, combining selectors, and removing unused styles.",
		category: "/html-css",
	},
	{
		id: 23,
		question: "What is the CSS `z-index` property used for?",
		answer:
			"The `z-index` determines the stacking order of overlapping elements.",
		category: "/html-css",
	},
	{
		id: 24,
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
		id: 26,
		question: "What is the difference between `padding` and `margin`?",
		answer:
			"Padding is the space inside an element, while margin is the space outside the element.",
		category: "/html-css",
	},
	{
		id: 27,
		question: "How do you implement CSS animations with `keyframes`?",
		answer:
			"Define a keyframe with `@keyframes` and use the `animation` property to apply it. Example: `@keyframes move { ... } animation: move 2s infinite;`.",
		category: "/html-css",
	},
	{
		id: 28,
		question:
			"What is the difference between `min-width`, `max-width`, and `width`?",
		answer:
			"`min-width` sets the minimum width, `max-width` sets the maximum allowed width, and `width` sets a fixed width.",
		category: "/html-css",
	},
	{
		id: 29,
		question:
			"How do you center an element horizontally and vertically with CSS?",
		answer:
			"Using `flexbox`: `display: flex; justify-content: center; align-items: center;`.",
		category: "/html-css",
	},
	{
		id: 30,
		question:
			"What is the difference between `relative`, `absolute`, and `fixed` positioning?",
		answer:
			"`relative`: positions an element relative to itself, `absolute`: relative to the nearest positioned ancestor, `fixed`: relative to the browser window.",
		category: "/html-css",
	},
	{
		id: 31,
		question:
			"What is the difference between `inline`, `block`, and `inline-block` elements?",
		answer:
			"`inline` stays on the same line, `block` spans the full width, `inline-block` allows box properties while remaining inline.",
		category: "/html-css",
	},
	{
		id: 32,
		question: "What is IIFE?",
		answer:
			"An IIFE (Immediately Invoked Function Expression) is a function that runs immediately after it is defined. Example: `(function() { /* code */ })();`.",
		category: "/javascript",
	},
	{
		id: 33,
		question: "What is Webpack?",
		answer:
			"Webpack is a module bundler for JavaScript applications. It bundles multiple files into a single output file and supports loaders and plugins for advanced features.",
		category: "/javascript",
	},
	{
		id: 34,
		question: "What is a Recursive Function?",
		answer:
			"A recursive function is a function that calls itself until a base condition is met.",
		category: "/javascript",
	},
	{
		id: 35,
		question: "What is a Closure in JavaScript?",
		answer:
			"A closure is a function that retains access to its outer scope, even after the outer function has returned.",
		category: "/javascript",
	},
	{
		id: 36,
		question: "What is Hoisting in JavaScript?",
		answer:
			"Hoisting is JavaScript's behavior of moving declarations to the top of their scope during compilation.",
		category: "/javascript",
	},
	{
		id: 37,
		question: "What is a First-Class Function?",
		answer:
			"A first-class function is treated as a value in JavaScript, allowing functions to be passed as arguments, returned from other functions, or assigned to variables.",
		category: "/javascript",
	},
	{
		id: 38,
		question: "What is Currying in JavaScript?",
		answer:
			"Currying is a technique where a function takes multiple arguments one at a time. Example: `f(a, b)` becomes `f(a)(b)`.",
		category: "/javascript",
	},
	{
		id: 39,
		question: "What is a Callback in JavaScript?",
		answer:
			"A callback is a function passed as an argument to another function and executed after some operation is completed.",
		category: "/javascript",
	},
	{
		id: 40,
		question: "What are the error types in JavaScript?",
		answer:
			"Common error types include SyntaxError, TypeError, ReferenceError, RangeError, EvalError, and URIError.",
		category: "/javascript",
	},
	{
		id: 41,
		question: "What is Async and Await in JavaScript?",
		answer:
			"Async and Await simplify working with Promises. `async` functions return a Promise, and `await` pauses execution until the Promise resolves.",
		category: "/javascript",
	},
	{
		id: 42,
		question: "What are Object descriptors and flags?",
		answer:
			"Object descriptors define properties of an object. Flags include `writable`, `enumerable`, and `configurable`.",
		category: "/javascript",
	},
	{
		id: 43,
		question: "How do you handle errors in JavaScript?",
		answer:
			"Errors can be handled using `try...catch` blocks, custom error objects, and global error event listeners for unhandled exceptions.",
		category: "/javascript",
	},
	{
		id: 44,
		question: "What are the OOP concepts in JavaScript?",
		answer:
			"JavaScript's OOP concepts include classes, objects, inheritance, polymorphism, encapsulation, and abstraction.",
		category: "/javascript",
	},
	{
		id: 45,
		question: "What are the array methods in JavaScript?",
		answer:
			"JavaScript array methods include push, pop, shift, unshift, map, filter, reduce, find, findIndex, slice, splice, forEach, concat, includes, indexOf, and sort, among others.",
		category: "/javascript",
	},
	{
		id: 46,
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
		id: 48,
		question: "What is JavaScript and what is its purpose?",
		answer:
			"JavaScript is a lightweight, interpreted programming language primarily used for creating interactive web applications by manipulating the DOM and handling client-side behavior.",
		category: "/javascript",
	},
	{
		id: 49,
		question: "What are the logical operators in JavaScript?",
		answer: "Logical operators include AND (`&&`), OR (`||`), and NOT (`!`).",
		category: "/javascript",
	},
	{
		id: 50,
		question: "What is a Higher-Order Function in JavaScript?",
		answer:
			"A Higher-Order Function is a function that takes another function as an argument or returns a function as its result. Examples include map, filter, and reduce.",
		category: "/javascript",
	},
	{
		id: 51,
		question: "What is WeakSet and WeakMap in JavaScript?",
		answer:
			"WeakSet is a collection of objects with weak references, while WeakMap is a collection of key-value pairs where keys are objects and have weak references. They do not prevent garbage collection.",
		category: "/javascript",
	},
	{
		id: 52,
		question: "What are the different data types in JavaScript?",
		answer:
			"JavaScript has primitive data types (string, number, boolean, null, undefined, symbol, bigint) and non-primitive types (objects, arrays, functions).",
		category: "/javascript",
	},
	{
		id: 53,
		question: "What is Destructuring assignment in JavaScript?",
		answer:
			"Destructuring allows you to extract values from arrays or properties from objects into variables. Example: `const {name, age} = person;`.",
		category: "/javascript",
	},
	{
		id: 54,
		question: "What is the difference between var, let, and const?",
		answer:
			"`var` is function-scoped and hoisted, `let` is block-scoped and can be updated, and `const` is block-scoped and immutable once assigned.",
		category: "/javascript",
	},
	{
		id: 55,
		question: "What is the difference between Set and WeakSet?",
		answer:
			"Set can store any value and is iterable, while WeakSet only stores objects, is not iterable, and does not prevent garbage collection of objects.",
		category: "/javascript",
	},
	{
		id: 56,
		question: "What are the benefits of using WeakMap over Map?",
		answer:
			"WeakMap allows garbage collection of keys (which must be objects), making it ideal for cases like caching where keys may become unreachable.",
		category: "/javascript",
	},
	{
		id: 57,
		question: "How does memory management work in JavaScript?",
		answer:
			"JavaScript uses automatic memory management with garbage collection to free up memory used by unreachable objects.",
		category: "/javascript",
	},
	{
		id: 58,
		question: "How does JavaScript handle asynchronous operations?",
		answer:
			"JavaScript handles asynchronous operations using callbacks, Promises, and async/await, with the event loop managing the execution of asynchronous tasks.",
		category: "/javascript",
	},
	{
		id: 59,
		question: "What is the Symbol data type in ES6, and when is it used?",
		answer:
			"The Symbol data type is a unique and immutable primitive value. It is often used for creating unique object keys to avoid property name collisions.",
		category: "/javascript",
	},
	{
		id: 60,
		question: "What are generators in JavaScript, and how are they used?",
		answer:
			"Generators are functions that can be paused and resumed using the `yield` keyword. They are used for implementing iterators or asynchronous workflows.",
		category: "/javascript",
	},
	{
		id: 61,
		question: "What is the difference between == and === in JavaScript?",
		answer:
			"`==` compares values after type coercion, while `===` compares values and types without coercion, ensuring strict equality.",
		category: "/javascript",
	},
	{
		id: 62,
		question: "What is the event loop in JavaScript and how does it work?",
		answer:
			"The event loop ensures that the JavaScript runtime handles asynchronous operations by checking the call stack and executing tasks from the callback queue.",
		category: "/javascript",
	},
	{
		id: 63,
		question: "What are closures in JavaScript? Can you provide an example?",
		answer:
			"A closure is a function that retains access to its outer scope even after the outer function has returned. Example: `function outer() { let count = 0; return function inner() { return ++count; } }`.",
		category: "/javascript",
	},
	{
		id: 64,
		question: "What is event delegation, and when is it appropriate to use it?",
		answer:
			"Event delegation is a technique where a parent element handles events for its child elements using event bubbling. It is appropriate for dynamic content or when you want to improve performance by adding fewer event listeners.",
		category: "/javascript",
	},
	{
		id: 65,
		question: "When do you use the async and defer attributes in JavaScript?",
		answer:
			"Use `async` for scripts loaded asynchronously and executed immediately. Use `defer` for scripts loaded asynchronously and executed after the document is parsed.",
		category: "/javascript",
	},
	{
		id: 66,
		question:
			"What is the difference between Promise.all() and Promise.race()?",
		answer:
			"`Promise.all()` resolves when all promises resolve, while `Promise.race()` resolves when the first promise resolves or rejects.",
		category: "/javascript",
	},
	{
		id: 67,
		question:
			"What is the `this` keyword and how do call, apply, and bind work?",
		answer:
			"The `this` keyword refers to the context in which a function is called. `call` and `apply` invoke functions with a specified `this` value, while `bind` returns a new function with a bound `this` value.",
		category: "/javascript",
	},
	{
		id: 68,
		question:
			"What is the DOM and how do you interact with it using JavaScript?",
		answer:
			"The DOM (Document Object Model) is a programming interface for HTML documents. JavaScript interacts with it using methods like `getElementById`, `querySelector`, and event listeners.",
		category: "/javascript",
	},
	{
		id: 69,
		question:
			"How do you solve issues related to the `this` keyword in JavaScript?",
		answer:
			"Use methods like `bind`, `call`, `apply`, or arrow functions to explicitly define the `this` context.",
		category: "/javascript",
	},
	{
		id: 70,
		question:
			"What is the difference between Filter and Find methods of an array?",
		answer:
			"Filter returns all elements that match a condition, while Find returns the first matching element.",
		category: "/javascript",
	},
	{
		id: 71,
		question:
			"What is the difference between Some and Every methods of an array?",
		answer:
			"Some checks if at least one element meets a condition, while Every checks if all elements meet a condition.",
		category: "/javascript",
	},
	{
		id: 72,
		question:
			"What is the difference between Map and Reduce methods of an array?",
		answer:
			"Map transforms each element of an array and returns a new array. Reduce applies a function cumulatively to array elements, returning a single value.",
		category: "/javascript",
	},
	{
		id: 73,
		question:
			"What is the difference between mutation and immutability in JavaScript?",
		answer:
			"Mutation refers to changing the original data, while immutability means creating a new copy with the changes, leaving the original data intact. For example, modifying an array directly is mutation, while using methods like `concat` creates a new array and is immutable.",
		category: "/javascript",
	},
	{
		id: 74,
		question:
			"Explain block scope and hoisting concepts with let, const, and var in JavaScript.",
		answer:
			"`let` and `const` have block scope and are not hoisted to the top of their block. `var` has function scope and is hoisted to the top of its function or global scope.",
		category: "/javascript",
	},
	{
		id: 75,
		question:
			"What is the difference between synchronous and asynchronous programming?",
		answer:
			"Synchronous operations are executed in sequence, blocking further execution until completion. Asynchronous operations do not block and allow other operations to continue while they complete.",
		category: "/javascript",
	},
	{
		id: 76,
		question:
			"How does the event loop work in JavaScript, and what are its main components?",
		answer:
			"The event loop processes tasks from the call stack and the message queue, enabling asynchronous behavior. Key components include the call stack, message queue, and Web APIs.",
		category: "/javascript",
	},
	{
		id: 77,
		question:
			"What is the difference between a function declaration and a function expression?",
		answer:
			"Functions are reusable blocks of code. A function declaration is hoisted and defined with `function`, while a function expression is assigned to a variable and not hoisted.",
		category: "/javascript",
	},
	{
		id: 78,
		question:
			"How do setTimeout and setInterval work in JavaScript, and what are their differences?",
		answer:
			"`setTimeout` executes a function once after a specified delay, while `setInterval` executes a function repeatedly at fixed intervals until cleared.",
		category: "/javascript",
	},
	{
		id: 79,
		question:
			"How do debouncing and throttling techniques work, and when should they be applied?",
		answer:
			"Debouncing delays the execution of a function until a specified time has passed since the last call, useful for search inputs. Throttling ensures a function is executed at most once in a specified interval, suitable for scrolling events.",
		category: "/javascript",
	},
	{
		id: 80,
		question:
			"How can callback hell be avoided in JavaScript, and what strategies are used to handle it?",
		answer:
			"Callback hell can be avoided using Promises, async/await, or modularizing the code into smaller functions. These approaches improve readability and manage asynchronous code more effectively.",
		category: "/javascript",
	},
	{
		id: 81,
		question:
			"What are the data types, and what is the difference between primitive and non-primitive types in JavaScript?",
		answer:
			"Primitive types include string, number, boolean, null, undefined, Symbol, and BigInt. Non-primitive types include objects, arrays, and functions. Primitive values are immutable and stored by value, while non-primitive values are mutable and stored by reference.",
		category: "/javascript",
	},
	{
		id: 82,
		question: "What are the React cons and pros?",
		answer: `Pros: React is highly performant due to the Virtual DOM, reusable components, and fast rendering. It has a large ecosystem and community support. JSX simplifies UI development by combining JavaScript and HTML. 
    Cons: Requires learning additional libraries for routing and state management, such as Redux. JSX can be hard to read for beginners, and frequent updates may cause breaking changes in the ecosystem.`,
		category: "/react",
	},
	{
		id: 83,
		question: "What is JSX and how does it work?",
		answer: `JSX is a syntax extension for JavaScript that allows writing HTML-like code in React components. It gets transpiled to React.createElement() calls by Babel, which create virtual DOM elements. JSX makes it easier to visualize UI components.`,
		category: "/react",
	},
	{
		id: 84,
		question: "What is Redux and when is it used?",
		answer: `Redux is a state management library that centralizes application state in a single store. It is used when the state needs to be shared across multiple components, especially in large applications. It helps in debugging, scaling, and testing.`,
		category: "/react",
	},
	{
		id: 85,
		question: "What is Lazy Loading and how is it used?",
		answer: `Lazy loading is a technique to delay the loading of non-critical resources until they are needed. In React, it is implemented using React.lazy() and Suspense to load components dynamically. For example:
    const LazyComponent = React.lazy(() => import('./LazyComponent'));`,
		category: "/react",
	},
	{
		id: 86,
		question: "What are Keys and why are they important?",
		answer: `Keys are unique identifiers used in React lists to help identify which items have changed, are added, or removed. They improve performance by enabling efficient updates to the DOM. A common key value is the item’s unique ID.`,
		category: "/react",
	},
	{
		id: 87,
		question: "What are Fragments and why are they used?",
		answer: `Fragments let you group a list of children without adding extra nodes to the DOM. Instead of wrapping elements with a <div>, you can use <React.Fragment> or shorthand <>...</>. This prevents unnecessary markup in the DOM tree.`,
		category: "/react",
	},
	{
		id: 88,
		question: "What is a Pure Component and its purpose?",
		answer: `A Pure Component in React is a component that implements shallow comparison in shouldComponentUpdate(). It prevents re-rendering if props and state haven’t changed, thereby improving performance in some scenarios.`,
		category: "/react",
	},
	{
		id: 89,
		question: "What is React Router and why is it needed?",
		answer: `React Router is a library for handling routing in React applications. It enables navigation between different views of an app without reloading the page. It is needed to create a seamless user experience in single-page applications (SPAs).`,
		category: "/react",
	},
	{
		id: 90,
		question: "What is a Higher Order Function in JavaScript?",
		answer: `A Higher Order Function is a function that takes another function as an argument or returns a function. For example, Array.prototype.map and Array.prototype.filter are higher-order functions.`,
		category: "/javascript",
	},
	{
		id: 91,
		question: "What is a component and what types are there?",
		answer: `A component is a reusable piece of UI in a React application. There are two types: Class Components, which use ES6 classes and have state and lifecycle methods, and Functional Components, which are stateless and rely on React hooks for state and lifecycle.`,
		category: "/react",
	},
	{
		id: 92,
		question: "What is the useState Hook and how is it used?",
		answer: `The useState hook allows functional components to have state. It returns an array with the current state value and a function to update it. Example:
    const [count, setCount] = useState(0);`,
		category: "/react",
	},
	{
		id: 93,
		question: "What is Lifting State Up and when is it used?",
		answer: `Lifting State Up refers to moving state to the nearest common ancestor of the components that need it. This is done to share state between sibling components. It is used to improve state management.`,
		category: "/react",
	},
	{
		id: 94,
		question: "What is React Context API and when is it used?",
		answer: `The Context API allows passing data through the component tree without prop drilling. It is used when global data, like themes or user authentication, needs to be accessed by many components.`,
		category: "/react",
	},
	{
		id: 95,
		question: "What is the difference between State and Props?",
		answer: `State is a component's internal data that can change over time, while props are external data passed to a component by its parent. Props are immutable, while state is managed within the component.`,
		category: "/react",
	},
	{
		id: 96,
		question: "What is React and what are its main components?",
		answer: `React is a JavaScript library for building user interfaces. Its main components are elements, components (functional or class-based), props, state, and the Virtual DOM.`,
		category: "/react",
	},
	{
		id: 97,
		question: "What is the useEffect Hook and when is it used?",
		answer: `The useEffect hook allows functional components to perform side effects, such as fetching data, directly in the component. It replaces lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount.`,
		category: "/react",
	},
	{
		id: 98,
		question: "What is Prop Drilling and how can it be avoided?",
		answer: `Prop Drilling occurs when props are passed through multiple components to reach a deeply nested component. It can be avoided using the Context API or state management libraries like Redux or Zustand.`,
		category: "/react",
	},
	{
		id: 99,
		question: "What is Virtual DOM and how is it used in React?",
		answer: `The Virtual DOM is a lightweight representation of the real DOM. React updates the Virtual DOM and compares it with the previous version to determine the minimal changes needed, then updates the real DOM accordingly for efficient rendering.`,
		category: "/react",
	},
	{
		id: 100,
		question: "What is Virtual DOM and how is it used in React?",
		answer:
			"The Virtual DOM is a lightweight representation of the actual DOM. React uses it to optimize rendering by applying updates in the Virtual DOM first, then calculating the minimal changes needed to update the real DOM.",
		category: "/react",
	},
	{
		id: 101,
		question: "What is Conditional Rendering and how is it used?",
		answer:
			"Conditional rendering allows React to decide which elements to render based on certain conditions, often using ternary operators or logical expressions inside JSX.",
		category: "/react",
	},
	{
		id: 102,
		question: "What are Error Boundaries and when are they used?",
		answer:
			"Error Boundaries are React components that catch JavaScript errors in their child component tree and display a fallback UI. They are used to handle errors gracefully in production.",
		category: "/react",
	},
	{
		id: 103,
		question: "How can dynamic routes be managed in React Router?",
		answer:
			"Dynamic routes can be managed using the `useParams` hook to extract route parameters or wildcard routes for more flexibility.",
		category: "/react",
	},
	{
		id: 104,
		question: "How does the reconciliation process work in React?",
		answer:
			"Reconciliation is the process React uses to update the DOM by comparing the Virtual DOM with a previous version, finding changes, and applying updates efficiently.",
		category: "/react",
	},
	{
		id: 105,
		question: "What are Portals in React, and when are they useful?",
		answer:
			"Portals allow rendering components outside the parent DOM hierarchy, useful for modals, tooltips, or any UI that requires escaping parent overflow or z-index styles.",
		category: "/react",
	},
	{
		id: 106,
		question: "What is forwardRef in React, and when should it be used?",
		answer:
			"forwardRef is a React function that lets you pass a ref through a component to its child. It is useful for accessing DOM elements or child components' refs.",
		category: "/react",
	},
	{
		id: 107,
		question: "What is Memorization and how is it implemented in React?",
		answer:
			"Memoization optimizes performance by preventing unnecessary re-renders. In React, it is implemented using `React.memo` for components and `useMemo` or `useCallback` for values and functions.",
		category: "/react",
	},
	{
		id: 108,
		question: "What are the optimization techniques for React components?",
		answer:
			"Common techniques include using React.memo, useMemo, and useCallback, avoiding unnecessary state updates, code splitting, lazy loading, and keeping components pure.",
		category: "/react",
	},
	{
		id: 109,
		question: "How is lazy loading and code splitting implemented in React?",
		answer:
			"React supports lazy loading with `React.lazy` and `Suspense` for loading components asynchronously. Code splitting can be done using dynamic imports and Webpack.",
		category: "/react",
	},
	{
		id: 110,
		question: "What are the main differences between Thunk and Saga in Redux?",
		answer:
			"Thunk is simpler, handling side effects with functions, while Saga is more powerful, using generators to manage complex async flows and side effects.",
		category: "/react",
	},
	{
		id: 111,
		question:
			"When should useReducer be used instead of useState in React hooks?",
		answer:
			"useReducer is ideal for managing complex state logic with multiple sub-values or when state transitions depend on previous states.",
		category: "/react",
	},
	{
		id: 112,
		question:
			"What is the difference between Controlled and Uncontrolled Components?",
		answer:
			"Controlled components have their state managed by React, while uncontrolled components manage their own state using refs.",
		category: "/react",
	},
	{
		id: 113,
		question:
			"What is the key prop used for in React, and what issues arise if it's misused?",
		answer:
			"The `key` prop helps React identify and manage elements efficiently during re-renders. Misusing it, such as using non-unique keys, can cause UI bugs.",
		category: "/react",
	},
	{
		id: 114,
		question:
			"How do you use the Context API in React, and how does it compare to Redux?",
		answer:
			"Context API provides a way to pass data globally without props drilling. Redux is more powerful for complex state management with actions, reducers, and middleware.",
		category: "/react",
	},
	{
		id: 115,
		question:
			"What is the difference between Class component and Functional component in React?",
		answer:
			"Class components use lifecycle methods and state, while functional components are simpler and use hooks like `useState` and `useEffect` for state and effects.",
		category: "/react",
	},
	{
		id: 116,
		question:
			"What are Higher Order Components (HOCs) in React, and when should they be used?",
		answer:
			"HOCs are functions that take a component and return a new component. They are used to reuse component logic like authentication or data fetching.",
		category: "/react",
	},
	{
		id: 117,
		question:
			"How do useMemo and useCallback hooks differ in React, and when should each be used?",
		answer:
			"`useMemo` memoizes computed values, while `useCallback` memoizes functions. Use them to optimize performance by avoiding unnecessary recalculations or re-creations.",
		category: "/react",
	},
	{
		id: 118,
		question:
			"How does the useEffect hook work in React, and what should you pay attention to when using it?",
		answer:
			"The `useEffect` hook handles side effects like data fetching. Be cautious with dependencies to avoid infinite loops or unnecessary re-renders.",
		category: "/react",
	},
];
