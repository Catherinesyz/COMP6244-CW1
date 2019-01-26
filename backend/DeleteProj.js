// This file is to implement "delete project " fucntion
var AWS = require("aws-sdk");

AWS.config.update({
  region: "eu-west-2"
});

var docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {
var table = "ProjectDetails";

var params = {
    TableName:table,
    Key:{
        "Project": event.Project
    },
    ConditionExpression:"Project = :val",
    ExpressionAttributeValues: {
        ":val": event.Project
    }
};


docClient.delete(params, function(err, data) {
    if (err) {
        callback(err, null);
    } else {
        callback(err, data);
    }
});
}