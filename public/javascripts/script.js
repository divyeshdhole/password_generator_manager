// let characters = 0;
// let special_characters = 0;
// let numbers = 0;



const value = document.getElementById("value");
const input = document.getElementById("input");
value.textContent = input.value;
input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
});

// let c1 = document.getElementsByClassName("c1");
// let c2 = document.getElementsByClassName("c2");
// let c3 = document.getElementsByClassName("c3");

// function handleCheckboxChange(event) {
//     const isChecked = event.target.checked;
//     const checkboxName = event.target.name; // Get the name attribute of the checkbox

//     console.log(`Checkbox '${checkboxName}' is checked: ${isChecked}`);

//     // Example logic: update corresponding variable based on checkbox
//     if (checkboxName === 'characters') {
//         characters = isChecked ? 1 : 0;
//         // Add more logic here as needed
//     } else if (checkboxName === 'special characters') {
//         special_characters = isChecked ? 1 : 0;
//         // Add more logic here as needed
//     } else if (checkboxName === 'numbers') {
//         numbers = isChecked ? 1 : 0;
//         // Add more logic here as needed
//     }
// }

// // Attach event listeners to each checkbox in c1
// for (let i = 0; i < c1.length; i++) {
//     c1[i].addEventListener('change', handleCheckboxChange);
// }

// // Attach event listeners to each checkbox in c2
// for (let i = 0; i < c2.length; i++) {
//     c2[i].addEventListener('change', handleCheckboxChange);
// }

// // Attach event listeners to each checkbox in c3
// for (let i = 0; i < c3.length; i++) {
//     c3[i].addEventListener('change', handleCheckboxChange);
// }

// function generatePassword() {
//   // const username = document.querySelector(".username");
  
//     let length = document.getElementById("input");
//     length = int(length.innerText);
//     let password = [];

//     let password_count = 
//     if(characters)


// }

// const generateBtn = document.querySelector('.generate');
// generateBtn.addEventListener('click', generatePassword);


