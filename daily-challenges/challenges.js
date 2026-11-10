// Day 1 — Color Changer
function randomHexColor() {
  return `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, "0")}`;
}

document.getElementById("change-heading-color").addEventListener("click", () => {
  const color = randomHexColor();
  document.querySelectorAll("h1, h2, h3").forEach((heading) => {
    // Apply the generated color through a CSS custom property/class, not element.style.
    heading.classList.add("random-heading-color");
    heading.dataset.headingColor = color;
  });
  let colorRule = document.getElementById("random-heading-rule");
  if (!colorRule) {
    colorRule = document.createElement("style");
    colorRule.id = "random-heading-rule";
    document.head.appendChild(colorRule);
  }
  colorRule.textContent = `h1.random-heading-color, h2.random-heading-color, h3.random-heading-color { color: ${color}; }`;
});

// Day 2 — Dynamic Element Creator
let paragraphNumber = 0;
const paragraphOutput = document.getElementById("paragraph-output");

document.getElementById("add-paragraph").addEventListener("click", () => {
  paragraphNumber += 1;
  const row = document.createElement("div");
  row.classList.add("challenge-paragraph");

  const paragraph = document.createElement("p");
  paragraph.textContent = `This is paragraph number ${paragraphNumber}.`;

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => row.remove());

  row.append(paragraph, deleteButton);
  paragraphOutput.appendChild(row);
});

// Day 3 — Image Remover and hide/show bonus
const imageStatus = document.getElementById("image-status");
document.getElementById("remove-images").addEventListener("click", () => {
  const images = document.querySelectorAll(".image-samples img");
  images.forEach((image) => image.remove());
  imageStatus.textContent = `${images.length} image(s) removed.`;
});

let imagesHidden = false;
document.getElementById("toggle-images").addEventListener("click", (event) => {
  const images = document.querySelectorAll(".image-samples img");
  imagesHidden = !imagesHidden;
  images.forEach((image) => image.classList.toggle("is-hidden", imagesHidden));
  let hiddenRule = document.getElementById("hidden-image-rule");
  if (!hiddenRule) {
    hiddenRule = document.createElement("style");
    hiddenRule.id = "hidden-image-rule";
    hiddenRule.textContent = ".image-samples img.is-hidden { display: none; }";
    document.head.appendChild(hiddenRule);
  }
  event.currentTarget.textContent = imagesHidden ? "Show images" : "Hide images";
  imageStatus.textContent = imagesHidden ? "Images hidden." : "Images shown.";
});

// Day 4 — Content Copier, including drag and drop bonus
const sourceBox = document.getElementById("copy-source");
const targetBox = document.getElementById("copy-target");
const copyStatus = document.getElementById("copy-status");

function copySourceContent() {
  // The source is developer-authored markup; clone nodes instead of copying user text as HTML.
  targetBox.replaceChildren(sourceBox.cloneNode(true));
  const copiedSource = targetBox.querySelector("#copy-source");
  if (copiedSource) {
    copiedSource.removeAttribute("id");
    copiedSource.removeAttribute("draggable");
    copiedSource.querySelectorAll("h3").forEach((heading) => {
      heading.textContent = "Copied content";
    });
  }
  copyStatus.textContent = "Source content copied to the target.";
}

document.getElementById("copy-content").addEventListener("click", copySourceContent);
sourceBox.addEventListener("dragstart", (event) => {
  event.dataTransfer.setData("text/plain", "copy-source");
  event.dataTransfer.effectAllowed = "copy";
});
targetBox.addEventListener("dragover", (event) => {
  event.preventDefault();
  targetBox.classList.add("is-drop-target");
});
targetBox.addEventListener("dragleave", () => targetBox.classList.remove("is-drop-target"));
targetBox.addEventListener("drop", (event) => {
  event.preventDefault();
  targetBox.classList.remove("is-drop-target");
  if (event.dataTransfer.getData("text/plain") === "copy-source") copySourceContent();
});

// Day 5 — Dark Mode Toggle and saved preference
const darkModeButton = document.getElementById("dark-mode-toggle");

function applyDarkMode(enabled) {
  document.body.classList.toggle("dark-mode", enabled);
  darkModeButton.textContent = enabled ? "Disable dark mode" : "Enable dark mode";
  darkModeButton.setAttribute("aria-pressed", String(enabled));
}

let savedDarkMode = false;
try {
  savedDarkMode = localStorage.getItem("week5-dark-mode") === "true";
} catch (error) {
  console.warn("Local storage is unavailable in this browser context.", error);
}
applyDarkMode(savedDarkMode);

darkModeButton.addEventListener("click", () => {
  const enabled = !document.body.classList.contains("dark-mode");
  applyDarkMode(enabled);
  try {
    localStorage.setItem("week5-dark-mode", String(enabled));
  } catch (error) {
    console.warn("Could not save the dark-mode preference.", error);
  }
});
