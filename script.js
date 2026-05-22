// Taches
const list = document.getElementById("list");
const listItem = document.querySelectorAll("#list li");
console.log(listItem)
const btn = document.getElementById("addBtn");

// Formulaire
const taskContent = document.getElementById("taskContent");

// Fonction ajouter une tâche
btn.addEventListener("click", (e) => {

    e.preventDefault();
    // Recupérer la nouvelle tâche
    const li = document.createElement("li");

    if (li.value) {
        li.textContent = taskContent.value;
        // Ajouter la tâche
        list.appendChild(li);
    }

});

for (let i = 0; i < listItem.length; i++) {
    listItem[i].addEventListener("click", (e) => {
        listItem[i].classList.add("dashed");
    });
};



