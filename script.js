$(document).ready(function(){
    // get data from form on "Add User" button click
    var newUserData = []
    var newRow = '<tr>';
    $('form').submit(function(){
        newUserData = [];
        newRow = '<tr>';
        console.log(newUserData);
        newUserData[0] = $('#first_name').val();
        newUserData[1] = $('#last_name').val();
        newUserData[2] = $('#email_address').val();
        newUserData[3] = $('#contact_no').val();
        for (var i=0; i<newUserData.length; i += 1){
            newRow += '<td>' + newUserData[i] + '</td>';
        };
        newRow += '</tr>';
        $('tbody').append(newRow);
        $(this).children('input:text').val('');
        return false;
    });
});