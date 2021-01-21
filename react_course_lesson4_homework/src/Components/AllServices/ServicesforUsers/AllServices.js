export default class AllServices{

    url = "https://jsonplaceholder.typicode.com/users"

   async users() {
      return await  fetch(this.url)
            .then(value => value.json())
    };

}


