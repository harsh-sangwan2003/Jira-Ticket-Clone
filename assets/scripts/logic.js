let addBtn = document.querySelector('.add-btn');

let modelCont = document.querySelector('.model-cont');

let mainCont = document.querySelector('.main-cont');

let allPriorityColor = document.querySelectorAll('.priority-color');

let colors = ['lightpink', 'lightgreen', 'lightblue', 'black'];

let modelPriorityColor = colors[colors.length - 1];

let textArea = document.querySelector('.textarea-cont');

let removeButton = document.querySelector('.remove-btn');

let removeFlag = false;

let addFlag = false;

addBtn.addEventListener('click', function (e) {

    //Display a modal
    //addFlag - true -> Display the model
    //addFlag - false -> Hide the model

    addFlag = !addFlag;

    if (addFlag) {

        modelCont.style.display = 'flex';
    }

    else {

        modelCont.style.display = 'none';
    }


    //Add a cards
});

//Generating a ticket
modelCont.addEventListener('keydown', function (e) {

    let keyName = e.key;

    if (keyName == 'Shift') {

        generateTicket();
        modelCont.style.display = 'none';
        addFlag = !addFlag;
        textArea.value = '';
    }
});

function generateTicket() {

    let ticketCont = document.createElement('div');
    ticketCont.setAttribute('class', 'ticket-cont');

    ticketCont.innerHTML = `<div class="ticket-color ${modelPriorityColor}"></div>
        <div class="ticket-id"></div>
        <div class="task-area">${textArea.value}</div>`;

    mainCont.appendChild(ticketCont);
    handleRemoval(ticketCont);
};

//Changing Priority Colors

allPriorityColor.forEach(function (div) {

    div.classList.remove('active');
});

allPriorityColor.forEach(function (colorEle) {

    colorEle.addEventListener('click', function (e) {

        allPriorityColor.forEach(function (priorityColorEle) {

            priorityColorEle.classList.remove('active');
        });

        colorEle.classList.add('active');
        modelPriorityColor = colorEle.classList[0];
    })
});

removeButton.addEventListener('click', function (e) {

    removeFlag = !removeFlag;

});

function handleRemoval(ticket) {

    ticket.addEventListener('click', function (e) {

        if (removeFlag) {

            this.remove();
        }
    })
}