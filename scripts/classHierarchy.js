class Article {
    constructor(title, text) {
        this.name = "ARTICLE!";
        this.title = title;
        this.text = text;
    }
    // function to turn this article instance into HTML
    turnIntoHTML(){
        document.write("<article>");
        document.write("<h2>"+title+"</h2>");
        document.write("<p>"+text+"</p>");
        document.write("</article>");
        window.alert(this.name + " created!");
    }
}


article1 = new Article("TITEL", "hallo dit is tekst.");
article1.turnIntoHTML();

class DoubleParagraphArticle extends Article {

}