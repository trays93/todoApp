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
            $("ul.list-group#list").append("<li class=\"list-group-item\">" + todo + "</li>");
        $("#todo").val("");
    }
    
    function isEmpty(variable) {
        return (variable !== "") ? true : false;
    }
});