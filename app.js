let bottom = document.querySelector('.bottom');
let output = document.querySelector('output');
let html = ''

function loadNumbers(){
    for(let number = 0; number<10; number++){
        html += `
            <div class="area${number}">
                <button>${number}</button>
            </div>
        `
    }
    bottom.innerHTML += html
}

loadNumbers()

