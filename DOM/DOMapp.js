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

    //need to figure out how to put press here above form


    var myForm = document.getElementById('form');
    document.body.appendChild(myForm);
    myForm.onsubmit = function () {
        var formTxt = document.getElementById('message').value;
        alert(formTxt);
        // use onsubmit vs click. This is catered towards forms. 
        //It is also why we called for the form in the previous line.   

        var parDiv = document.createElement('p');
        //createas a paragraph div

        myForm.appendChild(parDiv);
        //appends the paragraph div to the body

        var paraText = document.createTextNode(formTxt);
        //creates textnode out of the text inputed

        parDiv.appendChild(paraText);
        //appends text node to paragraph div

        parDiv.addEventListener('click', () => {
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
    
    //styling for the div

    colorDiv.addEventListener('mouseover', () => {
        const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
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

    //need to figure out how to put on new line after each push
    newButton.addEventListener("click", function () {
        
        var myInfoSpan = document.createElement('span');
        //creates a span for info
        var myInfoText = document.createTextNode('My Name is David the Great')
        //info that is provided when button is pressed
        div4newButton.appendChild(myInfoSpan);
        myInfoSpan.appendChild(myInfoText);
        //appends the info to span and then the span to the body
        newButton.disabled = 'true';
    });
    
    //Objective 6 button for friends

    //creates a div for button3 appends button 3 to the div
    var div4button3 = document.createElement('div');
    document.body.appendChild(div4button3);
    
    //creates button 3 and appends it to the div
    var Button3 = document.createElement('button');
    div4button3.appendChild(Button3);
    //adds text to the button 3
    var Button3Text = document.createTextNode("Press for a friend");
    Button3.appendChild(Button3Text);
    
    //creates a div for unordered list appends unordered list to the div for the button
    var ulistDiv = document.createElement('ul');
    div4button3.appendChild(ulistDiv);
    
    var friendsList = ['John', 'Collin', 'Derek', 'Clae', 'Cam', 'Matt', 'Rob', 'Katherine', 'Mike', 'Shreeju'];
    var i = 0;   
   
    
    Button3.addEventListener("click", function () {  
        if (i >= friendsList.length) {
            Button3.disabled = 'true';
        } else {
            var liListDiv = document.createElement('li');
            ulistDiv.appendChild(liListDiv);
            nameList= document.createTextNode(friendsList[i]);
            liListDiv.appendChild(nameList)
            i++;
            
        };
    });

});




function random(num) {
    return Math.floor(Math.random() * (num + 1));
};
