const simplePromise = (success) => new Promise((resolve, reject) => {
  if (!success) {
    return reject('Something bad happened.');
  }

  return resolve('Hello, world.');
});

export default simplePromise;
