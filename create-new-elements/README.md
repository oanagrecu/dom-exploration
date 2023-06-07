# Creating Nodes

Now that we can access the DOM and modify existing nodes, let's try to create new ones!

Using the `document.createElement()` method, we can create any element node we'd like (`<p>`, `<section>`, `<div>`, ...).

We then need to create a text node for the text inside the elements, using the `createTextNode` method.

The trick is to append each node to its corresponding parent, using either the `appendChild` or `insertBefore` method. This way, you can position your newly created nodes in the DOM tree.

## Exercises

1. Modify the `script.js` to create a new `<section>` with a random background-color for each learner in your group. This section should contain a paragraph with the name of the learner. Those sections should be appended in the `<article>`.

2. If the background is dark, the text should be white. If the background is light, the text should be black.

3. Find a way so that every time you load the page, the order of the elements changes!
