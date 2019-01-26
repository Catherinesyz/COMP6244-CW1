// This file is to implement "modify project detail" fucntion
var AWS = require("aws-sdk");

AWS.config.update({
  region: "eu-west-2",
});

var docClient = new AWS.DynamoDB.DocumentClient()


exports.handler = (event, context, callback) => {

var params = {
    TableName:"ProjectDetails",
    Key:{
        "Project": event.Project
    },
    
    UpdateExpression: "set #Developer1=:a, #Developer2=:b, #Developer3=:c, #DueTime=:d, #Manager=:f, #Pstatus=:g",
    ExpressionAttributeValues:{
        ":a":event.Developer1,
        ":b":event.Developer2,
        ":c":event.Developer3,
        ":d":event.DueTime,
        ":f":event.Manager,
        ":g":event.Pstatus
    },
    ExpressionAttributeNames: {
        "#Developer1": "Developer1",
        "#Developer2": "Developer2",
        "#Developer3": "Developer3",
        "#DueTime": "DueTime",
        "#Manager": "Manager",
        "#Pstatus": "Pstatus"
  },
    ReturnValues:"UPDATED_NEW"
};


docClient.update(params, function(err, data) {
    if (err) {
        callback(err, null);
    } else {        
        callback(err, data);

    }
});

};