import { DynamoDB } from 'aws-sdk'

var dynamodb = new DynamoDB({
    apiVersion: '2012-08-10',
    region: 'us-east-1',
    accessKeyId: process.env.HYPER_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.HYPER_AWS_SECRET_ACCESS_KEY,
});

export async function getUser(email) {
    var userInfo = null;
    const data = dynamodb.getItem({
        Key: {
            "email": {
                S: email
            },
        },
        TableName: "hyper-metadata"
    }).promise();
    return (await data).Item
}