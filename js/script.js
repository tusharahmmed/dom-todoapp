/**
 * Title: To-Do Application using Vanilla JS DOM
 * Description: This JS file has all the JS function necessary to control the To-Do Application
 * Author: Tushar Ahmmed
 * AuthorURI: https://www.facebook.com/tusharahmmed.sakib
 */

// handel
const inputField = document.getElementById('new-task');
const inputBtn = document.getElementById('addTask');
const ucUl = document.getElementById('uc-items');
const completeUl = document.getElementById('complete-ul');

// get form value
function getInputValue() {
    let inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}

// create uncomplete li
function createUcLi(inputValue) {
    let li = document.createElement('li');
    li.classList = 'item';

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    let label = document.createElement('label');
    label.innerText = inputValue;

    //append
    li.appendChild(checkbox);
    li.appendChild(label);
    ucUl.appendChild(li);
}

// create complete li
function creatCompleteLi(selectedLi) {

    let li = document.createElement('li');
    li.innerText = selectedLi;

    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = "Delete";
    deleteBtn.classList = 'delete';

    //append
    li.appendChild(deleteBtn);

    // append to complete task
    completeUl.appendChild(li);
}

// select uncomplete item
function selectUcLi() {
    ucUl.addEventListener('click', (e) => {

        let item = e.target.parentNode;
        let selectItemValue = item.innerText;
        // if selecte item == li
        if (item.tagName == 'LI') {
            item.remove();
            // create complet li
            creatCompleteLi(selectItemValue);
        }
    });
}

// remove completed task
function removeCompletedTask() {
    completeUl.addEventListener('click', (event) => {
        let item = event.target.parentNode;
        // if li
        if (item.tagName == 'LI') {
            item.remove();
        }
    });
}

// event listenr
inputBtn.addEventListener('click', (event) => {
    event.preventDefault();
    // get value
    let inputValue = getInputValue();

    // create li item
    createUcLi(inputValue);
});

// selecte uncomplete li
selectUcLi();

// remove complete task
removeCompletedTask();