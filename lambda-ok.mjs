import { DynamoDB } from 'aws-sdk';
let dynamodb = new DynamoDB.DocumentClient();
let date = new Date();
let now = date.toISOString();
export async function handler(event) {
    let name = JSON.stringify(`Meu nome: ${event.firstName} ${event.lastName}`);
    let params = {
        TableName:'tbexaws',
        Item: {
            'ID': name,
            'LatestGreetingTime': now
        }
    };
    await dynamodb.put(params).promise();
    const response = {
        statusCode: 200,
        body: name
    };
    return response;
}