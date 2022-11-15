import { ConnectedPlayer } from "./ConnectedPlayer";

class Match{
    players: ConnectedPlayer[] = [];
    
    constructor(){

    }

    addNewPlayer(player: ConnectedPlayer) {
        this.players.push(player);
        this.broadcastLocations(player);
    }

    removePlayer(playerId: number){
        this.players.splice(playerId);
    }

    broadcastLocations(player: ConnectedPlayer){
        this.players.forEach(p => {
            p.socket.emit('playerPosition', player.position)
            player.socket.emit('playerPosition', p.position)
        });
    }
}
export {Match}