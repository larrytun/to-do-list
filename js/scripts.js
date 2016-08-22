// business logic

function List (todoItem) {
  this.firstTodoItem = todoItem;
}

// user interface logic
$(document).ready(function() {
  $("form#new-list").submit(function(event) {

    var newTodoList = new List($("#new-first-to-do").val());

    $("ul#list-items-displayed").append("<li>" + newTodoList.firstTodoItem + "</li>");

    $("li").click(function() {
      $(this).hide();
    });

    $("#new-first-to-do").val("");

    event.preventDefault();
  });
});
