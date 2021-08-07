Vue.createApp({
    data: function () {
        return {
            todoTitle: '',
            todoDescription: '',
            todoCategories: [],
            selectedCategory: '',
            todos: [],
            categories: [],
            hideDoneTodo: false,
            searchWord: '',
            order: 'desc',
            categoryName: '',
        }
    },
    computed: {
        canCreateTodo: function () {
            return this.todoTitle !== '';
        },
        canCreateCategory: function () {
            return this.categoryName !== '' && !this.existCategory();
        },
    },
    methods: {
        createTodo: function () {
            if (!this.canCreateTodo) {
                return;
            }
            this.todos.push({
                // id: 'todo-' +
            });
            this.todoTitle = '';
            this.todoDescription = '';
            this.todoCategories = [];
        },
        createCategory: function () {
            if (!this.canCreateCategory) {
                return;
            }
            // TODO
            this.categoryName = '';
        },
        existCategory: function () {
            return this.categories.indexOf(this.categoryName) !== -1;
        },
    },
}).mount('#app')
