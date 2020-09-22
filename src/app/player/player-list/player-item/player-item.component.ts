import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Player } from '../../player.model';
import { PlayerService } from '../../player.service';

@Component({
    selector: 'app-player-item',
    templateUrl: './player-item.component.html',
    styleUrls: ['./player-item.component.css']
})

export class PlayerItemComponent {
    @Input() playerItem: Player;

    constructor(private playerService: PlayerService) {}

    onPlayerSelected() {
        this.playerService.updatePlayerMatchDetail(this.playerItem);
    }
}