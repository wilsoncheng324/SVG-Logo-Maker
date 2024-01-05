import inquirer from "inquirer";

function init() {
    inquirer
    .prompt([
        {
            type: "input",
            message: "Please enter one to three characters.",
            name: "char"
        },
        {
            type: "input",
            message: "Please enter a text color",
            name: "text-color"
        },
        {
            type: "list",
            message: "Please choose a shape of your Logo",
            choices: [
                "Circle",
                "Triangle",
                "square"
            ],
            name: "shape"
        },
        {
            type: "input",
            message: "Please enter a shape color",
            name: "shape-color"
        }
        /* Pass your questions in here */

    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
    })
    .catch((error) => {
        if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        } else {
        // Something else went wrong
        }
    });
}

init();

