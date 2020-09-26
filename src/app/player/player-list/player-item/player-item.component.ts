import { Component, EventEmitter, Input, Output } from '@angular/core';

import { PlayerService } from '../../player.service';
import { PlayerReport } from '../../playerreport.model';

@Component({
    selector: 'app-player-item',
    templateUrl: './player-item.component.html',
    styleUrls: ['./player-item.component.css']
})

export class PlayerItemComponent {
    @Input() playerItem: PlayerReport;

    constructor(private playerService: PlayerService) {}
}