export interface Bot {
    say(message: string): void;
}

export interface IBots {
    getBot(id: string): Bot | undefined;
}
