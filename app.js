const http = require('http');

http.createServer((request, response) => {
  const { headers, method, url } = request;
  let body = [];
  request.on('error', (err) => {
    console.error(err);
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();

    response.on('error', (err) => {
      console.error(err);
    });

    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');

    //console.log(headers.authorization);
    if (!headers.authorization) {
      response.setHeader('WWW-Authenticate', 'Basic realm="foo"');
      response.statusCode = 401;
    }

    //console.log("headers::", headers, "body::", body, "method::", method);
    //console.log(response);
    //const responseBody = { body };

    b = JSON.parse(body);
    m = JSON.parse(b.Message);

    console.log(JSON.stringify(m, null, '\t'));

    response.write(JSON.stringify(m, null, '\t'));
    response.end();

  });
}).listen(8080);
