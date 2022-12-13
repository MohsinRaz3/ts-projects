import chalkAnimation from 'chalk-animation';
import inquirer from 'inquirer';
function sleep() {
    return new Promise((res) => {
        setTimeout(res, 1000);
    });
}
async function greet() {
    const rainbow = chalkAnimation.neon('Are you bad at math? do your calc here!'); // Animation starts
    await sleep();
    rainbow.stop();
}
async function doMath() {
    await greet();
    let answer = await inquirer.prompt([
        {
            type: "list",
            name: "operator",
            message: "What calculation do you want to perform?",
            choices: ["Addition", "Multiplication", "Division", "Subtraction"]
        },
        {
            type: "number",
            name: "num1",
            message: "Enter your first value: "
        },
        {
            type: "number",
            name: "num2",
            message: "Enter your second value"
        }
    ]);
    if (answer.choices == "Addition") {
        console.log(`${answer.num1 + answer.num2}`);
    }
    else if (answer.choices == "Multiplication") {
        console.log(`${answer.num1 * answer.num2}`);
    }
    else if (answer.choices == "Division") {
        console.log(`${answer.num1 / answer.num2}`);
    }
    else if (answer.choices == "Subtraction") {
        console.log(`${answer.num1 - answer.num2}`);
    }
}
async function repCal() {
    do {
        await doMath();
        var calcProcess = await inquirer
            .prompt([{
                type: "input",
                name: "repeat",
                message: "Calculate again? press y or n"
            }]);
    } while (calcProcess.repeat == "y" || calcProcess.repeat == "yes");
}
repCal();
