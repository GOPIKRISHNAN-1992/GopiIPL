import { Component } from '@angular/core';
import { PlayerService } from './player.service';

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    styleUrls: ['./player.component.css'],
    providers: [PlayerService]
})

export class PlayerComponent {
constructor() {}
}