/**
 * @author Lovas Bálint <lovasb93@gmail.com>
 */

$(document).ready(function() {
    $("#add").on('click', function() {
        $("#form").submit(function(e){
            e.preventDefault();
        });
        addTodo();
    });
    
    function addTodo() {
        var todo = $("#todo").val();
        if(isEmpty(todo))
            $("#list").append("<li class=\"list-group-item\">" + todo + "</li>");
        $("#todo").val("");
    }
    
    function isEmpty(variable) {
        if(variable !== "")
            return true;
        else
            return false;
    }
});