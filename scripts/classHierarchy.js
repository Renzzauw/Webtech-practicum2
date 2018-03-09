class SingleParagraphArticle 
{
    constructor(title, text) 
    {
        this.title = title;
        this.text = text;
        //let head = title;
        //let bod = text;
        //this.name = "ARTICLE!";
    }
    // function to turn this article instance into HTML
    turnIntoHTML()
    {
        $( "main" ).append("<article><h2>"+this.title+"</h2><p>"+this.text+"</p></article>");
    }
}

article1 = new SingleParagraphArticle("Article1", "This is absolutely not a test.");
article1.turnIntoHTML();
article2 = new SingleParagraphArticle("Article2", "This is absolutely not a test too.");
article2.turnIntoHTML();

/*
class DoubleParagraphArticle extends Article {

}
*/