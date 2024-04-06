const textInput = document.querySelector("#item");
const btnAdd = document.querySelector("#btn");
const shopList = document.querySelector("#list");

// zmiana koloru (nowa klasa w css) po kliknięciu:


btnAdd.addEventListener("click", () => {
  btnAdd.classList.add("btnYellow");
});

btnAdd.addEventListener("click", () => {
  let itemName = document.createElement("span");
  let checkbox = document.createElement("input");
  let btnDelete = document.createElement("button");
  checkbox.type = "checkbox";
  btnDelete.innerText = "Usuń";
  
  
  // createElement jest w funkcji uchwytem elementu, który się ma pojawić,
  //   więc nie trzeba pisać w liście powyżej uchwytu, 
  //   możemy zmieniać itemName, dopóki nie zamkniemy funkcji appendChildem
  
  
  itemName.id = "item";
  itemName.innerText = textInput.value;
  shopList.appendChild(itemName);
  itemName.appendChild(checkbox);
  itemName.appendChild(btnDelete);
  
  
  // shopList.innerHTML = `<span id="item">${textInput.value}</span>`; - ten zapis powoduje,
  //   że wpisany element zastępuje wcześniejszy, nie tworzy się lista - funkcja wlasna innerHTML
  
  
  textInput.value = "";
  
  
  //   po wpisaniu do listy zastepuje poprzedni zapisany element
  
  
  btnDelete.addEventListener("click", () => {
    shopList.removeChild(itemName);
  });
});



