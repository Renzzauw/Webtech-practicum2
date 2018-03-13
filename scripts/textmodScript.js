var contextMenu = document.getElementById('contextMenu');

function hey(){
    $("#contextMenu").toggle();
}

$('#bold').on('click', function(){$('#modtext').css({'font-weight':'bold'})});
$('#unbold').on('click', function(){$('#modtext').css({'font-weight':'normal'})});

$('#red').on('click', function(){$('#modtext').css({'color':'red'})});
$('#green').on('click', function(){$('#modtext').css({'color':'green'})});
$('#blue').on('click', function(){$('#modtext').css({'color':'blue'})});
$('#black').on('click', function(){$('#modtext').css({'color':'black'})});

$('#italic').on('click', function(){$('#modtext').css({'font-style':'italic'})});
$('#default').on('click', function(){$('#modtext').css({'font-style':'normal'})});
