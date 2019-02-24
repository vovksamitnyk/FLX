let rootNode = document.getElementById('root');

// Your code goes here

let counterNotes = 0;
const allowedNumberOfNotes = 10;

let newDiv;
let checkBox;
let notification;

let catList = document.getElementById('cat_list');
document.getElementById('button-plus').onclick = createNote;

function drawCheckBox () {
    this.innerHTML = 'check_box';
}

function createNote() {
    if (counterNotes < allowedNumberOfNotes) {
        let getNewNote = document.getElementById('поле_вводу');
        let newNote = getNewNote.value;
        newDiv = document.createElement('div');
        newDiv.className = 'list_item';
        let text = document.createElement('span');
        text.innerHTML = newNote;
        checkBox = document.createElement('span');
        checkBox.className = 'material-icons check_box_outline_blank';
        checkBox.innerHTML = 'check_box_outline_blank';
        checkBox.addEventListener('click', drawCheckBox);
        let garbage = document.createElement('span');
        garbage.className = 'material-icons delete';
        garbage.innerHTML = 'delete';
        garbage.addEventListener('click', deleteNote);
        newDiv.appendChild(checkBox);
        newDiv.appendChild(text);
        newDiv.appendChild(garbage);
        catList.appendChild(newDiv);
        getNewNote.value = '';
        disableAdd();
        counterNotes++;
        if (counterNotes >= allowedNumberOfNotes) {
            counterNotes = allowedNumberOfNotes;
            let notification = document.getElementById('notification');
            notification.innerHTML = 'Maximum item per list are created.';
            disableAdd();
            document.getElementById('поле_вводу').disabled = 'disabled';
        }
    }
}

function f5 () {
    if (document.getElementById('поле_вводу').value.length) {
        enableAdd();
    } else {
        disableAdd();
    }
}

function enableAdd() {
    document.getElementById('button-plus').className = 'material-icons';
}
function disableAdd() {
    document.getElementById('button-plus').className += ' disabled';
}

function deleteNote () {
    this.parentNode.parentNode.removeChild(this.parentNode);
    counterNotes--;
    if (counterNotes < allowedNumberOfNotes) {
        let notification = document.getElementById('notification');
        notification.innerHTML = '';
        document.getElementById('поле_вводу').disabled = '';
    }
}

