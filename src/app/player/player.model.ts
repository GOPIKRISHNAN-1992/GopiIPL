import { PlayerMatch } from './playermatch.model';

export class Player {
    constructor(
        public name: string,
        public imagePath: string,
        public won: number,
        public lost: number,
        public draw: number,
        public matchdetails: PlayerMatch[]
        ) {}
}