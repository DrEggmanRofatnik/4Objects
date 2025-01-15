book = {
    title: "Jurassic Park",
    author: "Michael Crichton",
    year: "1990",
    summary: "Jurassic Park is a 1990 science fiction novel written by Michael Crichton; it is a cautionary tale about genetic engineering that presents the collapse of a zoological park which showcases genetically recreated dinosaurs to illustrate the mathematical concept of chaos theory and its real-world implications.",
    getSummary: function(){
        return `Title: ${this.title}, Author: ${this.author}`;
    }
};

book.genre = "Science Fiction";
delete book.year;
console.log(book.getSummary());
console.log(book);

