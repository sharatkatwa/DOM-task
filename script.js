// task1
let btn1 = document.querySelector(".btn1");
let p1 = document.querySelector(".task1-p");
let task1Changed = false;
btn1.addEventListener("click", () => {
  if (!task1Changed) {
    p1.innerHTML = "Welcome";
    task1Changed = true;
  } else {
    p1.innerHTML = "Hello";
    task1Changed = false;
  }
});

// task 2
let box2 = document.querySelector(".box2");
let btn2 = document.querySelector(".btn2");

let box2Color = "red";
btn2.addEventListener("click", () => {
  if (box2Color == "red") {
    box2.style.backgroundColor = "rgba(0, 128, 0, 0.5)";
    box2Color = "green";
  } else if (box2Color == "green") {
    box2.style.backgroundColor = "rgba(0, 0, 255, 0.5)";
    box2Color = "blue";
  } else {
    box2.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
    box2Color = "red";
  }
});

// task 3
let box3 = document.querySelector(".box3");
let btn3 = document.querySelector(".btn3");

let showBox = true;
btn3.addEventListener("click", () => {
  if (showBox) {
    box3.style.visibility = "Hidden";
    btn3.innerHTML = "Show box";
    showBox = false;
  } else {
    box3.style.visibility = "visible";
    btn3.innerHTML = "Hide Box";
    showBox = true;
  }
});

// task 4

let btn4_left = document.querySelector(".btn4-left");
let btn4_right = document.querySelector(".btn4-right");
let box4 = document.querySelector(".box4");

let rotation = 0;
btn4_left.addEventListener("click", () => {
  rotation -= 45;
  box4.style.rotate = rotation + "deg";
});

btn4_right.addEventListener("click", () => {
  rotation += 45;
  box4.style.rotate = rotation + "deg";
});

// task 5

let btn5decrement = document.querySelector(".inc");
let btn5increment = document.querySelector(".dec");
let numElement = document.querySelector(".q5-p");

let num = 0;
btn5increment.addEventListener("click", () => {
  numElement.innerHTML = ++num;
});

btn5decrement.addEventListener("click", () => {
  numElement.innerHTML = --num;
});

// task6

let btn6 = document.querySelector(".btn6");
let modeEle = document.querySelector(".q6-p");
let body = document.body;

let isDark = true;
btn6.addEventListener("click", () => {
  if (isDark) {
    modeEle.innerHTML = "Current Mode: Light";
    body.style.background = "linear-gradient(to bottom left, #d8b7a8, #e8c7a8)";
    body.style.color = "#000000";
    isDark = false;
  } else {
    modeEle.innerHTML = "Current Mode: Dark";
    body.style.background = "linear-gradient(to bottom left, rgb(19, 14, 14),rgb(19,14,1))";
    body.style.color = "#ffffff";
    isDark = true;
  }
});

// task 7

let input_text = document.querySelector("#task7-input");
let para7 = document.querySelector(".q7-p");

input_text.addEventListener("input", () => {
  para7.innerHTML = input_text.value;
});

// Task 8

let box8 = document.querySelector(".box8");

box8.addEventListener("mouseenter", () => {
  box8.style.backgroundColor = "rgba(0, 128, 0, 0.5)";
});

box8.addEventListener("mouseleave", () => {
  box8.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
});

// Task 9

let btn9 = document.querySelector(".btn9");
let para9 = document.querySelector(".q9-p");

btn9.addEventListener(
  "click",
  () => {
    para9.innerHTML = "Button clicked.";
  },
  { once: true },
);

// task 10
let redlight = document.querySelector(".red");
let yellowlight = document.querySelector(".yellow");
let greenlight = document.querySelector(".green");

let redbtn = document.querySelector(".redbtn");
let yellowbtn = document.querySelector(".yellowbtn");
let greenbtn = document.querySelector(".greenbtn");

redbtn.addEventListener("click", () => {
  redlight.style.cssText = "background-color:red; box-shadow: 0px 0px 50px 20px rgba(255,0,0,.2);";
      yellowlight.style.cssText = "background-color:rgba(255,255,0,0.5); box-shadow: none;";

  greenlight.style.cssText = "background-color:rgba(0,128,0,.5); box-shadow: none;";
});
yellowbtn.addEventListener("click", () => {
  yellowlight.style.cssText = "background-color:yellow; box-shadow: 0px 0px 50px 20px rgba(255,255,0,.2);";
  redlight.style.cssText = "background-color:rgba(255,0,0,.5); box-shadow: none;";

      greenlight.style.cssText = "background-color:rgba(0,128,0,.5); box-shadow: none;";

});
greenbtn.addEventListener("click", () => {
     greenlight.style.cssText = "background-color:rgba(0,200,0,1); box-shadow: 0px 0px 50px 20px rgba(0,255,0,.2);";
  redlight.style.cssText = "background-color:rgba(255,0,0,.5); box-shadow: none;";

    yellowlight.style.cssText = "background-color:rgba(255,255,0,0.5); box-shadow: none;";

});


let pagebtn = document.querySelector('.btn-sec')

let goto = (page)=>{
  window.location.href = page
}
pagebtn.addEventListener('click',()=>goto('./dayTwoTasks.html'))