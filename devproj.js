/* *****************************************************************
 * 
 *  This javascript file is for devproj.html that is the homepage 
 *      of 'developers'
 *  The main function is to show the information about all the projects
 * 
 *  writen by Siying, zhang (sz3y18)
 * 
 * *****************************************************************/ 

$(document).ready(function(){

    $("#sbtn").click(function(){
        
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
                
                            
                t.appendChild(r);
                
            }
        });
    });
});