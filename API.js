import axios from axios;

const TMDB_KEY = "2f12e13bca813f24b7ef97ab811f66ec"

const makeRequest = (path,params) => axios.get(`https://api.themoviedb.org/3${path}`,{
    params:{
        ...params,
        api_key : TMDB_KEY
    }
})

export const movieApi = {
    nowPlaying : () => makeRequest("/movie/now_playing"),
    popular : () =>makeRequest("/movie/popular"),
    upcoming : () =>makeRequest("/movie/upcoming",{region:'ko'}),
    search : (query) =>makeRequest("/search/movie",{query}),
    movie : (id) =>makeRequest(`/movie/${id}`),
    discover : () =>makeRequest("/discover/movie"),
}

export const tvApi = {
    today : () =>makeRequest("/tv/airing_today"),
    thisWeek : () =>makeRequest("/tv/on_the_air"),
    topRated : () =>makeRequest("/tv/top_rated"),
    popular : () =>makeRequest("/tv/popular"),
    search : (query) =>makeRequest("/search/tv",{query }),
    show : (id) =>makeRequest(`/tv/${id}`),
}