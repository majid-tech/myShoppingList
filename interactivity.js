const unodered = document.querySelector("ul");
const input = document.querySelector("input");
const btn = document.querySelector("button");



btn.addEventListener("click", () => {
    const  inputElement = input.value;
    console.log(inputElement);
    input.value = "";

    const listItem = document.createElement("li");
    const inlineSpan = document.createElement("span");
    const btn1 = document.createElement("button");

    unodered.appendChild(listItem);

    listItem.appendChild(inlineSpan);
    inlineSpan.textContent = inputElement;

    listItem.appendChild(btn1);
    btn1.textContent = "Delete";
    
    btn1.addEventListener("click", () => {
        unodered.removeChild(listItem);
    });

    input.focus();
})


