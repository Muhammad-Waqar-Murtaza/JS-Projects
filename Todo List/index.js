//dom selection

const addTodo = document.querySelector('.add')
const list = document.querySelector('.todos')
const search = document.querySelector('.search input')

//to generate a new todo template

const generateTemplate = (todo) =>{

    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
        <i class="fa fa-trash-o delete"></i>
        </li>
    `;
    list.innerHTML += html   

}

//applying filter

const listFilter = (term) =>{
    Array.from(list.children)
    .filter((todo)=>{
       return !todo.textContent.toLowerCase().includes(term)
    })
    .forEach((todo)=>{
        todo.classList.add('filtered')
    })

    Array.from(list.children)
    .filter((todo)=>{
       return todo.textContent.toLowerCase().includes(term)
    })
    .forEach((todo)=>{
        todo.classList.remove('filtered')
    })
}

//Event Listeners

//add todo

addTodo.addEventListener('submit', enter =>{
    
    enter.preventDefault()

    const todo = addTodo.add.value.trim()

    if(todo.length){
        generateTemplate(todo)
        addTodo.reset()
    }
})

//delete todo

list.addEventListener('click', event =>{
    if(event.target.classList.contains('delete')){
        event.target.parentElement.remove()
    }
})

//search todo

search.addEventListener('keyup', () =>{

    const term = search.value.trim().toLowerCase()
    listFilter(term)

})