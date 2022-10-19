const displayTodos = (todosJSON) => {
// dom manipulation
// for each todo, insert a card in our page

// one todo object 
// {
//   "userId": 1,
//   "id": 1,
//   "title": "delectus aut autem",
//   "completed": false
// },
for (const todo of todosJSON) {
    const cardHTML = `
    <div data-id="${todo.id}" class="card" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">N°${todo.id}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${todo.title}</h6>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
        </div>
    </div>
    `; // altgr+7 = `
    $('#todos').append(cardHTML);
}
};

const loadTodosWithJQueryAJAX = () => {
    // ajax request => with jquery
    // when ajax result => call displayTodos()
    $.ajax( "https://jsonplaceholder.typicode.com/todos" )
    .done(function(result) {
        console.log( "success", result );
        displayTodos(result); // result = [ {...}, {...}, ...]
    })
    .fail(function() {
        console.log( "error" );
    });
};

const loadTodosWithAxios = () => {
// Make a request for a user with a given ID
// Promise().then().catch()
axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(function (result) {
        // handle success
        console.log( "success", result );
        displayTodos(result.data); // result = [ {...}, {...}, ...]
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
};

// call loadTodos() when DOM is ready 
$(document).ready(() => loadTodosWithAxios());