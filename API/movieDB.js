    // API key
const key = "b1485d6e1b1b9452b5e5d2463d394626";


    // Get data from the url:
export function getMoviesData(searchText)  {
    const url =`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${searchText}`;
    return fetch(url)
        .then((Response)=> Response.json())
        .catch((error)=> console.log(error))
}

export const getPoster = (name)=> {
    return 'https://image.tmdb.org/t/p/w300' + name;
}

