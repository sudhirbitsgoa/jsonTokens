# jsonTokens

Example application to validate how json token authentication works.

## tech stack 
  Nodejs
  Postgres
  
## setup 
  seed.sql has schema files.
  ```
  sudo  -u psql postgres -f seed.sql
  npm install 
  node server.js
  
  ```
  
  After authetication for subsequent calls json token should sent as header ``` x-mystq-token : token ```
  this is custom header.
