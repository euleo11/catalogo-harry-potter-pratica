let imgHarry = ["https://e7.pngegg.com/pngimages/756/441/png-clipart-gryffindor-logo-illustration-sorting-hat-hogwarts-harry-potter-and-the-deathly-hallows-gryffindor-harry-potter-food-logo.png",
"https://e7.pngegg.com/pngimages/537/516/png-clipart-huffle-puff-logo-illustration-helga-hufflepuff-hogwarts-harry-potter-and-the-deathly-hallows-gryffindor-harry-potter-helga-hufflepuff-hogwarts.png",
"https://e7.pngegg.com/pngimages/61/949/png-clipart-ravenclaw-logo-ravenclaw-house-warner-bros-studio-tour-london-the-making-of-harry-potter-sorting-hat-hogwarts-harry-potter-and-the-deathly-hallows-harry-potter-logo-fictional-character.png",
"https://e7.pngegg.com/pngimages/546/868/png-clipart-harry-potter-slytherin-symbol-slytherin-house-hogwarts-harry-potter-gryffindor-ravenclaw-house-harry-potter-emblem-logo.png"
]

let nomeCasas = ["Grifinória",
"Lufa-Lufa",
"Corvinal",
"Sonserina"
]

for (let i = 0; i <imgHarry.length; i++) {
    document.write("<div class='itens'>", "<h2 class='nomes'>" , nomeCasas[i], "</h2>", "</a>", "</div>")
}