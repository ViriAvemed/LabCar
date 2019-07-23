
//FIRST MODAL
// Get the modal Login
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("login");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};


//SECOND MODAL
//Get the modal Register
const modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
const btn2 = document.getElementById("register");

// Get the <span> element that closes the modal
const span2 = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal
btn2.onclick = function() {
    modal2.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
    modal2.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal2) {
        modal2.style.display = "none";
    }
};

//3rd MODAL
//Get the modal Register
const modal3 = document.getElementById("myModal3");

// Get the button that opens the modal
const btn3 = document.getElementById("id-driver");

// Get the <span> element that closes the modal
const span3 = document.getElementsByClassName("close3")[0];

// When the user clicks the button, open the modal
btn3.onclick = function() {
    modal3.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
    modal3.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal3) {
        modal3.style.display = "none";
    }
};