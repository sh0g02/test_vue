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
    // 計算結果はキャッシュされる
    computed: {
        canCreateTodo: function () {
            return this.todoTitle !== '';
        },
        canCreateCategory: function () {
            return this.categoryName !== '' && !this.existCategory();
        },
    },
    watch: {
        // 監視対象のプロパティを指定
        todos: {
            handler: function (next) {
                window.localStorage.setItem('todos', JSON.stringify(next));
            },
            deep: true,
        },
        categories: {
            handler: function (next) {
                window.localStorage.setItem('categories', JSON.stringify(next));
            },
            deep: true,
        },
    },
    // 計算結果のキャッシュは行われず、毎回実行
    methods: {
        createTodo: function () {
            if (!this.canCreateTodo) {
                return;
            }
            // Vueでは、配列をdataプロパティにしている場合、特定の配列メソッドを使うことで、再代入などを行われずに、表示の更新を行える
            // push, popなど
            this.todos.push({
                id: 'todo-' + Date.now(),
                title: this.todoTitle,
                description: this.todoDescription,
                categories: this.todoCategories,
                dateTime: Date.now(),
                done: false,
            });
            this.todoTitle = '';
            this.todoDescription = '';
            this.todoCategories = [];
        },
        createCategory: function () {
            if (!this.canCreateCategory) {
                return;
            }
            this.categories.push(this.categoryName);
            this.categoryName = '';
        },
        existCategory: function () {
            return this.categories.indexOf(this.categoryName) !== -1;
        },
    },
    created: function () {
        // 保存したデータの次回アクセス時の復元
        const todos = window.localStorage.getItem('todos');
        const categories = window.localStorage.getItem('categories');

        if (todos) {
            this.todos = JSON.parse(todos);
        }
        if (categories) {
            this.categories = JSON.parse(categories);
        }
    },
}).mount('#app')
