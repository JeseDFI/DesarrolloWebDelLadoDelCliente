document.addEventListener("DOMContentLoaded", function () {
    const input =  document.getElementById("newItemInput");
    const addButton = document.getElementById("addItemBtn");
    const itemsList = document.getElementById("itemsList");

    function addItem() {
        const itemText = input.value.trim();
        if (itemText === "") return;

        const listItem = document.createElement("li");
        listItem.textContent = itemText;

        const completeBtn = document.createElement("button");
        completeBtn.innerHTML = "<span class='material-symbols-outlined'>check-circle</span>";
        completeBtn.classList.add("completeBtn");
        completeBtn.addEventListener("click", function () {
            listItem.classList.toggle("completed");
        });
        
        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "<span class='material-symbols-outlined'>delete</span>";
        deleteBtn.classList.add("deleteBtn");
        deleteBtn.addEventListener("click", function () {
            itemsList.removeChild(listItem);
        });

        listItem.appendChild(completeBtn);
        listItem.appendChild(deleteBtn);
        itemsList.appendChild(listItem);
        input.value = "";
    }

    addButton.addEventListener("click", addItem);
    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addItem();
        }
    });
})