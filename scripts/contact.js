// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads 
// "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

// when the user clicks the submit button, run the clearPage function
let submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", clearPage);

// create a new <p> element that holds the thank you message
// clear the innerHTML of the <main> 
// append the new <p> element into the <main> 
function clearPage() {
    let mainPage = document.getElementById("contact-page");
    let thankYouMessage = document.createElement("p");

    thankYouMessage.classList.add("clear");
    thankYouMessage.innerHTML = 'Thank You for your message!';
    
    mainPage.innerHTML = '';
    mainPage.appendChild(thankYouMessage);
}