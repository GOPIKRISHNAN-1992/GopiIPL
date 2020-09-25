import { EventEmitter } from '@angular/core';
import { Match } from './match.model';
import { Player } from './player.model';
import { PlayerMatch } from './playermatch.model';
import { PlayerReport } from './playerreport.model';

export class PlayerService {
    private players: Player[] = [
        new Player(
            1,
            'Peter',
            'https://firebasestorage.googleapis.com/v0/b/gopikrishipl.appspot.com/o/PeterMerritt.png?alt=media&token=61752176-1b4b-4b26-bf9f-69163fb8bbfc',
            [
                { matchid: 7, tippedon: 'CSK' },
                { matchid: 6, tippedon: 'KXIP' },
                { matchid: 5, tippedon: 'KKR' },
                { matchid: 4, tippedon: 'CSK' },
                { matchid: 3, tippedon: 'SRH' },
                { matchid: 2, tippedon: 'DC' },
                { matchid: 1, tippedon: 'CSK' }
            ]
        ),
        new Player(
            2,
            'Michael',
            'https://firebasestorage.googleapis.com/v0/b/gopikrishipl.appspot.com/o/Michael.png?alt=media&token=3473020c-98a7-4c2c-8a40-14fc2f20ae00',
            [
                { matchid: 7, tippedon: 'DC' },
                { matchid: 6, tippedon: 'RCB' },
                { matchid: 5, tippedon: 'MI' },
                { matchid: 4, tippedon: 'RR' },
                { matchid: 3, tippedon: 'RCB' },
                { matchid: 2, tippedon: 'KXIP' },
                { matchid: 1, tippedon: 'MI' }
            ]
        ),
        new Player(
            3,
            'Ravi',
            'https://firebasestorage.googleapis.com/v0/b/gopikrishipl.appspot.com/o/ravi-shankar.png?alt=media&token=716f6009-5d04-41ef-8ecc-bfd37b6869bc',
            [
                { matchid: 7, tippedon: 'DC' },
                { matchid: 6, tippedon: 'RCB' },
                { matchid: 5, tippedon: 'KKR' },
                { matchid: 4, tippedon: 'CSK' },
                { matchid: 3, tippedon: 'RCB' },
                { matchid: 2, tippedon: 'DC' },
                { matchid: 1, tippedon: 'CSK' }
            ]
        ),
        new Player(
            4,
            'Bala',
            'https://firebasestorage.googleapis.com/v0/b/gopikrishipl.appspot.com/o/Bala-ClubOps.png?alt=media&token=8a7debb3-3428-43f0-9068-e8806eceb613',
            [
                { matchid: 7, tippedon: 'CSK' },
                { matchid: 6, tippedon: 'RCB' },
                { matchid: 5, tippedon: 'MI' },
                { matchid: 4, tippedon: 'CSK' },
                { matchid: 3, tippedon: 'RCB' },
                { matchid: 2, tippedon: 'KXIP' },
                { matchid: 1, tippedon: 'CSK' }
            ]
        ),
        new Player(
            5,
            'Guia',
            'https://firebasestorage.googleapis.com/v0/b/gopikrishipl.appspot.com/o/Guia2.png?alt=media&token=3c8ba5e6-58b5-4e15-bb1b-fa84228b0a88',
            [
                { matchid: 7, tippedon: 'DC' },
                { matchid: 6, tippedon: 'RCB' },
                { matchid: 5, tippedon: 'KKR' },
                { matchid: 4, tippedon: 'CSK' },
                { matchid: 3, tippedon: 'RCB' },
                { matchid: 2, tippedon: 'KXIP' },
                { matchid: 1, tippedon: 'CSK' }
            ]
        ),
        new Player(
            6,
            'Gopi',
            'https://firebasestorage.googleapis.com/v0/b/gopikrishipl.appspot.com/o/GOPI-CLUBOPS.png?alt=media&token=d7e665c0-edd3-40c7-8a78-42edf3c4651a',
            [
                { matchid: 7, tippedon: 'CSK' },
                { matchid: 6, tippedon: 'KXIP' },
                { matchid: 5, tippedon: 'MI' },
                { matchid: 4, tippedon: 'CSK' },
                { matchid: 3, tippedon: 'SRH' },
                { matchid: 2, tippedon: 'DC' },
                { matchid: 1, tippedon: 'CSK' }
            ]
        )
    ];

    private matches: Match[] = [
        new Match(1, 'Match 1: MI vs CSK', 'CSK'),
        new Match(2, 'Match 2: DC vs KXIP', 'DC'),
        new Match(3, 'Match 3: SRH vs RCB', 'RCB'),
        new Match(4, 'Match 4: RR vs CSK', 'RR'),
        new Match(5, 'Match 5: KKR vs MI', 'MI'),
        new Match(6, 'Match 6: KXIP vs RCB', 'KXIP'),
        new Match(7, 'Match 7: CSK vs DC', 'DC'),
        new Match(8, 'Match 8: KKR vs SRH', ''),
    ]

    private playerReports: PlayerReport[] = [];

    playerMatchEmitter = new EventEmitter<PlayerMatch[]>();

    getPlayersReport() {

        this.players.forEach(playerInfo => {

            let won = 0, lost = 0, draw = 0;
            playerInfo.matchtipdetails.forEach(matchtip => {

                if (this.matches.find(match => {
                    return match.wonby === matchtip.tippedon
                        &&
                        match.matchid === matchtip.matchid
                })) {
                    won++;
                }
                else if (this.matches.find(match => { return match.matchid === matchtip.matchid }).wonby === "draw") {
                    draw++;
                }
                else {
                    lost++;
                }
            });

            let points = (2 * won) + draw;

            this.playerReports.push(
                new PlayerReport(
                    playerInfo.playerid,
                    playerInfo.name,
                    playerInfo.imagePath,
                    points,
                    won,
                    lost,
                    draw
                )
            );

        });

        return this.playerReports.sort((a, b) => b.points - a.points).slice();
    }

    updatePlayerMatchDetails(playerid: number) {

        let playerMatches: PlayerMatch[] = [];

        let player = this.players.find(player => { return player.playerid === playerid });

        player.matchtipdetails.forEach(playermatchtip => {
            let match = this.matches.find(match => { return match.matchid === playermatchtip.matchid });
            playerMatches.push(
                new PlayerMatch(
                    player.playerid,
                    match.matchid,
                    match.matchname,
                    playermatchtip.tippedon,
                    match.wonby,
                    (playermatchtip.tippedon === match.wonby ? 'You won' : (match.wonby === 'draw' ? 'match draw' : 'You lost'))));
        });

        this.playerMatchEmitter.emit(playerMatches);
    }
}