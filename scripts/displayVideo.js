window.alert("Video triggered 1");
text = $( "#click-text-home" ); //document.getElementById("click-text-home");
text.addEventListener(onclick, function () {
    window.alert("Video triggered 2");
});
