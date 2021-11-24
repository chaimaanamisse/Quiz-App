const highScoresList = document.querySelector('#highScoresList')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

highScoresList.innerHTML =
highScores.map(score =>{
    return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join('')  



//  map créer un nouveau tableau à partir d'un tableau existent  et appliquer une fonction à chaque élément du tableau

// join returns an array as a string.
