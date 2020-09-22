import { EventEmitter } from '@angular/core';
import { Match } from './match.model';
import { Player } from './player.model';
import { PlayerMatch } from './playermatch.model';

export class PlayerService {
    private players: Player[] = [
        new Player(
            'Peter',
            'https://firebasestorage.googleapis.com/v0/b/gopikrishipl.appspot.com/o/PeterMerritt.png?alt=media&token=61752176-1b4b-4b26-bf9f-69163fb8bbfc',
            2, 2, 0,
            [
                new PlayerMatch(5, '', '-', '-', '-'),
                new PlayerMatch(4, '', 'CSK (auto)', 'RR Won', 'You lost'),
                new PlayerMatch(3, '', 'SRH', 'RCB Won', 'You lost'),
                new PlayerMatch(2, '', 'DC', 'DC Won', 'You won'),
                new PlayerMatch(1, '', 'CSK', 'CSK Won', 'You won')
            ]
        ),
        new Player(
            'Michael',
            'https://firebasestorage.googleapis.com/v0/b/gopikrishipl.appspot.com/o/Michael.png?alt=media&token=3473020c-98a7-4c2c-8a40-14fc2f20ae00',
            2, 2, 0,
            [
                new PlayerMatch(5, '', '-', '-', '-'),
                new PlayerMatch(4, '', 'RR', 'RR Won', 'You won'),
                new PlayerMatch(3, '', 'RCB', 'RCB', 'You won'),
                new PlayerMatch(2, '', 'KXIP', 'KXIP Won', 'You lost'),
                new PlayerMatch(1, '', 'MI', 'CSK Won', 'You lost')
            ]
        ),
        new Player(
            'Ravi',
            'https://firebasestorage.googleapis.com/v0/b/gopikrishipl.appspot.com/o/ravi-shankar.png?alt=media&token=716f6009-5d04-41ef-8ecc-bfd37b6869bc',
            3, 1, 0,
            [
                new PlayerMatch(5, '', '-', '-', '-'),
                new PlayerMatch(4, '', 'CSK (auto)', 'RR Won', 'You lost'),
                new PlayerMatch(3, '', 'RCB (auto)', 'RCB Won', 'You won'),
                new PlayerMatch(2, '', 'DC', 'DC Won', 'You won'),
                new PlayerMatch(1, '', 'CSK (auto)', 'CSK Won', 'You won')
            ]
        ),
        new Player(
            'Bala',
            'https://firebasestorage.googleapis.com/v0/b/gopikrishipl.appspot.com/o/Bala-ClubOps.png?alt=media&token=8a7debb3-3428-43f0-9068-e8806eceb613',
            2, 2, 0,
            [
                new PlayerMatch(5, '', '-', '-', '-'),
                new PlayerMatch(4, '', 'CSK', 'RR Won', 'You lost'),
                new PlayerMatch(3, '', 'RCB', 'RCB Won', 'You won'),
                new PlayerMatch(2, '', 'KXIP', 'DC Won', 'You lost'),
                new PlayerMatch(1, '', 'CSK', 'CSK Won', 'You won')
            ]
        ),
        new Player(
            'Guia',
            'https://firebasestorage.googleapis.com/v0/b/gopikrishipl.appspot.com/o/Guia2.png?alt=media&token=3c8ba5e6-58b5-4e15-bb1b-fa84228b0a88',
            2, 2, 0,
            [
                new PlayerMatch(5, '', '-', '-', '-'),
                new PlayerMatch(4, '', 'CSK (auto)', 'RR Won', 'You lost'),
                new PlayerMatch(3, '', 'RCB', 'RCB Won', 'You won'),
                new PlayerMatch(2, '', 'KXIP (auto)', 'DC Won', 'You lost'),
                new PlayerMatch(1, '', 'CSK (auto)', 'CSK Won', 'You won')
            ]
        ),
        new Player(
            'Gopi',
            'https://firebasestorage.googleapis.com/v0/b/gopikrishipl.appspot.com/o/GOPI-CLUBOPS.png?alt=media&token=d7e665c0-edd3-40c7-8a78-42edf3c4651a',
            2, 2, 0,
            [
                new PlayerMatch(5, '', '-', '-', '-'),
                new PlayerMatch(4, '', 'CSK', 'RR Won', 'You lost'),
                new PlayerMatch(3, '', 'SRH', 'RCB Won', 'You lost'),
                new PlayerMatch(2, '', 'DC', 'DC Won', 'You won'),
                new PlayerMatch(1, '', 'CSK', 'CSK Won', 'You won')
            ]
        )
    ].sort((a, b) => b.draw - a.draw).sort((a, b) => b.won - a.won);

    private matches: Match[] = [
        new Match(1, 'Match 1: MI vs CSK'),
        new Match(2, 'Match 2: DC vs KXIP'),
        new Match(3, 'Match 3: SRH vs RCB'),
        new Match(4, 'Match 4: RR vs CSK'),
        new Match(5, 'Match 5: KKR vs MI')
    ]

    OnUpdatePlayerMatch = new EventEmitter<Player>();

    getPlayers() {
        return this.players.slice();
    }

    updatePlayerMatchDetail(player: Player) {

        player.matchdetails.forEach((val, i) => {
            val.matchname = this.matches.find((value, index) => {
                return value.matchid === val.matchid;
            }).matchname;
        });

        this.OnUpdatePlayerMatch.emit(player);
    }
}