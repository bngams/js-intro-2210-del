const TEMPLATE = `
    <div id="todos" class="container">
        <!-- load todos dynamically -->
    </div>
`;

// <todos></todos>
// export = public 
class TodosComponent extends HTMLElement {

    constructor() {
        super();
        // USE SHADOW DOM instead connectedCallback
    }

    connectedCallback() {
        this.innerHTML = TEMPLATE;
        // $("todos").append(TEMPLATE);
        this.loadTodosWithAxios();
    }


    displayTodos(todosJSON) {
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
            // $('#todos').append(cardHTML);
            this.appendChild(cardHTML);
        }
    }

    loadTodosWithJQueryAJAX = () => {
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

    loadTodosWithAxios = () => {
        // Make a request for a user with a given ID
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(function (result) {
            // handle success
                for (const todo of result.data) {
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
                    // this.appendChild(cardHTML);
                }
            })
            .catch(function (error) {
            // handle error
            console.log(error);
            })
    };

}
// Define the new element
customElements.define('my-todos', TodosComponent);