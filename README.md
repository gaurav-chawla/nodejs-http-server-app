# nodejs-http-server-app
nodejs-http-server-app

Simple nodejs http server to parse the request headers/body etc... 

## Build Docker image:
```javascript
docker build -t nodejsapp .
```
## Run Docker image:
```javascript
docker run -p 8080:8080 nodejsapp:latest
```
### Sample request:
```javascript
curl -v -XPOST -H 'Content-Type: application/json'  -d '{"body": "testing"}' http://localhost:8080
```
With Basic Auth: (user:password)
```javascript
curl -v -XPOST -H 'Content-Type: application/json' -H 'Authorization: "Basic dXNlcjpwYXNzd29yZA=="' -d '{"key": "value"}' http://localhost:8080
```
