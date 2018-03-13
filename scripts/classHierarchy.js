// global variables 
articleCounter = 0;

// create an empty nav menu to fill after filling the page with articles
$( "main" ).append('<nav id="nav-menu-kb"></nav>');

// class that creates html of a given header and body text
class SingleParagraphArticle {
    constructor(title, text) {
        this.title = title;
        this.text = text;   
        articleCounter++;
    }
    // function to turn this article instance into HTML
    turnIntoHTML() {
        $( "main" ).append('<article class="1p-articles kb-articles" id="art-'+articleCounter+'"><h2>'+this.title+'</h2><p>'+this.text+'</p><p><a href="#art-'+(articleCounter+1)+'">Next Article</a></p></article>');
        // add this article to the nav menu on top
        $( "#nav-menu-kb" ).append('<a href="#art-'+articleCounter+'">'+this.title+'</a>');        
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
        $( "main" ).append('<article class="2p-articles kb-articles" id="art-'+articleCounter+'"><h2>'+this.title+'</h2><p>'+this.text+'</p><p>'+this.text2+'</p><p><a href="#art-'+(articleCounter+1)+'">Next Article</a></p></article>');
        // add this article to the nav menu on top
        $( "#nav-menu-kb" ).append('<a href="#art-'+articleCounter+'">'+this.title+'</a>'); 
    }
}

// class that extends the previous class with an extra paragraph
class TripleParagraphArticle extends DoubleParagraphArticle {
    constructor(title, text, text2, text3) {
        super(title, text, text2);
        this.text3 = text3;
    }
    // function to turn this article instance into HTML
    turnIntoHTML() {
        $( "main" ).append('<article class="3p-articles kb-articles" id="art-'+articleCounter+'"><h2>'+this.title+'</h2><p>'+this.text+'</p><p>'+this.text2+'</p><p>'+this.text3+'</p><p><a href="#art-'+(articleCounter+1)+'">Next Article</a></p></article>');
        // add this article to the nav menu on top
        $( "#nav-menu-kb" ).append('<a href="#art-'+articleCounter+'">'+this.title+'</a>'); 
    }
}

// function that creates the article
function createArticle (articleKind, title, content){
    article = new articleKind(title, content[0], content[1], content[2]);
    article.turnIntoHTML();
}

// creation of various articles
createArticle(SingleParagraphArticle, "Kinds Of Wood", ["Hello! We sell many kinds of wood, read further for various kinds of wood."]);
createArticle(SingleParagraphArticle, "Acacia", ["This is a very nice tree."]);
createArticle(SingleParagraphArticle, "Alder", ["This is a very nice tree."]);
createArticle(SingleParagraphArticle, "Ash", ["This is a very nice tree."]);
createArticle(SingleParagraphArticle, "Bengi", ["This is a very nice tree. (All our trees are nice in case you did not notice!)"]);
createArticle(TripleParagraphArticle, "Staff", ["Enough about our trees!", "We also have a really friendly and helpful team.", "Let us introduce you to some!"]);
createArticle(DoubleParagraphArticle, "Hans Janssen", ["Boss", "This is our amazing boss."]);
createArticle(DoubleParagraphArticle, "Henk Poarlski", ["Staff Member", "We are still not sure how to pronounce his name..."]);
createArticle(DoubleParagraphArticle, "Harold de Boer", ["Servicedesk Manager", "The guy that picks up our phone and loves to listen to you ranting about our wood breaking down so fast!"]);
createArticle(DoubleParagraphArticle, "Tips & Tricks", ["As a DIY wood hobbyist, you NEED some of these tips.", "Make sure to follow these very carefully."]);
createArticle(SingleParagraphArticle, "Tip 1", ["Don't cut your fingers off."]);
createArticle(SingleParagraphArticle, "Tip 2", ["Use our top quality wood."]);
createArticle(SingleParagraphArticle, "Tip 3", ["Always have fun!"]);

// remove last link to next article (sorry, we didn't have time to make some sort of checker in the HTML generator)
links = $( "a" );
linkslength = links.length;
links[linkslength-1].remove("a");

