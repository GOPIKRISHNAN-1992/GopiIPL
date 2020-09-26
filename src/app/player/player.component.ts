import { Component } from '@angular/core';
import { PlayerService } from './player.service';

@Component({
    selector: 'app-player',
    templateUrl: './player.component.html',
    providers: [PlayerService]
})

export class PlayerComponent {
constructor() {}
}