import THREE, { Vector3 } from "three";
import { forEachChild } from "typescript";
import { ConnectedPlayer } from "./ConnectedPlayer";
import { Match } from "./Match";

const http = require('http')
const server = http.createServer();
const port = 3000;

let counter = 0;

const io = require('socket.io')(server,
    {
        cors: {
            origin:"*"
        }
    }
);

const newMatch = new Match;

io.on('connection', (socket: any) => {
    console.log(`Player ${socket.id} connected`)
    socket.emit('pos', (new Vector3(1,1,1), new Vector3(20,20,0)))
    newMatch.addNewPlayer(new ConnectedPlayer(socket));

    // socket.on("disconnect", (reason: any) => {
    //     // newMatch.removePlayer(playerId);
    // });
});

server.listen(port, () => {
    console.log(`listening on port ${port}`);
});