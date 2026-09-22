localhost - URl
127.0.0.1 -IP server
ctrl+c -stop the server

## Node Package Manager (NPM)

used to install, run, uninstall any program/project and package

- npm install <packagename>
- npm uninstall <packagename>

to use npm, the project must be npm project,
to create npm project we can use

- npm init -y
- it creates a package.json file automatically
  package.json holds all the information related to install
  packages from npm
- it also creates a folder node_modules automatically
- node_modules holds the package/library files
- generally we ignore the node_modules by .gitignore

Nodemon - it restart the server automaticaaly when files chnages, to intsall
>npm i nodemon -D

Note: -D flag will install this package as developer dependancy
-to execute any program, uodate the package.json file then start the server as 
<b>nom run dev</b>

- start-> it will execute the app on deployment
- dev-> it will start server in development phase (only for developer)

- res: it will return contents(json/html/plain) to the user/client
- req: it will retrive the information from clinwt to the server
- server send also statusCodes to the client, that indicates the error/success message
## Status codes
-200 -> Ok
-201 -> Created
-400 -> bad request
-401 -> unauthorized
-402 -> forbidden
-404-> not found
-500-> Internal server Error
## Content Type 
_text/plain
-Text/html
-application
-text/css

the content type and status code can be send back to clinet by two ways
1. res.writeHead
2. res.setHeader
3. res.statusCode
## Headers 
is used to tell the clinet , the tyo=pe of data by the server it may be html file ,json file,plane text file any tokens (for token).

1. text/pplain -> text file
2. text/html -> html contentc/file
3. application/json -> contents/file
4. text/css -> stylesheet
5. application/auth -> for tokens 
   the headers can be set by  res object at server side by two ways