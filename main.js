const form = document.getElementById('form-tarefas')

form.addEventListener('sumit', function(e) {
    e.preventDefault();
    
    adicionaLinha();

})

function adicionaLinha() {
    const inputTarefa = $('#nome-atividade').val();
    const novaTarefa = $(`<li class="texto-tarefa">${inputTarefa}</li>`);

    $(novaTarefa).appendTo('ul');
    $('#nome-atividade').val('');
    $(novaTarefa).click(function() {
        $(novaTarefa).css("text-decoration","line-through");
    })
}