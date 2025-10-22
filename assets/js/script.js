const taskInputEl = document.getElementById('inputtask'); 
const button = document.getElementById('tbutton');
const tasklist = document.getElementById('listtask');

// Fonksiyon içinde
function addtask() 
{
    const tasktext = taskInputEl.value.trim(); 
    
    if (tasktext == "")
    {
        alert("Görev yeri boş olamaz");
        return;
    }

    const newTask = document.createElement('li');
    const taskSpan = document.createElement('span');
    taskSpan.textContent = tasktext;

    newTask.appendChild(taskSpan);
    tasklist.appendChild(newTask);

    taskInputEl.value = '';
}



taskInputEl.addEventListener('keypress', function(e) {
if (e.key === 'Enter') {
        gorevEkle();
}
});