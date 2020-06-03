// Query Selector
let p1 = document.querySelector('p');
console.log(p1.textContent);

// Query Selector All
let  items = document.querySelectorAll('.item');
let itemsArray = Array.from(items);
console.log(itemsArray);

// Adição e remoção de classes
let div = document.querySelector("div");
div.classList.remove("ok");
div.classList.add("alert");

// Ateração de forma segura
window.addEventListener("load", start);

function start() {
    console.log("Garante que a página esteja carregada");
    let p1 = document.querySelector("p");
    p1.textContent = "Aterado de forma segura";
}

// Previnir o refresh do submit
window.addEventListener("load", start);

function start() {
    let form = document.querySelector("form");
    form.addEventListener("submit", handleSubmit);
}

function handleSubmit(event) {
    // Evitando o refresh
    event.preventDefatult();
}

