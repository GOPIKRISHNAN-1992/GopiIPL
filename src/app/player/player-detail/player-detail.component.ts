import { Component, Input, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { PlayerMatch } from '../playermatch.model';

import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'app-player-detail',
    templateUrl: './player-detail.component.html',
    styleUrls: ['./player-detail.component.css']
})

export class PlayerDetailComponent implements OnInit {
    playerMatches: PlayerMatch[];
    playerName: string;

    constructor(private playerService: PlayerService,
        private activatedRoute: ActivatedRoute) {

    }

    ngOnInit() {

        this.playerMatches = this.playerService.updatePlayerMatchDetails(+this.activatedRoute.snapshot.params['id']);
        this.playerName = this.activatedRoute.snapshot.params['name'];

        this.activatedRoute.params.subscribe((param: Params) => {
            this.playerMatches = this.playerService.updatePlayerMatchDetails(+param['id']);
            this.playerName = param['name'];
        });
    }

}