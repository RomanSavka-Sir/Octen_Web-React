export default class ServicesforUsers{
    url = "https://jsonplaceholder.typicode.com/users";

    getUsers() {
      return  fetch(this.url)
          .then(value => value.json())
          .then(value => value)
    }

    user(id) {
        return fetch(this.url +"/" + id)
            .then(value => value.json())
            .then(value => value)

    }
}