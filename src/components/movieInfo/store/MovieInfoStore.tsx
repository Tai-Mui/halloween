import { FetchService } from "../../../common/service/FetchService";

export type TMovieInfo = {
    imdb_id: string;
    title: string;
    year: number;
    popularity: number;
    description: string;
    content_rating: string;
    movie_length: number;
    rating: string;
    created_at: Date;
    trailer: string;
    image_url: string;
    release: Date;
    plot: string;
    banner: string;
    type: string;
    more_like_this: string;
    gen: [ { id: number, genre: string } ]
    keywords: [ { id: number, keyword: string } ]
}

class MovieInfoStore extends FetchService {

    constructor() {
        super();
        this.apiPath += '/movie/id/'
    }

    fetchMovieInfo(id: string) {
        return this.get<TMovieInfo>(this.apiPath + id + "/")
    }
}

export const movieInfoStore = new MovieInfoStore();