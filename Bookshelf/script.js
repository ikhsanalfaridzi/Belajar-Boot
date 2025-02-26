function renderBooks() {
  const books = JSON.parse(localStorage.getItem('books')) || [];
  const incompleteBookList = document.getElementById('incompleteBookList');
  const completeBookList = document.getElementById('completeBookList');
  const emptyIncompleteMessage = document.getElementById('emptyIncompleteMessage');
  const emptyCompleteMessage = document.getElementById('emptyCompleteMessage');

  incompleteBookList.innerHTML = '';
  completeBookList.innerHTML = '';

  let hasIncompleteBooks = false;
  let hasCompleteBooks = false;

  books.forEach((book) => {
    const bookItem = document.createElement('article');
    bookItem.setAttribute('data-bookid', book.id);
    bookItem.setAttribute('data-testid', 'bookItem');

    bookItem.innerHTML = `
        <h3 data-testid="bookItemTitle">${book.title}</h3>
        <p data-testid="bookItemAuthor">Penulis: ${book.author}</p>
        <p data-testid="bookItemYear">Tahun: ${book.year}</p>
        <div>
          <button data-testid="bookItemIsCompleteButton">${book.isComplete ? 'Belum selesai dibaca' : 'Selesai dibaca'}</button>
          <button data-testid="bookItemDeleteButton">Hapus Buku</button>
        </div>
      `;

    if (book.isComplete) {
      completeBookList.appendChild(bookItem);
      hasCompleteBooks = true;
    } else {
      incompleteBookList.appendChild(bookItem);
      hasIncompleteBooks = true;
    }
  });

  emptyIncompleteMessage.style.display = hasIncompleteBooks ? 'none' : 'block';
  emptyCompleteMessage.style.display = hasCompleteBooks ? 'none' : 'block';
}

document.getElementById('bookForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const title = document.getElementById('bookFormTitle').value;
  const author = document.getElementById('bookFormAuthor').value;
  const year = parseInt(document.getElementById('bookFormYear').value, 10);
  const isComplete = document.getElementById('bookFormIsComplete').checked;

  const newBook = {
    id: Date.now(),
    title,
    author,
    year,
    isComplete,
  };

  const books = JSON.parse(localStorage.getItem('books')) || [];
  books.push(newBook);
  localStorage.setItem('books', JSON.stringify(books));

  renderBooks();
});

document.addEventListener('click', (event) => {
  const target = event.target;
  const bookId = parseInt(target.closest('[data-bookid]')?.getAttribute('data-bookid'), 10);



  if (target.dataset.testid === 'bookItemIsCompleteButton') {
    const books = JSON.parse(localStorage.getItem('books')) || [];
    const bookIndex = books.findIndex((book) => book.id === bookId);

    if (bookIndex !== -1) {
      books[bookIndex].isComplete = !books[bookIndex].isComplete;
      localStorage.setItem('books', JSON.stringify(books));
      renderBooks();
    }
  }



  if (target.dataset.testid === 'bookItemDeleteButton') {
    const books = JSON.parse(localStorage.getItem('books')) || [];
    const updatedBooks = books.filter((book) => book.id !== bookId);
    localStorage.setItem('books', JSON.stringify(updatedBooks));
    renderBooks();
  }
});


renderBooks();

document.addEventListener("DOMContentLoaded", function () {
  const bookForm = document.getElementById("bookForm");
  const incompleteBookList = document.getElementById("incompleteBookList");
  const completeBookList = document.getElementById("completeBookList");

  bookForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addBook();
  });

  function addBook() {
    const title = document.getElementById("bookFormTitle").value;
    const author = document.getElementById("bookFormAuthor").value;
    const year = document.getElementById("bookFormYear").value;
    const isComplete = document.getElementById("bookFormIsComplete").checked;

    const book = createBookElement(title, author, year, isComplete);

    if (isComplete) {
      completeBookList.appendChild(book);
    } else {
      incompleteBookList.appendChild(book);
    }

    bookForm.reset();
  }

  function createBookElement(title, author, year, isComplete) {
    const bookItem = document.createElement("div");
    bookItem.classList.add("book-item");
    bookItem.innerHTML = `
            <h3 data-testid="bookItemTitle">${title}</h3>
            <p data-testid="bookItemAuthor">Penulis: ${author}</p>
            <p data-testid="bookItemYear">Tahun: ${year}</p>
            <div>
                <button class="move-button" data-testid="bookItemMoveButton">${isComplete ? "Belum selesai" : "Selesai dibaca"}</button>
                <button class="delete-button" data-testid="bookItemDeleteButton">Hapus Buku</button>
            </div>
        `;

    bookItem.querySelector(".move-button").addEventListener("click", function () {
      moveBook(bookItem, isComplete);
    });

    bookItem.querySelector(".delete-button").addEventListener("click", function () {
      deleteBook(bookItem);
    });

    return bookItem;
  }

  function moveBook(bookItem, isComplete) {
    if (isComplete) {
      incompleteBookList.appendChild(bookItem);
    } else {
      completeBookList.appendChild(bookItem);
    }
    bookItem.querySelector(".move-button").textContent = isComplete ? "Selesai dibaca" : "Belum selesai";
  }

  function deleteBook(bookItem) {
    bookItem.remove();
  }
});
