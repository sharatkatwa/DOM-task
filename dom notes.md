# JavaScript DOM – Complete Practical Guide

This guide covers:

- What is DOM
- Selecting elements
- getElementById
- getElementsByClassName
- innerHTML
- textContent
- Changing CSS with JS
- Events
- Event Listeners
- Mouse events
- Keyboard events
- Scroll & wheel
- Animation (rotating div)
- Bulb on/off project
- Like/Dislike feature
- Math.random()
- Math.ceil()

---

# 1. What is DOM?

## Definition

DOM (Document Object Model) is a programming interface that represents an HTML document as a tree of objects.

It allows JavaScript to:

- Select elements
- Modify content
- Change styles
- Handle events

---

# 2. Selecting an Element

Selecting means accessing an HTML element using JavaScript.

---

## 2.1 getElementById()

Selects element by its id.

### HTML

```html
<h1id="title">Hello</h1>
```

### JS

```jsx
let element =document.getElementById("title");console.log(element);
```

✔ Returns single element

✔ ID must be unique

---

## 2.2 getElementsByClassName()

Selects elements by class.

### HTML

```html
<pclass="text">One</p><pclass="text">Two</p>
```

### JS

```jsx
let elements =document.getElementsByClassName("text");console.log(elements);
```

✔ Returns HTMLCollection

✔ Multiple elements possible

---

# 3. innerHTML

## What it does

Gets or sets HTML content inside element.

```jsx
let div =document.getElementById("box");
div.innerHTML ="<h2>New Content</h2>";
```

It reads and writes HTML.

---

# 4. textContent

## What it does

Gets or sets text only (no HTML interpretation).

```jsx
div.textContent ="<h2>New Content</h2>";
```

Output will show text literally.

✔ Safer than innerHTML

---

# 5. Changing CSS with JavaScript

You can change style using `.style`

```jsx
let box =document.getElementById("box");

box.style.backgroundColor ="red";
box.style.width ="200px";
```

Property names use camelCase:

- background-color → backgroundColor

---

# 6. Events in JavaScript

Events are actions that happen in the browser:

- Click
- Scroll
- Key press
- Mouse hover

---

# 7. onclick

```html
<buttononclick="alert('Clicked')">Click</button>
```

Or:

```jsx
let btn =document.getElementById("btn");

btn.onclick =function() {alert("Clicked");
};
```

---

# 8. addEventListener()

Better method to handle events.

```jsx
btn.addEventListener("click",function() {console.log("Button clicked");
});
```

✔ Cleaner

✔ Multiple events possible

---

# 9. Double Click

```jsx
btn.addEventListener("dblclick",function() {console.log("Double clicked");
});
```

---

# 10. mouseEnter

```jsx
box.addEventListener("mouseenter",function() {
  box.style.backgroundColor ="blue";
});
```

Triggers when mouse enters element.

---

# 11. mouseLeave

```jsx
box.addEventListener("mouseleave",function() {
  box.style.backgroundColor ="white";
});
```

Triggers when mouse leaves element.

---

# 12. Scroll Event

```jsx
window.addEventListener("scroll",function() {console.log("Scrolling...");
});
```

Used for:

- Sticky header
- Infinite scroll

---

# 13. Wheel Event

Triggered when mouse wheel moves.

```jsx
window.addEventListener("wheel",function() {console.log("Wheel moved");
});
```

---

# 14. Keypress Event

```jsx
document.addEventListener("keypress",function(event) {console.log("Key pressed:", event.key);
});
```

Used for:

- Input detection
- Shortcuts

---

# 15. Animated Div Rotation

### HTML

```html
<divid="box"></div>
```

### CSS

```css
#box {width:100px;height:100px;background: red;
}
```

### JS

```jsx
let box =document.getElementById("box");let angle =0;setInterval(function() {
  angle +=5;
  box.style.transform ="rotate(" + angle +"deg)";
},100);
```

✔ Rotates continuously

---

# 16. Bulb On/Off Project

### HTML

```html
<imgid="bulb"src="off.png"><buttonid="btn">Toggle</button>
```

### JS

```jsx
let bulb =document.getElementById("bulb");let btn =document.getElementById("btn");let isOn =false;

btn.addEventListener("click",function() {if (isOn) {
    bulb.src ="off.png";
    isOn =false;
  }else {
    bulb.src ="on.png";
    isOn =true;
  }
});
```

---

# 17. Like / Dislike Feature

### HTML

```html
<buttonid="like">Like</button><buttonid="dislike">Dislike</button><pid="status"></p>
```

### JS

```jsx
let status =document.getElementById("status");document.getElementById("like").onclick =function() {
  status.textContent ="You liked this";
};document.getElementById("dislike").onclick =function() {
  status.textContent ="You disliked this";
};
```

---

# 18. Math.random()

Generates random number between 0 and 1.

```jsx
console.log(Math.random());
```

---

## Random Number Between 1 and 10

```jsx
let num =Math.floor(Math.random() *10) +1;console.log(num);
```

---

# 19. Math.ceil()

Rounds number UP.

```jsx
console.log(Math.ceil(4.2));// 5
```