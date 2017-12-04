/**
 * @author Lovas Bálint <lovasb93@gmail.com>
 */

$(document).ready(function () {
    var todos = [];

    $("#add").on('click', function () {
        $("#form").submit(function (e) {
            e.preventDefault();
        });
        addTodo();
    });

    $(document).on('click', ".close", function () {
        var index = $(this).attr('id');
        alert(index);
        todos.splice(index, 1);
        renderList();
    });
    
    $("#katt").on('click', function() {
        for (var i = 0; i < todos.length; i++) {
            alert(todos[i]);
        }
    });

    function addTodo() {
        var todo = $("#todo").val();
        if (todo !== "") {
            todos[todos.length] = todo;
            var index = todos.length;
            renderList();
            $("#todo").val("");
        }
    }
    
    function renderList() {
        $("#list").remove();
        var list = "<ul class=\"list-group\" id=\"list\">";
        for (var i = 0; i < todos.length; i++) {
            list += "<li class=\"list-group-item\">" +
                    todos[i] +
                    "<button type=\"button\" class=\"close\"" +
                    "id=\"" + i + "\"" +
                    "aria-label=\"Close\">" +
                    "<span aria-hidden=\"true\">&times;</span>" +
                    "</button>" +
                    "</li>";
        }
        list += "</ul>";
        $("#notes").append(list);
    }
});