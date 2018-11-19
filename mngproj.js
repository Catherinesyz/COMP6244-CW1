/* ************************************************************
 * 
 * This javascript file is for mngproj.html that is the homepage 
 *  of this application
 * writen by Siying, zhang (sz3y18)
 * 
 * ************************************************************/ 



$(document).ready(function(){
    
    $("#create-proj").click(function(){
       
        $("#crt-btn").click(function(){
            //var bla = $('#DueTm').val();
            $.get('https://9qodk0jdqi.execute-api.eu-west-2.amazonaws.com/dev/addproject', 
            { 
                "projid": $('#ProjId').val(), 
                "duetm": $('#DueTm').val(),
                "mangid": $('#MangId').val(),
                "dev1": $('#DevId1').val(),
                "dev2": $('#DevId2').val(),
                "dev3": $('#DevId3').val(),
                "pstatus": $('#proj-status').val(),
           
        // });
            // var view = function() {
                // var self = this;
                // //frontend data
                // self.projid = ko.observable("");
                // //self.duetm = ko.observable("");
                // self.duetm = bla;
                // self.mangid = ko.observable("");
                // self.dev1 = ko.observable("");
                // self.dev2 = ko.observable("");
                // self.dev3 = ko.observable("");
                // self.pstatus = ko.observable("");
                
                // self.createproj = function () {  
                //     alert(self.pstatus());  
                //     alert(selp.duetm);
                    
                    // $.ajax({
                    //     url: 'https://9qodk0jdqi.execute-api.eu-west-2.amazonaws.com/dev/addproject',
                    //     cache: false,
                    //     type: 'GET',  
                    //     //get the data from frontend to lambda (lanbda:para)                
                    //     data: { 
                    //         "projid": self.projid(),
                    //         "duetm": self.duetm(),
                    //         "mangid": self.mangid(),
                    //         "dev1": self.dev1(),
                    //         "dev2": self.dev2(),
                    //         "dev3": self.dev3(),
                    //         "pstatus": self.pstatus()
                    //     },
                        success: function (data) {              
                            if(data!=null){
                                //window.location.href="index.html";
                            }
                            
                        },
                        error: function(data){
                            alert('1');
                        }
                    });
                    // $.ajax({
                    //     url: 'https://9qodk0jdqi.execute-api.eu-west-2.amazonaws.com/dev/addproject',
                    //     type: 'POST',
                    //     dataType: 'jsonp',
                    //     data: 
                    //     jQuery.param({ 
                    //         "projid": $('#ProjId').val(), 
                    //             "duetm": $('#DueTm').val(),
                    //             "mangid": $('#MangId').val(),
                    //             "dev1": $('#DevId1').val(),
                    //             "dev2": $('#DevId2').val(),
                    //             "dev3": $('#DevId3').val(),
                    //             "pstatus": $('#proj-status').val()}) ,
                           
                    //     contentType: 'application/json',
                    //     success: function (response) {
                    //         alert(response.status);
                    //     },
                    //     error: function () {
                    //         alert("error");
                    //     }
                    // });
                
                // }
        //     }
        //     var viewModel = new view();
        //     ko.applyBindings(viewModel);
          });
    });
 
   
         
});

