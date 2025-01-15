book = {
    title: "Jurassic Park",
    author: "Michael Crichton",
    year: "1990",
    getSummary: function(){
        return `Title: ${this.title}, Author: ${this.author}`;
    }
};

book.genre = "Science Fiction";
delete book.year;
console.log(book.getSummary());
console.log(book);

