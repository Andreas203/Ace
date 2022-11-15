import { Vector3 } from "three";

class ConnectedPlayer{
    position: Vector3;
    socket: any;

    constructor(socket: any){
        this.position = new Vector3(Math.random() * 10,0 ,Math.random() * 10);
        this.socket = socket;
        this.socket.emit('playerPosition', this.position)
    }

}

export {ConnectedPlayer}