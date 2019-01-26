// This file is to implement "search a project" function
var AWS = require("aws-sdk");

AWS.config.update({
  region: "eu-west-2"
});

var docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
    var table = "ProjectDetails";
    
    var params = {
        TableName: table,
        Key:{
            "Project": event.Project
        }
    };
    
    docClient.get(params, function(err, data) {
        
        if(err){
            callback(err, null);
        }
        else if(data.Item.Project){
            callback(err, data);
        }
        else{
            callback(err, null);
        }
    });

};