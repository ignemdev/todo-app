//add todos
$("input[type='text']").keypress(function (e) {
    if (e.which === 13) {
        let newTodo = $(this).val();
        $(this).val("");
        $('ul').append(`<li><span><i class="fa fa-trash" aria-hidden="true"></i></span> ${newTodo}</li>`);
    };
});

//check todos
$("ul").on('click', 'li', function () {
    $(this).toggleClass("checked");
});

//delete todos
$("ul").on('click', 'span', function (e) {
    $(this).parent().fadeOut(1000, function () {
        $(this).remove();
    });
    e.stopPropagation();
});

//hide task input
$(".fa-plus").click(() => $("input[type='text']").fadeToggle());
