import { Component, EventEmitter, Output } from '@angular/core';

import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { PlayerReport } from '../playerreport.model';

@Component({
    selector: 'app-player-list',
    templateUrl: './player-list.component.html'
})

export class PlayerListComponent {
    playersReport: PlayerReport[] = [];

    constructor(private playerService: PlayerService) {
        this.playersReport = playerService.getPlayersReport();
        console.log(this.playersReport);
    }
}