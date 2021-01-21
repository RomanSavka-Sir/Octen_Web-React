export class Services{
    url = "http://jsonplaceholder.typicode.com/users"

    getAllUsers () {
        return fetch(this.url)
            .then(value => value.json())
            .then(value => value)
    }

    getUserId (id) {
      return   fetch(`${this.url}/${id}`)
            .then(value => value.json())
            .then(value => value)


    }


    FindId(users, id) {
        return users.find(value => value.id === id)
    }
}