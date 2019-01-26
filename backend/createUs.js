// This file is to implement "ceate a user" fucntion

'use strict';

var AWS = require('aws-sdk');

var docClient = new AWS.DynamoDB.DocumentClient();

AWS.config.region = 'eu-west-2';

exports.handler = (event, context, callback) => {
  

     var params = {
          
          Item: {
               User: event.User,
               Password: event.Password,
               Role: event.Role,
               Email: event.Email
          },

          TableName: "UserDetails"
          
     };

     docClient.put(params, function(err, data){
          if(err){
              callback(err, null);
          }else{
              docClient.scan(params, function(err, data){
                   callback(err, data);
              });
          }
                
     });
     


};
