let addEl = document.querySelector('.add');
let listEl = document.querySelector('.mainList');


addEl.addEventListener('click', function() {
    let textinputEl = document.querySelector('.textIn');
    let nbrinputEl = document.querySelector('.nbrIn');
    let nbrvalue = nbrinputEl.value;
    let textvalue = textinputEl.value;
    if(textvalue ==='' || nbrvalue ==='') {
        return;
    }
    let liEl = document.createElement('li');
    liEl.setAttribute('class','listItem');
    let textEl = document.createElement('span');
    textEl.textContent = textvalue;
    textEl.setAttribute('class', 'text');
    let nbrEl = document.createElement('span');
    nbrEl.textContent = nbrvalue;
    nbrEl.setAttribute('class', 'nbr');
    let delBtn = document.createElement('button');
    delBtn.textContent = 'delete';
    delBtn.setAttribute('class', 'delete');
    let editBtn = document.createElement('button');
    editBtn.textContent = 'edit';
    editBtn.setAttribute('class', 'edit');

    liEl.appendChild(textEl);
    liEl.appendChild(nbrEl);
    liEl.appendChild(delBtn);
    liEl.appendChild(editBtn);
    listEl.appendChild(liEl);
    textinputEl.value = '';
    nbrinputEl.value = '';

    delBtn.addEventListener('click', function() { 
        listEl.removeChild(liEl);
        calculateTotal()
    });

    editBtn.addEventListener('click', ()=>{
        //tell me how
        calculateTotal()
    });
    calculateTotal()
}
);

function calculateTotal(){
    let nbr = 0;
    listEl.forEach(element => {
        nbr+= element.nbrEl.textContent;
    });
    document.querySelector('.total').value = nbr;
}

