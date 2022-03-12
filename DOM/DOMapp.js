document.addEventListener("DOMContentLoaded", function () {

    //Objective 1: Make a button
    var divBtn1 = document.createElement('div');
    //div to seperate the button from rest

    divBtn1.className = 'div-Btn1';
    //gives class name to div so that we know which one

    document.body.appendChild(divBtn1);
    //adds the div to the body 

    var btn1 = document.createElement("button");
    //creates a button

    let btnText = document.createTextNode("Press here");
    //text for said button

    btn1.appendChild(btnText);
    //adds the text to the button like a lable

    divBtn1.appendChild(btn1);
    //adds the button to the button division

    btn1.addEventListener("click", function () {
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

        var parText = document.createTextNode(formTxt);
        //creates textnode out of the text inputed

        parDiv.appendChild(parText);
        //appends text node to paragraph div

        parDiv.addEventListener('click', () => {
            const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
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

    var div4Btn3 = document.createElement('div');
    //A seconddiv to seperate the button from rest   
    document.body.appendChild(div4Btn3);
    //adds the div to the body 
    var btn3 = document.createElement("button");
    //creates a button
    div4Btn3.appendChild(btn3);
    //adds the button to the button division

    var btn3Text = document.createTextNode("Press for Info");
    btn3.appendChild(btn3Text);
    //text for said button

    //need to figure out how to put on new line after each push
    btn3.addEventListener("click", function () {
        
        var myInfoSpan = document.createElement('span');
        //creates a span for info
        var myInfoText = document.createTextNode('My Name is David the Great')
        //info that is provided when button is pressed
        div4Btn3.appendChild(myInfoSpan);
        myInfoSpan.appendChild(myInfoText);
        //appends the info to span and then the span to the body
        btn3.disabled = 'true';
    });
    
    //Objective 6 button for friends

    //creates a div for btn4 appends button 3 to the div
    var div4Btn4 = document.createElement('div');
    document.body.appendChild(div4Btn4);
    
    //creates button 3 and appends it to the div
    var btn4 = document.createElement('button');
    div4Btn4.appendChild(btn4);
    //adds text to the button 3
    var btn4Text = document.createTextNode("Press for a friend");
    btn4.appendChild(btn4Text);
    
    //creates a div for unordered list appends unordered list to the div for the button
    var ulistDiv = document.createElement('ul');
    div4Btn4.appendChild(ulistDiv);
    
    var friendsList = ['John', 'Collin', 'Derek', 'Clae', 'Cam', 'Matt', 'Rob', 'Katherine', 'Mike', 'Shreeju'];
    var i = 0;   
   
    
    btn4.addEventListener("click", function () {  
        if (i >= friendsList.length) {
            btn4.disabled = 'true';
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
