const justFood = (pocet) => {
    const cena = pocet*100
    return `Just Food catering pro ${pocet} lidí byl dodán za ${cena} Kč.`
}

const yourMama = (pocet) => {
    const cena = pocet*200
    return `Your Mama catering pro ${pocet} lidí byl dodán za ${cena} Kč.`
}

const flavourHaven = (pocet) => {
    const cena = pocet*350
    return `Flavour Haven catering pro ${pocet} lidí byl dodán za ${cena} Kč.`
}

console.log(flavourHaven(23))

const createEvent = (nazev, pocet, catering) => {
    const zpravaCateringu = catering(pocet)
    return `Událost ${nazev} s ${zpravaCateringu}`
}

console.log(createEvent("Svatba Nedvědovi", 54, yourMama))