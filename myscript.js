let myLibrary = [];
const container = document.querySelector(".container");
const addButton = document.querySelector(".add");
addButton.addEventListener("click", addBook);


class Book {
    constructor(
      title = 'Unknown',
      author = 'Unknown',
      publish = 0,
      isRead = false
    ) {
      this.title = title;
      this.author = author;
      this.publish = publish;
      this.isRead = isRead;
    }
  }

function moveLibrary(a) {
    myLibrary.push(a);
}

function getBookFromInput() {
    let title = document.getElementById('myTitle').value;
    let author = document.getElementById('myAuthor').value;
    let publish = document.getElementById('myYear').value;
    return new Book(title, author, publish);
  }

function removeBook(e) {
    console.log("clicked");
    e.target.classList.remove("")
}

function changeStatus(e) {
    console.log("clicked");
    if (e.target.textContent==="read") {
        e.target.textContent = "not read yet";
    }
    else {
        e.target.textContent = "read";
    }
}

function addBook() {
    let b = getBookFromInput();
    let box = document.createElement("div");
    box.classList.add("box");
    let t = document.createElement("div");
    t.textContent = b.title;
    t.setAttribute("style", "font-weight: 700");
    let a = document.createElement("div");
    a.textContent = b.author;
    let pub = document.createElement("div");
    pub.textContent = b.publish;
    let r = document.createElement("button");
    r.classList.add("readStatus");
    r.textContent = "read";
    let rem = document.createElement("button");
    rem.textContent = "remove from list";
    rem.classList.add("rem");
    box.appendChild(t);
    box.appendChild(a);
    box.appendChild(pub);
    box.appendChild(r);
    box.appendChild(rem);
    container.appendChild(box);
    moveLibrary(b);
}

const readButtons = Array.from(document.querySelectorAll(".readStatus"));
readButtons.forEach(button => button.addEventListener("click", changeStatus));
const removeButtons = Array.from(document.querySelectorAll(".rem"));
removeButtons.forEach(button => button.addEventListener("click", removeBook));
