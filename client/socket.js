const WebSocket = require('ws');
const port = process.argv[2]
const ws = new WebSocket(`ws://localhost:${port}/echo`);
 
ws.on('open', function open() {
  ws.send('something');
});
 
ws.on('message', function incoming(data) {
  console.log(data);
});
