let container = document.querySelector('.tarefa');
let btn = document.querySelector('.btn');
let input = document.querySelector('.input');
let li;

btn.addEventListener('click', function(e){
    //console.log('oi') 
    criaLi(); 
})

input.addEventListener('keypress', function(e){
    if( e.keyCode == 13){
        criaLi();
    }

    //outra forma
    
})
 
function criaLi(){
    if(input.value !== ''){
    li = document.createElement('li');
    li.innerText = input.value;
    apagarLi(li);
    completarLi(li)
    container.appendChild(li);
    salvarTarefa()
    input.value = '';
    
}
}

function apagarLi(li){
    let icon = document.createElement('i');
    let span = document.createElement('span');
    icon.setAttribute('class', 'fa-solid fa-trash');
    span.appendChild(icon);
    li.appendChild(span);

    icon.addEventListener('click', function(e){
        li = e.target;
        li.parentNode.parentNode.remove();
        salvarTarefa()
    })   
}

function completarLi(li){
    li.addEventListener('click', function(e){
        li = e.target;
       li.classList.toggle('visible');
       
    })
}


//selecionado as li para salvar no localStorage
function salvarTarefa(){
    const liTarefas = container.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas){
        let text = tarefa.innerText
        listaDeTarefas.push(text); // com o push, estamos adicionando os itens de tarefas em listaDetarfas
    } 

    const tarefaJSON = JSON.stringify(listaDeTarefas); // formtando um array para um tipo string do obejto json
    localStorage.setItem('tarefas', tarefaJSON);
    
}

function adicionarTarefasSalvar(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas); // voltando a seu tipo inicial, no caso um array de caracteres
    
    for(let tarefa of listaDeTarefas){
        criaLi(tarefa);
    }
}









