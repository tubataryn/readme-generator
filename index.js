const fs = require("fs");
const fsfunc = require("./fsfunc")
const inquirer = require("inquirer");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "badge",
        message: "Input badge code."
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of this project?"
    },
    {
        type: "input",
        name: "description",
        message: "Write a description of this project."
    },
    {
        type: "input",
        name: "installation",
        message: "Installation instructions."
    },
    {
        type: "input",
        name: "usage",
        message: "Describe usage."
    },
    {
        type: "checkbox",
        name: "license",
        message: "Choose a license.",
        choices: [
            "MIT License",
            "Apache License",
            "GPL License",
            "Public Domain (Unlicensed)"
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "What are the rules for contributing?"
    },
    {
        type: "input",
        name: "authors",
        message: "Who are the authors?"
    },
    {
        type: "input",
        name: "tests",
        message: "Run tests here."
    },
    {
        type: "input",
        name: "questions1",
        message: "Enter the url of your profile picture."
    },
    {
        type: "input",
        name: "questions2",
        message: "Enter your email."
    },
    {
        type: "input",
        name: "toc",
        message: "Write a table of contents seperated by commas."
    },
];
console.clear();

inquirer.prompt(questions).then((response) => {
    fsfunc.append("README.md", ("# " + response.title) + "\n", function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success");
    });

    fsfunc.append("README.md", ("\n" + response.badge) + "\n", function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success");
    });

    fsfunc.append("README.me", ("## Description" + "\n" + response.description) + "\n", function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success");
    });

    fsfunc.append("README.me", ("## Installation Instructions" + "\n" + response.installation) + "\n", function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success");
    });

    fsfunc.append("README.me", ("## Usage" + "\n" + response.usage) + "\n", function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success");
    });

    fsfunc.append("README.me", ("## License" + "\n" + response.license) + "\n", function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success");
    });

    fs.appendFileSync("README.me", ("## How to Contribute" + "\n" + response.contributing) + "\n", function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success");
    });

    fsfunc.append("README.me", ("## Authors" + "\n" + response.authors) + "\n", function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success");
    });

    fsfunc.append("README.me", ("## How to Run Tests" + "\n" + response.tests) + "\n", function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success");
    });

    fsfunc.append("README.me", ("## Contact Info" + "\n" + "![alt text](" + response.questions1 + ")") + "\n", function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success");
    });

    fsfunc.append("README.me", ("\n" + response.questions2) + "\n", function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success");
    });
});