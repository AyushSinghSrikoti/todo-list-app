const addTodo = document.getElementsByClassName('tick-0');
const todoList = document.getElementById('todos-container');
const todoCheckbox = document.getElementsByClassName('tick');
const todo = document.getElementsByClassName('todo');
const completedFilter = document.getElementById('completed');
const allFilter = document.getElementById('all');
const activeFilter = document.getElementById('active');
const clear = document.getElementById('clear');
const noOfItems = document.getElementById('no-of-items');


// ----------------------------------------------common functions used------------------------------------>>

function refresh(){
    addTodo[0].style.background = 'hsl(235, 24%, 19%)'; 
}

function countItems() {
    let count = 0;
    for (let i of todo) {
        if (!i.classList.contains('line-through')) {
            count++;
        }
    }
    noOfItems.textContent = count;
}

countItems();


// -------------------------------------------add todos to the list ----------------------------------------->>

addTodo[0].addEventListener('click' , function(){
    let userInput = document.getElementById('create-todo').value.trim();
    if(userInput.length===0){
        alert('empty field');
        refresh();
    }else{
        addTodo[0].style.background = 'linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))';
        addTodo[0].classList.toggle('visible');
        let todo = document.createElement('div');
        let checkbox = document.createElement('div');
        let tick = document.createElement('div');
        let tickImg = document.createElement('img');
        let span = document.createElement('span');
        
        todo.className = 'todo';
        checkbox.className = 'checkbox';
        tick.className = 'tick';
        tickImg.setAttribute('src', 'images/icon-check.svg');
        span.innerText = userInput;
        
        checkbox.appendChild(tick);
        tick.appendChild(tickImg);
        todo.appendChild(checkbox);
        todo.appendChild(span);
        todoList.appendChild(todo);
        
        todo.addEventListener('click', function(){
            todo.classList.toggle('line-through');
        });
        
        tick.addEventListener('click', function(){
            tick.classList.toggle('visible');
            tick.style.background = 'linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))';
        });
        
        setTimeout(() => {
            alert('Todo created');
            refresh();
            addTodo[0].classList.toggle('visible');
            document.getElementById('create-todo').value = '';
            countItems();
        }, 500);
    }
});


// -------------------------------------------------------select a todo--------------------------------------->>

for(let i of todoCheckbox){
    i.addEventListener('click' , function(){
        i.style.background = 'linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))';
        i.classList.toggle('visible');
        countItems();
    });
}



// -----------------------------------------filters' event listners-------------------------------------------->>


completedFilter.addEventListener('click', function() {
    for (let i of todo) {
        if (i.classList.contains('line-through')) {
            i.style.display = 'flex';
            countItems();
        } else {
            i.style.display = 'none';
            countItems();
        }
    }
});

allFilter.addEventListener('click', function() {
    for (let i of todo) {
        i.style.display = 'flex';
        countItems();
    }
});

activeFilter.addEventListener('click', function() {
    for (let i of todo) {
        if (i.classList.contains('line-through')) {
            i.style.display = 'none';
            countItems();
        } else {
            i.style.display = 'flex';
            countItems();
        }
    }
});

clear.addEventListener('click', function() {
    const checkedTodos = document.querySelectorAll('.line-through');
    for (let i of checkedTodos) {
        i.remove();
        countItems();
    }
});

// ---------------------------------------------------------Theme switcher------------------------------------------>

const lowerBackground = document.getElementById('lower-background');
const upperBackground = document.getElementById('upper-background');
const modeSwitch = document.getElementById('theme');
const create = document.getElementsByClassName('indivisual-todo');
const input = document.getElementById('create-todo');
const todoContainer = document.getElementsByClassName('todos-container2');
const info = document.getElementById('todo-info');

var LightMode = false;

modeSwitch.addEventListener('click' , function(){
    if(LightMode==false){
        modeSwitch.querySelector('img').src = './images/icon-moon.svg';
        lowerBackground.style.backgroundColor = 'white';
        upperBackground.style.backgroundImage = 'url(./images/bg-desktop-light.jpg)';
        create[0].style.backgroundColor = 'white';
        input.style.background = 'white';
        todoContainer[0].style.backgroundColor = 'white';
        todoContainer[0].style.color = 'black';
        todoContainer[0].style.boxShadow = 'none';
        todoContainer[0].style.border = '2px solid gray';
        todoContainer[0].style.borderBottom = 'none';
        info.style.backgroundColor = 'white';
        info.style.color = 'black';
        info.style.border = '2px solid gray';
        info.style.borderTop = '1px solid gray';
        info.style.width = '99.5%';
        LightMode = true;
    }else{
        modeSwitch.querySelector('img').src = './images/icon-sun.svg';
        lowerBackground.style.backgroundColor = 'hsl(235, 24%, 19%)';
        upperBackground.style.backgroundImage = 'url(./images/bg-desktop-dark.jpg)';
        create[0].style.backgroundColor = 'hsl(235, 24%, 19%)';
        input.style.background = 'hsl(235, 24%, 19%)';
        todoContainer[0].style.backgroundColor = 'hsl(235, 24%, 19%)';
        todoContainer[0].style.color = 'white';
        todoContainer[0].style.boxShadow = '0px 200px 500px 15px black';
        todoContainer[0].style.border = 'none';
        info.style.backgroundColor = 'hsl(235, 24%, 19%)';
        info.style.color = 'white'
        info.style.border = 'none';
        info.style.borderTop = '1px solid gray';
        info.style.width = '100%';
        LightMode = false;
    }
})


