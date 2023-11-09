const { EventBridgeClient, PutEventsCommand } = require('@aws-sdk/client-eventbridge');
const { SQSClient, SendMessageCommand } = require('@aws-sdk/client-sqs');
const { TranslateClient, TranslateTextCommand } = require('@aws-sdk/client-translate');
const { ComprehendClient, DetectDominantLanguageCommand } = require('@aws-sdk/client-comprehend');
const { DynamoDBClient, ScanCommand } = require('@aws-sdk/client-dynamodb');
const axios = require('axios');
const AWSXRay = require('aws-xray-sdk-core');
AWSXRay.captureHTTPsGlobal(require('http'));
AWSXRay.captureHTTPsGlobal(require('https'));

// Constants from environment variables
const teamName = process.env.TeamName;
const eventBusName = process.env.EventBusName;
const dynamoDBTable = process.env.DynamoDBName;
const sqsUrl = process.env.SQSUrl;
const clickupEndpoint = process.env.ClickupEndpoint;
const clickupApiKey = process.env.ClickupApiKey;
const discordUrl = process.env.DiscordUrl;

exports.handler = async (event) => {
    console.log(event);
    console.log("This function ran.");

}

async function sendToSendGrid (message) {
    console.log(message);
}

async function sendToDiscord (message) {
    console.log(message);
}

async function sendToSQS (message) {
    console.log(message);
}

async function sendToClickup (message) {
    console.log(message);
}

async function sendToOwnChoice (message) {

}

async function decrypt (message) {
    let decryptedMessage = message.toLowerCase();

    return decryptedMessage;
}

async function translateToEnglish (message, sourceLanguage) {
    console.log(sourceLanguage);
}

async function checkLanguage (message) {
    console.log(message);
}