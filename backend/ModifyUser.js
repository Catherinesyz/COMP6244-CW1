var AWS = require("aws-sdk");

AWS.config.update({
  region: "eu-west-2",
});

var docClient = new AWS.DynamoDB.DocumentClient()

exports.handler = (event, context, callback) => {
var params = {
    TableName:"UserDetails",
    Key:{
        "User": event.User
    },
    UpdateExpression: "set #User=:u, #Role=:r, #Password=:p, #Email=:e",
    ExpressionAttributeValues:{
        ":u":event.User,
        ":r":event.Role,
        ":p":event.Password,
        ":e":event.Email
    },
    ExpressionAttributeNames: {
        "#User": "User",
        "#Role": "Role",
        "#Password": "Password",
        "#Email": "Email"
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