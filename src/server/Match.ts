import { ConnectedPlayer } from "./ConnectedPlayer";
import { Set } from "./Set";

class Match{
    players: ConnectedPlayer[];
    sets: [Set, Set, Set];
    currentSet: number
    
    constructor(){
        this.currentSet = 0;
        this.players = []
        this.sets = [new Set(), new Set(), new Set()]
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