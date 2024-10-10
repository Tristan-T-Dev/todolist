const InputBox = document.getElementById('input_box');
const ListTasks = document.getElementById('task_list');
const ToDo = document.querySelector('.todo');
const error = document.querySelector('.error');
function AddTask() {
    if(InputBox.value.trim() === '') {
        console.log('Please Add Tasks');
        ToDo.classList.add('error');
        setTimeout(() => {
            ToDo.classList.remove('error');
        }, 1000);
        
    }else{
        let li = document.createElement('li');
        li.innerHTML = InputBox.value;
        ListTasks.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    InputBox.value = '';
    saveData()
}

ListTasks.addEventListener('click', function(event) {
    if(event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
        saveData()
    }
    else if(event.target.tagName === 'SPAN') {
        event.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData(){
    localStorage.setItem("data", ListTasks.innerHTML);
}

function showList() {
    ListTasks.innerHTML = localStorage.getItem("data");
}
showList(); 