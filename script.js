if ('serviceWorker' in navigator) { 
    window.addEventListener('load', function () { 
        navigator.serviceWorker.register('/sw.js').then(function () { 
            console.log('Registration successful');  
        }, function (err) {
            console.log('Registration failed', err); 
        });
    });
}

async function main() {
    const form = document.querySelector('form');
    const name = document.querySelector("[name='sname']");
    const duedate = document.querySelector("[name='duedate']");
    const assignedto = document.querySelector("[name='assignedto']");
    const tasksList = document.getElementById('students');

    const existingTasks = await getAllTasksFromDB()

    console.log(existingTasks)

    const studentData = [];

    existingTasks.forEach(student => {
        addTask(student.taskName,student.dueDate,student.assignedTo);
    });


    function addTask(task_name,due_date,assigned_to) {
        const div = document.createElement('div')
        div.classList.add('student')
        const h1 = document.createElement('h1')
        h1.innerHTML = task_name;
        const h2= document.createElement('h2')
        h2.innerHTML = due_date;
        const p = document.createElement('p')
        p.innerHTML = assigned_to;

        studentData.push({task_name,due_date,assigned_to });

        div.appendChild(h1)
        div.appendChild(h2)
        div.appendChild(p)
        tasksList.appendChild(div)

        //localStorage.setItem('students', JSON.stringify(studentData));
        addTaskToDB(task_name,due_date,assigned_to)
        name.value = ''
        duedate.value = ''
        assignedto.value = ''
    }

    // Events
    form.onsubmit = (event) => {
        event.preventDefault();
        addTask(name.value, duedate.value,assignedto.value);
    }
}


main()