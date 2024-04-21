const display = document.getElementById("display");

document.getElementById("zero").addEventListener("click", (e) => {
     // Get the current value of the input field
     let currentValue = display.value;

     // Check if the current value is not starting with "0" or an operator followed by "0"
     if (currentValue !== e.target.value && !currentValue.match(/[+*/-]0$/)) {
         // Append "0" to the input field
         display.value += e.target.value;
     }
});


document.getElementById("one").addEventListener("click",(e)=>{
    if (display.value === '0') {
        // Replace '0' with '1' if the current value is '0'
        display.value = e.target.value;
    } else {
        // Append the value of the clicked button to the display
        display.value += e.target.value;
    }
})
document.getElementById("two").addEventListener("click",(e)=>{
     if (display.value === '0') {
        // Replace '0' with '1' if the current value is '0'
        display.value = e.target.value;
    } else {
        // Append the value of the clicked button to the display
        display.value += e.target.value;
    }
})
document.getElementById("three").addEventListener("click",(e)=>{
     if (display.value === '0') {
        // Replace '0' with '1' if the current value is '0'
        display.value = e.target.value;
    } else {
        // Append the value of the clicked button to the display
        display.value += e.target.value;
    }
})
document.getElementById("four").addEventListener("click",(e)=>{
     if (display.value === '0') {
        // Replace '0' with '1' if the current value is '0'
        display.value = e.target.value;
    } else {
        // Append the value of the clicked button to the display
        display.value += e.target.value;
    }
})
document.getElementById("five").addEventListener("click",(e)=>{
     if (display.value === '0') {
        // Replace '0' with '1' if the current value is '0'
        display.value = e.target.value;
    } else {
        // Append the value of the clicked button to the display
        display.value += e.target.value;
    }
})
document.getElementById("six").addEventListener("click",(e)=>{
     if (display.value === '0') {
        // Replace '0' with '1' if the current value is '0'
        display.value = e.target.value;
    } else {
        // Append the value of the clicked button to the display
        display.value += e.target.value;
    }
})
document.getElementById("seven").addEventListener("click",(e)=>{
     if (display.value === '0') {
        // Replace '0' with '1' if the current value is '0'
        display.value = e.target.value;
    } else {
        // Append the value of the clicked button to the display
        display.value += e.target.value;
    }
})
document.getElementById("eight").addEventListener("click",(e)=>{
     if (display.value === '0') {
        // Replace '0' with '1' if the current value is '0'
        display.value = e.target.value;
    } else {
        // Append the value of the clicked button to the display
        display.value += e.target.value;
    }
})
document.getElementById("nine").addEventListener("click",(e)=>{
     if (display.value === '0') {
        // Replace '0' with '1' if the current value is '0'
        display.value = e.target.value;
    } else {
        // Append the value of the clicked button to the display
        display.value += e.target.value;
    }
})
document.getElementById("add").addEventListener("click",(e)=>{
    display.value += e.target.value
})
document.getElementById("subtract").addEventListener("click",(e)=>{
    display.value += e.target.value
})
document.getElementById("multiply").addEventListener("click",(e)=>{
    display.value += e.target.value
})
document.getElementById("divide").addEventListener("click",(e)=>{
    display.value += e.target.value
})
document.getElementById("clear").addEventListener("click",()=>{
    display.value='0';
})

document.getElementById("equals").addEventListener("click",()=>{
    display.value = eval(display.value)
})
document.getElementById("decimal").addEventListener("click", (e) => {
    let lastNumber = getLastNumber(display.value); // Get the last number entered
    if (!lastNumber.includes('.')) { // Check if the last number does not contain a decimal point
        display.value += e.target.value;
    }
});

// Function to get the last number entered from the display value
function getLastNumber(value) {
    const numbers = value.split(/[+\-*\/]/); // Split the value by operators
    return numbers[numbers.length - 1]; // Return the last number in the array
}
