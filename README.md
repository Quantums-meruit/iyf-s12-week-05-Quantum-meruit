# Week 5: DOM Manipulation — Interactive To-Do List

## About This Project

This project is part of my Week 5 learning journey at the IYF Weekend Academy, Season 12.

This week, I explored the Document Object Model (DOM) and learned how JavaScript interacts with HTML elements to make web pages dynamic and interactive.

The main project is an interactive To-Do List application. It allows users to add tasks, mark them as completed, edit them, filter them and remove them. I also worked on separate practice exercises covering DOM manipulation, event handling, event delegation and form validation.

My main goal was to put the concepts from the lessons into practice and understand how different JavaScript features work together in a real project.

## Technologies Used

- **HTML5:** Used to structure the application and practice pages.
- **CSS3:** Used for styling, layout, responsive design and visual feedback.
- **JavaScript (ES6+):** Used for DOM manipulation, event handling, task management and validation.
- **Git:** Used for version control and tracking project changes.
- **GitHub:** Used to host the project repository.
- **GitHub Pages:** Used to make the project accessible online.

## Project Features

### Interactive To-Do List

- Add tasks using the Add Task button or Enter key.
- Prevent empty or spaces-only tasks from being added.
- Mark tasks as completed and undo completion.
- Delete individual tasks.
- Filter tasks by All, Active and Completed.
- Display the number of remaining tasks.
- Clear all completed tasks.
- Double-click a task to edit it.
- Press Enter to save an edit or Escape to cancel it.
- Store tasks in an array of objects and update the displayed list whenever the data changes.

### DOM Practice

The `dom-practice.html` page contains exercises covering DOM selection, traversal, content modification, attributes, classes, creating and removing elements, events, event bubbling, delegation and form validation.

### Daily Challenges

The `daily-challenges/` folder contains five practical exercises:

1. **Color Changer:** Changes heading colors using randomly generated hexadecimal colors.
2. **Dynamic Element Creator:** Creates new paragraphs dynamically and gives each one a delete button.
3. **Image Remover:** Removes images from the page, with an additional hide-and-show feature.
4. **Content Copier:** Copies content from one section into another, including a drag-and-drop interaction.
5. **Dark Mode Toggle:** Allows users to switch between light and dark themes while remembering their preference using local storage.

## What I Learned

One of my biggest takeaways from this week was understanding that JavaScript does not just work with data; it can also interact directly with the structure and content of a webpage.

I became more familiar with selecting elements using methods such as `getElementById()`, `querySelector()` and `querySelectorAll()`. I also learned that these methods do not all return the same type of result. For example, `querySelector()` returns the first matching element, while `querySelectorAll()` returns a collection of matching elements.

DOM traversal helped me understand how elements are connected. Working with `parentElement`, `children`, `nextElementSibling` and `closest()` made it easier to move around the document without having to select every element again.

Another important lesson was learning how to create and insert elements dynamically. Methods such as `createElement()`, `appendChild()`, `append()`, `prepend()` and `insertBefore()` showed me how a webpage can be updated without reloading it.

The To-Do List brought many of these concepts together. I used an array of objects to represent the tasks and a rendering function to display them. This helped me understand the importance of separating application data from what the user sees on the screen.

I also gained a better understanding of event bubbling and event delegation. Instead of attaching a separate click listener to every task, I used one delegated click listener on the task list. This allows the application to handle interactions with tasks that are added dynamically.

Security was another important lesson. I used `textContent` when displaying task names so that user-entered content is treated as ordinary text instead of being interpreted as HTML. This is particularly important when accepting input from users.

Finally, working with forms helped me understand `preventDefault()`, input validation and event objects. I can now see how these concepts contribute to building interactive applications that respond to user actions without unnecessary page reloads.

## Challenges I Encountered

The most interesting challenge was getting the different parts of the To-Do List to work together correctly. Adding a task was relatively straightforward, but making sure that completing, deleting, editing and filtering tasks all updated the displayed list correctly required more thought.

Keeping the task data organised was particularly important. I had to understand why the array should remain the main source of truth instead of relying only on the elements currently displayed in the browser.

Event delegation also took some careful thinking. I needed to understand how an event triggered by a button inside a task could reach the parent list and how to identify the correct task using `closest()` and `data-id`.

The double-click editing feature introduced another interesting problem: a double-click also begins with a normal click. I had to account for that difference so that editing a task would not accidentally change its completion status.

Form validation was another area that required attention. Checking for empty input alone was not enough; trimming whitespace and displaying useful feedback made the interaction more reliable.

These challenges helped me appreciate that writing JavaScript is not only about making something work once. It is also about thinking through different user actions and making sure the application behaves consistently.

## Project Structure

```text
.
├── index.html
├── styles.css
├── app.js
├── dom-practice.html
├── dom.js
├── daily-challenges/
│   ├── index.html
│   ├── challenges.css
│   └── challenges.js
├── .gitignore
└── README.md
```

## How to Run the Project

1. Clone the repository:

   ```bash
   git clone https://github.com/Quantums-meruit/iyf-s12-week-05-Quantums-meruit.git
   ```

2. Open the project folder in Visual Studio Code.

3. Open `index.html` in a browser. You can also use the Live Server extension in VS Code.

4. Open `dom-practice.html` to explore the DOM lessons.

5. Open `daily-challenges/index.html` to view the five daily challenges.

No additional packages or installation steps are required.

## Live Demo

[View the Week 5 Interactive To-Do List](https://quantums-meruit.github.io/iyf-s12-week-05-Quantums-meruit/)

## GitHub Repository

[View the Week 5 Project on GitHub](https://github.com/Quantums-meruit/iyf-s12-week-05-Quantums-meruit)

## Final Thoughts

Week 5 helped me connect several JavaScript concepts that I had previously studied separately. Building the To-Do List made DOM manipulation and event handling feel more practical because I could see the results of each interaction immediately.

I still have more to learn, but this project has given me a stronger foundation for working with dynamic webpages and building more interactive applications in the coming weeks.

## How to Run the Project

1. Clone the repository:

   ```bash
   git clone https://github.com/Quantums-meruit/iyf-s12-week-05-Quantums-meruit.git
   ```

2. Open the project folder in Visual Studio Code.

3. Open `index.html` in a browser. You can also use the Live Server extension in VS Code.

4. Open `dom-practice.html` to explore the DOM lessons.

5. Open `daily-challenges/index.html` to view the five daily challenges.

No additional packages or installation steps are required.

## Live Demo

[View the Week 5 Interactive To-Do List](https://quantums-meruit.github.io/iyf-s12-week-05-Quantums-meruit/)

## GitHub Repository

[View the Week 5 Project on GitHub](https://github.com/Quantums-meruit/iyf-s12-week-05-Quantums-meruit)

## Final Thoughts

Week 5 helped me connect several JavaScript concepts that I had previously studied separately. Building the To-Do List made DOM manipulation and event handling feel more practical because I could see the results of each interaction immediately.

I still have more to learn, but this project has given me a stronger foundation for working with dynamic webpages and building more interactive applications in the coming weeks.
