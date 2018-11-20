$(document).ready(function(){
    
    //Create a project
    $("#create-proj").click(function(){
       
        $("#cpbtn").click(function(){
            var i = 0;
            $.get('https://ibcsv2xy6j.execute-api.eu-west-2.amazonaws.com/dev/addproject', 
            { 
                "Project": $('#ProjId').val(), 
                "DueTime": $('#DueTm').val(),
                "Manager": $('#MangId').val(),
                "Developer1": $('#DevId1').val(),
                "Developer2": $('#DevId2').val(),
                "Developer3": $('#DevId3').val(),
                "Pstatus": $('#proj-status').val()
            }, 
            function(data, status){
                if (data){
                    i++;
                }
                if(i == 7){
                    alert("Successfully Create a Project");
                }
                
            });
            
            });          
    });

    //Search a project
    $("#pbtn").click(function(){
     
            $.get('https://jl53shwlhj.execute-api.eu-west-2.amazonaws.com/dev/searchproj', 
            { 
                "Project": $('#myInput').val()
            }, 
            function(data){
                
                 //   alert("Data: " + data.Item.Project + "\nStatus: " + status);
                 if(data)
                 {
                    $(location).attr('href', 'modify.html?project='+data.Item.Project);
                 }
                
            });
               
    });

    //Search a user
 
    $("#ubtn").click(function(){
        
        $.get('https://xf8mksg4f9.execute-api.eu-west-2.amazonaws.com/dev/modifyuser', 
        { 
            "User": $('#usInput').val()
        }, 
        function(data, status){
            
                    alert("Data: ");
                if(data)
                {
                    $(location).attr('href', 'modifyuser.html?user='+data.Item.User);
                }
                else {
                    alert("error: ");
                }
            
        });
        
    });          
    
    //Create a user
    $("#create-user").click(function(){
       
        $("#cubtn").click(function(){
            var i = 0;
            $.get('https://s904yw1096.execute-api.eu-west-2.amazonaws.com/dev/addusers', 
            { 
                "User": $('#suserid').val(), 
                "Email": $('#semail').val(),
                "Password": $('#spassword').val(),
                "Role": $('#u-role').val()
            }, 
            function(data, status){
                if (data){
                    
                }
                
            });
            
            });          
    });

    // show the information about projects
    $.get('https://3mylc2m0p9.execute-api.eu-west-2.amazonaws.com/dev/projectdetails', 
    { 
    }, 
    function(data) {
        var t = document.getElementById("showTable");

        for (var i = 0; i < data.Items.length; i++)
        {
            var r = document.createElement("tr");
            
            var d = document.createElement("td");
            d.innerHTML = data.Items[i].Project;
            r.appendChild(d);

            var d = document.createElement("td");
            d.innerHTML = data.Items[i].DueTime;
            r.appendChild(d);

            var d = document.createElement("td");
            d.innerHTML = data.Items[i].Manager;
            r.appendChild(d);

            var d = document.createElement("td");
            d.innerHTML = data.Items[i].Developer1;
            r.appendChild(d);

            var d = document.createElement("td");
            d.innerHTML = data.Items[i].Developer2;
            r.appendChild(d);

            var d = document.createElement("td");
            d.innerHTML = data.Items[i].Developer3;
            r.appendChild(d);

            var d = document.createElement("td");
            d.innerHTML = data.Items[i].Pstatus;
            r.appendChild(d);
            
            var a = document.createElement("a");
            a.innerHTML = "Modify ";
            a.href="modify.html?project=" + data.Items[i].Project;
            r.appendChild(a);
            
            
            r.appendChild(a);
            
            t.appendChild(r);
            
        }
    });
    //end get
});