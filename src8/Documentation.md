### Explanation of some basic concepts courtesy of ChatGPT.

1. justify-content
This property is used with flexbox (display: flex;) and grid (display: grid;) layouts to control how child elements are spaced along the main axis.

Example 1: Using justify-content in display: flex;

```css
.container {
    display: flex;
    justify-content: center; /* Aligns items in the center horizontally */
    background-color: lightblue;
    height: 100px;
}

.item {
    width: 50px;
    height: 50px;
    background-color: red;
}
```

```html
<div class="container">
    <div class="item"></div>
    <div class="item"></div>
</div>

```
🔹 Result: The red squares will be centered horizontally inside the blue container.

|flex-start	    |Aligns items to the start (default)|
|flex-end	    |Aligns items to the end|
|center	        |Centers items horizontally|
|space-between	|Spaces items with the first at the start and last at the end|
|space-around	|Adds equal space around all items|
|space-evenly	|Distributes space evenly between and around items|

2. display
This property determines how an element behaves in the document (block, inline, flex, grid, etc.).

Example 2: display values

```css
.block {
    display: block;  /* Takes full width */
    background-color: lightcoral;
}

.inline {
    display: inline; /* Takes only the width of its content */
    background-color: lightgreen;
}

.flex {
    display: flex; /* Enables flexbox */
    justify-content: space-between;
}

.grid {
    display: grid; /* Enables grid layout */
    grid-template-columns: repeat(2, 1fr);
}
```

```html
<p class="block">Block Element</p> <!-- Takes full width -->
<span class="inline">Inline Element</span> <!-- Takes only content width -->

<div class="flex">
    <div>Item 1</div>
    <div>Item 2</div>
</div>

<div class="grid">
    <div>Grid Item 1</div>
    <div>Grid Item 2</div>
</div>
```

🔹 Result:

- The block element stretches across the full width.
- The inline element stays only as wide as its content.
- The flex container arranges items in a row.
- The grid container arranges items into a two-column grid.

Common display Values
|Value	|Effect|
|block	|Takes full width, starts on a new line|
|inline	|Stays in the flow of text, takes only needed width|
|flex	|Enables flexbox for layout|
|grid	|Enables grid layout|
|none	|Hides the element|

3. position
This property controls how an element is positioned in relation to its normal place in the document.

Example 3: position values

```css
.relative {
    position: relative; /* Moves relative to its normal position */
    top: 20px;
    left: 10px;
    background-color: lightblue;
}

.absolute {
    position: absolute; /* Moves relative to the nearest positioned ancestor */
    top: 10px;
    right: 20px;
    background-color: lightcoral;
}

.fixed {
    position: fixed; /* Stays fixed to the viewport */
    bottom: 10px;
    right: 10px;
    background-color: lightgreen;
}

.sticky {
    position: sticky; /* Sticks to the top when scrolling */
    top: 0;
    background-color: yellow;
}
```

```html
<div class="relative">Relative Position</div>
<div class="absolute">Absolute Position</div>
<div class="fixed">Fixed Position</div>
<div class="sticky">Sticky Position</div>
```

🔹 Result:
- The relative box moves slightly from its original place.
- The absolute box moves relative to the nearest positioned ancestor.
- The fixed box stays in the same place even when scrolling.
- The sticky box sticks to the top when scrolling down.

Common position Values
|Value	    |Effect|
|-----------|--------------------------------------------------|
|static	    |Default, follows normal document flow|
|relative	|Moves relative to its normal position|
|absolute	|Moves relative to the nearest positioned ancestor|
|fixed	    |Stays in the same position even when scrolling|
|sticky	    |Sticks to a position when scrolling|

Summary
|Property	        |Purpose|
|-----------------------|---------------------------------------------------|
|justify-content	    |Aligns items in flexbox or grid along the main axis|
|display	            |Defines how elements are displayed (block, inline, flex, etc.)|
|position	        |Controls how an element is positioned (relative, absolute, etc.)|