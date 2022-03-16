var greeting = (userName)=>{
    var userName = prompt("Enter name");
    alert("Hello, " + userName + "!");
}
    greeting();

    const myButton1 = document.querySelector("#btn1");
    const myButton2 = document.querySelector("#btn2");
    const list = document.createElement('ul1');
    list.classList.add("this-list");

    document.body.appendChild(list); /* Puts list at the end of the <body> */

    myButton1.onclick = function(){
        const listItem = document.createElement('li');
        const listContent = prompt('What elements do you want the list item to have?');
        listItem.textContent = listContent;
        list.appendChild(listItem);
    }

    myButton2.onclick = function(){
        list.innerHTML = '';
    }

    const ul = [document.querySelectorAll('.this-list')]; /* Removes a specific item on a list when u click it */
    list.addEventListener('click', function(e){ /* Listens for when a specific item was clicked */
        this.removeChild(e.target); /*Removes it */
    })
      