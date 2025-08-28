let button = document.getElementById("adicionar");
let inputValue = document.getElementById("tarefa");
let buttonDelete = document.getElementById("excluir");
let inputVal = "";
let ulDiv = document.getElementById("lista");
inputValue.addEventListener("input", function () {
  inputVal = inputValue.value;
});

button.addEventListener("click", function () {
  let inputVal = inputValue.value;
  let warning = document.getElementsByClassName("aviso")[0];

  if (inputVal !== "") {
    let newElement = document.createElement("li");  

    newElement.textContent = inputVal;

    // cria a Imagem das <li>.
    let img = document.createElement("img");
    img.src = "delete.png";
    img.style.width = "20px";
    img.style.height = "20px";
    img.style.float = "right";
    img.style.display = "none";
    img.style.cursor = "pointer";
    img.classList.add("buttonDeleteAnimation");

    img.addEventListener("click", function () {
      ulDiv.removeChild(newElement);
    });

    buttonDelete.addEventListener("click", function () {
      img.style.display = "block";
      setTimeout(() => {
       img.style.display = "none";
      }, 5000);
    });

    newElement.appendChild(img);
    ulDiv.appendChild(newElement);
    inputValue.value = "";
  } else {
    warning.style.display = "flex";
    setInterval(() => {
      warning.style.display = "none";
    }, 5000);
  }
});
