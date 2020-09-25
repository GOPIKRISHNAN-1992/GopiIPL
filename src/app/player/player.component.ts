import { Component } from '@angular/core';

import { PlayerService } from './player.service';
import { Player } from './player.model';
import { PlayerMatch } from './playermatch.model';

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    providers: [PlayerService]
})

export class PlayerComponent {
    playerMatches: PlayerMatch[];

    constructor(private playerService: PlayerService) {
        playerService.playerMatchEmitter.subscribe((playerMatches: PlayerMatch[]) => {
            this.playerMatches = playerMatches;
        })
    }
}