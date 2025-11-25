/*Create a small library management system using JavaScript classes.ObjectivesManipulate classes, constructors, 
and methodsManage lists of objectsPractice encapsulation (properties/methods) */

class Book {
	constructor(title, author, year) {
		this.title = title;
		this.author = author;
		this.year = year;
	}
	getSummary() {
		return `this book ${this.title} was written in ${this.year} by ${this.author}`;
	}
}

class Library {
	constructor() {
		this.books = [];
	}
	addBook(book) {
		return this.books.push(book);
	}
	removeBook(title) {
		return this.books.filter((b) => b.title !== title);
	}
	findBooksByAuthor(author) {
		return this.books.filter((b) => b.author === author);
	}
	listBooks() {
		return this.books.map((b) => b.getSummary());
	}
}

const shakespears = new Book('Hamlet', 'William Shakespear', 1589);
const daVinciCode = new Book('Da Vinci Code', 'Dan Brown', 2003);
const library = new Library();

library.addBook(shakespears);
library.addBook(daVinciCode);

console.log(library.findBooksByAuthor('William Shakespear'));
