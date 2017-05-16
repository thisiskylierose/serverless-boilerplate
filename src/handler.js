'use strict';

import simplePromise from 'modules/simplePromise';

async function handler(event, context, callback) {
  try {
    const result = await simplePromise();
    console.log(result);

    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      }),
    };

    callback(null, response);
  } catch (error) {
    // TODO: add handler for error
    console.log(error);
  }

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};

module.exports.boilerplate = handler;
