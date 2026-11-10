// Lessons 9 and 10 — DOM practice
"use strict";

// TASK 9.1 — Selecting elements
const header = document.getElementById("main-header");
const heading = document.getElementsByTagName("h1")[0];
const contents = document.getElementsByClassName("content");
const paragraphs = document.getElementsByTagName("p");
const contactForm = document.querySelector("#contact-form");
const emailInput = document.querySelector("input[type='email']");
const navItems = document.querySelectorAll(".nav-list li");
const firstLink = document.querySelector(".nav-link");
const lastParagraph = document.querySelector("article p:last-of-type");

console.log("getElementById:", header);
console.log("getElementsByTagName:", heading, paragraphs);
console.log("getElementsByClassName:", contents);
console.log("querySelector:", firstLink);
console.log("querySelectorAll:", navItems);
console.log("Form and email:", contactForm, emailInput);
console.log("Last article paragraph:", lastParagraph);

// TASK 9.2 — Traversing the DOM
const selectedHeader = document.querySelector("header");
const navInsideHeader = selectedHeader.querySelector("nav");
const firstNavLink = document.querySelector(".nav-link");
const firstNavItem = firstNavLink.parentElement;
const article = document.querySelector("article");
const nextSection = article.nextElementSibling;
const navList = document.querySelector(".nav-list");
const directNavItems = navList.children;
const footer = document.querySelector("footer");
const footerToBody = footer.parentElement;
const closestHeader = firstNavLink.closest("header");

console.log("Header to nav:", navInsideHeader);
console.log("First link parent li:", firstNavItem);
console.log("Article next element sibling:", nextSection);
console.log("Direct li children:", directNavItems);
console.log("Footer parent (body):", footerToBody);
console.log("Closest header:", closestHeader);
console.log("Nav descendants:", navInsideHeader.querySelectorAll("a"));

// TASK 9.3 — Modifying content, attributes and classes
console.log("Heading textContent:", heading.textContent);
console.log("Heading innerText:", heading.innerText);
console.log("Article HTML:", article.innerHTML);
heading.textContent = "DOM Practice: Lessons 9 and 10";

const trustedHTML = document.getElementById("trusted-html-demo");
trustedHTML.innerHTML = "<strong>This HTML is a developer-written example.</strong>";

const userSuppliedMarkup = `<img src="x" onerror="alert('This should never run')">`;
document.getElementById("unsafe").textContent =
  "User-supplied markup displayed safely with textContent: " + userSuppliedMarkup;
document.getElementById("safe").textContent =
  "The markup above is shown as characters. It is not interpreted as HTML.";

// Attributes and data attributes
firstLink.setAttribute("href", "https://developer.mozilla.org/");
firstLink.setAttribute("target", "_blank");
firstLink.setAttribute("rel", "noopener noreferrer");
console.log("Link href attribute:", firstLink.getAttribute("href"));
console.log("Has target:", firstLink.hasAttribute("target"));
firstLink.removeAttribute("target");
const articleData = document.querySelector("article");
console.log("Dataset:", articleData.dataset.id, articleData.dataset.category);
articleData.dataset.status = "reviewed";

// Use classes for visual changes rather than inline element.style.
document.querySelector(".container").classList.add("highlight");
const articleParagraphs = document.querySelectorAll("article .content");
articleParagraphs[0].classList.add("highlight");
articleParagraphs[1].classList.toggle("accent");

// TASK 9.4 — Creating, inserting, cloning and removing elements
function addNavItem(text, href) {
  const listItem = document.createElement("li");
  const link = document.createElement("a");
  link.classList.add("nav-link");
  link.href = href;
  link.textContent = text;
  listItem.appendChild(link);
  navList.appendChild(listItem);
}
addNavItem("Blog", "#blog");
addNavItem("Portfolio", "#portfolio");

const newParagraph = document.createElement("p");
newParagraph.textContent = "A paragraph created with document.createElement().";
newParagraph.classList.add("content", "highlight");
article.appendChild(newParagraph);

const insertedParagraph = document.createElement("p");
insertedParagraph.textContent = "Inserted before the first article paragraph.";
article.insertBefore(insertedParagraph, article.querySelector("p"));

const insertionDemo = document.getElementById("insertion-demo");
const anchor = insertionDemo.querySelector(".insertion-anchor");
const prepended = document.createElement("p");
prepended.textContent = "Added with prepend().";
insertionDemo.prepend(prepended);
const appended = document.createElement("p");
appended.textContent = "Added with append().";
insertionDemo.append(appended);
const before = document.createElement("p");
before.textContent = "Added with before().";
anchor.before(before);
const after = document.createElement("p");
after.textContent = "Added with after().";
anchor.after(after);

