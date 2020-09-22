import { Component } from '@angular/core';

import { PlayerService } from './player.service';
import { Player } from './player.model';

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    providers: [PlayerService]
})

export class PlayerComponent {
    playerDetail: Player;

    constructor(private playerService: PlayerService) {
        playerService.OnUpdatePlayerMatch.subscribe((playerDetail: Player) => {
            this.playerDetail = playerDetail;
        })
    }
}