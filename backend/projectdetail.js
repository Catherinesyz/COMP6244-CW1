// This file is to implement "show the detail information of project" fucntion
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
            "Project": ""
        }
    };
    
    docClient.scan(params, function(err, data) {
        
        callback(err, data);
       
    });

};