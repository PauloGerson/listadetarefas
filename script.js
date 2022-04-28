let container = document.querySelector('.tarefa');
let btn = document.querySelector('.btn');
let input = document.querySelector('.input');

btn.addEventListener('click', function(e){
    console.log('oi')
    criaLi();
    
})

function criaLi(){
    let li = document.createElement('li');
    li.innerText = input.value;
    //criarbtn(li);
    criarIcone(li);
    container.appendChild(li);
    input.value = "";
    return li;
}

function criarIcone(li){
    let icon = document.createElement('i');
    icon.setAttribute('class', 'fa-solid fa-trash');
    li.appendChild(icon);
}

function criarIcone(li){
    let icon = document.createElement('i');
    icon.setAttribute('class', 'fa-solid fa-trash');
    li.appendChild(icon);

    icon.addEventListener('click', function(e){
        li = e.target;
        li.parentNode.remove();
    })
}

