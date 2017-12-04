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
    
    $(document).on('click', ".close", function() {
        $(this).parent().remove();
    });
    
    function addTodo() {
        var todo = $("#todo").val();
        if(todo !== "")
            $("ul.list-group#list").append("<li class=\"list-group-item\">" +
                todo +
                "<button type=\"button\" class=\"close\" aria-label=\"Close\">" +
                "<span aria-hidden=\"true\">&times;</span>" +
                "</button>" +
                "</li>");
        $("#todo").val("");
    }
});