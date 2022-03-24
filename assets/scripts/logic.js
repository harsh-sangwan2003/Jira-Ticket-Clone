let addBtn = document.querySelector('.add-btn');

let modelCont = document.querySelector('.model-cont');

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
})