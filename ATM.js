#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.green("<<<<=====***welcome to uzma's atm machine***=====>>>>"));
let myBalance = 5000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin code",
    }
]);
if (pinAnswer.pin === myPin)
    console.log(chalk.blue("pin iscorrect,login successfuly "));
//console.log(`current amount balance is ${myBalance} `)
let operationAnswer = await inquirer.prompt([
    {
        name: "operation",
        type: "list",
        message: "Select an operation",
        choices: ["withdraw Amount", "check Balance"]
    }
]);
if (operationAnswer.operation === "withdraw Amount") {
    let withdrawAns = await inquirer.prompt([
        {
            name: "withdrawMethod",
            type: "list",
            message: "Select a withdraw method",
            choices: ["fast cash", "Enter amount"],
        }
    ]);
    if (withdrawAns.withdrawMethod === "fast cash") {
        let fastCashAns = await inquirer.prompt([
            {
                name: "fastCash",
                type: "list",
                message: "select amount",
                choices: ["1000", "2000", "3000", "10000"]
            }
        ]);
        if (fastCashAns.fastCash > myBalance) {
            console.log(chalk.red("insuficient balance"));
        }
        else {
            myBalance -= fastCashAns.fastCash;
            console.log(chalk.blue(`${fastCashAns.fastCash}with draw sucessfully`));
            console.log(chalk.green(`your remaining balance is ${myBalance}`));
        }
    }
    else if (withdrawAns.withdrawMethod === "Enter amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to withdraw",
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log(chalk.green('insuficiant balance'));
        }
        else {
            myBalance -= amountAns.amount;
            console.log(chalk.blue(`${amountAns.amount}with draw Succesfully`));
            console.log(chalk.red(`your remaining balance is${myBalance}`));
        }
    }
}
else if (operationAnswer.operation === "check balance") {
    console.log(chalk.yellow(`your balance is${myBalance}`));
}
else {
    console.log(chalk.blue("pin is in correct try again!"));
}
