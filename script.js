let outputScreen = document.getElementById("result");

function display(number){
    outputScreen.value += number;
}

function Calculate(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(error){
        alert("Invalid ")
    }
}

function Clear(){
    outputScreen.value = "";
}

function del(){
    outputScreen.value = outputScreen.value.slice(0, -1);
}

const changeColor = document.querySelectorAll('button');

document.addEventListener('click', () => {

        changeColor.style.background = 'grey';

});
