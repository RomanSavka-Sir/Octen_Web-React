export default class ServicesforPeople{

    url = "https://swapi.dev/api/people"
    async getPeople() {
        return await fetch(this.url)
            .then(value => value.json())
            .then(value => value.results)

    }

    async People() {
        return await fetch(this.url)
            .then(value => value.json())
            .then(value => value.results)
    }


}