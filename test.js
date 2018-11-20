var AWS = require("aws-sdk");
var DOC = require("dynamodb-doc");

AWS.config.update({region: "us-east-1"});

var docClient = new DOC.DynamoDB();

var params = {};
params.TableName = "Shopping Cart";

// Compatible is a Map of Part to List of PartId's
// OnSale is a BOOL type
// Discount is a NULL type
params.Item = {PartId       : "CPU1",
               OnSale       : false,
               Discount     : null,
               Compatible   : {Motherboards : ["MB1", "MB2"],
                               RAM          : ["RAM1"]}};

docClient.putItem(params, pfunc);

params = {};
params.Key = {PartId : "CPU1"};
params.TableName = "Shopping Cart";

docClient.getItem(params, pfunc);

/*Response
{Item: {PartId : "CPU1",
        OnSale : false,
        Discount : null,
        Compatible : {Motherboards : ["MB1", "MB2"],
                      RAM          : ["RAM1"]}}};
*/