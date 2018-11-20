
$(document).ready(function(){

    var get_url = window.location.search.substring(1);
    var sp = get_url.split("&");

    for (var i = 0; i < sp.length; i++) {

        var name1 = sp[0].split("=");

        if(name1[0] == "project"){
         
            var name2 = ""+name1[1];
            var Project = name2.replace(/%20/g," ");
            // match all the projects information based on the project that users searched
            $.get('https://3mylc2m0p9.execute-api.eu-west-2.amazonaws.com/dev/projectdetails', 
            { 
            },
            function(data){
                for (var j = 0; j < data.Items.length; j++){
                    //search corresponding information of project and show in the text input
                    if (data.Items[j].Project == Project) {
                        $.get('https://jl53shwlhj.execute-api.eu-west-2.amazonaws.com/dev/searchproj', 
                        { 
                            "Project": Project
                        },
                        
                        
                        function (data) {
                            $('#ProjId').val(data.Item.Project), 
                            $('#DueTm').val(data.Item.DueTime);
                            $('#MangId').val(data.Item.Manager);
                            $('#DevId1').val(data.Item.Developer1),
                            $('#DevId2').val(data.Item.Developer2),
                            $('#DevId3').val(data.Item.Developer3),
                            $('#proj-status').val(data.Item.Pstatus)
                        }
                        );
                        var detail = document.getElementById('detail');
                    }
                }
            }
            );
            
            // modify attribute of project
            $("#modify_btn").click(function(){
                
                $.get('https://sdrr63sw9c.execute-api.eu-west-2.amazonaws.com/dev/modifyproj', 
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
                       alert("Successfully Modify !");
                    }
                    else{
                        alert($('#ProjId').val());
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