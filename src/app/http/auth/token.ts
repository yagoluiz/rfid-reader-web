class Token {

    constructor(public hash: string, public timeToRefresh: number, public tokenType: string) { }

    public static isValid(token: Token): boolean {
        console.log(token.timeToRefresh, new Date().getTime())
        return token.timeToRefresh > new Date().getTime();
    }
}