const form = document.getElementById('form-tarefas');
const tarefas = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaLinha();
});

function adicionaLinha() {
    const inputNomeTarefa = document.getElementById('nome-atividade');
    
    if (tarefas.includes(inputNomeTarefa.value)) {
        alert();
    } else {
        tarefas.push(inputNomeTarefa.value);
        
        let linha = '<ul>';
        linha += `<li>${inputNomeTarefa.value}</li>`;
        linha += '</li>';
    
        linhas += linha;
    }

    inputNomeTarefa.value = '';
}

function atualizaLinha() {
    const linhaNova = document.querySelector('ul li');
    linhaNova.innerHTML = linhas;
}

$('#item-tarefa').click(function() {
    $('li').css('text-decoration', 'line-through')
})