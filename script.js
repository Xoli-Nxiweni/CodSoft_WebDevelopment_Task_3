let outputScreen = document.getElementById("result");

function display(number){
    outputScreen.value += number;
}
function Calculate(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err){
        alert("Invalid ")
    }
}
function Clear(){
    outputScreen.value = "";
}

function del(){
    outputScreen.value = outputScreen.value.slice(0, -1);
}