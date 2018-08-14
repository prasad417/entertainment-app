export interface Movie {
    language_name: string;
    movie_name: string;
    artist_name: string;
    actress_name: string;
    genre: string;
    director: string;
    releasedate: string;
    othercast: string;
    decsription: string;
    musicdirector: string;
    singers: Array<string>;
    tracks: Array<string>;
    movie_url: string;
    image: string;
    id: number;
}
