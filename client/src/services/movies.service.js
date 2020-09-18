import axios from 'axios';

class MoviesService {
    popularMovies= async () => {
        const result = await axios.get("/api/popular")
        return (result);
    }

}
    export default new MoviesService();
