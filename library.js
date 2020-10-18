let myLibrary = [];

// Book constructor
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
};

// Press Add New Book button to display modal
const addNew = document.querySelector('.addBtn')
addNew.addEventListener('click', () => {
    document.querySelector('.modal').setAttribute('style', 'display: block;');
});

// TODO: click somewhere outside the modal to hide

// Create new book info and add to myLibrary
const newBookSubmit = document.querySelector('.submit');

newBookSubmit.addEventListener('click', () => {
    // Get user input
    let title = document.querySelector('#titleInput');
    let author = document.querySelector('#authorInput');
    let pages = document.querySelector('#pagesInput');
    let read = document.querySelector('#read');

    let newBook = new Book(title.value, author.value, pages.value, read.checked);

    console.log(newBook.read);
    // Add to library and display
    myLibrary.push(newBook);
    addToDisplay(newBook);

    // Hide modal
    document.querySelector('.modal').setAttribute('style', 'display: none;');
    // Clear input
    title.value = "";
    author.value = "";
    pages.value = "";
    read.checked = false;
});


// Display each books onto screen
function addToDisplay(newBook) {
    // Create element; dive with classname'book_card'
    const div = document.createElement('div');
    div.setAttribute('class', 'book_card')
    // Create 'read' mark if necessary
    const dispRead = document.createElement('p');
    if (newBook.read === true) {
        dispRead.setAttribute('class', 'read');
        dispRead.textContent = 'READ';
    };
    // Create ul
    const list = document.createElement('ul');
    // Create li to display information
    const dispTitle = document.createElement('li');
    dispTitle.setAttribute('class', 'title', 'style', 'font-size: 28px;');
    dispTitle.textContent = `${newBook.title}`;
    const dispAuthor = document.createElement('li');
    dispAuthor.setAttribute('class', 'author', 'style', 'font-size: 22px;');
    dispAuthor.textContent = `${newBook.author}`;
    const dispPages = document.createElement('li');
    dispPages.setAttribute('class', 'pages');
    dispPages.textContent = `${newBook.pages} pages`;
    // toggle lis to created div
    const bookElem = [dispRead, dispTitle, dispAuthor, dispPages];
    for (const element of bookElem) {
        list.appendChild(element);
    }
    // Append the whole div to books_container
    div.appendChild(list);
    // Append to container
    const booksContainer = document.querySelector('.books_container');
    booksContainer.appendChild(div);
};

// TODO: add browser storage

// Display each books onto screen
function loadLibrary() {
    for (const book of myLibrary) {
        // Create element; dive with classname'book_card'
        const div = document.createElement('div');
        div.setAttribute('style', 'width: 280px; height: 140px; padding: 15px; margin: 8px 5px 8px 5px; background-color: #fffafb; border-style: solid; border-radius: 30px 5px 20px 20px; box-shadow: 1px 3px 8px #6e5d5d;')
        // Create ul
        const list = document.createElement('ul');
        // Create li to display information
        const dispTitle = document.createElement('li');
        dispTitle.setAttribute('class', 'title', 'style', 'font-size: 28px;');
        dispTitle.textContent = `${book.title}`;
        const dispAuthor = document.createElement('li');
        dispAuthor.setAttribute('class', 'author', 'style', 'font-size: 22px;');
        dispAuthor.textContent = `${book.author}`;
        const dispPages = document.createElement('li');
        dispPages.setAttribute('class', 'pages');
        dispPages.textContent = `${book.pages} pages`;
        const dispRead = document.createElement('li');
        dispRead.setAttribute('class', 'read');
        dispRead.textContent = `${book.read}`;

        // toggle lis to created div
        const bookElem = [dispTitle, dispAuthor, dispPages, dispRead];
        for (const element of bookElem) {
            list.appendChild(element);
        }
        // Append the whole div to books_container
        div.appendChild(list);
        // Append to container
        const booksContainer = document.querySelector('.books_container');
        booksContainer.appendChild(div);
    };
};

window.addEventListener('DOMContentLoaded', () => {
    loadLibrary();
})
