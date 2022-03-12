$(document).ready(function () {

    //Objective 1: create a button with an alert

    //creates a button
    $('body').append('<button id="button1">Alert!</button>');

    //creates the first buttton that sends an alert out
    $('#button1').click(function () {
        alert('you pressed the button!');
    });

    //Objective 2: Create a form  that you can enter text and hit submit
    //appends form div to the body
    $('body').append('<div id = "formDiv"></div>');
    
    //creates the form and the inputs for it
    var myForm = $('<form id="myForm"></form>').append(
        
        ($('<input type="button" id="button2" value="Submit">')),
        ($('<input type="text" id="boxTxt"></input>'))
        );
    
 //appends the form to the formDiv   
    $('#formDiv').append(myForm);
 
    //this makes a user unable to click submit
    $('#button2').prop('disabled', true);
    
    //this allows a user to use the submit function if something is typed into the text box
    $("#boxTxt").keyup(function () {
        if ($('#boxTxt').val() != '') {                 //if statement is saying if textbox isn't blank then the submit button is active
            $('#button2').prop('disabled', false);      //statement to activate button
        }
    });
    $('body').append('<ul id="container"></ul>')        //appends unorganized list to the body called the container. It will host the list items
    $('#button2').click(function () {                  //function activated with a click event on button 2 aka submit     
        var boxTxt =$('#boxTxt').val();                //assigns what is typed in to the text box a variable
       
        $('#container').append(`<li class="items">${boxTxt}</li>`);  //adds the text in textbox submitted to a list and then appends that to the container
       
        $("#myForm").trigger("reset");                  //clears the form after hitting submit               
    });
    

//Objective 3: create a box changes color and removes color with mouse over mouse out

    $('body').append($('<div id ="colorBox" style ="height: 200px; marginTop: 20px; border: thick solid black;"></div> ')); //creates the box
   
    $('#colorBox').on('mouseover',function() {                    //function for mouseover the box
        const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`; //code to get random colors
        $(this).css({'background': rndCol });                  //assigns random color to color box
      });
      $('#colorBox').on('mouseout',function() {                 //function for the mouseout
        $(this).css({'background': 'transparent'});             //when mouse leaves turns box back to transparent
      });
//why does it stay put on the random color when the rndCol = ...... is removed?


//Objective 4:  Paragraph created and upon click changes to a random color

$('body').append($('<p id= "pLine">What color will the click produce?</p>')); //creates the paragraph and appends it to the body
$('#pLine').on('click',function() {                 //function for the click
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`; //code to get random colors
    $(this).css({'color': rndCol});             //when mouse clicked changes text to random color
  });








    //code block for getting a random color  
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    function random(num) {
        return Math.floor(Math.random() * (num + 1));
    };
});