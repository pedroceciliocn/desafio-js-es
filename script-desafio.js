// let counter = 0;
class Book {
    constructor(title, description, author){
        this.title = title;
        this.description = description;
        this.author = author;
        // this.id = counter++;
        this.id = this.id = () => {
            return Date.now().toString(36) + Math.random().toString(36).substr(2);
          };
    }
}





class Library {
    constructor(){
        this.books = [];

    }

    addBook(bookInfo){
        this.books.push(bookInfo);

    }

    getBookById(id){
        let choosedBook;
        this.books = this.books.filter(book => {
            if (book.id == id) {
                choosedBook = book;
            }
            else {
                return book;
            }
        })
        return choosedBook;

    }

    getBooks(){
        return this.books;
    }

    removeBookById(id){
        let removedBook;
        this.books = this.books.filter(book => {
            if (book.id == id) {
                removedBook = book;

            }
            else {
                return book;
            }
        })
        return removedBook;

    }

    updateBookById(id, info = {}){
        let editedBook = this.getBookById(id);
        this.books = this.books.filter(book => {
            if (book.id == id) {
                book.title = info.title;
                book.description = info.description;
                book.author = info.author;
                return book;
            }
        })
        return editedBook;

    }
}

let bib = new Library();
var livro1 = new Book('Eles nao sabem o que fazem: o sublime objeto da ideologia', 'Tida como a obra prima do famoso e curioso filosofo marxista esloveno Zizek', 'Slavoj Zizek');
//console.log(livro1);
bib.addBook(livro1);

var livro2 = new Book('Como ler Lacan', 'O livro inclui breve cronologia biográfica e sugestões de leitura sobre e de Lacan.', 'Slavoj Zizek');
bib.addBook(livro2);

bib.getBooks();
bib.removeBookById(2);
bib.getBookById(1);
bib.updateBookById(1, {title: 'Eles nao sabem o que fazem: o sublime objeto da ideologia', description: 'Tentando apreender as diferentes modalidades da presença do Real na ideologia, Zizek analisa inicialmente, sob o prisma fecundo da teoria lacaniana, a noção de des sublimação repressiva da Escola de Frankfurt, com a qual esta escola pretende dar conta do fenômeno fascista.', author: 'Slavoj Zizek'});
