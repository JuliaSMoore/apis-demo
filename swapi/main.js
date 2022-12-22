console.log(`Connected`)
const getResidents = document.getElementById(`get-residents`)
const residents = document.getElementById(`residents`)

const callback = () => {
    axios.get(`https://swapi.dev/api/planets/2/`)
    .then( (res) => { console.log(res.data.residents)
        for (i=0; i < res.data.residents.length; i++) {
            console.log(res.data.residents[i])
            axios.get(res.data.residents[i])
            .then ((res) => {
                let card = document.createElement(`h2`)
                card.textContent = res.data.name
                console.log(card)
                residents.appendChild(card)
            })
        }
    })
}

getResidents.addEventListener(`click`, callback)