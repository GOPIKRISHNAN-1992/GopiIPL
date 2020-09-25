export class PlayerMatch {
    constructor(
        public playerid: number,
        public matchid: number,
        public matchname: string,
        public tippedon: string,
        public matchresult: string,
        public status: string
    ) {}
}