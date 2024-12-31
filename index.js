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
*/
function addItem(addSelector, listSelector, textInputSelector, nbrInputSelector, totalSelector) {
    let addEl = document.querySelector(addSelector);
    let listEl = document.querySelector(listSelector);

    addEl.addEventListener('click', function () {
        let textinputEl = document.querySelector(textInputSelector);
        let nbrinputEl = document.querySelector(nbrInputSelector);
        let nbrvalue = Number(nbrinputEl.value);
        let textvalue = textinputEl.value;

        if (textvalue === '' || isNaN(nbrvalue) || nbrvalue === 0) {
            alert('Please enter valid text and number.');
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

        delBtn.addEventListener('click', function () {
            listEl.removeChild(liEl);
            calculateTotal(listSelector, totalSelector);
        });

        editBtn.addEventListener('click', function () {
            let textEditEl = document.createElement('input');
            textEditEl.type = 'text';
            textEditEl.value = textEl.textContent;

            let nbrEditEl = document.createElement('input');
            nbrEditEl.type = 'number';
            nbrEditEl.value = nbrEl.textContent;

            let saveBtn = document.createElement('button');
            saveBtn.textContent = 'save';
            saveBtn.setAttribute('class', 'edit');

            liEl.replaceChild(textEditEl, textEl);
            liEl.replaceChild(nbrEditEl, nbrEl);
            liEl.replaceChild(saveBtn, editBtn);

            saveBtn.addEventListener('click', function () {
                textEl.textContent = textEditEl.value;
                nbrEl.textContent = nbrEditEl.value;

                liEl.replaceChild(textEl, textEditEl);
                liEl.replaceChild(nbrEl, nbrEditEl);
                liEl.replaceChild(editBtn, saveBtn);

                calculateTotal(listSelector, totalSelector);
            });
        });

        calculateTotal(listSelector, totalSelector);
        calculateDiff();
    });
}

function calculateTotal(listSelector, totalSelector) {
    let total = 0;
    let items = document.querySelectorAll(`${listSelector} .listItem .nbr`);
    items.forEach(item => {
        total += Number(item.textContent);
    });
    document.querySelector(totalSelector).textContent = total;
    calculateDiff();
}

// Initialize both lists
addItem('.add', '.mainList', '.textIn', '.nbrIn', '.total');
addItem('.add2', '.mainList2', '.textIn2', '.nbrIn2', '.total2');

function calculateDiff() {
    let total1 = document.querySelector('.total').textContent;
    let total2 = document.querySelector('.total2').textContent;
    let diff = total1 - total2;
    document.querySelector('.diff').textContent = `the diffrent is ${diff}`;
}