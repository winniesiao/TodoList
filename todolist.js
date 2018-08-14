function init() {
    document.getElementById("defaultOpen").click();

    var app = new Vue({
        el: '.app',
        data: {
            todos: [],
            newTodo: ''
        },
        methods: {
            addTodo: function(todo) {
                if (this.newTodo != '') {
                    this.todos.push({
                            content: todo,
                            completed: false
                        })
                        // console.log(todo);
                    this.newTodo = '';
                } else {
                    alert('請輸入待辦事項喔！');
                }
            },
            removeTodo: function(todo) {
                this.todos.splice(this.todos.indexOf(todo), 1)
            }
        }
    })
}



function openList(evt, tabName) {
    var i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    tabLinks = document.getElementsByClassName("tabLinks");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" tabActive", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " tabActive";
}
window.addEventListener("load", init, false);
