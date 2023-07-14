let bottom = document.querySelector('.bottom');
let output = document.querySelector('.output');
let html = ''


function loadNumbers(){
    for(let number = 0; number<10; number++){
        html += `
            <div class="area${number}">
                <button class="button${number}">${number}</button>
            </div>
        `
    }
    bottom.innerHTML += html
}

loadNumbers()

function loadOutput(input){
    output.innerHTML += input.textContent;
}


let zero = document.querySelector('.button0');
let one = document.querySelector('.button1');
let two = document.querySelector('.button2');
let three = document.querySelector('.button3');
let four = document.querySelector('.button4');
let five = document.querySelector('.button5');
let six = document.querySelector('.button6');
let seven = document.querySelector('.button7');
let eight = document.querySelector('.button8');
let nine = document.querySelector('.button9');


zero.addEventListener('click', ()=>{
    loadOutput(zero);
})

one.addEventListener('click', ()=>{
    loadOutput(one);
})

two.addEventListener('click', ()=>{
    loadOutput(two);
})

three.addEventListener('click', ()=>{
    loadOutput(three);
})

four.addEventListener('click', ()=>{
    loadOutput(four);
})

five.addEventListener('click', ()=>{
    loadOutput(five);
})

six.addEventListener('click', ()=>{
    loadOutput(six);
})

seven.addEventListener('click', ()=>{
    loadOutput(seven);
})

eight.addEventListener('click', ()=>{
    loadOutput(eight);
})

nine.addEventListener('click', ()=>{
    loadOutput(nine);
})