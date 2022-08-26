// lets grab the button
const changeBtn = document.getElementById("button");


// lets grab the hex code 
const hexCode = document.getElementById("hexcode");

// lets generate a random set of numbers between 0-255 three times
changeBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // lets generate the randon hex code 

    // the alphanumeric characters has indexes 0-15
    var num = "0123456789ABCDEF";
    
    // since colors start with #
    var color = "#";

    // looping six times to generate the number
    for(let i = 0; i < 6; i++){
        color += num[Math.floor(Math.random() * 15)];
    }

    // grabbing the background color of the body and setting it to the generated color
    document.body.style.backgroundColor = color;

    // now changing the text content 
    hexCode.innerText = color;

    // also let's change the color of the code to the color generated 
    hexCode.style.color = color
});


