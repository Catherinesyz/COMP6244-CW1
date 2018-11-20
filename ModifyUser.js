
$(document).ready(function(){alert('function');

    var get_url = window.location.search.substring(1);
    var sp = get_url.split("&");

    for (var i = 0; i < sp.length; i++) {

        var name1 = sp[0].split("=");

        if(name1[0] == "user"){
         
            var name2 = ""+name1[1];
            var user = name2.replace(/%20/g," ");
            // match all the projects information based on the project that users searched
            
            // modify information of user
            $("#modify_btn").click(function(){
                
                $.get('https://xf8mksg4f9.execute-api.eu-west-2.amazonaws.com/dev/modifyuser', 
                { 
                    "User": $('#userId').val(), 
                    "Password": $('#Password').val(),
                    "Role": $('#u-role').val(),
                    "Email": $('#Email').val()
                }, 
                function(data, status){
                    if (data){
                       alert("Successfully Modify !");
                    }
                    else{
                        alert($('#userId').val());
                    }
                    
                });
                
            }); 

            // go back to users' main page
            $("#return-btn").click(function(){
         
                    parent.history.back();
                    return false;
               
            });
        }
    }
  
});