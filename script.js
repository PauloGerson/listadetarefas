let container = document.querySelector('.tarefa');
let btn = document.querySelector('.btn');
let input = document.querySelector('.input');
let li;

btn.addEventListener('click', function(e){
    console.log('oi')
    criaLi();  
})

function criaLi(){
    li = document.createElement('li');
    li.innerText = input.value;
    apagarLi(li);
    completarLi(li)
    container.appendChild(li);
    input.value = "";
    return li;
}

function apagarLi(li){
    let icon = document.createElement('i');
    icon.setAttribute('class', 'fa-solid fa-trash');
    li.appendChild(icon);

    icon.addEventListener('click', function(e){
        li = e.target;
        li.parentNode.remove();
    })   
}

function completarLi(li){
    li.addEventListener('click', function(e){
        li = e.target;
       li.classList.toggle('visible');
       
    })
}



