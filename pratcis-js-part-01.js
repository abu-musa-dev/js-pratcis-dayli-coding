fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => {
    if(!res.ok){
       throw new Error('data network')
    }
    return res.json()
  })
  .then(data => console.log(data))
  .catch(error => console.error(error));