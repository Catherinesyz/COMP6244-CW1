/* ************************************************************
 * 
 * This javascript file is for index.html that is the homepage 
 *  of this application
 * writen by Siying, zhang (sz3y18)
 * 
 * ************************************************************/ 

$(document).ready(function() {
    
    /* modal for log in */
    $("#login_modal").click(function(){
    
        $("#lbtn").click(function(){
            
            $.get('https://nw2p1ht34b.execute-api.eu-west-2.amazonaws.com/dev/createuser', 
            { 
                "User": $('#userid').val(), 
                "Email": $('#email').val(),
                "Password": $('#password').val()  
            }, 
            function(data){
                if (data){
                    if(data.Item.Role == "Developer"){
                        window.location.href = "devproj.html";
                    }   
                    else if(data.Item.Role == "Manager") {
                        window.location.href = "mngproj.html";
                    }
                    else if(data.Item.Role == "Admin") {
                        window.location.href = "admproj.html";
                    }

                }
                
            });
            
        });          
    });

});
