import { Component, Input, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { PlayerMatch } from '../playermatch.model';

@Component({
    selector: 'app-player-detail',
    templateUrl: './player-detail.component.html',
    styleUrls: ['./player-detail.component.css']
})

export class PlayerDetailComponent implements OnInit {
    @Input() playerMatches: PlayerMatch[];
    playerName: string;

    constructor(private playerService: PlayerService) {}

    ngOnInit() {
        this.playerName = this.playerService.getPlayersReport().find(player => {
            return player.playerid === this.playerMatches[0].playerid;
        }).playername;
        
    }
    
}