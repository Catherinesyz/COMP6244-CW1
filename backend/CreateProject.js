// This file is to implement "create a project" fucntion
'use strict';

var AWS = require('aws-sdk');

var docClient = new AWS.DynamoDB.DocumentClient();

AWS.config.region = 'eu-east-2';

var tableName = "ProjectDetails";

exports.handler = (event, context, callback) => {

     var params = {
          
          Item:{
               "Project" : event.Project,
          "Developer1" : event.Developer1,
          "Developer2" : event.Developer2,
          "Developer3" : event.Developer3,
          "Manager" : event.Manager,
          "DueTime" : event.DueTime,
          "Pstatus" : event.Pstatus
          },
          
          TableName : tableName
          
 };

     docClient.put(params, function(err, data){
          if(err){
               callback(err, null);
          }else{
               docClient.scan(params, function(err, data) {
                  callback(err, data);
              });
          }
          
     });
}; 