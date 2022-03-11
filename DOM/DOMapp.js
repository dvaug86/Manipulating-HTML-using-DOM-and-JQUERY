document.addEventListener("DOMContentLoaded", function () {

    //Objective 1: Make a button
    var div4Btn = document.createElement('div');
    //div to seperate the button from rest

    div4Btn.className = 'div-4-Btn';
    //gives class name to div so that we know which one

    document.body.appendChild(div4Btn);
    //adds the div to the body 

    var btn = document.createElement("button");
    //creates a button

    let btnText = document.createTextNode("Press here");
    //text for said button

    btn.appendChild(btnText);
    //adds the text to the button like a lable

    div4Btn.appendChild(btn);
    //adds the button to the button division

    btn.addEventListener("click", function () {
        alert('You pressed the button!');
    });


    //Objective 2:
    //need to call form in order to get what is typed in the boxes

    //don't forget when getting something whether id element or class put it in quotes

    var myForm = document.getElementById('form');
    myForm.onsubmit = function () {
        var formTxt = document.getElementById('message').value;
        alert(formTxt);
        // use onsubmit vs click. This is catered towards forms. 
        //It is also why we called for the form in the previous line.   

        var parDiv = document.createElement('p');
        //createas a paragraph div

        document.body.appendChild(parDiv);
        //appends the paragraph div to the body

        var paraText = document.createTextNode(formTxt);
        //creates textnode out of the text inputed

        parDiv.appendChild(paraText);
        //appends text node to paragraph div

        parDiv.addEventListener('mouseover', () => {
            parDiv.style.color = rndCol;
            //changes the color of text to a random color when moused over the paragraph div
        });

        return false;

    };
    //Objective 3: create a div that changes background color

    var colorDiv = document.createElement('div');
    //creates a div for a box

    document.body.appendChild(colorDiv);
    //appends the box to the body

    colorDiv.style.height = '200px';
    colorDiv.style.marginTop = '20px';
    colorDiv.style.border = "thick solid black";
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    //styling for the div

    colorDiv.addEventListener('mouseover', () => {
        colorDiv.style.backgroundColor = rndCol;
        //mouseover changes box to random color
    });

    colorDiv.addEventListener('mouseout', () => {
        colorDiv.style.backgroundColor = 'transparent';
        //mouseout changes box back to transparent
    });

    // Objective 4: Text in paragraph changes color with each click
    // see object 2 for the creation of paragraph with text
    //need to figure out how to get this to work outside of the brackets for objective 2

    //Objective 5: add a buton and an empty div that adds a span

    var div4newButton = document.createElement('div');
    //A seconddiv to seperate the button from rest   
    document.body.appendChild(div4newButton);
    //adds the div to the body 
    var newButton = document.createElement("button");
    //creates a button
    div4newButton.appendChild(newButton);
    //adds the button to the button division

    var newButtonText = document.createTextNode("Press for Info");
    newButton.appendChild(newButtonText);
    //text for said button

    newButton.addEventListener("click", function () {
        var myInfoSpan = document.createElement('span');
        //creates a span for info
        var myInfoText = document.createTextNode('My Name is David the Great')
        //info that is provided when button is pressed
        document.body.appendChild(myInfoSpan);
        myInfoSpan.appendChild(myInfoText);
        //appendsthe info to span and then the span to the body
    });

});




function random(num) {
    return Math.floor(Math.random() * (num + 1));
};
