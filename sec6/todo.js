const todos = [
    {
        title:"study JS",
        body:"Finish The modern js Bootcamp",
        completed:false
    },
    {
        title:"Read the Quran",
        body:'Read 50 pages fromthe Quran',
        completed:false
    },
    {
        title:"Play football",
        body:"Learn to play football",
        completed:false
    },
    {
        title:"go to GYM",
        body:"Go to The GYM",
        completed:false
    },
    {
        title:"Eat breakfasy",
        body:"Eat 3 eggs, one cup of milk, 100g from Outs",
        completed:true
    }
    
]

const deleteTodo = function(todosList, todoTitle) {
    const index = todos.findIndex(function (todo,index) {
        return todo.title.toLowerCase() === todoTitle.toLowerCase()
    })
    if (index > -1) {
        todosList.splice(index,1)
    }
}


// console.log(todos)

// deleteTodo(todos,"Play football")
// console.log(todos)



const getThingsToDo = function(todoList) {
    return todoList.filter(function (todo) {
        return !todo.completed
    })
}

const sortTodo = function (todos) {
    todos.sort(function(a,b) {
        if( !a.completed && b.completed ) {
            return -1
        }else if (!b.completed && a.completed) {
            return 1
        }else {
            return 0
        }
    })
}
sortTodo(todos)
console.log("\n-----------------------------\n",todos)


//onsole.log("\n-----------------------------\n",getThingsToDo(todos))


























// ! CHALLENGE 
// ? DELETE the 3rd item
// todos.splice(2,1)
// ? Add a new item onoto the end
// todos.push("new item at the end")
// ? Remove the first item from the list
// todos.shift()



// console.log(`You have ${todos.length} todos!`)
// console.log(todos)

// todos.forEach(function(todo,index) {
//      const num = index+1;
//      console.log(`${num}. ${todo}`)
// })

// for (let count = 0;count < todos.length; count++) {
//     const num =count + 1;
//     const todo = todos[count]
//     console.log (`${num}. ${todo}`)
// }

// console.log(`Todo: ${todos[0]}`)
// console.log(`Todo: ${todos[1]}`)
// console.log(`Todo: ${todos[2]}`)
// console.log(`Todo: ${todos[3]}`)
// console.log(`Todo: ${todos[4]}`)

