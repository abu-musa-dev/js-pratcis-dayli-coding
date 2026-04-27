// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(res => {
//     if(!res.ok){
//        throw new Error('data network')
//     }
//     return res.json()
//   })
//   .then(data => console.log(data))
//   .catch(error => console.error(error));

fetch('https://jsonplaceholder.typicode.com/users')
.then(res =>res.json() )


.then(data => {
    console.log(data)
    const container= document.getElementById('content')
        data.forEach (user =>{
        console.log(user)
        const div = document.createElement('div')
        div.innerText = user.name
        div.style.border = '1px solid black'
        container.appendChild(div)
    })
})

