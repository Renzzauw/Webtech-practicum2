// global variables 
articlecounter = 0;

// create an empty nav menu to fill after filling the page with articles
$( "main" ).append('<nav id="nav-menu-kb"></nav>');

// class that creates html of a given header and body text
class SingleParagraphArticle {
    constructor(title, text) {
        this.title = title;
        this.text = text;   
        articlecounter++;
    }
    // function to turn this article instance into HTML
    turnIntoHTML() {
        $( "main" ).append('<article class="kb-articles" id="art-'+articlecounter+'"><h2>'+this.title+'</h2><p>'+this.text+'</p><p><a href="#art-'+(articlecounter+1)+'">Next Article</a></p></article>');
        // add this article to the nav menu on top
        $( "#nav-menu-kb" ).append('<a href="#art-'+articlecounter+'">'+this.title+'</a>');        
    }
}

// class that extends the previous class with an extra paragraph
class DoubleParagraphArticle extends SingleParagraphArticle {
    constructor(title, text, text2) {
        super(title, text);
        this.text2 = text2;
    }
    // function to turn this article instance into HTML
    turnIntoHTML() {
        //$( "main" ).append("<article><h2>"+this.title+"</h2><p>"+this.text+"</p><p>"+this.text2+"</p></article>");
        
    }
}

// function that creates the article
function createArticle (articleKind, title, content){
    article = new articleKind(title, content[0], content[1]);
    article.turnIntoHTML();
}
// creation of various articles
createArticle(SingleParagraphArticle, "Kinds Of Wood", ["Hello! We sell many kinds of wood, read further for various kinds of wood."]);
createArticle(SingleParagraphArticle, "Acacia", ["This is a very nice tree."]);
createArticle(SingleParagraphArticle, "Alder", ["This is a very nice tree."]);
createArticle(SingleParagraphArticle, "Ash", ["This is a very nice tree."]);
createArticle(SingleParagraphArticle, "Bengi", ["This is a very nice tree."]);
createArticle(DoubleParagraphArticle, "Article2", ["This is a nice article.", "Did I mention this one has 2 paragraphs?"]);

// remove last link to next article (sorry, we didn't have time to make some sort of checker in the HTML generator)
links = $( "a" );
linkslength = links.length;
links[linkslength-1].remove("a");

