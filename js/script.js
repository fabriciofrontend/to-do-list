//função que adiciona tarefa
function addTask() {
    //titulo da tarefa
    const taskTitle = document.querySelector("#task-title").value; //value para pegar o valor do input
  
    if (taskTitle) {
      //para evitar salvar tarefas vazias
  
      //clona o template
      const template = document.querySelector(".template");
  
      const newTask = template.cloneNode(true); //método que clona o HTML numa nova variável
  
      //adiciona título
      newTask.querySelector(".task-title").textContent = taskTitle;
  
      //remover as classes desnecessárias
      newTask.classList.remove("template");
      newTask.classList.remove("hide");
  
      //adiciona tarefa na lista
      const list = document.querySelector("#task-list");
      list.appendChild(newTask);
  
      //adicionar o evento de remover
      const removeBtn = newTask
        .querySelector(".remove-btn")
        .addEventListener("click", function () {
          removeTask(this);
        });
  
      //adicionar evento de completar tarefa
      const doneBtn = newTask
        .querySelector(".done-btn")
        .addEventListener("click", function () {
          completeTask(this);
        });
  
      //limpar texto do input para instigar o usuário repetir a ação
      document.querySelector("#task-title").value = "";
    }
  }
  
  //função de remover tarefa
  function removeTask(task) {
    task.parentNode.remove(true);
  }
  
  //função de completar a tarefa
  function completeTask(task) {
    const taskToComplete = task.parentNode;
    taskToComplete.classList.toggle("done"); //se tiver o done ele tira, se não ele coloca. ou seja, o toggle faz isso, se tiver a classe ele tira, se não ele coloca. Assim não precisa de um if/else pra isso
    //ele vai sublinhar e alterar a cor da tarefa para roxa, o que foi feito no css, como done. Também pode clicar novamente para deixar sem estar completada.
  }
  
  //evento de adicionar tarefa
  const addBtn = document.querySelector("#add-btn");
  
  addBtn.addEventListener("click", function (e) {
    //mapeado o click do usuário e só funciona quando tem o click
    e.preventDefault();
  
    addTask();
  });
  