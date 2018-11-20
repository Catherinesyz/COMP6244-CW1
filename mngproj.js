/* ************************************************************
 * 
 * This javascript file is for mngproj.html that is the homepage 
 *  of this application
 * writen by Siying, zhang (sz3y18)
 * 
 * ************************************************************/ 



$(document).ready(function(){
  
    var i = 0;
    //Create a project
    $("#create-proj").click(function(){
       
        $("#crt-btn").click(function(){
            
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
                    alert("Data: " + data.Items[0].Project + "\nStatus: " + status);
                }
                
            });
            
            });          
    });

    //Search a project
    $("#search-proj").click(function(){
       
        $("#sbtn").click(function(){
            
            $.get('https://jl53shwlhj.execute-api.eu-west-2.amazonaws.com/dev/searchproj', 
            { 
                "Project": $('#sProjId').val()
            }, 
            function(data, status){
                
                 //   alert("Data: " + data.Item.Project + "\nStatus: " + status);
                 if(data)
                 {

                 }
                // show the result(project) of search
                var d1 = document.getElementById("show_proj");
                d1.setAttribute("class", "col-xs-8 col-sm-6");

                var d2 = document.createElement("div");
                d2.setAttribute("class", "card");

                var d3 = document.createElement("div");
                d3.setAttribute("class", "card-body");

                var h4 = document.createElement("h4");
                h4.setAttribute("class", "card-title");

                var d4 = document.createElement("div");
                d4.id = "pid";
                d4.innerHTML = data.Item.Project;

                //var p1 = document.createElement
                d4.appendChild(d4);
                d3.appendChild(h4);
                d2.appendChild(d3);
                d1.appendChild(d2);

                
            });
            
        });          
    });

    // show the information about projects
    $.get('https://3mylc2m0p9.execute-api.eu-west-2.amazonaws.com/dev/projectdetails', 
    { 
    }, 
    function(data) {
        alert(data.Items[6].DueTime);
        var t = document.getElementById("showTable");

        for (var i = 0; i < data.Items.length; i++)
        {
            var r = document.createElement("tr");
            
            var d1 = document.createElement("td");
            d1.innerHTML(data.Items[i].Project);
            d1.crea
            r.appendChild(d1);

            var d2 = document.createElement("td");
            d2.innerHTML(data.Items[i].DueTime);
            r.appendChild(d2);

            var d3 = document.createElement("td");
            d3.innerHTML(data.Items[i].Developer1);
            r.appendChild(d3);
            
            
            t.appendChild(r);
            
        }
    }
    );
   
         
});


