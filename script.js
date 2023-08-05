
let jokesGen = async() => {
    let res = await fetch('https://api.chucknorris.io/jokes/random')
    let data = await res.json()
    // console.log(data)
    let jokeElement = document.getElementById('jokeElement')
    jokeElement.innerText = data.value
}
jokesGen()