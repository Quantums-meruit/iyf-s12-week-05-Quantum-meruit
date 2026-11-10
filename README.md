# Week 5: DOM Manipulation — Interactive To-Do List

## Author

- **Name:** Joseph Kinyanjui
- **GitHub:** [@Quantums-meruit](https://github.com/Quantums-meruit)
- **Date:** November 10, 2026

## Project Description

This project is part of my Week 5 learning journey at the IYF Weekend Academy, Season 12.

The focus of this week's work was DOM manipulation and understanding how JavaScript interacts with HTML elements to create dynamic and interactive web pages.

For the main project, I built an interactive To-Do List application where users can add tasks, mark them as completed, edit them, filter them and delete them. Alongside the application, I completed DOM practice exercises covering element selection, traversal, content manipulation, event handling, event delegation and form validation.

I wanted to use this project to connect the concepts covered in the lessons and understand how they work together in a practical application.

## Technologies Used

- **HTML5:** Used to structure the application, practice exercises and daily challenges.
- **CSS3:** Used for styling, layout, responsive design and visual feedback.
- **JavaScript (ES6+):** Used for DOM manipulation, event handling, task management and form validation.
- **Git:** Used for version control and tracking project changes.
- **GitHub:** Used to host the project repository and manage the source code.
- **GitHub Pages:** Used to deploy the project and make the application accessible online.

## Features

### Interactive To-Do List

- Add tasks using the Add Task button or Enter key.
- Prevent empty or spaces-only tasks from being added.
- Mark tasks as completed and undo completion.
- Delete individual tasks.
- Filter tasks by All, Active and Completed.
- Display the number of remaining tasks, including correct singular and plural wording.
- Clear all completed tasks.
- Double-click a task to edit it.
- Press Enter to save an edit or Escape to cancel it.
- Store tasks in an array of objects and update the displayed list whenever the data changes.

### DOM Practice

The `dom-practice.html` page contains exercises covering:

- Selecting HTML elements using different DOM selection methods.
- Traversing the DOM using parent, child and sibling relationships.
- Modifying text content, HTML content and attributes.
- Working with CSS classes through `classList`.
- Creating, inserting, cloning and removing elements.
- Handling browser events and event objects.
- Understanding event bubbling and event delegation.
- Preventing default browser behaviour and validating forms.

### Daily Challenges

The `daily-challenges/` directory contains five practical exercises:

1. **Color Changer:** Changes heading colors using randomly generated hexadecimal colors.
2. **Dynamic Element Creator:** Creates numbered paragraphs dynamically and allows individual elements to be deleted.
3. **Image Remover:** Demonstrates removing images and controlling their visibility.
4. **Content Copier:** Copies content between sections and includes a drag-and-drop interaction.
5. **Dark Mode Toggle:** Allows users to switch between light and dark themes while saving their preference using local storage.

## How to Run

1. Clone this repository:

   ```bash
   git clone https://github.com/Quantums-meruit/iyf-s12-week-05-Quantums-meruit.git
   ```

2. Open the cloned project folder in Visual Studio Code.

3. Open `index.html` in your browser. Alternatively, use the Live Server extension in Visual Studio Code.

4. Open `dom-practice.html` to explore the DOM practice exercises.

5. Open `daily-challenges/index.html` to explore the five daily challenges.

No additional packages or installation steps are required.

## Lessons Learned

This week helped me understand how JavaScript can interact with the DOM to change the content, structure and behaviour of a webpage.

I became more comfortable selecting elements using methods such as `getElementById()`, `querySelector()` and `querySelectorAll()`. I also learned the difference between selecting a single matching element and working with a collection of matching elements.

DOM traversal was another important area of learning. Using `parentElement`, `children`, `nextElementSibling` and `closest()` helped me understand how elements are related and how to navigate between them.

I also learned how to create and manipulate elements dynamically using methods such as `createElement()`, `append()`, `prepend()`, `appendChild()` and `insertBefore()`.

Building the To-Do List helped me understand why application data and the displayed interface should be managed separately. By storing tasks in an array of objects and using a rendering function, I could update the interface whenever the underlying task data changed.

One of the most useful concepts was event delegation. Instead of attaching a separate click listener to every task, I used a single click listener on the task list. This works because events bubble up through the DOM, allowing the parent element to handle interactions with dynamically added tasks.

I also learned the importance of using `textContent` when displaying user input. It treats the supplied content as text rather than interpreting it as HTML, which is a safer approach when handling user-entered information.

Finally, working with forms and browser events improved my understanding of `addEventListener()`, event objects, `preventDefault()` and input validation.

## Challenges Faced

One of the main challenges was keeping the To-Do List's data and interface synchronised. Adding a task was only one part of the application; completing, editing, deleting and filtering tasks also needed to update the displayed results correctly.

I addressed this by keeping the tasks in an array of objects and using a rendering function to rebuild the visible list from the current data.

Event delegation also required careful understanding. I needed to identify which button had been clicked, determine its associated task and perform the correct action. Using `closest()` and `data-id` helped me connect user interactions to the correct task.

The double-click editing feature introduced another challenge because a double-click begins with a normal click. I had to account for this interaction so that editing a task would not accidentally trigger its completion action.

Input validation was another important consideration. Checking whether an input was empty was not enough because users could enter spaces without providing an actual task. Using `trim()` helped prevent this.

These challenges taught me to think beyond whether individual features work and consider how different interactions affect the application as a whole.
## Live Demos

- [Interactive To-Do List](https://quantums-meruit.github.io/iyf-s12-week-05-Quantums-meruit/)
  
- [DOM Practice Exercises](https://quantums-meruit.github.io/iyf-s12-week-05-Quantums-meruit/dom-practice.html)
  
- [Daily Challenges](https://quantums-meruit.github.io/iyf-s12-week-05-Quantums-meruit/daily-challenges/)

## Final Thoughts

Week 5 gave me an opportunity to put several JavaScript concepts into practice in one project. The To-Do List helped me understand how DOM manipulation, event handling, arrays and functions can work together to create an interactive application.

I also gained a better appreciation of writing code that is organised, reusable and responsive to different user actions.

There is still more to learn, but this project has strengthened my understanding of JavaScript and given me a better foundation for the next stages of my web development journey.
