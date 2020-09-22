import { Component, EventEmitter, Output } from '@angular/core';

import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { PlayerMatch } from '../playermatch.model';

@Component({
    selector: 'app-player-list',
    templateUrl: './player-list.component.html'
})

export class PlayerListComponent {
    players: Player[] = [];

    constructor(private playerService: PlayerService) {
        this.players = playerService.getPlayers();
    }
}