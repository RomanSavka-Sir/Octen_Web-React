export default class ServicesforComments{
    url ="https://jsonplaceholder.typicode.com/comments";

   async getComments() {
        return await fetch(this.url)
            .then(value => value.json())

    }
    async Comment (id){
       return await fetch(this.url + "/" + id)
           .then(value => value.json())
    }

}