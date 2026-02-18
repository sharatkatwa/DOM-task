// Day 2 task starts here ***************************************8

let pagebtn = document.querySelector('.btn-sec')

let goto = (page)=>{
  window.location.href = page
}
pagebtn.addEventListener('click',()=>goto('./index.html'))