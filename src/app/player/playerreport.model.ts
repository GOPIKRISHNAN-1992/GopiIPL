export class PlayerReport {
    constructor(
        public playerid: number,
        public playername: string,
        public playerImage: string,
        public points: number,
        public won: number,
        public lost: number,
        public draw: number,
        public istrendy: boolean
    ) {

    }
}