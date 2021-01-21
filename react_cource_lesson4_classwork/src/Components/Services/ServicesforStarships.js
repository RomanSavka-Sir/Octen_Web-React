export default class ServicesforStarships{
    url = "https://swapi.dev/api/starships/"

   async  getStarships () {
        return await fetch(this.url)
            .then(value => value.json())
            .then(value => value.results)
    }
}