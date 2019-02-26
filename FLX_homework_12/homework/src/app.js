const rootNode = document.getElementById('root');

const todoItems = [
    {isDone: false, id: 12345, description: 'Todo 1'}
];

// Your code goes here

let newDiv;
let checkBox;
let changedNote;

let catList = document.getElementById('cat_list');

document.getElementById('button-save').onclick = createNote;
document.getElementById('button-save-changes').onclick = f6;

function locationHashChanged() {
    const zero = 0;
    if (location.hash === '#/add') {
        document.getElementById('page1').style.display = 'none';
        document.getElementById('page2').style.display = '';
        document.getElementById('page3').style.display = 'none';
    } else if (location.hash === '#/') {
        document.getElementById('page1').style.display = '';
        document.getElementById('page2').style.display = 'none';
        document.getElementById('page3').style.display = 'none';
    } else if (location.hash.indexOf('#/change/') === zero) {
        document.getElementById('textarea3').value = localStorage.getItem(location.hash.split('#/change/')[1]);
        document.getElementById('page1').style.display = 'none';
        document.getElementById('page2').style.display = 'none';
        document.getElementById('page3').style.display = '';
        changedNote = document.getElementById('textarea3');

    }
}
window.onhashchange = locationHashChanged;

function drawCheckBox () {
    this.innerHTML = 'check_box';
}

function createNote() {
        let getNewNote = document.getElementById('textarea2');
        let newNote = getNewNote.value;
        const maxId = 10000000;
        let id = Math.floor(Math.random() * maxId);
        localStorage.setItem(id, newNote);
        newDiv = document.createElement('div');
        newDiv.className = 'list_item';
        newDiv.id = id;
        let text = document.createElement('span');
        text.innerHTML = newNote;
        checkBox = document.createElement('span');
        checkBox.className = 'material-icons check_box_outline_blank';
        checkBox.innerHTML = 'check_box_outline_blank';
        checkBox.addEventListener('click', drawCheckBox);
        let pen = document.createElement('a');
        pen.className = 'material-icons create';
        pen.innerHTML = 'create';
        pen.href = '#/change/' + id;
        let garbage = document.createElement('span');
        garbage.className = 'material-icons delete';
        garbage.innerHTML = '  delete';
        garbage.addEventListener('click', deleteNote);
        newDiv.appendChild(checkBox);
        newDiv.appendChild(text);
        newDiv.appendChild(pen);
        newDiv.appendChild(garbage);
        catList.appendChild(newDiv);
        getNewNote.value = '';
}


function deleteNote () {
    localStorage.removeItem(this.parentNode.id);
    this.parentNode.parentNode.removeChild(this.parentNode);
}

function f6() {
    changedNote = changedNote.value;
    let id = location.hash.split('#/change/')[1];
    localStorage.setItem(id, changedNote);
    document.getElementById(id).childNodes[1].innerHTML = changedNote;
}


//rootNode.appendChild(/* Append your list item node*/);
