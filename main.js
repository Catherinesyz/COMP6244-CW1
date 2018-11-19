/* ************************************************************
 * 
 * This javascript file is for index.html that is the homepage 
 *  of this application
 * writen by Siying, zhang (sz3y18)
 * 
 * ************************************************************/ 

$(document).ready(function() {
    /* Create a modal for login form */
    
    $("#login_modal").click(function(){
        $("#lbtn").submit(function(){alert("login2"); 
           
            var customerViewModel = function() {
                var self = this;
                self.userid = ko.observable("");
                self.password = ko.observable("");
                self.email = ko.observable("");
            
                self.login = function () {             
                    $.ajax({
                        url: 'https://h1uj8jcehj.execute-api.us-east-1.amazonaws.com/Dev/getuserdetail',
                        cache: false,
                        type: 'GET',                   
                        data: { "userid": self.userid(), "password": self.password() },
                        success: function (data) {  
                                     
                            if(data!=null){
                                window.location.href="mngproj.html";
                            }
                            
                        },
                        error:function (data){
                            alert("fail");
                        }
                    });
                
                }
            }
            var viewModel = new customerViewModel();
            ko.applyBindings(viewModel);
        });
    });

    // $("#signupform").click(function(){
    //     $("signup_modal").submit(function(){
    //         var customerViewModel = function() {
    //             var self = this;
    //             self.userid = ko.observable("");
    //             self.password = ko.observable("");
    //             self.email = ko.observable("");
            
    //             self.login = function () {           
    //                 $.ajax({
    //                     url: 'https://h1uj8jcehj.execute-api.us-east-1.amazonaws.com/Dev/getuserdetail',
    //                     cache: false,
    //                     type: 'GET',                   
    //                     data: { "userid": self.userid(), "password": self.password() },
    //                     success: function (data) {              
    //                         if(data!=null){
    //                             window.location.href="mngproj.html";
    //                         }
                            
    //                     }
    //                 });
                
    //             }
    //         }
    //         var viewModel = new customerViewModel();
    //         ko.applyBindings(viewModel);
    //     });
    // });
});
//  window.onclick = function(event) {
//     if (event.target == lmodal) {
//         userID = document.getElementById("UserId").value;
//          _email = document.getElementById("email").value;
//          _pswd = document.getElementById("pswd").value;
//          _conpawd = document.getElementById("conpawd").value;
//          console.log(_email);
//          window.alert(_email);
//          if (event.target == btn) {
//              console.log(_email);
//          }
        
//          // modal.style.display = "none";
//      }
//  } 