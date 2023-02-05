'use strict'

const faq1 = document.querySelector('.faq-answer-1')
const faq2 = document.querySelector('.faq-answer-2')
const faq3 = document.querySelector('.faq-answer-3')
const faq4 = document.querySelector('.faq-answer-4')

const arrow1 = document.querySelector('.question-heading-1')
const arrow2 = document.querySelector('.question-heading-2')
const arrow3 = document.querySelector('.question-heading-3')
const arrow4 = document.querySelector('.question-heading-1')

console.log(arrow1)

arrow1.addEventListener('click',function(){
    faq1.classList.toggle('hidden')
    //document.getElementById('question-1').style.color='red'
    
})
arrow2.addEventListener('click',function(){
    faq2.classList.toggle('hidden')
})
arrow3.addEventListener('click',function(){
    faq3.classList.toggle('hidden')
})
arrow4.addEventListener('click',function(){
    faq4.classList.toggle('hidden')
})