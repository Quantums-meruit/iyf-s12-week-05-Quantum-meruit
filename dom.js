// h1

const headinig = document.getElementsByTagName("h1");
// class content

const content = document.querySelectorAll(".content");

// form id

const form = document.querySelector(".contact-form");

// email input

const input = document.querySelector("input [type='email']");

const navigation = document.getElementsByClassName(".nav-list");

// or

let navs = document.querySelectorAll(".nav-link");

let navChild = document.querySelector(".nav-link")[0];
// output

console.log(
  content,
  form,
  input,
  navigation,
  navs,
  content[content.length - 1],
);

//dom navigation

const header = document.querySelector(`h1`);

console.log(header.parentElement);

const navLink = document.querySelector(`.nav-link`);
console.log(navLink.parentElement);

const article = document.querySelector(`article`);

console.log(article.nextElementSibling);

const ul = document.querySelector(`.nav-list`);

console.log(ul.querySelectorAll("li"));

const footerNav = document.querySelector(`footer`);

console.log(footerNav.parentElement);

// modyfying content
//Exercise 1: Text Content
const h1 = document.querySelector("h1");

// Reading text
console.log(h1.textContent); // Includes hidden text
console.log(h1.innerText); // Only visible text

// Modifying text
h1.textContent = "MACHCARIA";

// Exercise 2: HTML Content
const articles = document.querySelector("article");

// Reading HTML
console.log(article.innerHTML);

// Modifying HTML (careful with security!)
article.innerHTML = `
    <h2>welcome all</h2>
    <p>WE are full not accommodating .</p>
`;

// Why innerHTML is dangerous with anything a user typed:
const userInput = `<img src="x" onerror="alert('hacked!')">`;
article.innerHTML = userInput; // the image fails to load, onerror RUNS the code
article.textContent = userInput; // shows the characters as text — nothing runs

// Rule: textContent for anything that came from a user or an API.
// innerHTML only for HTML you wrote yourself.

// Exercise 3: Attributes
const link = document.querySelector(".nav-link");

// Get attribute
console.log(link.getAttribute("href"));
console.log(link.href); // Property access

// Set attribute
link.setAttribute("href", "https://developer.mozilla.org");
link.href = "https://developer.mozilla.org"; // Same result

// Check attribute
console.log(link.hasAttribute("target"));

// Remove attribute
link.removeAttribute("target");

// Data attributes
// <element data-id="123" data-category="tech">
const element = document.querySelector("[data-id]");
console.log(element.dataset.id); // "123"
console.log(element.dataset.category); // "tech"
element.dataset.newAttr = "value"; // Creates data-new-attr

// Exercise 4: Styles
const container = document.querySelector(".container");

// Inline styles
container.style.backgroundColor = "#f0f0f0";
container.style.padding = "30px";
container.style.borderRadius = "8px";

// Multiple styles (use classes instead when possible!)
Object.assign(container.style, {
  backgroundColor: "#84fc94",
  color: "white",
  padding: "20px",
});