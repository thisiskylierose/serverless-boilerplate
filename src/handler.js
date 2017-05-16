'use strict';

import simplePromise from 'modules/simplePromise';

async function handler(event, context, callback) {
  try {
    const result = await simplePromise(false);

    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: result,
        runtime: context,
        input: event,
      }),
    };

    return callback(null, response);
  } catch (error) {
    const response = {
      statusCode: 500,
      body: JSON.stringify({
        message: error,
        runtime: context,
        input: event,
      }),
    };

    return callback(null, response);
  }

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};

module.exports.boilerplate = handler;
