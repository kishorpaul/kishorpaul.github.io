$(document).ready(function(){
    $('.slider').slick({

    });
});

function myFunction(){
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var sub = document.getElementById('sub');
    var message = document.getElementById('message');
    
    if(name.value==""){
        alert("Name cannot be empty.")
    }else if(email.value==""){
        alert("Email cannot be empty.")
    }else if(sub.value==""){
        alert("Subject cannot be empty.")
    }else if(message.value==""){
        alert("Message cannot be empty.")
    }
    else{
    alert(name.value+', Your message has Submitted.');
}
}