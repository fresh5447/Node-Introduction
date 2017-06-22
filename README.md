## Intro To Node

__Node.js®__ is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, __npm__, is the largest ecosystem of open source libraries in the world.

A __node_module__ is basically a lego block of code. Everything in a node application is modular, meaning it is made up of many different smaller parts that work towards the end functionality.

__NPM__ stand for Node Package Manager. It's just a tool that allows us to easily access the node module ecosystem and add them to our project.

Example node_module: [Moment.js](https://momentjs.com/)

Every node app has a __package.json__ , which is the master file that keeps track of all node modules your project cares about.

To add a `package.json` to your project, run the command `npm init`, and accept all defaults.

----

*Commit your code!*

`git add -A`

`git commit -m "introductory definitions for node"`

`git push origin master`

----

### Node HTTP Server

We used the node module HTTP to build a simple web server, that we can then run and connect to using the web address: `http://localhost:3000/`.
To run the server use the command `node index.js`

```js
var http = require('http');

http.createServer(function(request, response){
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello world!');
}).listen(3000, function(){
  console.log('App is listening on port 3000')
});

```
