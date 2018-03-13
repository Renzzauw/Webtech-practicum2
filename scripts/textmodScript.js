var contextMenu = document.getElementById('contextMenu');

// function to toggle options menu
function toggleButton(){
    $("#contextMenu").toggle();
}

//set text bold/normal from the kb-text class (p in the articles)
$('#bold').on('click', function(){$(".kb-text").css({'font-weight':'bold'})});
$('#unbold').on('click', function(){$(".kb-text").css({'font-weight':'normal'})});

//set the color of the text
$('#red').on('click', function(){$(".kb-text").css({'color':'red'})});
$('#green').on('click', function(){$(".kb-text").css({'color':'green'})});
$('#blue').on('click', function(){$(".kb-text").css({'color':'blue'})});
$('#black').on('click', function(){$(".kb-text").css({'color':'black'})});

//set text italic/normal
$('#italic').on('click', function(){$(".kb-text").css({'font-style':'italic'})});
$('#default').on('click', function(){$(".kb-text").css({'font-style':'normal'})});
