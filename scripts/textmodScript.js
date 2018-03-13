var contextMenu = document.getElementById('contextMenu');

function hey(){
    $("#contextMenu").toggle();
}

$('#bold').on('click', function(){$(".kb-text").css({'font-weight':'bold'})});
$('#unbold').on('click', function(){$(".kb-text").css({'font-weight':'normal'})});

$('#red').on('click', function(){$(".kb-text").css({'color':'red'})});
$('#green').on('click', function(){$(".kb-text").css({'color':'green'})});
$('#blue').on('click', function(){$(".kb-text").css({'color':'blue'})});
$('#black').on('click', function(){$(".kb-text").css({'color':'black'})});

$('#italic').on('click', function(){$(".kb-text").css({'font-style':'italic'})});
$('#default').on('click', function(){$(".kb-text").css({'font-style':'normal'})});
