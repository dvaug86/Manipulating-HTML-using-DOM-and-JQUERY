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
        
        ($('<input type="button" id="btnSubmit" value="Submit">')),
        ($('<input type="text" id="boxTxt"></input>'))
        );
    
 //appends the form to the formDiv   
    $('#formDiv').append(myForm);
    
    $('#btnSubmit').prop('disabled', true);
    $("#boxTxt").keyup(function () {
        if ($('#boxTxt').val() != '') {
            $('#btnSubmit').prop('disabled', false);
        }
    });
    $('body').append('<ul id="container"></ul>')
    $('#btnSubmit').click(function () {
        var boxTxt =$('#boxTxt').val();
        $('#container').append(`<li class="items">${boxTxt}</li>`);
        $("#myForm").trigger("reset");   
    });
    
});