let container = document.querySelector('.tarefa');
let btn = document.querySelector('.btn');
let input = document.querySelector('.input');


btn.addEventListener('click', function(){
    criaTarefa(input.value);
    
    //console.log('oi') 
    //criaLi(); 

})

input.addEventListener('keypress', function(e){
  
        if( e.keyCode == 13){
            criaTarefa(input.value);
        }
    
        /*outra forma
        if(e.which == 13){
            criaLi();
        }
    
        */
 })


 
function criarLi(){
    let li = document.createElement('li');
    return li;
}

function criaTarefa(conten){     
    const li = criarLi();
    li.innerText = conten;
    container.appendChild(li);
    apagarLi(li)
    completarLi(li)
    salvarTarefa(li)
    input.value = '';

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
        //salvarTarefa()
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
        let text = tarefa.innerText;
        listaDeTarefas.push(text); // com o push, estamos adicionando os itens de tarefas em listaDetarfas
    } 

    const tarefaJSON = JSON.stringify(listaDeTarefas); // formtando um array para um tipo string do obejto json
    localStorage.setItem('tarefas', tarefaJSON);
   
}
function adicionarTarefasSalvar(){
    const tarefas = localStorage.getItem('tarefas');
   
    const listaDeTarefas = JSON.parse(tarefas); // voltando a seu tipo inicial, no caso um array de caracteres
    console.log(listaDeTarefas)
    for(let tarefa of listaDeTarefas){
        //console.log(tarefa)
        criaTarefa(tarefa)              
    }
}
 
adicionarTarefasSalvar();







