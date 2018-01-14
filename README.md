# nodejs-http-server-app
nodejs-http-server-app

Nodejs http server to parse the request headers/body etc...

## Run docker Image:
```javascript
docker run -p 8080:8080 gauravchawla/nodejs-http-server-app:latest
```

### Sample request:
```javascript
curl -v -XPOST -H 'Content-Type: application/json'  -d '{"Type":"Sub","Message":"{\"user\":{\"name\":\"test\",\"class\":\"c++\",\"year\":5}}"}' http://localhost:8080
```
With Basic Auth: (user:password)
```javascript
curl -v -XPOST -H 'Content-Type: application/json' -H 'Authorization: "Basic dXNlcjpwYXNzd29yZA=="' -d '{"Type":"Sub","Message":"{\"user\":{\"name\":\"test\",\"class\":\"c++\",\"year\":5}}"}' http://localhost:8080
```

## Development steps:

### Build Docker image:
```javascript
docker build -t nodejsapp .
```
### Run Docker image:
```javascript
docker run -p 8080:8080 nodejsapp:latest
```
