window.onload = () => {
    fetch('http://localhost:8888/pokemon')
    .then(response => response.json())
    .then(data => {
        const ul = document.getElementById('pokemon-list')
        for(let i = 0; i < data.length; i++){
            const poke = data[i]

            const div = document.createElement('div')
            div.classList.add('pokemon')

            const h2 = document.createElement('h2')
            h2.innerText = poke.name
            const img = document.createElement('img')
            img.src = poke.img
            const a = document.createElement('a')
            a.innerText = 'View JSON'
            a.href = `http://localhost:8888/pokemon/index/${i}`

            div.append(h2, img, a)

            ul.append(div)
        }
    })
}