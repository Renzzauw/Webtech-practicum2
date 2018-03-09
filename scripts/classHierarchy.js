// create an empty nav menu to fill after filling the page with articles
$( "main" ).append('<nav id="nav-menu-kb"></nav>');

// class that creates html of a given header and body text
class SingleParagraphArticle {
    constructor(title, text) {
        this.title = title;
        this.text = text;
    }
    // function to turn this article instance into HTML
    turnIntoHTML() {
        $( "main" ).append('<article id="art-'+this.title+'"><h2>'+this.title+'</h2><p>'+this.text+'</p></article>');
        $( "#nav-menu-kb" ).append('<a href="#art-'+this.title+'">'+this.title+'</a>');
    }
}

/*
// class that extends the previous class with an extra paragraph
class DoubleParagraphArticle extends SingleParagraphArticle {
    constructor(title, text, text2) {
        this.title = title;
        this.text = text;
        this.text2 = text2;
    }
    // function to turn this article instance into HTML
    turnIntoHTML() {
        //$( "main" ).append("<article><h2>"+this.title+"</h2><p>"+this.text+"</p><p>"+this.text2+"</p></article>");
        
    }
}
*/
// function that creates the article
function createArticle (articleKind, title, content){
    article = new articleKind(title, content[0], content[1]);
    article.turnIntoHTML();
}
// creation of various articles
createArticle(SingleParagraphArticle, "Article1", ["This is absolutely not a test."]);
createArticle(SingleParagraphArticle, "Article2", ["This is absolutely not a test too."]);
//createArticle(DoubleParagraphArticle, "Article2", ["This is a nice article.", "Did I mention this one has 2 paragraphs?"]);




/*
article1 = new SingleParagraphArticle("Article1", "This is absolutely not a test.");
article1.turnIntoHTML();
article2 = new SingleParagraphArticle("Article2", "This is absolutely not a test too.");
article2.turnIntoHTML();
article3 = new DoubleParagraphArticle("Article3", "This is a nice article.", "Did I mention this one has 2 paragraphs?");  
article3.turnIntoHTML();
*/