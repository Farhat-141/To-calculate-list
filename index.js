/*let addEl = document.querySelector('.add');
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

*/let addEl = document.querySelector('.add');
let listEl = document.querySelector('.mainList');

addEl.addEventListener('click', function() {
    let textinputEl = document.querySelector('.textIn');
    let nbrinputEl = document.querySelector('.nbrIn');
    let nbrvalue = Number(nbrinputEl.value); // Convert to number
    let textvalue = textinputEl.value;

    if (textvalue === '' || nbrvalue === '') {
        return;
    }

    let liEl = document.createElement('li');
    liEl.setAttribute('class', 'listItem');

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
        calculateTotal();
    });

    editBtn.addEventListener('click', function() {
        let textEditEl = document.createElement('input');
        textEditEl.type = 'text';
        textEditEl.value = textEl.textContent;

        let nbrEditEl = document.createElement('input');
        nbrEditEl.type = 'number';
        nbrEditEl.value = nbrEl.textContent;

        let saveBtn = document.createElement('button');
        saveBtn.textContent = 'save';

        liEl.replaceChild(textEditEl, textEl);
        liEl.replaceChild(nbrEditEl, nbrEl);
        liEl.replaceChild(saveBtn, editBtn);

        saveBtn.addEventListener('click', function() {
            textEl.textContent = textEditEl.value;
            nbrEl.textContent = nbrEditEl.value;

            liEl.replaceChild(textEl, textEditEl);
            liEl.replaceChild(nbrEl, nbrEditEl);
            liEl.replaceChild(editBtn, saveBtn);

            calculateTotal();
        });
    });

    calculateTotal();
});

function calculateTotal() {
    let total = 0;
    let items = document.querySelectorAll('.mainList .listItem .nbr');
    items.forEach(item => {
        total += Number(item.textContent); // Convert to number
    });
    document.querySelector('.total').textContent = total; // Replace total
}

