function fetchMonsters() {
    fetch('http://localhost:3000/monsters/?_limit=50')
    .then(res => res.json())
    .then(json => json.forEach(renderMonster))
}

fetchMonsters()

function renderMonster(monster) { 
    let li = document.createElement('li')
    let h1Name = document.createElement('h1')
    let pAge = document.createElement('p')
    let pDesc = document.createElement('p')

    h1Name.textContent = monster.name
    pAge.textContent = `Age: ${monster.age}`
    pDesc.textContent = `Desc: ${monster.description}`
    
    li.append(h1Name, pAge, pDesc)
    document.querySelector('#monster-container').prepend(li)
}

document.querySelector('#monster-form').addEventListener('submit', (e) => {
    e.preventDefault()

    let newMonster = {
        name: e.target.name.value,
        age: e.target.age.value,
        description: e.target.desc.value
    }

    renderMonster(newMonster)
})