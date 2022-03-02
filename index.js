console.log('this is indexed.js');

//constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

//Display constructor
function Dispaly() {

}

Dispaly.prototype.add = function (book) {

    tableBody = document.getElementById('tableBody');
    let uistring = `
    <tr>
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.type}</td>
    </tr>`;

    tableBody.innerHTML += uistring;
}

Dispaly.prototype.clear = function () {
    let lform = document.getElementById('lform');
    lform.reset();
}

Dispaly.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false;
    }
    else {
        return true;
    }
}

Dispaly.prototype.show = function (type,massage) {
    let msg = document.getElementById('msg');
    msg.innerHTML = `
    <div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong>Massege : </strong> ${massage}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
        </button>
    </div>`;

    setTimeout(()=>{
        msg.innerHTML = ``;
    },5000);
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
    console.log(book);

    let display = new Dispaly();


    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success',' Your book has been successfully added.');
    }
    else {
        //error
        display.show('danger',' Sorry you can not add this!...');
    }
}
