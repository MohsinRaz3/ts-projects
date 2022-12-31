#! /user/bin/env node

import inquirer from "inquirer";

(
    async () => {
        const userInput: {userID: string, userPIN:string} = await inquirer.prompt([
            {
                name: "userID",
                message: "Eter your userID",
                type: "input"
            },
            {name:"userPIN",
        message:"ENter your PIN",
    type:"password"}
        ])
        console.log(userInput.userID);
        console.log(userInput.userPIN);  
        
        const userData = {
            userID: userInput.userID,
            userPIN: userInput.userPIN,
            amount: Math.floor(Math.random() * 10000 +1)
        }

        const selectOpt:{options:"Cash Withdrawl" | "exit"} = await inquirer.prompt([
            {
                name: "options",
                message: "select any Option",
                type:"list",
                choices:["Cash Withdrawl", "exit"]
            },
        ])
        if(selectOpt.options === "Cash Withdrawl"){
            console.log(`your current amount: ${userData.amount}`);
            
            const enteredAmount: { amount: number} = await inquirer.prompt([
                {
                    message: "Enter your widthdrawal amount.",
                    name: "amount",
                    type:"number",
                    validate: (input)=>{
                        if(input > userData.amount){
                            return "Insufficient Balance, Press up key to update amount."
                        }else if(isNaN(input)){
                            return "Enter valid number"

                        } else{
                            return true
                        }

                    }
                }
            ]) 
            userData.amount -= enteredAmount.amount
            console.log(`Remaining balance: ${userData.amount}`);
            
            
        }   
    }
)()