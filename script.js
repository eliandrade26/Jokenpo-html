
const result = document.querySelector('.result')
const score = document.querySelector('#human-score')
const MachineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0





const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = ['rock','paper','scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]

}

const playTheGame = (human, machine) => {
    console.log('Humano :' + human + 'Maquina:' + machine);


if (human === machine){
    result.innerHTML = 'Deu Empate!'
} else if (
(human === 'paper'&& machine ==='rock')||
(human ==='rock'&& machine ==='scissors')||
(human === 'scissors'&& machine === 'paper')
){
    humanScoreNumber++
    score.innerHTML = humanScoreNumber
result.innerHTML = 'VocÊ ganhou!'
}else {
    machineScoreNumber++
    MachineScore.innerHTML = machineScoreNumber
    result.innerHTML = 'Você perdeu'
}
}
