export class Player {
    constructor(
        public playerid: number,
        public name: string,
        public imagePath: string,
        public matchtipdetails: { matchid: number, tippedon: string}[]
        ) {}
}