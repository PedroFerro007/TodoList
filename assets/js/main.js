const tarefa = document.querySelector('.tarefa-input');
const btnAdd = document.querySelector('.btn-add');
const ul = document.querySelector('.tarefas');

btnAdd.addEventListener('click', function(){
    createTask(tarefa.value);
    clearInput();
    inputFocus();
});

tarefa.addEventListener('keyup', function(e){
    if(e.keyCode === 13){
    createTask(tarefa.value);
    clearInput();
    inputFocus();

    }
})

inputFocus = () => {
    tarefa.focus();
};

clearInput = () => {
    tarefa.value = '';
};

createTask = (tarefa) => {
    if(tarefa){
    const li = createLi();
    li.innerHTML = tarefa;
    createBtn(li);
    ul.appendChild(li);
    saveTasks();
    }
};

createLi = () => {
    const li = document.createElement('li');
    return li;
};

createBtn = (li) => {
    li.innerText += ' ';
    const clearBtn = document.createElement('i');
    /* clearBtn.innerHTML = 'X'; */
    clearBtn.classList.add('apagar', 'fa', 'fa-times-circle');
    li.appendChild(clearBtn);
    
};

document.addEventListener('click', function(e){
    element = e.target;
    if(element.classList.contains('apagar')) {
        element.parentNode.remove();
        saveTasks();
    }
})



saveTasks = () => {
    const tasks = ul.querySelectorAll('li');
    const tasksList = [];

    tasks.forEach((task) => {
       let taskText = task.innerText;
       taskText = taskText.replace('Apagar', '').trim();
       tasksList.push(taskText);
    });

    const tasksJSON = JSON.stringify(tasksList) //Convertendo um array para o formato JSON
    localStorage.setItem('tasks', tasksJSON); //Setando as tasks em formato JSON no localStorage

};

RetrieveTasks = () => {
    const tasks = localStorage.getItem('tasks'); //Recuperando as tasks salvas
    const tasksList = JSON.parse(tasks); //Convertendo para um objeto js

    tasksList.forEach((task) => {
        createTask(task); //Criando elas novamente...
    })
}

RetrieveTasks();
