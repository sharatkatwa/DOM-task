// Day 2 task starts here ***************************************8

let pagebtn = document.querySelector(".btn-sec");

let goto = (page) => {
  window.location.href = page;
};
pagebtn.addEventListener("click", () => goto("./index.html"));

// TASK 1
let diceImgs = [
  "./assets/dice-six-faces-one.svg",
  "./assets/dice-six-faces-two.svg",
  "./assets/dice-six-faces-three.svg",
  "./assets/dice-six-faces-four.svg",
  "./assets/dice-six-faces-five.svg",
  "./assets/dice-six-faces-six.svg",
];

let btn1 = document.querySelector('.btn1')
let dice_div = document.querySelector('.dice-container')
let winElem = document.querySelector('.winner')

winElem.style.color = 'lightgreen'

  let img1 = document.createElement('img')
  let img2 = document.createElement('img')
  img1.src = diceImgs[0]
  img2.src = diceImgs[1]
  img1.height= 150
  img2.height= 150
  img1.width= 150
  img2.width=150
  
  dice_div.appendChild(img1)
  dice_div.appendChild(img2)
  let winner
  
btn1.addEventListener('click',()=>{
  let dice1 = Math.floor(Math.random()*diceImgs.length)
  let dice2 = Math.floor(Math.random()*diceImgs.length)
  if(dice1>dice2)
    winner = 1
  else if(dice1 == dice2)
   winner = 0
  else
    winner = 2
    
  img1.setAttribute('src',diceImgs[dice1])
  img2.setAttribute('src',diceImgs[dice2])
  // console.log(dice1,dice2)
  if(winner>0)
  winElem.innerHTML=`Congratulations dice ${winner} win`
else
  winElem.innerHTML=`Round Draw`
  
})


// Task 2

let btn2 = document.querySelector('.btn2')
let card_div2 = document.querySelector('.card-container')

let color= ['red', 'green', 'blue', 'pink', 'orange', 'purple']
let card = document.createElement('div')
btn2.addEventListener('click',()=>{
  card.style.backgroundColor = color[Math.floor(Math.random()*color.length)]
  card.style.height = `${Math.random()*200 +50}px`
  card.style.width = `${Math.random()*200+50}px`
  
  card.setAttribute('id',`card-${card.style.backgroundColor}`)
  
  
  card_div2.appendChild(card)
})

// Task 3

let btn3 = document.querySelector('.btn3')
let input3 = document.querySelector('#task3-input')
let message3 = document.querySelector('.winner3')

btn3.addEventListener('click',()=>{
 if( Number(input3.value)>50 || Number(input3.value)<1){
  message3.innerHTML = 'Please enter valid Number'
  message3.style.color = 'yellow'
 }
 else{
    if(Number(input3.value) == Math.ceil(Math.random()*50)){

      message3.innerHTML = 'You Won!!!'
      message3.style.color = 'lightgreen'
    }
    else{
      message3.innerHTML = "You Lose:( Try again!"
      message3.style.color = 'maroon'
    }
      
 }
})

// task 4
let btn4 = document.querySelector('.btn4')
let img_container4 = document.querySelector('.img-container')
let message4 = document.querySelector('.img-src4')


btn4.addEventListener('click',()=>{
  let img_elem=document.createElement('img')
  img_elem.style.height = '200px'
  img_elem.src = diceImgs[Math.floor(Math.random()*diceImgs.length)]
  img_container4.appendChild(img_elem)
  console.log(img_elem.src)
  message4.appendChild(`Image Source: ${img_elem.src}`)
})

// task 5

let btn5 = document.querySelector('.btn5')
let bar = document.querySelector('.progress-bar')
let text = document.querySelector('.progress')


bar.style.width = 0
bar.style.maxWidth = '100%'

let width = 0
btn5.addEventListener('click', ()=>{
    width+= (Math.floor(Math.random()*20)+10)

  if(width >= 100){
    width = 100 
    text.innerHTML = "Loading Complete"
  }
  else{
    bar.style.width = width+'%'
    text.innerHTML = `${width}% Complete`
    }
})

// Task 6

let btn6 = document.querySelector('.btn6')
let box_container = document.querySelector('.box-container')


let boxId = ['box1', 'box2', 'box3', 'box4', 'box5']
boxId.forEach((Element, index) => {
  let box = document.createElement('div')
  box.style.height = '150px'
  box.style.width = '150px'
  box.style.backgroundColor = color[index]
  box.setAttribute('id', Element)
  box_container.appendChild(box)
  
  let visible = true
  
  box.addEventListener('click',() =>{
    if(visible){
      box.style.visibility = 'hidden'
      visible = false

    }
    // else{
    //   box.style.visibility = 'visible'
    //   visible = true
    // }
  })
});

// btn6.addEventListener('click', ()=>{
//   boxId.forEach(element => {
//     let box = document.getElementById(element)
//     box.style.visibility = 'visible'
//   });
// })


// task 7

let btn7 = document.querySelector('.btn7')
let num1 = document.querySelector('.num1')
let num2 = document.querySelector('.num2')
let num3 = document.querySelector('.num3')
let winner7 = document.querySelector('.winner7')


btn7.addEventListener('click',()=>{
  let random1 = Math.floor(Math.random()*9+1)
  let random2= Math.floor(Math.random()*9+1)
  let random3 = Math.floor(Math.random()*9+1)
  num1.textContent = random1
  num2.textContent = random2
  num3.textContent = random3
  
  if(random1 == random2 == random3){
    winner7.innerHTML= 'You Won!'
  }
  else{
    winner7.innerHTML = 'Try again!'
  }
})