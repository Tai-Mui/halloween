import { FetchService } from "../../../common/service/FetchService";

class MovieStore extends FetchService {
    constructor() {
        super();
        this.apiPath += '/movie/byGen/'
    }
    fetchMovies(categorie : string) {
        return this.get(this.apiPath + categorie + "/")
    }
}
export const movieStore = new MovieStore();