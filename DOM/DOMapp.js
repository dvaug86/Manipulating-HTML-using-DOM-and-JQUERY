document.addEventListener("DOMContentLoaded", function () {

    //Objective 1: Make a button
    var div4Btn = document.createElement('div'); //div to seperate the button from rest
    div4Btn.className = 'div-4-Btn'; //gives class name to div so that we know which one
    document.body.appendChild(div4Btn); //adds the div to the body 

    var btn = document.createElement("button"); //creates a button
    let btnText = document.createTextNode("Press here"); //text for said button
    btn.appendChild(btnText); //adds the text to the button like a lable
    div4Btn.appendChild(btn); //adds the button to the button division

    btn.addEventListener("click", function () {
        alert('You pressed the button!');
    });


    //Objective 2:
    //need to call form in order to get what is typed in the boxes

    //don't forget when getting something whether id element or class put it in quotes

    var myForm = document.getElementById('form');
    myForm.onsubmit = function () { // use onsubmit vs click. This is catered towards forms. It is also why we called for the form in the previous line
        var formTxt = document.getElementById('message').value;
        alert(formTxt);
    };
});
