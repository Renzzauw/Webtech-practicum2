Tasks / Features:
-   DOM MANIPULATION:
    The script "welcomeScript" will be triggered on load and will trigger an alert that welcomes the visitor.
    The script also changes the first h2-heading after the user closes the alert on the index page.
    Using jQuery we retrieve the heading and change the html. For further DOM manipulation, see our Knowledge
    Base page.
-   EVENT LISTENERS:
    On the index page we use event listeners like "onclick" to process events. Also our welcome script will be called on window load.
-   EVENT PROPAGATION: 
    On the index page we have a button which says "Click me!". This button is inside a section. These elements
    both trigger an alert when clicked on. If you click the button it will bubble up and trigger the button message
    first and then the section message. The alerts should display "You" > "Clicked".
-   JQUERY:
    All javascript files make use of jQuery and its syntax using the $-sign.
-   CLASSES, INHERITANCE & KNOWLEDGE BASE:
    We made an article generating class. This class takes a title and content in its constructor and creates HTML with this info.
    It also makes sure to link it with an <a>-tag to next articles and adds the article to a nav menu on top. We made a second class
    that inherits from this one, but it adds an extra feature: an extra paragraph of content. We also have a third class, which creates 
    an article with three paragraphs. This class extends the previous class. Our knowledge base is entirely build on DOM manipulation.
    all the articles' elements are generated with javascript.
-   PLOT:
    We have a plot page with two lines on a grid. There are two checkboxes for each line that toggle the line on or off. Using eventlisteners,
    these lines will either be drawn or not. This way the graph is interactive.
-   JQUERY UI ELEMENT:
    On the knowledge base page we have added a Jquery UI context menu. This menu is activated when you press the button.
    With this dropdown menu you can manipulate the css of the article paragraphs.
