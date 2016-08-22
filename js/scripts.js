// business logic
var todoArray = [];

function List (todoItem) {
  this.firstTodoItem = todoItem;
}

// user interface logic
$(document).ready(function() {
  $("form#new-list").submit(function(event) {

    var newTodoList = new List($("#new-first-to-do").val());
    todoArray.push(newTodoList);

    $("ul#list-items-displayed").append("<li>" + newTodoList.firstTodoItem + "</li>");

    $("li").click(function() {
      $(this).slideUp();
    });




    event.preventDefault();
  });
});

 // + "<button type='button' class='btn-danger' id='complete-button'>Completed</button>"

// if (newTodoList.completed) {
//   $(this).addClass("donezo");
// } else {
//   $(this).removeClass("donezo");
// }
