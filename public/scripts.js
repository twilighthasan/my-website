document.getElementById("addBtn").addEventListener("click", addName);
document.getElementById("sortBtn").addEventListener("click", sortNames);
document.getElementById("deleteBtn").addEventListener("click", deleteName);
document.getElementById("editBtn").addEventListener("click", editName);

const database = firebase.database();

function addName() {
  const name = document.getElementById("nameInput").value;
  const newItemRef = database.ref("names").push();
  newItem
}

function sortNames() {
    const namesList = document.getElementById("namesList");
    const names = Array.from(namesList.getElementsByTagName("li"));

    names.sort((a, b) => a.innerText.localeCompare(b.innerText));

    while (namesList.firstChild) {
        namesList.removeChild(namesList.firstChild);
    }

    for (const name of names) {
        namesList.appendChild(name);
    }
}

function deleteName() {
    const nameToDelete = document.getElementById("nameInput").value;
    const namesList = document.getElementById("namesList");

    for (let i = 0; i < namesList.children.length; i++) {
        if (namesList.children[i].innerText === nameToDelete) {
            namesList.removeChild(namesList.children[i]);
            break;
        }
    }
}

function editName() {
    const oldName = document.getElementById("nameInput").value;
    const newName = document.getElementById("newNameInput").value;
    const namesList = document.getElementById("namesList");

    for (let i = 0; i < namesList.children.length; i++) {
        if (namesList.children[i].innerText === oldName) {
            namesList.children[i].innerText = newName;
            break;
        }
    }
}