const clonedItem = navList.querySelector("li").cloneNode(true);
clonedItem.querySelector("a").textContent = "Cloned";
clonedItem.querySelector("a").href = "#cloned";
navList.prepend(clonedItem);

const lastNavItem = navList.querySelector("li:last-child");
lastNavItem.parentElement.removeChild(lastNavItem);

const clearDemo = document.getElementById("clear-demo");
const clearButton = document.createElement("button");
clearButton.type = "button";
clearButton.textContent = "Clear demo children";
clearDemo.appendChild(clearButton);
clearButton.addEventListener("click", () => {
  while (clearDemo.firstChild) clearDemo.removeChild(clearDemo.firstChild);
});

// Remove footer after demonstrating footer traversal.
footer.remove();

// TASK 10.1 — Event listeners and event types
const counterDisplay = document.getElementById("counter");
const eventMessage = document.getElementById("event-message");
let count = 0;

function updateCounter() {
  counterDisplay.textContent = String(count);
}
document.getElementById("increase").addEventListener("click", () => {
  count += 1;
  updateCounter();
});
document.getElementById("decrease").addEventListener("click", () => {
  count = Math.max(0, count - 1);
  updateCounter();
});
document.getElementById("reset").addEventListener("click", () => {
  count = 0;
  updateCounter();
});

function temporaryClickHandler() {
  eventMessage.textContent = "The named click listener ran.";
}
const temporaryButton = document.getElementById("temporary-listener");
temporaryButton.addEventListener("click", temporaryClickHandler);
temporaryButton.addEventListener("dblclick", () => {
  temporaryButton.removeEventListener("click", temporaryClickHandler);
  eventMessage.textContent = "The named click listener was removed after a double-click.";
});

const eventDemo = document.getElementById("event-demo");
eventDemo.addEventListener("mouseenter", () => eventDemo.classList.add("highlight"));
eventDemo.addEventListener("mouseleave", () => eventDemo.classList.remove("highlight"));

// TASK 10.2 — Event object and keyboard shortcuts
document.addEventListener("click", (event) => {
  console.log("Event target:", event.target);
  console.log("Current target:", event.currentTarget);
  console.log("Event type and mouse position:", event.type, event.clientX, event.clientY);
});
document.getElementById("demo-link").addEventListener("click", (event) => {
  event.preventDefault();
  eventMessage.textContent = "Default link navigation was prevented.";
});

document.addEventListener("keydown", (event) => {
  console.log("Key details:", event.key, event.code, {
    shift: event.shiftKey, ctrl: event.ctrlKey, alt: event.altKey
  });

  if (event.ctrlKey && event.key.toLowerCase() === "s") {
    event.preventDefault();
    alert("Saved!");
  }

  if (event.key === "Escape") {
    contactForm.reset();
    clearFormErrors();
    document.getElementById("form-success").textContent = "Form inputs cleared.";
  }

  if (event.ctrlKey && event.key === "Enter") {
    event.preventDefault();
    contactForm.requestSubmit();
  }
});

// TASK 10.3 — Event bubbling and delegation
["grandparent", "parent", "child"].forEach((id) => {
  document.getElementById(id).addEventListener("click", () => {
    console.log(`${id} clicked (bubbling demonstration)`);
  });
});

const delegatedList = document.getElementById("delegated-list");
delegatedList.addEventListener("click", (event) => {
  const removeButton = event.target.closest("button");
  if (!removeButton || !delegatedList.contains(removeButton)) return;
  removeButton.closest("li").remove();
});

document.getElementById("add-delegated-item").addEventListener("click", () => {
  const item = document.createElement("li");
  item.append("A dynamically added item ");
  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.textContent = "Remove";
  item.appendChild(removeButton);
  delegatedList.appendChild(item);
});

// TASK 10.4 — Form handling and validation
const nameInput = document.getElementById("name");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const formSuccess = document.getElementById("form-success");

function validateName() {
  const valid = nameInput.value.trim().length >= 2;
  nameInput.classList.toggle("error", !valid);
  nameError.textContent = valid ? "" : "Name must be at least 2 characters.";
  return valid;
}

function validateEmail() {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const valid = emailPattern.test(emailInput.value.trim());
  emailInput.classList.toggle("error", !valid);
  emailError.textContent = valid ? "" : "Please enter a valid email address.";
  return valid;
}

function clearFormErrors() {
  nameInput.classList.remove("error");
  emailInput.classList.remove("error");
  nameError.textContent = "";
  emailError.textContent = "";
}

nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const isNameValid = validateName();
  const isEmailValid = validateEmail();

  if (!isNameValid || !isEmailValid) {
    formSuccess.textContent = "";
    return;
  }

  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData.entries());
  console.log("Validated form data:", data);
  formSuccess.textContent = "Form submitted successfully!";
  contactForm.reset();
  clearFormErrors();
});
