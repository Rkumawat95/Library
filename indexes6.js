class Book {

    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display {

    add(book) {
        let tableBody = document.getElementById('tableBody');
        let uistring = `
        <tr>
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.type}</td>
        </tr>`;

        tableBody.innerHTML += uistring;
    }


    clear() {
        let lform = document.getElementById('lform');
        lform.reset();
    }

    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false;
        }
        else {
            return true;
        }
    }

    show(type, massage) {
        let msg = document.getElementById('msg');
        msg.innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
            <strong>Massege : </strong> ${massage}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>`;

        setTimeout(() => {
            msg.innerHTML = ``;
        }, 5000);
    }

}

let lform = document.getElementById('lform');
lform.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {

    e.preventDefault();
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;

    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else {
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    //console.log(book);

    let display = new Display();


    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', ' Your book has been successfully added.');
    }
    else {
        //error
        display.show('danger', ' Sorry you can not add this!...');
    }
}
