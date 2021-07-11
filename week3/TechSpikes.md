# Notes for Tech Spikes questions - week 3

## CSS Architecture 🎨

Questions to consider 
1. Why are CSS naming conventions useful?

Naming conventions in CSS are hugely useful in making your code more strict, more transparent, and more informative.

<em>A good naming convention will tell you and your team

what type of thing a class does;
where a class can be used;
what (else) a class might be related to.</em>

2. When might specificity become a problem?

<em>'Specificity can, among other things,

limit your ability to extend and manipulate a codebase;
interrupt and undo CSS’ cascading, inheriting nature;
cause avoidable verbosity in your project;
prevent things from working as expected when moved into different environments;
lead to serious developer frustration.

The problem with specificity isn’t necessarily that it’s high or low; it’s the fact it is so variant and that it cannot be opted out of: the only way to deal with it is to get progressively more specific—the notorious specificity wars we looked at above.'</em>

3. How can composition help us build UIs?

Composition in CSS comes from the composition over inheritance principle.

<em> 'The idea is that combining simple independent parts (objects; classes; functions) gives you more flexibility, and leads to more efficiency, than connecting everything—through inheritance—to a shared origin.'</em>

Layout primitives are smaller reusable layouts that can be composed into UI elements. They can be thought of as the CSS equivalent of primitive data types.

<em>The primitives each have a simple responsibility: "space elements vertically", "pad elements evenly", "separate elements horizontally", etc. They are designed to be used in composition, as parents, children, or siblings of one another.</em>

The UI element itself is meaningful in the contex of the desgin but the primitives are not. 

## Responsive design 📱

Questions to consider 
1. What CSS units should we use for dimensions? What are absolute and relative units?

<em>Absolute units are not relative to anything else, and are generally considered to always be the same size. The absolute unit most often used for the web is px.
Relative length units are relative to something else, perhaps the size of the parent element's font, or the size of the viewport.</em>

Common relative units are em, rem, and ch. There are also vw and vh that refer to the width and height of the viewport.

Relative units have the following benefits:

- Responsive

- Easier to maintain

- Create a visual hierarchy

2. When should you use a media query? Are they only for screen size?

<em>Media queries are useful when you want to modify a site or app depending on a device's general type (such as print vs. screen) or specific characteristics and parameters (such as screen resolution or browser viewport width)</em>

There are lots of other things we can target beside screen size. That might be screen resolution, device orientation, operating system preference etc

3. How can mobile-first CSS make responsive styling easier?

<em>A mobile-first approach to styling means that styles are applied first to mobile devices. Advanced styles and other overrides for larger screens are then added into the stylesheet via media queries.

Code for larger screens is usually more complicated than the codes for smaller screens. This is why coding mobile first helps simplify code.

Progressive enhancement refers to the design method starting with a strong base of designing for the lower browser (e.g. on mobile devices) and building up to a larger design for desktop.</em>

## Advanced CSS 🤔
Questions to consider 
1. What are “combinator” selectors? Can you provide examples where they’re useful?

<em>CSS selectors define the elements to which a set of CSS rules apply.

Combining selectors are used to combine or group the properties each element will receive from the CSS.</em>

Combining selectors can be done through:

Selector grouping e.g. .index, .column {} 

Using combinator selectors .list-detail li {}


2. What are pseudo-elements? Can you provide examples where they’re useful?

The CSS ::before selector inserts content before a selected element. CSS :after inserts content after a specified element. 

Pseudo-elements allow you to insert content onto a page without it needing to be in the HTML. While the end result is not actually in the DOM, it appears on the page as if it is.

Use cases include adding an icon or extra visual styling next to headings, links and menus.

Adding multiple backgrounds or borders to containers.

Adding image overlays or background images.

Any style element that you don't want to add markup for.

3. How might you create custom-styled checkboxes using both of the above?

You could use :before and :after to insert custom styles for the controls into the DOM. Combination selectors would allow you to scope the styles to those specific controls.