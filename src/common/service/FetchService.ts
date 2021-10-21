import { API } from "./../../config/api"

export abstract class FetchService {
    protected apiPath = API.path;

    protected async get<T>(resource = '') {
        return await fetch(resource, {
            headers: {
                'x-rapidapi-host': API.host,
                'x-rapidapi-key': API.key               
            },
        });
    }
}