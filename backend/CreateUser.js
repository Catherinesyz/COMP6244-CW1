// This file is to implement "login" function

var AWS = require("aws-sdk");

AWS.config.update({
  region: "eu-west-2"
});

var docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
    var table = "UserDetails";
    
    var params = {
        TableName: table,
        Key:{
            "User": event.User
        }
    };
    
    docClient.get(params, function(err, data) {
        if(err){
            callback(err, null);
            
        }else if(data.Item.Password == event.Password){           
            callback(null, data);            
        }else{
            callback(err, "wrong password");
        }
    });

};