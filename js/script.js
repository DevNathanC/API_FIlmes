let url = "https://api.themoviedb.org/3/movie/157336?api_key=b26f0f8000546caf24d6c16169915a03&append_to_response=videos"

async function getFilms(){
    let res = await fetch(url);
    console.log(res);
    let data = await res.json();
    console.log(data);

}

getFilms();
