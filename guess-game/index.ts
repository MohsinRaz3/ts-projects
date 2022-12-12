#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"
import showBanner from "node-banner"


let score = 0;
let play = true;
let counter = 0;

(async () => {
    await showBanner('Guess Number', 'Welcome to play the game!', "green");
})();

async function guessNum() {
    while (play) {
        let randomNum = Math.ceil(Math.random() * 4 + 1);
        let answer = await inquirer.prompt([{
            name: "userNum",
            type: "number",
            message: "Enter any Number from 1 to 5"
        }])
        if (answer.userNum === randomNum) {
            console.log(chalk.green(`you've guessed right number ${randomNum}`));
            score += 10;
            console.log(chalk.yellow(`You're score is: ${score}`));

        }
        else if(answer.userNum !== randomNum) {
            console.log(chalk.red(`Try again! you're guess was ${answer.userNum} and correct asnwer is ${randomNum}`));
            play = true;
            counter +=1
            console.log(chalk.blue(`total 3 attempt, ${counter} tried attempt.`));
            
            if(counter === 3){
                console.log(chalk.red("Game Over!!"));
                play = false;
                
            }
        }
    }
}

setTimeout(() => {
    guessNum()
}, 500)
