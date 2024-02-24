const { createSocket } = require('dgram');
const { Server, OPEN } = require('ws');

// Set up a WebSocket server
const wss = new Server({ port: 8080 });

wss.on('connection', (ws) => {
        console.log('New client connected');

        ws.on('close', () => {
                console.log('Client has disconnected');
        });
});

const server = createSocket('udp4');

server.on('error', (err) => {
        console.log(`server error:\n${err.stack}`);
        server.close();
});

server.on('message', (msg, rinfo) => {
        console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);

        // broadcast message to all connected clients
        wss.clients.forEach((client) => {
                if (client.readyState === OPEN) {
                        client.send(msg.toString());
                }
        });
});

server.on('listening', () => {
        const address = server.address();
        console.log(`server listening ${address.address}:${address.port}`);
});

server.bind(41234); // replace with your port