document.getElementById("addBtn").addEventListener("click", addName);
document.getElementById("sortBtn").addEventListener("click", sortNames);
document.getElementById("deleteBtn").addEventListener("click", deleteName);
document.getElementById("editBtn").addEventListener("click", editName);

const database = firebase.database();

function addName() {
    const name = document.getElementById("nameInput").value;
    const newItemRef = database.ref("names").push();
    newItemRef.set({ name: name });
    const newItemKey = newItemRef.key;
    const nameList = document.getElementById("nameList");
    const newListItem = document.createElement("li");
    newListItem.textContent = name;
    newListItem.setAttribute("data-id", newItemKey);
    nameList.appendChild(newListItem);
    document.getElementById("nameInput").value = "";
  }
  

  function sortNames() {
    const nameList = document.getElementById("nameList");
    const names = Array.from(nameList.getElementsByTagName("li"));
  
    names.sort((a, b) => a.innerText.localeCompare(b.innerText));
  
    while (nameList.firstChild) {
      nameList.removeChild(nameList.firstChild);
    }
  
    for (const name of names) {
      nameList.appendChild(name);
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
