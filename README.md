# Serverless boilerplate

A Serverless boilerplate for awesome AWS Lambda functions.


## Contributing

This project uses Node v6.10.3.

Before contributing, make sure you have the `serverless` and `aws-lambda-local` packages installed globally.

- ```npm install -g serverless```
- ```npm install -g aws-lambda-local```


## Using AWS Lambda

This function will work on AWS Lambda. Ensure you have the correct credentials stored before deployment.

### Package function

- ```serverless package```

### Deploy function

- ```serverless deploy```

### Invoke Function

- ```serverless invoke --function search --path event.json```


## Local Development

This project compiles modules with Webpack.

- ```webpack --config webpack.config.js```

This function can be invoked or tested in your local environment.

- ```lambda-local -f dist/handler.js -c context.json -e event.json```

There is a convenience function to build and invoke a local build.

- ```npm start```

There is no watch task to run this in development. You must run each task separately.


## Authors

Acknowledgment is cool. If you like this repo, feel free to credit.

- Kylie Rose: thisiskylierose@gmail.com


## References

Check out these handy resources.

- https://zanon.io/posts/building-serverless-websites-on-aws-tutorial
- http://blog.rowanudell.com/testing-serverless-functions-locally
- http://www.rricard.me/es6/aws/lambda/nodejs/2015/11/29/es6-on-aws-lambda.html
