// let outputScreen = document.getElementById("result");
// let currentInput = "";

// function display(value) {
//     currentInput += value;
//     outputScreen.value = currentInput;
// }

// function Calculate() {
//     try {
//         // Evaluate the expression
//         let result = eval(currentInput);
//         outputScreen.value = result;
//     } catch (error) {
//         alert("Invalid input");
//     }
// }

// function calculatePercentage() {
//     if (currentInput !== "") {
//         // Check if the last characters are a number followed by a percentage sign
//         let match = currentInput.match(/(\d+(\.\d+)?)%$/);
//         if (match) {
//             // Replace the percentage with subtraction
//             currentInput = currentInput.replace(/(\d+(\.\d+)?)%$/, '- ($1 * 0.01 * $1)');
//             outputScreen.value = eval(currentInput);
//         } else {
//             // Append a percentage sign to the input
//             currentInput += '%';
//             outputScreen.value = currentInput;
//         }
//     }
// }

// function Clear() {
//     currentInput = "";
//     outputScreen.value = "";
// }

// function del() {
//     currentInput = currentInput.slice(0, -1);
//     outputScreen.value = currentInput;
// }

// const changeColor = document.querySelectorAll('button');

// document.addEventListener('click', (event) => {
//     // Change the background color only for button clicks
//     if (event.target.tagName === 'BUTTON') {
//         event.target.style.background = 'grey';
//     }
// });



// Define variables to keep track of the calculator state
let currentInput = '';
let resultDisplayed = false;

// Function to display numbers and operators in the input field
function display(value) {
    if (resultDisplayed) {
        // If result is displayed, start a new input
        document.getElementById('result').value = '';
        resultDisplayed = false;
    }

    // Append the value to the current input
    currentInput += value;
    document.getElementById('result').value = currentInput;
}

// Function to clear the input field
function Clear() {
    currentInput = '';
    document.getElementById('result').value = '0';
}

// Function to delete the last character in the input field
function del() {
    currentInput = currentInput.slice(0, -1);
    document.getElementById('result').value = currentInput || '0';
}

// Function to calculate the percentage of the current input
// function calculatePercentage(value, percentageValue) {
//     try {
//         value = parseFloat(currentInput);
//         const percentage = ((value / percentageValue) * 100);
//         currentInput = (value - percentage).toString();
//         document.getElementById('result').value = currentInput;
//         resultDisplayed = true;
//     } catch (error) {
//         document.getElementById('result').value = 'Error';
//         currentInput = '';
//     }
// }


// Function to perform the calculation when the "=" button is clicked
function Calculate() {
    try {
        currentInput = eval(currentInput).toString();
        document.getElementById('result').value = currentInput;
        resultDisplayed = true;
    } catch (error) {
        document.getElementById('result').value = 'Error';
        currentInput = '';
    }
}
