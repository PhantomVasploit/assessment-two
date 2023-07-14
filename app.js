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
let clear = document.querySelector('.clearBtn')
// let divide = document.querySelector('.divideBtn')
// let mul = document.querySelector('.mulBtn')
let plus = document.querySelector('.plusBtn')
// let minus = document.querySelector('.minusBtn')
let equals = document.querySelector('.equalsBtn')


clear.addEventListener('click', ()=>{
    output.innerHTML = ""
})

// divide.addEventListener('click', ()=>{
//     loadOutput(divide);
// })

// mul.addEventListener('click', ()=>{
//     loadOutput(mul);
// })

plus.addEventListener('click', ()=>{
    loadOutput(plus);
})

// minus.addEventListener('click', ()=>{
//     loadOutput(minus);
// })

equals.addEventListener('click', ()=>{
    add()
})

function add(){
    let numbers = output.innerHTML.split('+')
    let sum = 0
    numbers.map((number)=>{
        sum += parseInt(number);
    })
    output.innerHTML = sum;
}

function divide(){
    let numbers = output.innerHTML.split('/')
    let result = 0
    result = parseInt(numbers[0])/parent(numbers[1]);
    output.innerHTML = result
}

function multiply(){
    let numbers = output.innerHTML.split('X')
    let result = 0
    result = parseInt(numbers[0])*parent(numbers[1]);
    output.innerHTML = result
}

function minus()
{
    let numbers = output.innerHTML.split('-')
    let result = 0
    result = parseInt(numbers[0])-parent(numbers[1]);
    output.innerHTML = result
}

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